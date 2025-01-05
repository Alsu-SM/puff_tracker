import clsx from 'clsx';
import { NameInputProps } from './types';

import styles from './NameInput.module.css';
import useNameInput from './useNameInput';
import { Check, Cross } from '../Icons';

function NameInput({
	value,
	placeholder,
	noDataMessage,
	onConfirm,
	className,
	style,
}: NameInputProps) {
	const {
		currentValue,
		isEdit,
		handleClick,
		handleChange,
		handleCancel,
		handleConfirm,
	} = useNameInput({ value, onConfirm });

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{isEdit ? (
				<div className={styles.input_wrapper}>
					<input
						className={styles.input}
						value={currentValue}
						onChange={handleChange}
						placeholder={placeholder}
					/>
					<button
						className={clsx(styles.button, styles.button_cancel)}
						onClick={handleCancel}
					>
						<Cross className={styles.icon} />
					</button>
					<button
						className={clsx(styles.button, styles.button_confirm)}
						onClick={handleConfirm}
					>
						<Check className={styles.icon} />
					</button>
				</div>
			) : (
				<button className={styles.value_wrapper} onClick={handleClick}>
					{currentValue ? (
						<div className={styles.value}>{currentValue}</div>
					) : (
						<div className={styles.value_placeholder}>{noDataMessage}</div>
					)}
				</button>
			)}
		</div>
	);
}

export default NameInput;
