import { useEffect, useState } from 'react';
import {
	$puffsModel,
	addEntryEvent,
	Day,
	Entry,
	ENTRY_DEFAULT,
	setCurrentDayEvent,
} from '../../Model/puffs';
import { useUnit } from 'effector-react';
import { $uiModel, setIsAddManualEntryModalShownEvent } from '../../Model/ui';
import { isSameMinute } from 'date-fns';
import getUUIDv7 from '../../Utils/getUUIDv7';

function useModalAddManualEntry() {
	const {
		currentDay: currentDayValue,
		increaseIntervalStep,
		days,
	} = useUnit($puffsModel);
	const { isAddManualEntryModalShown } = useUnit($uiModel);

	const [entry, setEntry] = useState<Entry>(ENTRY_DEFAULT);

	const currentDay = currentDayValue || new Date();
	const isConfirmDisabled = !entry.cigarettes && !entry.puffs;

	const handlePuffsChange = (puffs: number) => {
		setEntry({ ...entry, puffs });
	};

	const handleCigarettesChange = (cigarettes: number) => {
		setEntry({ ...entry, cigarettes });
	};

	const handleDateChange = (date: Date) => {
		setEntry({ ...entry, date });
	};

	const handleCancel = () => {
		setCurrentDayEvent(null);
		setEntry(ENTRY_DEFAULT);
		setIsAddManualEntryModalShownEvent(false);
	};

	const findClosestDate = (array: Day[] | Entry[], date: Date) => {
		const sortedDays = array
			.filter((day) => +day.date - +date < 0)
			.sort(function (a, b) {
				var distanceA = Math.abs(+date - +a.date);
				var distanceB = Math.abs(+date - +b.date);
				return distanceA - distanceB; // sort a before b when the distance is smaller
			});

		return sortedDays[0];
	};
	const handleConfirm = () => {
		const closestDay = findClosestDate(days, entry.date);

		if (!closestDay) {
			addEntryEvent({ ...entry, id: getUUIDv7() });
			setEntry(ENTRY_DEFAULT);
			setIsAddManualEntryModalShownEvent(false);
			return;
		}

		const closestEntry = findClosestDate(
			(closestDay as Day).entries || [],
			entry.date,
		) as Entry;

		if (!closestEntry) {
			addEntryEvent({ ...entry, id: getUUIDv7() });
			setEntry(ENTRY_DEFAULT);
			setIsAddManualEntryModalShownEvent(false);
			return;
		}

		const interval = (+entry.date - +closestEntry.date) / 1000;
		const goalInterval = closestEntry.goalInterval + increaseIntervalStep;

		addEntryEvent({ ...entry, interval, goalInterval, id: getUUIDv7() });
		setEntry(ENTRY_DEFAULT);
		setIsAddManualEntryModalShownEvent(false);
	};

	useEffect(() => {
		if (currentDay && !isSameMinute(entry.date, currentDay)) {
			setEntry({ ...entry, date: currentDay });
		}
	}, [currentDay]);

	return {
		entry,
		isAddManualEntryModalShown,
		isConfirmDisabled,
		handlePuffsChange,
		handleCigarettesChange,
		handleDateChange,
		handleCancel,
		handleConfirm,
	};
}

export default useModalAddManualEntry;
