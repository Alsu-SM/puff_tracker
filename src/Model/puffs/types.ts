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
	goalInterval: number; // in seconds
};

export type Day = {
	date: Date;
	entries: Entry[];
};

export type IntervalSettings = {
	dateOfChange: Date;
	interval: number;
	increaseIntervalStep: number;
};

export type PuffsModel = {
	entries: Entry[];
	startDate: Date;
	endDate: Date;
	startInterval: number; // in seconds;
	currentInterval: number; // in seconds
	increaseIntervalStep: number; // in seconds
	goalIntervalCleanDays: number; // in days
	currentDay: Date | null; // for manual entry
	currentEntry: Entry | null; // for edit
	intervalSettingsHistory: IntervalSettings[];
};

export type GetLastEntryDateResponse = {
	time: string;
	date?: string;
};

export type GenerateDaysParams = {
	startDate: Date;
	endDate: Date;
	startInterval: number;
	increaseIntervalStep: number;
};

export type SetQuitPlanSettingsDataEventParams = {
	startDate: Date;
	endDate: Date;
	startInterval: number;
	increaseIntervalStep: number;
	goalIntervalCleanDays: number;
	shouldResetCurrentInterval: boolean;
};

export type UpdateEntriesIntervalsParams = {
	entries: Entry[];
	startInterval: number;
	increaseIntervalStep: number;
	intervalSettingsHistory: IntervalSettings[];
};
export type UpdateEntriesIntervalsResponse = {
	entries: Entry[];
	currentInterval: number;
};
