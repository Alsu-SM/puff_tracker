import { ChangeEvent, useEffect, useState } from 'react';
import { UseNameInputParams } from './types';

function useNameInput({ value, onConfirm }: UseNameInputParams) {
	const [currentValue, setCurrentValue] = useState<string>(value);
	const [isEdit, setIsEdit] = useState<boolean>(false);

	const handleClick = () => {
		setIsEdit(true);
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setCurrentValue(e.target.value);
	};

	const handleCancel = () => {
		setIsEdit(false);
		setCurrentValue(value);
	};

	const handleConfirm = () => {
		setIsEdit(false);
		onConfirm(currentValue);
	};

	useEffect(() => {
		setCurrentValue(value);
	}, [value]);

	return {
		currentValue,
		isEdit,
		handleClick,
		handleChange,
		handleCancel,
		handleConfirm,
	};
}

export default useNameInput;
