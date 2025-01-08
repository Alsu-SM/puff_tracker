import clsx from 'clsx';
import { CleanStopwatchProps } from './types';

import styles from './CleanStopwatch.module.css';
import useCleanStopwatch from './useCleanStopwatch';
import Stopwatch from '../../Components/Stopwatch';

function CleanStopwatch({ className, style }: CleanStopwatchProps) {
	const { date } = useCleanStopwatch();

	if (!date) {
		return <></>;
	}

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.title}>Clean since:</div>
			<Stopwatch startDate={date} className={styles.timer} />
		</div>
	);
}

export default CleanStopwatch;
