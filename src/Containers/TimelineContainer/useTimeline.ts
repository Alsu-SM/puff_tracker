import { MouseEvent } from 'react';
import { useUnit } from 'effector-react';
import { $puffsModel, setCurrentDayEvent } from '../../Model/puffs';
import { TimelineItem } from '../../Components/Timeline/types';
import {
	renderTimelineContent,
	renderTimelineDetailedContent,
} from './renders';
import { setIsAddManualEntryModalShownEvent } from '../../Model/ui';

function useTimeline() {
	const { days } = useUnit($puffsModel);

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
