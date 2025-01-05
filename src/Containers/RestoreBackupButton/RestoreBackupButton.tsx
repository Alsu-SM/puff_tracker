import clsx from 'clsx';
import { RestoreBackupButtonProps } from './types';

import styles from './RestoreBackupButton.module.css';
import useRestoreBackup from './useRestoreBackup';
import Modal from '../../Components/Modal';
import Button from '../../Components/Button';

function RestoreBackupButton({ className }: RestoreBackupButtonProps) {
	const {
		inputRef,
		isErrorModalShown,
		isSuccessModalShown,
		dateFormatted,
		handleErrorCancel,
		handleTryAgain,
		handleSuccessCancel,
		handleSuccessConfirm,
		handleChange,
	} = useRestoreBackup();

	return (
		<div className={clsx(styles.input_wrapper, className)}>
			<div className={styles.input_title}>Restore backup</div>
			<input
				className={styles.input}
				type="file"
				accept=".txt"
				ref={inputRef}
				onChange={handleChange}
			/>
			{isErrorModalShown && (
				<Modal>
					<div className={styles.modal_content}>
						<div className={styles.modal_title}>File could not be parsed</div>
						<div className={styles.modal_description}>
							An error has occurred while parsing your backup file
						</div>
						<div className={styles.buttons_row}>
							<Button className={styles.button} onClick={handleErrorCancel}>
								Cancel
							</Button>
							<Button
								className={styles.button}
								primary
								onClick={handleTryAgain}
							>
								Try another file
							</Button>
						</div>
					</div>
				</Modal>
			)}
			{isSuccessModalShown && (
				<Modal>
					<div className={styles.modal_content}>
						<div className={styles.modal_title}>File parsed successfully</div>
						<div className={styles.modal_description}>
							Your backup file from {dateFormatted} has been successfully
							parsed. Restoring its data will overwrite every existing entry and
							current user settings. Do you want to continue?
						</div>
						<div className={styles.buttons_row}>
							<Button className={styles.button} onClick={handleSuccessCancel}>
								Cancel
							</Button>
							<Button
								className={styles.button}
								primary
								onClick={handleSuccessConfirm}
							>
								Continue
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default RestoreBackupButton;
