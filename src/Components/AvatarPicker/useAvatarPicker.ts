import { useEffect, useRef, useState } from 'react';
import { UseAvatarPickerParams } from './types';

function useAvatarPicker({ src, onConfirm }: UseAvatarPickerParams) {
	const [currentSrc, setCurrentSrc] = useState<string>(src);

	const inputRef = useRef<HTMLInputElement>(null);

	const handleConfirm = () => {
		onConfirm(currentSrc);
	};

	const handleChange = () => {
		if (
			inputRef.current &&
			inputRef.current.files &&
			inputRef.current.files[0]
		) {
			const reader = new FileReader();
			reader.onload = function (e) {
				if (e.target && typeof e.target.result === 'string') {
					setCurrentSrc(e.target.result);
				}
			};
			reader.readAsDataURL(inputRef.current.files[0]);
		}
	};

	const handleDelete = () => {
		setCurrentSrc('');
	};

	useEffect(() => {
		setCurrentSrc(src);
	}, [src]);

	return { currentSrc, inputRef, handleConfirm, handleChange, handleDelete };
}

export default useAvatarPicker;
