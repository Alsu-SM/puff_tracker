import { createStore } from 'effector';
import { PuffsModel } from './types';
import { PUFFS_MODEL_DEFAULT } from './constants';
import {
	addEntryEvent,
	addEntryEventHandler,
	deleteEntryEvent,
	deleteEntryEventHandler,
	editEntryEvent,
	editEntryEventHandler,
	resetPuffsModelEvent,
	restorePuffsModelEvent,
	restorePuffsModelEventHandler,
	setCurrentDayEvent,
	setCurrentDayEventHandler,
	setCurrentEntryEvent,
	setCurrentEntryEventHandler,
	setEndDateEvent,
	setEndDateEventHandler,
	setGoalIntervalCleanDays,
	setGoalIntervalCleanDaysHandler,
	setPuffsModelEvent,
	setPuffsModelEventHandler,
	setQuitPlanSettingsDataEvent,
	setQuitPlanSettingsDataEventHandler,
	setStartDateEvent,
	setStartDateEventHandler,
} from './events';

export const $puffsModel = createStore<PuffsModel>(PUFFS_MODEL_DEFAULT)
	.on(restorePuffsModelEvent, restorePuffsModelEventHandler)
	.on(setPuffsModelEvent, setPuffsModelEventHandler)
	.on(addEntryEvent, addEntryEventHandler)
	.on(editEntryEvent, editEntryEventHandler)
	.on(deleteEntryEvent, deleteEntryEventHandler)
	.on(setStartDateEvent, setStartDateEventHandler)
	.on(setEndDateEvent, setEndDateEventHandler)
	.on(setGoalIntervalCleanDays, setGoalIntervalCleanDaysHandler)
	.on(setQuitPlanSettingsDataEvent, setQuitPlanSettingsDataEventHandler)
	.on(setCurrentEntryEvent, setCurrentEntryEventHandler)
	.on(setCurrentDayEvent, setCurrentDayEventHandler)
	.reset(resetPuffsModelEvent);
