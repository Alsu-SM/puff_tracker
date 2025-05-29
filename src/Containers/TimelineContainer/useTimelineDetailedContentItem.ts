import { format } from 'date-fns';
import { $puffsModel, Entry, setCurrentEntryEvent } from '../../Model/puffs';
import { MouseEvent } from 'react';
import { setIsEditEntryModalShownEvent } from '../../Model/ui';
import { formatTimeToStringShort } from '../../Utils/formatTime';
import { useUnit } from 'effector-react';
import { getFirstEntry } from '../../Model/puffs/utils';

function useTimelineDetailedContentItem(entry: Entry) {
	const { entries } = useUnit($puffsModel);

	const { date, cigarettes, puffs, interval, goalInterval } = entry;

	const firstEntry = getFirstEntry(entries);

	const formattedDate = format(date, 'HH:mm');
	const intervalTime =
		firstEntry?.id !== entry.id
			? formatTimeToStringShort(interval * 1000, true)
			: '-';
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
