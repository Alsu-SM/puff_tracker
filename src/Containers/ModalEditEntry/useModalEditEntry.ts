import { useUnit } from 'effector-react';
import {
	$puffsModel,
	deleteEntryEvent,
	editEntryEvent,
	Entry,
	ENTRY_DEFAULT,
	setCurrentEntryEvent,
} from '../../Model/puffs';
import { $uiModel, setIsEditEntryModalShownEvent } from '../../Model/ui';
import { useEffect, useState } from 'react';

function useModalEditEntry() {
	const { currentEntry } = useUnit($puffsModel);
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

	const handleConfirm = () => {
		if (!currentEntry) {
			return;
		}

		editEntryEvent(entry);
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
