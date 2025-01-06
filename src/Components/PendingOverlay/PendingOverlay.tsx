import clsx from 'clsx';

import Spinner from '../Spinner';

import { PendingOverlayProps } from './types';

import styles from './PendingOverlay.module.css';

function PendingOverlay({
	title = 'Your request is pending...',
	className,
	style,
}: PendingOverlayProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Spinner className={styles.spinner} />
			<div className={styles.title}>{title}</div>
		</div>
	);
}

export default PendingOverlay;
