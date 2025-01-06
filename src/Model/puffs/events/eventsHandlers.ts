import { isSameDay } from 'date-fns';
import {
	Day,
	Entry,
	PuffsModel,
	SetQuitPlanSettingsDataEventParams,
} from '../types';
import {
	getCurrentDay,
	getDay,
	restorePuffsModel,
	storePuffsModel,
} from '../utils';

export function restorePuffsModelEventHandler(): PuffsModel {
	const model = restorePuffsModel();
	return model;
}

export function addEntryEventHandler(
	{ days, currentInterval, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const currentDay = getCurrentDay(days);

	if (currentDay) {
		const newDays = days.map((day: Day) => {
			if (isSameDay(day.date, entry.date)) {
				return { ...day, entries: [entry, ...day.entries] };
			}

			return day;
		});

		const newState = {
			...state,
			days: newDays,
			currentInterval: currentInterval + state.increaseIntervalStep,
		};
		storePuffsModel(newState);

		return newState;
	}

	const newDay: Day = {
		date: new Date(),
		entries: [entry],
	};

	const newDays = [newDay, ...days];
	const newState = {
		...state,
		days: newDays,
		currentInterval: currentInterval + state.increaseIntervalStep,
	};

	storePuffsModel(newState);

	return newState;
}

export function editEntryEventHandler(
	{ days, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const currentDay = getDay(days, entry.date);

	if (currentDay) {
		const newDays = days.map((day: Day) => {
			if (isSameDay(day.date, entry.date)) {
				return {
					...day,
					entries: day.entries.map((currentEntry) => {
						if (currentEntry.id === entry.id) {
							return entry;
						}

						return currentEntry;
					}),
				};
			}

			return day;
		});

		const newState = {
			...state,
			days: newDays,
		};
		storePuffsModel(newState);

		return newState;
	}

	return { ...state, days };
}
export function deleteEntryEventHandler(
	{ days, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const currentDay = getDay(days, entry.date);
	if (currentDay) {
		const isEmpty =
			currentDay.entries.filter((currentEntry) => currentEntry.id !== entry.id)
				.length === 0;

		const newDays = isEmpty
			? days.filter((day: Day) => !isSameDay(day.date, currentDay.date))
			: days.map((day: Day) => {
					if (isSameDay(day.date, entry.date)) {
						return {
							...day,
							entries: day.entries.filter(
								(currentEntry) => currentEntry.id !== entry.id,
							),
						};
					}

					return day;
				});

		const newState = {
			...state,
			days: newDays,
		};
		storePuffsModel(newState);

		return newState;
	}

	return { ...state, days };
}
export function setStartDateEventHandler(
	state: PuffsModel,
	startDate: Date,
): PuffsModel {
	const newState = { ...state, startDate };

	storePuffsModel(newState);

	return newState;
}

export function setEndDateEventHandler(
	state: PuffsModel,
	startDate: Date,
): PuffsModel {
	const newState = { ...state, startDate };

	storePuffsModel(newState);

	return newState;
}

export function setGoalIntervalCleanDaysHandler(
	state: PuffsModel,
	goalIntervalCleanDays: number,
): PuffsModel {
	const newState = { ...state, goalIntervalCleanDays };

	storePuffsModel(newState);

	return newState;
}

export function setQuitPlanSettingsDataEventHandler(
	state: PuffsModel,
	{
		startDate,
		endDate,
		startInterval,
		increaseIntervalStep,
		goalIntervalCleanDays,
		shouldResetCurrentInterval,
	}: SetQuitPlanSettingsDataEventParams,
): PuffsModel {
	const newState = {
		...state,
		startDate,
		endDate,
		startInterval,
		currentInterval: shouldResetCurrentInterval
			? startInterval
			: state.currentInterval,
		increaseIntervalStep,
		goalIntervalCleanDays,
	};

	storePuffsModel(newState);

	return newState;
}

export function setPuffsModelEventHandler(
	_: PuffsModel,
	model: PuffsModel,
): PuffsModel {
	storePuffsModel(model);

	return model;
}

export function setCurrentEntryEventHandler(
	state: PuffsModel,
	currentEntry: Entry | null,
): PuffsModel {
	return { ...state, currentEntry };
}

export function setCurrentDayEventHandler(
	state: PuffsModel,
	currentDay: Date | null,
): PuffsModel {
	return { ...state, currentDay };
}
