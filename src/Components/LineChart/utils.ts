import { format } from 'date-fns';
import { DateFormat, SeriesItem } from './types';

export function getCategoryBySeries(
	series: SeriesItem[],
	dateFormat: DateFormat = DateFormat.DayMonth,
): string[] {
	const days = new Set<Date>();

	series.forEach((seriesItem) => {
		seriesItem.data.forEach((data) => {
			days.add(data.date);
		});
	});

	return Array.from(days).map((date) => format(date, dateFormat));
}
