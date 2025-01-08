import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import {
	getLastEntry,
	getLastEntryDate,
	getTodayEntries,
} from '../../Model/puffs/utils';
import { setIsAddEntryModalShownEvent } from '../../Model/ui';
import { renderContentLeft, renderContentRight } from './renders';
import { useState } from 'react';

function useDayDashboard() {
	const { entries, currentInterval } = useUnit($puffsModel);

	const [isWarningModalShown, setIsWarningModalShown] =
		useState<boolean>(false);

	const todayEntries = getTodayEntries(entries);
	const currentDayCount = todayEntries.length;
	const lastEntry = getLastEntry(todayEntries);
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
