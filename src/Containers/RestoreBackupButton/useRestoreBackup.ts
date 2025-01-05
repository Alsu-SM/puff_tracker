import { useRef, useState } from 'react';
import { parseBackup, urlToText } from './utils';
import { BackupData } from '../../Utils/createBackup';
import { setPuffsModelEvent } from '../../Model/puffs';
import { setUIModelEvent } from '../../Model/ui';
import { format } from 'date-fns';

function useRestoreBackup() {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isErrorModalShown, setIsErrorModalShown] = useState<boolean>(false);
	const [isSuccessModalShown, setIsSuccessModalShown] =
		useState<boolean>(false);
	const [backupData, setBackupData] = useState<BackupData>();

	const dateFormatted = backupData
		? format(backupData.date, 'dd.MM.yyyy HH:mm:ss')
		: '-';

	const handleChange = () => {
		if (
			inputRef.current &&
			inputRef.current.files &&
			inputRef.current.files[0]
		) {
			const reader = new FileReader();
			reader.onload = function (e) {
				if (
					e.target &&
					typeof e.target.result === 'string' &&
					inputRef.current
				) {
					const text = urlToText(e.target.result);
					parseBackup(text)
						.then((data) => {
							setBackupData(data);
							setIsSuccessModalShown(true);
						})
						.catch((_e) => {
							setIsErrorModalShown(true);
						});
					inputRef.current.value = '';
				}
			};
			reader.readAsDataURL(inputRef.current.files[0]);
		}
	};

	const handleErrorCancel = () => {
		setIsErrorModalShown(false);
	};

	const handleTryAgain = () => {
		setIsErrorModalShown(false);

		if (inputRef.current) {
			inputRef.current.click();
		}
	};

	const handleSuccessCancel = () => {
		setBackupData(undefined);
		setIsSuccessModalShown(false);
	};

	const handleSuccessConfirm = () => {
		setIsSuccessModalShown(false);

		if (backupData) {
			setPuffsModelEvent(backupData.puffsModel);
			setUIModelEvent(backupData.uiModel);
		}
	};

	return {
		inputRef,
		isErrorModalShown,
		isSuccessModalShown,
		dateFormatted,
		handleErrorCancel,
		handleTryAgain,
		handleSuccessCancel,
		handleSuccessConfirm,
		handleChange,
	};
}

export default useRestoreBackup;
