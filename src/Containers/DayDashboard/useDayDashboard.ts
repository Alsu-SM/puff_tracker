import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import {
	getCurrentDay,
	getLastEntryByDays,
	getLastEntryDate,
} from '../../Model/puffs/utils';
import { setIsAddEntryModalShownEvent } from '../../Model/ui';
import { renderContentLeft, renderContentRight } from './renders';
import { useState } from 'react';

function useDayDashboard() {
	const { days, currentInterval } = useUnit($puffsModel);

	const [isWarningModalShown, setIsWarningModalShown] =
		useState<boolean>(false);

	const currentDay = getCurrentDay(days);
	const entries = currentDay?.entries || [];
	const currentDayCount = entries.length;
	const lastEntry = getLastEntryByDays(days);
	const { time, date } = getLastEntryDate(lastEntry);

	const isAllowed = lastEntry
		? (+new Date() - +lastEntry.date) / 1000 >= currentInterval
		: true;

	const handleAddEntry = () => {
		if (isAllowed) {
			setIsAddEntryModalShownEvent(true);

			return;
		}

		setIsWarningModalShown(true);
	};

	const handleWarningCancel = () => {
		setIsWarningModalShown(false);
	};

	const handleWarningConfirm = () => {
		setIsWarningModalShown(false);
		setIsAddEntryModalShownEvent(true);
	};

	const renderCount = () => renderContentLeft(currentDayCount);
	const renderDay = () => renderContentRight(time, date || '');

	return {
		isWarningModalShown,
		handleAddEntry,
		renderCount,
		renderDay,
		handleWarningCancel,
		handleWarningConfirm,
	};
}

export default useDayDashboard;
