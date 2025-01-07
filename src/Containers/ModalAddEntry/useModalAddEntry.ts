import { useUnit } from 'effector-react';
import { $uiModel, setIsAddEntryModalShownEvent } from '../../Model/ui';
import { useEffect, useState } from 'react';
import { $puffsModel, addEntryEvent, Entry } from '../../Model/puffs';
import getUUIDv7 from '../../Utils/getUUIDv7';
import { getLastEntryByDays } from '../../Model/puffs/utils';

function useModalAddEntry() {
	const { days, currentInterval } = useUnit($puffsModel);
	const { isAddEntryModalShown } = useUnit($uiModel);

	const [startDate, setStartDate] = useState<Date>(new Date());
	const [cigarettes, setCigarettes] = useState<number>(0);
	const [puffs, setPuffs] = useState<number>(0);

	const isConfirmDisabled = !cigarettes && !puffs;
	const lastEntry = getLastEntryByDays(days);

	const resetForm = () => {
		setStartDate(new Date());
		setCigarettes(0);
		setPuffs(0);
	};

	const handleCigarettesChange = (value: number) => {
		setCigarettes(value);
	};

	const handlePuffsChange = (value: number) => {
		setPuffs(value);
	};

	const handleCancel = () => {
		setIsAddEntryModalShownEvent(false);
	};

	const handleConfirm = () => {
		const interval = lastEntry
			? (+new Date() - +lastEntry.date) / 1000
			: currentInterval;

		const newEntry: Entry = {
			id: getUUIDv7(),
			date: new Date(),
			cigarettes,
			puffs,
			interval,
			goalInterval: currentInterval,
		};

		addEntryEvent(newEntry);
		setIsAddEntryModalShownEvent(false);
	};

	useEffect(() => {
		if (isAddEntryModalShown) {
			resetForm();
		}

		return () => {
			resetForm();
		};
	}, [isAddEntryModalShown]);

	return {
		isAddEntryModalShown,
		startDate,
		cigarettes,
		puffs,
		isConfirmDisabled,
		handleCigarettesChange,
		handlePuffsChange,
		handleCancel,
		handleConfirm,
		resetForm,
	};
}

export default useModalAddEntry;
