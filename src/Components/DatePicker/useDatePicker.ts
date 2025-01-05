import { useEffect, useState } from 'react';
import { UseDatePickerParams } from './types';
import { isSameMinute } from 'date-fns';

function useDatePicker({ date, onCancel, onConfirm }: UseDatePickerParams) {
	const [currentDate, setCurrentDate] = useState<Date>(date);

	const handleCancel = () => {
		setCurrentDate(date);
		onCancel();
	};

	const handleChange = (newDate: Date) => {
		setCurrentDate(newDate);
	};

	const handleConfirm = () => {
		onConfirm(currentDate);
	};

	const handleNow = () => {
		setCurrentDate(new Date());
	};

	useEffect(() => {
		if (!isSameMinute(date, currentDate)) {
			setCurrentDate(date);
		}
	}, [date]);

	return { currentDate, handleCancel, handleNow, handleChange, handleConfirm };
}

export default useDatePicker;
