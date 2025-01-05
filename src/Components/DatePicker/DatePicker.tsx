import { DatePickerProps } from './types';
import DatePickerUI from 'react-mobile-datepicker';
import './DatePicker.css';
import { cancelText, confirmText, headerFormat } from './constants';
import DatePickerHeader from './DatePickerHeader';
import useDatePicker from './useDatePicker';
import { getConfigByDateType } from './utils';

function DatePicker({
	date,
	isShown,
	dateType,
	onCancel,
	onConfirm,
	title,
	className,
	style,
}: DatePickerProps) {
	const { currentDate, handleCancel, handleNow, handleChange, handleConfirm } =
		useDatePicker({ date, onCancel, onConfirm });

	return (
		<div className={className} style={style}>
			<DatePickerUI
				value={currentDate}
				isOpen={isShown}
				isPopup={false}
				dateConfig={getConfigByDateType(dateType)}
				headerFormat={headerFormat}
				confirmText={confirmText}
				cancelText={cancelText}
				customHeader={
					<DatePickerHeader title={title} onCancel={handleCancel} />
				}
				onCancel={handleNow}
				onChange={handleChange}
				onSelect={handleConfirm}
			/>
		</div>
	);
}

export default DatePicker;
