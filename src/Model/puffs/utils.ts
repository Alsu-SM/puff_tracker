import { getRandomInt } from '../../Utils/getRandom';
import getUUIDv7 from '../../Utils/getUUIDv7';
import {
	END_DATE_DEFAULT,
	GOAL_INTERVAL_CLEAN_DAYS_DEFAULT,
	INCREASE_INTERVAL_STEP_DEFAULT,
	PUFFS_MODEL_DEFAULT,
	PUFFS_MODEL_STORAGE_KEY,
	START_DATE_DEFAULT,
	START_INTERVAL_DEFAULT,
} from './constants';
import {
	Day,
	Entry,
	GenerateDaysParams,
	GetLastEntryDateResponse,
	PuffsModel,
	UpdateEntriesIntervalsParams,
	UpdateEntriesIntervalsResponse,
} from './types';
import { format, isSameDay } from 'date-fns';

export function storePuffsModel(model: PuffsModel) {
	localStorage.setItem(PUFFS_MODEL_STORAGE_KEY, JSON.stringify(model));
}

export function restorePuffsModel(): PuffsModel {
	const data = localStorage.getItem(PUFFS_MODEL_STORAGE_KEY);

	if (!data) {
		return PUFFS_MODEL_DEFAULT;
	}

	try {
		const parsedData: PuffsModel = JSON.parse(data);
		const {
			entries: entriesValue,
			intervalSettingsHistory: intervalSettingsHistoryValue = [],
			startDate: startDateValue,
			endDate: endDateValue,
			startInterval: startIntervalValue,
			currentInterval: currentIntervalValue,
			increaseIntervalStep: increaseIntervalStepValue,
			goalIntervalCleanDays: goalIntervalCleanDaysValue,
		} = parsedData;
		const startDate = new Date(startDateValue || START_DATE_DEFAULT);
		const endDate = new Date(endDateValue || END_DATE_DEFAULT);
		const startInterval = Number(startIntervalValue || START_INTERVAL_DEFAULT);
		const currentInterval = Number(
			currentIntervalValue || START_INTERVAL_DEFAULT,
		);
		const increaseIntervalStep = Number(
			increaseIntervalStepValue || INCREASE_INTERVAL_STEP_DEFAULT,
		);
		const goalIntervalCleanDays = Number(
			goalIntervalCleanDaysValue || GOAL_INTERVAL_CLEAN_DAYS_DEFAULT,
		);
		const entries = entriesValue.map(
			({ id, date, puffs, cigarettes, interval, goalInterval }) => ({
				id,
				date: new Date(date),
				puffs: Number(puffs),
				cigarettes: Number(cigarettes),
				interval: Number(interval),
				goalInterval: Number(goalInterval),
			}),
		);

		const intervalSettingsHistory = intervalSettingsHistoryValue.map(
			({ dateOfChange, interval, increaseIntervalStep }) => ({
				dateOfChange: new Date(dateOfChange),
				interval: Number(interval),
				increaseIntervalStep: Number(increaseIntervalStep),
			}),
		);

		return {
			entries,
			intervalSettingsHistory,
			startDate,
			endDate,
			startInterval,
			currentInterval,
			increaseIntervalStep,
			goalIntervalCleanDays,
			currentEntry: null,
			currentDay: null,
		};
	} catch (e) {
		return PUFFS_MODEL_DEFAULT;
	}
}

export function getTodayEntries(entries: Entry[]): Entry[] {
	return entries.filter(({ date }) => isSameDay(date, new Date()));
}

export function getDay(days: Day[], currentDate: Date): Day | null {
	return days.find(({ date }) => isSameDay(date, currentDate)) || null;
}

export function sortEntriesByDate(
	entryA: Entry,
	entryB: Entry,
	isAsc: boolean = false,
): number {
	return isAsc ? +entryA.date - +entryB.date : +entryB.date - +entryA.date;
}

export function getLastEntry(entries: Entry[]): Entry | null {
	if (!entries.length) {
		return null;
	}

	return entries.sort(sortEntriesByDate)[0];
}

export function getLastEntryDate(
	entry: Entry | null,
): GetLastEntryDateResponse {
	if (!entry) {
		return { time: '' };
	}

	const isSameDate = isSameDay(entry.date, new Date());

	if (isSameDate) {
		return {
			time: format(entry.date, 'HH:mm'),
		};
	}

	return {
		time: format(entry.date, 'HH:mm'),
		date: format(entry.date, 'dd.MM'),
	};
}

export function generateDays({
	startDate,
	endDate,
	startInterval,
	increaseIntervalStep,
}: GenerateDaysParams): Day[] {
	let days: Day[] = [];
	let currentDate = startDate;
	let currentBreakInterval = startInterval;
	let lastDate = startDate;

	while (+currentDate < +endDate) {
		const entry: Entry = {
			id: getUUIDv7(),
			date: currentDate,
			puffs: getRandomInt(1, 20),
			cigarettes: getRandomInt(1, 5),
			interval: (+currentDate - +lastDate) / 1000,
			goalInterval: currentBreakInterval,
		};

		const currentDay = days.find((day) => isSameDay(day.date, currentDate));

		if (currentDay) {
			days = days.map((day) => {
				if (isSameDay(day.date, currentDay.date)) {
					return {
						...currentDay,
						entries: [entry, ...currentDay.entries],
					};
				}

				return day;
			});
		} else {
			const newDay: Day = {
				date: currentDate,
				entries: [entry],
			};

			days = [newDay, ...days];
		}

		lastDate = currentDate;
		currentBreakInterval += increaseIntervalStep;
		const nextSessionInterval = getRandomInt(
			currentBreakInterval * 0.9,
			(currentBreakInterval + increaseIntervalStep) * 1.1,
		);
		currentDate = new Date(+currentDate + nextSessionInterval * 1000);
	}

	return days;
}

export function updateEntriesIntervals({
	entries,
	startInterval,
	increaseIntervalStep,
	intervalSettingsHistory,
}: UpdateEntriesIntervalsParams): UpdateEntriesIntervalsResponse {
	const sortedEntries = entries
		.slice()
		.sort((a, b) => sortEntriesByDate(a, b, true));

	const result: Entry[] = [];
	let goalInterval = startInterval;

	for (let i = 0; i < sortedEntries.length; i++) {
		const isFirst = i === 0;

		const currentEntry = sortedEntries[i];
		const previousEntry = isFirst ? null : sortedEntries[i - 1];

		const currentInterval = previousEntry
			? (+currentEntry.date - +previousEntry.date) / 1000
			: goalInterval;

		console.log(currentInterval, isFirst, goalInterval);

		result.push({ ...currentEntry, interval: currentInterval, goalInterval });
		const isSuccess = currentInterval >= goalInterval;

		goalInterval = isSuccess
			? goalInterval + increaseIntervalStep
			: goalInterval;
	}

	return { entries: result, currentInterval: goalInterval };
}

export function getDaysByEntries(entries: Entry[]): Day[] {
	const daysMap = new Map<string, Day>();
	entries.forEach((entry) => {
		const dateFormatted = format(entry.date, 'dd.MM.yyyy');
		const day = daysMap.get(dateFormatted);

		const newDay = day
			? { ...day, entries: [entry, ...day.entries] }
			: { date: entry.date, entries: [entry] };
		daysMap.set(dateFormatted, newDay);
	});

	return Array.from(daysMap).map(([_, day]) => day);
}
