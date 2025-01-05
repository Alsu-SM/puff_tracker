import clsx from 'clsx';
import { ClearDataButtonProps } from './types';

import styles from './ClearDataButton.module.css';
import Button from '../../Components/Button';
import useClearData from './useClearData';
import Modal from '../../Components/Modal';

function ClearDataButton({ className }: ClearDataButtonProps) {
	const { isModalShown, handleClick, handleCancel, handleConfirm } =
		useClearData();

	return (
		<div className={clsx(styles.root, className)}>
			<Button
				className={clsx(styles.main_button)}
				onClick={handleClick}
				primary
			>
				Clear all data
			</Button>
			{isModalShown && (
				<Modal className={styles.modal}>
					<div className={styles.modal_content}>
						<div className={styles.modal_title}>Are you sure?</div>
						<div className={styles.modal_description}>
							This action will delete all stored data and reset user settings
						</div>
						<div className={styles.buttons_row}>
							<Button className={styles.button} onClick={handleCancel}>
								Cancel
							</Button>
							<Button className={styles.button} primary onClick={handleConfirm}>
								Continue
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default ClearDataButton;
