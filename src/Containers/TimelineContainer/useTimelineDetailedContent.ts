import { MouseEvent } from 'react';
import { Entry, setCurrentDayEvent } from '../../Model/puffs';
import { renderTimelineDetailedContentItem } from './renders';
import { setIsAddManualEntryModalShownEvent } from '../../Model/ui';

function useTimelineDetailedContent(entries: Entry[]) {
	const rows = entries
		.sort((a, b) => +b.date - +a.date)
		.map((entry) => renderTimelineDetailedContentItem({ entry }));

	const handleAddEntry = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();

		const date = entries[0]?.date || new Date();

		setCurrentDayEvent(date);
		setIsAddManualEntryModalShownEvent(true);
	};

	return { rows, handleAddEntry };
}

export default useTimelineDetailedContent;
