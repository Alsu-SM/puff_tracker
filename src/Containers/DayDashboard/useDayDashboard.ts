import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import {
	getCurrentDay,
	getLastEntryByDays,
	getLastEntryDate,
} from '../../Model/puffs/utils';
import { setIsAddEntryModalShownEvent } from '../../Model/ui';
import { renderContentLeft, renderContentRight } from './renders';

function useDayDashboard() {
	const { days } = useUnit($puffsModel);

	const currentDay = getCurrentDay(days);
	const entries = currentDay?.entries || [];
	const currentDayCount = entries.length;
	const lastEntry = getLastEntryByDays(days);
	const { time, date } = getLastEntryDate(lastEntry);

	const handleAddEntry = () => {
		setIsAddEntryModalShownEvent(true);
	};

	const renderCount = () => renderContentLeft(currentDayCount);
	const renderDay = () => renderContentRight(time, date || '');

	return {
		handleAddEntry,
		renderCount,
		renderDay,
	};
}

export default useDayDashboard;
