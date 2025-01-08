export enum PuffTypes {
	EPuff = 'ePuff',
	Cigarette = 'cigarette',
}

export type Entry = {
	id: string;
	date: Date;
	puffs: number;
	cigarettes: number;
	interval: number; // interval between this and previous smoke break in seconds
	goalInterval: number | null; // in seconds
};

export type Day = {
	date: Date;
	entries: Entry[];
};

export type IntervalSettings = {
	dateOfChange: Date;
	interval: number | null;
};

export type PuffsModel = {
	entries: Entry[];
	startInterval: number; // in seconds;
	currentInterval: number; // in seconds
	increaseIntervalStep: number;
	decreaseIntervalStep: number;
	intervalSettingsHistory: IntervalSettings[];
	isTrackOnly: boolean;

	shouldAskToIncreaseIntervalOnSuccess: boolean;
	shouldAskToDecreaseIntervalOnFail: boolean;
	successIntervalNumberToPrompt: number;
	failIntervalNumberToPrompt: number;

	currentDay: Date | null; // for manual entry
	currentEntry: Entry | null; // for edit
};

export type GetLastEntryDateResponse = {
	time: string;
	date?: string;
};

export type GenerateDaysParams = {
	startDate: Date;
	endDate: Date;
	startInterval: number;
};

export type SetQuitPlanSettingsDataEventParams = {
	shouldAskToIncreaseIntervalOnSuccess: boolean;
	shouldAskToDecreaseIntervalOnFail: boolean;
	successIntervalNumberToPrompt: number;
	failIntervalNumberToPrompt: number;
	currentInterval: number;
	increaseIntervalStep: number;
	decreaseIntervalStep: number;
};

export type UpdateEntriesIntervalsParams = {
	entries: Entry[];
	startInterval: number;
	intervalSettingsHistory: IntervalSettings[];
};
export type UpdateEntriesIntervalsResponse = {
	entries: Entry[];
	currentInterval: number;
};
