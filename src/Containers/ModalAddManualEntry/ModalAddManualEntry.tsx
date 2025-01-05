import clsx from 'clsx';
import { ModalAddManualEntryProps } from './types';

import styles from './ModalAddManualEntry.module.css';
import useModalAddManualEntry from './useModalAddManualEntry';
import InputCounter from '../../Components/InputCounter';
import Button from '../../Components/Button';
import DatePickerButton from '../../Components/DatePickerButton';
import { DateType } from '../../Components/DatePickerButton/types';
import Sheet from '../../Components/Sheet';

function ModalAddManualEntry({ className }: ModalAddManualEntryProps) {
	const {
		entry,
		isAddManualEntryModalShown,
		isConfirmDisabled,
		handlePuffsChange,
		handleCigarettesChange,
		handleDateChange,
		handleCancel,
		handleConfirm,
	} = useModalAddManualEntry();

	return (
		<Sheet
			isShown={isAddManualEntryModalShown}
			className={clsx(styles.root, className)}
		>
			<div className={styles.content}>
				<div className={styles.title}>Add entry</div>
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
		</Sheet>
	);
}

export default ModalAddManualEntry;
