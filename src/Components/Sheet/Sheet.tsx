import clsx from 'clsx';

import { SheetProps } from './Sheet.interface';

import styles from './Sheet.module.css';

function Sheet({ onTransitionEnd, children, isShown, className }: SheetProps) {
	const sheetClassName = clsx(styles.sheet, className, {
		[styles.shown]: isShown,
	});

	return (
		<div className={sheetClassName} onTransitionEnd={onTransitionEnd}>
			{children}
		</div>
	);
}

export default Sheet;
