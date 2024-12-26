import React from 'react';
import clsx from 'clsx';

import { ButtonProps } from './Button.interface';

import styles from './Button.module.css';

function Button(props: ButtonProps) {
	const {
		className,
		children,
		onClick,
		color = 'linear-gradient(90deg, #99FDFF 0%, #D1B3FF 100%)',
	} = props;
	return (
		<button
			type="button"
			onClick={onClick}
			className={clsx(styles.button, className)}
			style={{ '--color': color } as React.CSSProperties}
		>
			<div className={styles.button__background} />
			<div className={styles.button__content}>{children}</div>
		</button>
	);
}

export default Button;
