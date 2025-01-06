import { MobileSelectOption } from '../MobileSelect/types';
import { BugType, Severity } from './types';

export const severityOptions: MobileSelectOption[] = [
	{
		id: Severity.Low,
		name: Severity.Low,
	},
	{
		id: Severity.Medium,
		name: Severity.Medium,
	},
	{
		id: Severity.High,
		name: Severity.High,
	},
	{
		id: Severity.Critical,
		name: Severity.Critical,
	},
];

export const bugTypeOptions: MobileSelectOption[] = [
	{
		id: BugType.Visual,
		name: BugType.Visual,
	},
	{
		id: BugType.Functional,
		name: BugType.Functional,
	},
	{
		id: BugType.Both,
		name: BugType.Both,
	},
	{
		id: BugType.Unsure,
		name: BugType.Unsure,
	},
];

export const S_ID = 'service_xtkaxk9';
export const T_ID = 'template_egekzg8';
export const U_ID = 'g55Qb5dhnMuLtMlbU';
