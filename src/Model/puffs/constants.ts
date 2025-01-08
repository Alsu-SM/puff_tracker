import { subDays } from 'date-fns';
import { Entry, PuffsModel } from './types';
import { getEndDate } from '../../Containers/QuitPlanSettings/utils';

export const PUFFS_MODEL_STORAGE_KEY = 'PUFFS_MODEL_STORAGE_KEY';

export const START_INTERVAL_DEFAULT: number = 60 * 60;
export const GOAL_INTERVAL_CLEAN_DAYS_DEFAULT: number = 1;
export const INTERVAL_STEP_DEFAULT: number = 60 * 5;
export const START_DATE_DEFAULT = subDays(new Date(), 5);
export const END_DATE_DEFAULT = getEndDate({
	startDate: START_DATE_DEFAULT,
	interval: START_INTERVAL_DEFAULT,
	step: INTERVAL_STEP_DEFAULT,
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

export const SUCCESS_FAIL_INTERVAL_NUMBER_TO_PROMPT_DEFAULT = 5;

export const PUFFS_MODEL_DEFAULT: PuffsModel = {
	entries: [],
	intervalSettingsHistory: [],
	startInterval: START_INTERVAL_DEFAULT,
	currentInterval: START_INTERVAL_DEFAULT,
	increaseIntervalStep: INTERVAL_STEP_DEFAULT,
	decreaseIntervalStep: INTERVAL_STEP_DEFAULT,
	shouldAskToIncreaseIntervalOnSuccess: true,
	shouldAskToDecreaseIntervalOnFail: true,
	successIntervalNumberToPrompt: SUCCESS_FAIL_INTERVAL_NUMBER_TO_PROMPT_DEFAULT,
	failIntervalNumberToPrompt: SUCCESS_FAIL_INTERVAL_NUMBER_TO_PROMPT_DEFAULT,
	currentDay: null,
	currentEntry: null,
	isTrackOnly: false,
};
