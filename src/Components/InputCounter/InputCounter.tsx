import clsx from 'clsx';
import { InputCounterProps } from './types';

import styles from './InputCounter.module.css';
import useInputCounter from './useInputCounter';

function InputCounter({
	value,
	max,
	onChange,
	className,
	style,
}: InputCounterProps) {
	const { isDecreaseDisabled, handleIncrease, handleDecrease } =
		useInputCounter({ value, onChange });

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<button
				type="button"
				className={clsx(styles.button, styles.button_decrease)}
				disabled={isDecreaseDisabled}
				onClick={handleDecrease}
			>
				-
			</button>
			<div className={styles.value_wrapper}>
				<div className={styles.value}>{value}</div>
				{max && <div className={styles.max}>{` / ${max}`}</div>}
			</div>
			<button
				type="button"
				className={clsx(styles.button, styles.button_increase)}
				onClick={handleIncrease}
			>
				+
			</button>
		</div>
	);
}

export default InputCounter;
