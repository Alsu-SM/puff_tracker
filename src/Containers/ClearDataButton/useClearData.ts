import { useState } from 'react';
import {
	PUFFS_MODEL_STORAGE_KEY,
	resetPuffsModelEvent,
} from '../../Model/puffs';
import { resetUIModelEvent, UI_MODEL_STORAGE_KEY } from '../../Model/ui';

function useClearData() {
	const [isModalShown, setIsModalShown] = useState<boolean>(false);

	const handleClick = () => {
		setIsModalShown(true);
	};

	const handleCancel = () => {
		setIsModalShown(false);
	};

	const handleConfirm = () => {
		resetPuffsModelEvent();
		resetUIModelEvent();
		localStorage.removeItem(PUFFS_MODEL_STORAGE_KEY);
		localStorage.removeItem(UI_MODEL_STORAGE_KEY);
		setIsModalShown(false);
	};

	return { isModalShown, handleClick, handleCancel, handleConfirm };
}

export default useClearData;
