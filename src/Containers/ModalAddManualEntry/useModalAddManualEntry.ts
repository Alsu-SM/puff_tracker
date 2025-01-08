import { useEffect, useState } from 'react';
import {
	$puffsModel,
	addEntryEvent,
	Entry,
	ENTRY_DEFAULT,
	setCurrentDayEvent,
} from '../../Model/puffs';
import { useUnit } from 'effector-react';
import { $uiModel, setIsAddManualEntryModalShownEvent } from '../../Model/ui';
import { isSameMinute } from 'date-fns';
import getUUIDv7 from '../../Utils/getUUIDv7';

function useModalAddManualEntry() {
	const { currentDay: currentDayValue } = useUnit($puffsModel);
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

	const handleConfirm = () => {
		addEntryEvent({ ...entry, id: getUUIDv7() });
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
