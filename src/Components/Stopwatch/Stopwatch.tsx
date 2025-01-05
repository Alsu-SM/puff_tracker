import clsx from 'clsx';
import { StopwatchProps } from './types';

import styles from './Stopwatch.module.css';
import useStopwatch from './useStopwatch';

function Stopwatch({ startDate, className, style }: StopwatchProps) {
	const {
		days,
		hours,
		minutes,
		seconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
	} = useStopwatch(startDate);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{days && <div className={clsx(styles.days, styles.value)}>{days}</div>}
			{isDaysSeparatorShown && <div className={styles.separator}>:</div>}
			{hours && <div className={clsx(styles.hours, styles.value)}>{hours}</div>}
			{isHoursSeparatorShown && <div className={styles.separator}>:</div>}
			{minutes && (
				<div className={clsx(styles.minutes, styles.value)}>{minutes}</div>
			)}
			{isMinutesSeparatorShown && <div className={styles.separator}>:</div>}
			{seconds && (
				<div className={clsx(styles.seconds, styles.value)}>{seconds}</div>
			)}
		</div>
	);
}

export default Stopwatch;
