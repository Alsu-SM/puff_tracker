import clsx from 'clsx';
import { CheckboxProps } from './types';

import styles from './Checkbox.module.css';

function Checkbox({ checked, onChange, className, style }: CheckboxProps) {
	return (
		<>
			<input
				type="checkbox"
				className={clsx(styles.root, className)}
				style={style}
				checked={checked}
				onChange={onChange}
			/>
			<label />
		</>
	);
}

export default Checkbox;
