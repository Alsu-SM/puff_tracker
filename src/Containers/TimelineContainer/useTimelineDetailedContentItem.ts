import { format } from 'date-fns';
import { Entry, setCurrentEntryEvent } from '../../Model/puffs';
import { MouseEvent } from 'react';
import { setIsEditEntryModalShownEvent } from '../../Model/ui';

function useTimelineDetailedContentItem(entry: Entry) {
	const { date, cigarettes, puffs } = entry;
	const formattedDate = format(date, 'HH:mm');

	const handleRowClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentEntryEvent(entry);
		setIsEditEntryModalShownEvent(true);
	};

	return { formattedDate, cigarettes, puffs, handleRowClick };
}

export default useTimelineDetailedContentItem;
