import { useUnit } from 'effector-react';
import { $uiModel, setUserAvatarEvent, setUserNameEvent } from '../../Model/ui';
import { useState } from 'react';

function useProfileName() {
	const { userName, userAvatar } = useUnit($uiModel);

	const [isPickerShown, setIsPickerShown] = useState<boolean>(false);

	const handleAvatarClick = () => {
		setIsPickerShown(true);
	};

	const handlePickerClose = () => {
		setIsPickerShown(false);
	};

	const handlePickerConfirm = (src: string) => {
		setUserAvatarEvent(src);
		setIsPickerShown(false);
	};

	const handleNameChange = (name: string) => {
		setUserNameEvent(name);
	};

	return {
		userName,
		userAvatar,
		isPickerShown,
		handleAvatarClick,
		handlePickerClose,
		handlePickerConfirm,
		handleNameChange,
	};
}

export default useProfileName;
