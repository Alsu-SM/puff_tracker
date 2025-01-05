import { useState } from 'react';
import { UseDatePickerButtonParams } from './types';
import { format } from 'date-fns';

function useDatePickerButton({
	date,
	dateType,
	onChange,
}: UseDatePickerButtonParams) {
	const [isPickerShown, setIsPickerShown] = useState<boolean>(false);

	const dateFormatted = format(date, dateType);

	const handleDateClick = () => {
		setIsPickerShown(true);
	};

	const handleCancel = () => {
		setIsPickerShown(false);
	};

	const handleConfirm = (date: Date) => {
		onChange(date);
		setIsPickerShown(false);
	};

	return {
		dateFormatted,
		isPickerShown,
		handleDateClick,
		handleCancel,
		handleConfirm,
	};
}

export default useDatePickerButton;
