import { useState } from 'react';
import { TimelineItem } from './types';
import { format } from 'date-fns';

function useTimelineItem(item: TimelineItem) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const formattedDate = format(item.date, 'EEEE, LLLL dd, yyyy');
	const content = isOpen ? item.renderDetails() : item.renderContent();

	const handleToggle = () => {
		setIsOpen(!isOpen);
	};

	return { isOpen, formattedDate, content, handleToggle };
}

export default useTimelineItem;
