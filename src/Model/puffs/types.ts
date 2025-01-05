export enum PuffTypes {
	EPuff = 'ePuff',
	Cigarette = 'cigarette',
}

export type Entry = {
	id: string;
	date: Date;
	puffs: number;
	cigarettes: number;
	interval: number; // in seconds
	goalInterval: number; // in seconds
};

export type Day = {
	date: Date;
	entries: Entry[];
};

export type PuffsModel = {
	days: Day[];
	startDate: Date;
	endDate: Date;
	startInterval: number; // in seconds;
	currentInterval: number; // in seconds
	increaseIntervalStep: number; // in seconds
	goalIntervalCleanDays: number; // in days
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
