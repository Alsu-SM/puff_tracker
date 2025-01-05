import { ReactNode } from 'react';
import { TimelineItem } from './types';
import { format } from 'date-fns';
import { renderTimelineItem } from './renders';

function useTimeline(items: TimelineItem[]) {
	const sortedItems = items.sort((a, b) => +b.date - +a.date);
	const lastDate =
		sortedItems.length > 0
			? sortedItems[sortedItems.length - 1].date
			: new Date();
	const lastDateFormatted = format(lastDate, 'MMMM dd, yyyy');

	const timelineRows: ReactNode[] = sortedItems.map((item) =>
		renderTimelineItem({ item }),
	);

	return { timelineRows, lastDateFormatted };
}

export default useTimeline;
