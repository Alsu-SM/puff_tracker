import { MouseEvent } from 'react';
import { useUnit } from 'effector-react';
import { $puffsModel, setCurrentDayEvent } from '../../Model/puffs';
import { TimelineItem } from '../../Components/Timeline/types';
import {
	renderTimelineContent,
	renderTimelineDetailedContent,
} from './renders';
import { setIsAddManualEntryModalShownEvent } from '../../Model/ui';
import { getDaysByEntries } from '../../Model/puffs/utils';

function useTimeline() {
	const { entries } = useUnit($puffsModel);
	const days = getDaysByEntries(entries);

	const items: TimelineItem[] = days.map((day) => {
		return {
			id: `${+day.date}`,
			date: day.date,
			renderContent: () => renderTimelineContent(day.entries),
			renderDetails: () => renderTimelineDetailedContent(day.entries),
		};
	});

	const handleAddEntry = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		e.stopPropagation();
		setCurrentDayEvent(new Date());
		setIsAddManualEntryModalShownEvent(true);
	};
	return { items, handleAddEntry };
}

export default useTimeline;
