import clsx from 'clsx';
import { ModalEditEntryProps } from './types';

import styles from './ModalEditEntry.module.css';
import useModalEditEntry from './useModalEditEntry';
import Sheet from '../../Components/Sheet';
import DatePickerButton from '../../Components/DatePickerButton';
import { DateType } from '../../Components/DatePickerButton/types';
import InputCounter from '../../Components/InputCounter';
import Button from '../../Components/Button';
import Modal from '../../Components/Modal';

function ModalEditEntry({ className }: ModalEditEntryProps) {
	const {
		entry,
		isEditEntryModalShown,
		isConfirmDisabled,
		isDeleteModalShown,
		handlePuffsChange,
		handleCigarettesChange,
		handleDateChange,
		handleCancel,
		handleConfirm,
		handleDeleteClick,
		handleDeleteCancel,
		handleDeleteConfirm,
	} = useModalEditEntry();

	return (
		<Sheet
			isShown={isEditEntryModalShown}
			className={clsx(styles.root, className)}
		>
			<div className={styles.content}>
				<div className={styles.title}>Edit entry</div>
				<DatePickerButton
					date={entry.date}
					onChange={handleDateChange}
					dateType={DateType.DateTime}
					title="Break date"
					className={styles.datepicker}
				/>
				<div className={styles.counter_rows}>
					<div className={styles.counter_row}>
						<div className={styles.counter_row_title}>Cigarettes smoked:</div>
						<InputCounter
							value={entry.cigarettes}
							onChange={handleCigarettesChange}
						/>
					</div>
					<div className={styles.counter_row}>
						<div className={styles.counter_row_title}>Puffs puffed:</div>
						<InputCounter value={entry.puffs} onChange={handlePuffsChange} />
					</div>
				</div>
				<Button
					className={styles.delete_entry_button}
					onClick={handleDeleteClick}
				>
					Delete entry
				</Button>
				<div className={styles.image_wrapper} />
				<div className={styles.buttons_row}>
					<Button className={styles.button} onClick={handleCancel}>
						Cancel
					</Button>
					<Button
						className={styles.button}
						primary
						disabled={isConfirmDisabled}
						onClick={handleConfirm}
					>
						Done
					</Button>
				</div>
			</div>
			{isDeleteModalShown && (
				<Modal>
					<div className={styles.modal_content}>
						<div className={styles.modal_title}>Are you sure?</div>
						<div className={styles.modal_description}>
							This action will delete current entry
						</div>
						<div className={styles.buttons_row}>
							<Button className={styles.button} onClick={handleDeleteCancel}>
								Cancel
							</Button>
							<Button
								className={styles.button}
								primary
								onClick={handleDeleteConfirm}
							>
								Continue
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</Sheet>
	);
}

export default ModalEditEntry;
