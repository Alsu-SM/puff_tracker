import clsx from 'clsx';

import { ToggleProps } from './types';

import styles from './Toggle.module.css';

function Toggle(props: ToggleProps) {
	const { checked, onClick, className } = props;
	return (
		<div className={clsx(styles.button, className)}>
			<input
				type="checkbox"
				className={clsx(styles.checkbox)}
				checked={checked}
				onChange={onClick}
			/>
			<div className={clsx(styles.knobs)} />
			<div className={clsx(styles.layer)} />
		</div>
	);
}

export default Toggle;
