import { getRandomInt } from '../../Utils/getRandom';
import getUUIDv7 from '../../Utils/getUUIDv7';
import {
	PUFFS_MODEL_DEFAULT,
	PUFFS_MODEL_STORAGE_KEY,
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
import { format, isAfter, isSameDay } from 'date-fns';

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
		const model = parsePuffsModelRestoredData(parsedData);

		return model;
	} catch (e) {
		return PUFFS_MODEL_DEFAULT;
	}
}

export function parsePuffsModelRestoredData(
	parsedData: PuffsModel,
): PuffsModel {
	const {
		entries: entriesValue,
		intervalSettingsHistory: intervalSettingsHistoryValue = [],
		startInterval: startIntervalValue,
		currentInterval: currentIntervalValue,
		increaseIntervalStep: increaseIntervalStepDefault,
		decreaseIntervalStep: decreaseIntervalStepDefault,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		successIntervalNumberToPrompt,
		failIntervalNumberToPrompt,
		isTrackOnly,
	} = parsedData;
	const startInterval = Number(startIntervalValue || START_INTERVAL_DEFAULT);
	const currentInterval = Number(
		currentIntervalValue || START_INTERVAL_DEFAULT,
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
		({ dateOfChange, interval }) => ({
			dateOfChange: new Date(dateOfChange),
			interval: Number(interval),
		}),
	);

	return {
		entries,
		intervalSettingsHistory,
		startInterval,
		currentInterval,
		increaseIntervalStep: Number(increaseIntervalStepDefault),
		decreaseIntervalStep: Number(decreaseIntervalStepDefault),
		currentEntry: null,
		currentDay: null,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		successIntervalNumberToPrompt: Number(successIntervalNumberToPrompt),
		failIntervalNumberToPrompt: Number(failIntervalNumberToPrompt),
		isTrackOnly,
	};
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
}: GenerateDaysParams): Day[] {
	let days: Day[] = [];
	let currentDate = startDate;
	let currentBreakInterval = startInterval;
	let lastDate = startDate;

	let daysCount = 0;

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
		daysCount++;

		if (daysCount === getRandomInt(3, 5)) {
			currentBreakInterval += getRandomInt(5, 10);
			daysCount = 0;
		}
		const nextSessionInterval = getRandomInt(
			currentBreakInterval * 0.9,
			currentBreakInterval * 1.1,
		);

		currentDate = new Date(+currentDate + nextSessionInterval * 1000);
	}

	return days;
}

export function updateEntriesIntervals({
	entries,
	startInterval,
	intervalSettingsHistory,
}: UpdateEntriesIntervalsParams): UpdateEntriesIntervalsResponse {
	const sortedEntries = entries
		.slice()
		.sort((a, b) => sortEntriesByDate(a, b, true));

	const sortedIntervalHistory = intervalSettingsHistory
		.slice()
		.sort((a, b) => +b.dateOfChange - +a.dateOfChange);

	const result: Entry[] = [];
	let goalInterval = startInterval;

	let currentIntervalSettings = sortedIntervalHistory.pop();

	for (let i = 0; i < sortedEntries.length; i++) {
		const isFirst = i === 0;

		const currentEntry = sortedEntries[i];
		const previousEntry = isFirst ? null : sortedEntries[i - 1];
		const isNewSettings =
			currentIntervalSettings &&
			isAfter(currentEntry.date, currentIntervalSettings.dateOfChange);
		const isTrackOnly =
			isNewSettings && currentIntervalSettings?.interval === null;

		goalInterval =
			isNewSettings &&
			currentIntervalSettings &&
			currentIntervalSettings.interval
				? currentIntervalSettings.interval
				: goalInterval;

		const currentInterval = previousEntry
			? (+currentEntry.date - +previousEntry.date) / 1000
			: goalInterval;

		result.push({
			...currentEntry,
			interval: currentInterval,
			goalInterval: isTrackOnly ? null : goalInterval,
		});

		if (isNewSettings && sortedIntervalHistory.length > 0) {
			currentIntervalSettings = sortedIntervalHistory.pop();
		}
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
