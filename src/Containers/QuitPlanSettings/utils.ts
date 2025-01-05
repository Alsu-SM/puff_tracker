import { addSeconds } from 'date-fns';
import { GetEndDateParams } from './types';

export function getEndDate({
	startDate,
	interval,
	step,
	cleanDays,
}: GetEndDateParams): Date {
	let currentInterval = interval;
	let currentDate = startDate;

	while (currentInterval < cleanDays * 24 * 60 * 60) {
		currentDate = addSeconds(currentDate, currentInterval);
		currentInterval += step;
	}

	return currentDate;
}
