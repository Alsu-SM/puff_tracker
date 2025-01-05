import clsx from 'clsx';

import { ButtonProps } from './types';

import styles from './Button.module.css';

function Button({
	className,
	children,
	primary,
	disabled,
	onClick,
}: ButtonProps) {
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(styles.button, { [styles.primary]: primary }, className)}
			disabled={disabled}
		>
			{children}
		</button>
	);
}

export default Button;
