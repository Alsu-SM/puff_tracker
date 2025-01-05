import { createEvent } from 'effector';
import {
	Entry,
	PuffsModel,
	SetQuitPlanSettingsDataEventParams,
} from '../types';

export const restorePuffsModelEvent = createEvent<void>();
export const setPuffsModelEvent = createEvent<PuffsModel>();

export const addEntryEvent = createEvent<Entry>();
export const editEntryEvent = createEvent<Entry>();
export const deleteEntryEvent = createEvent<Entry>();
export const setStartDateEvent = createEvent<Date>();
export const setEndDateEvent = createEvent<Date>();
export const setGoalIntervalCleanDays = createEvent<number>();
export const setQuitPlanSettingsDataEvent =
	createEvent<SetQuitPlanSettingsDataEventParams>();
export const resetPuffsModelEvent = createEvent<void>();
export const setCurrentEntryEvent = createEvent<Entry | null>();
export const setCurrentDayEvent = createEvent<Date | null>();
