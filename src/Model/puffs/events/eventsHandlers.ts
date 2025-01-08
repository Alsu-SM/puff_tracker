import {
	Entry,
	PuffsModel,
	SetQuitPlanSettingsDataEventParams,
} from '../types';
import {
	restorePuffsModel,
	storePuffsModel,
	updateEntriesIntervals,
} from '../utils';

export function restorePuffsModelEventHandler(): PuffsModel {
	const model = restorePuffsModel();
	return model;
}

export function addEntryEventHandler(
	{ entries, startInterval, increaseIntervalStep, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const { entries: newEntries, currentInterval } = updateEntriesIntervals({
		entries: [entry, ...entries],
		startInterval,
		increaseIntervalStep,
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
		increaseIntervalStep,
	};

	storePuffsModel(newState);

	return newState;
}

export function editEntryEventHandler(
	{ entries, startInterval, increaseIntervalStep, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const updatedEntries = entries.map((currentEntry) => {
		if (currentEntry.id === entry.id) {
			return entry;
		}

		return currentEntry;
	});

	const { entries: newEntries, currentInterval } = updateEntriesIntervals({
		entries: updatedEntries,
		startInterval,
		increaseIntervalStep,
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
		increaseIntervalStep,
	};

	storePuffsModel(newState);

	return newState;
}

export function deleteEntryEventHandler(
	{ entries, startInterval, increaseIntervalStep, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const updatedEntries = entries.filter(
		(currentEntry) => currentEntry.id !== entry.id,
	);
	const { entries: newEntries, currentInterval } = updateEntriesIntervals({
		entries: updatedEntries,
		startInterval,
		increaseIntervalStep,
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
		increaseIntervalStep,
	};

	storePuffsModel(newState);

	return newState;
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
	{ intervalSettingsHistory, ...state }: PuffsModel,
	{
		startDate,
		endDate,
		startInterval,
		increaseIntervalStep,
		goalIntervalCleanDays,
		shouldResetCurrentInterval,
	}: SetQuitPlanSettingsDataEventParams,
): PuffsModel {
	const newInterval = shouldResetCurrentInterval
		? startInterval
		: state.currentInterval;

	const newIntervalSettingsHistory = [
		{ dateOfChange: new Date(), interval: newInterval, increaseIntervalStep },
		...intervalSettingsHistory,
	];

	const newState = {
		...state,
		startDate,
		endDate,
		startInterval,
		currentInterval: newInterval,
		intervalSettingsHistory: newIntervalSettingsHistory,
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
