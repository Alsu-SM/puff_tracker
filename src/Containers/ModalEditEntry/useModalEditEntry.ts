import { useUnit } from 'effector-react';
import {
	$puffsModel,
	Day,
	deleteEntryEvent,
	editEntryEvent,
	Entry,
	ENTRY_DEFAULT,
	setCurrentEntryEvent,
} from '../../Model/puffs';
import { $uiModel, setIsEditEntryModalShownEvent } from '../../Model/ui';
import { useEffect, useState } from 'react';

function useModalEditEntry() {
	const { currentEntry, increaseIntervalStep, days } = useUnit($puffsModel);
	const { isEditEntryModalShown } = useUnit($uiModel);

	const [entry, setEntry] = useState<Entry>(ENTRY_DEFAULT);
	const [isDeleteModalShown, setIsDeleteModalShown] = useState<boolean>(false);

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
		setCurrentEntryEvent(null);
		setEntry(ENTRY_DEFAULT);
		setIsEditEntryModalShownEvent(false);
	};

	const handleDeleteClick = () => {
		setIsDeleteModalShown(true);
	};

	const handleDeleteCancel = () => {
		setIsDeleteModalShown(false);
	};

	const handleDeleteConfirm = () => {
		setIsDeleteModalShown(false);

		if (!currentEntry) {
			return;
		}
		deleteEntryEvent(currentEntry);
		setIsEditEntryModalShownEvent(false);
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
		if (!currentEntry) {
			return;
		}

		const closestDay = findClosestDate(days, currentEntry.date);
		const closestEntry = findClosestDate(
			(closestDay as Day).entries || [],
			currentEntry.date,
		) as Entry;

		if (!closestEntry) {
			editEntryEvent(entry);
			setEntry(ENTRY_DEFAULT);
			setIsEditEntryModalShownEvent(false);
			return;
		}

		const interval = (+entry.date - +closestEntry.date) / 1000;
		const goalInterval = closestEntry.goalInterval + increaseIntervalStep;

		editEntryEvent({ ...entry, interval, goalInterval });
		setEntry(ENTRY_DEFAULT);
		setIsEditEntryModalShownEvent(false);
	};

	useEffect(() => {
		if (currentEntry) {
			setEntry(currentEntry);
		}
	}, [currentEntry]);

	return {
		entry,
		isEditEntryModalShown,
		isConfirmDisabled,
		isDeleteModalShown,
		handlePuffsChange,
		handleCigarettesChange,
		handleDateChange,
		handleCancel,
		handleConfirm,
		handleDeleteClick,
		handleDeleteCancel,
		handleDeleteConfirm,
	};
}

export default useModalEditEntry;
