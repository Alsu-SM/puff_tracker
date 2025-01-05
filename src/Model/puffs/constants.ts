import { subDays } from 'date-fns';
import { Entry, PuffsModel } from './types';
import { getEndDate } from '../../Containers/QuitPlanSettings/utils';

export const PUFFS_MODEL_STORAGE_KEY = 'PUFFS_MODEL_STORAGE_KEY';

export const START_INTERVAL_DEFAULT: number = 60 * 60;
export const GOAL_INTERVAL_CLEAN_DAYS_DEFAULT: number = 1;
export const INCREASE_INTERVAL_STEP_DEFAULT: number = 60 * 5;
export const START_DATE_DEFAULT = subDays(new Date(), 5);
export const END_DATE_DEFAULT = getEndDate({
	startDate: START_DATE_DEFAULT,
	interval: START_INTERVAL_DEFAULT,
	step: INCREASE_INTERVAL_STEP_DEFAULT,
	cleanDays: GOAL_INTERVAL_CLEAN_DAYS_DEFAULT,
});
export const ENTRY_DEFAULT: Entry = {
	id: '',
	date: new Date(),
	puffs: 0,
	cigarettes: 0,
	interval: START_INTERVAL_DEFAULT,
	goalInterval: START_INTERVAL_DEFAULT,
};

export const PUFFS_MODEL_DEFAULT: PuffsModel = {
	days: [],
	startDate: START_DATE_DEFAULT,
	endDate: END_DATE_DEFAULT,
	startInterval: START_INTERVAL_DEFAULT,
	currentInterval: START_INTERVAL_DEFAULT,
	increaseIntervalStep: INCREASE_INTERVAL_STEP_DEFAULT,
	goalIntervalCleanDays: GOAL_INTERVAL_CLEAN_DAYS_DEFAULT,
	currentDay: null,
	currentEntry: null,
};
