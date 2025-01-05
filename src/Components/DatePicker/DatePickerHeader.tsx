import { DatePickerHeaderProps } from './types';
import { Cross } from '../Icons';

function DatePickerHeader({ title, onCancel }: DatePickerHeaderProps) {
	return (
		<div className={'datepicker-custom-header'}>
			<button className="datepicker-close-button" onClick={onCancel}>
				<Cross className="datepicker-close-button-icon" />
			</button>
			<div className="datepicker-header-title">{title}</div>
		</div>
	);
}

export default DatePickerHeader;
