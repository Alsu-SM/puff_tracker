import { format } from 'date-fns';
import { Entry, setCurrentEntryEvent } from '../../Model/puffs';
import { MouseEvent } from 'react';
import { setIsEditEntryModalShownEvent } from '../../Model/ui';
import { formatTimeToStringShort } from '../../Utils/formatTime';

function useTimelineDetailedContentItem(entry: Entry) {
	const { date, cigarettes, puffs, interval, goalInterval } = entry;
	const formattedDate = format(date, 'HH:mm');
	const intervalTime = formatTimeToStringShort(interval * 1000, true);
	const goalIntervalTime = goalInterval
		? formatTimeToStringShort(goalInterval * 1000, true)
		: '-';

	const handleRowClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentEntryEvent(entry);
		setIsEditEntryModalShownEvent(true);
	};

	return {
		formattedDate,
		cigarettes,
		puffs,
		intervalTime,
		goalIntervalTime,
		handleRowClick,
	};
}

export default useTimelineDetailedContentItem;
