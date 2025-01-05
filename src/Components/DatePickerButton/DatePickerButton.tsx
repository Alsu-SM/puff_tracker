import clsx from 'clsx';
import { DatePickerButtonProps } from './types';

import styles from './DatePickerButton.module.css';
import useDatePickerButton from './useDatePickerButton';
import { Calendar } from '../Icons';
import BottomSheet from '../BottomSheet';
import DatePicker from '../DatePicker/DatePicker';

function DatePickerButton({
	title,
	date,
	dateType,
	onChange,
	disabled,
	className,
	style,
}: DatePickerButtonProps) {
	const {
		dateFormatted,
		isPickerShown,
		handleDateClick,
		handleCancel,
		handleConfirm,
	} = useDatePickerButton({ date, dateType, onChange });

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<button
				className={styles.date_button}
				onClick={handleDateClick}
				disabled={disabled}
			>
				<div className={styles.date_row}>
					<div className={styles.title}>{title}</div>
					<div className={styles.value}>{dateFormatted}</div>
				</div>
				<Calendar className={styles.icon} />
			</button>
			<BottomSheet
				className={styles.bottom_sheet}
				isShown={isPickerShown}
				onClose={handleCancel}
			>
				<DatePicker
					isShown={isPickerShown}
					date={date}
					onCancel={handleCancel}
					onConfirm={handleConfirm}
					title={title}
					dateType={dateType}
				/>
			</BottomSheet>
		</div>
	);
}

export default DatePickerButton;
