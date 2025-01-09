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
	{ entries, startInterval, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const { entries: newEntries, currentInterval } = updateEntriesIntervals({
		entries: [entry, ...entries],
		startInterval,
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
	};

	storePuffsModel(newState);

	return newState;
}

export function editEntryEventHandler(
	{ entries, startInterval, ...state }: PuffsModel,
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
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
	};

	storePuffsModel(newState);

	return newState;
}

export function deleteEntryEventHandler(
	{ entries, startInterval, ...state }: PuffsModel,
	entry: Entry,
): PuffsModel {
	const updatedEntries = entries.filter(
		(currentEntry) => currentEntry.id !== entry.id,
	);
	const { entries: newEntries, currentInterval } = updateEntriesIntervals({
		entries: updatedEntries,
		startInterval,
		intervalSettingsHistory: state.intervalSettingsHistory,
	});

	const newState = {
		...state,
		entries: newEntries,
		currentInterval,
		startInterval,
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
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		currentInterval,
		successIntervalNumberToPrompt,
		failIntervalNumberToPrompt,
	}: SetQuitPlanSettingsDataEventParams,
): PuffsModel {
	const isNewInterval = currentInterval !== state.currentInterval;

	const newIntervalSettingsHistory = isNewInterval
		? [
				{ dateOfChange: new Date(), interval: currentInterval },
				...intervalSettingsHistory,
			]
		: intervalSettingsHistory;

	const newState = {
		...state,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		currentInterval,
		successIntervalNumberToPrompt,
		failIntervalNumberToPrompt,
		intervalSettingsHistory: newIntervalSettingsHistory,
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

export function setIsTrackOnlyEventHandler(
	{ intervalSettingsHistory, currentInterval, ...state }: PuffsModel,
	isTrackOnly: boolean,
): PuffsModel {
	const newIntervalSettingsHistory = [
		{
			dateOfChange: new Date(),
			interval: isTrackOnly ? null : currentInterval,
		},
		...intervalSettingsHistory,
	];

	const newState = {
		...state,
		isTrackOnly,
		currentInterval,
		intervalSettingsHistory: newIntervalSettingsHistory,
	};

	storePuffsModel(newState);

	return newState;
}
