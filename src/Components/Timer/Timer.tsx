import clsx from 'clsx';
import { TimerProps } from './types';

import styles from './Timer.module.css';
import useTimer from './useTimer';

function Timer({ goalDate, className, style }: TimerProps) {
	const {
		days,
		hours,
		minutes,
		seconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
	} = useTimer(goalDate);

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

export default Timer;
