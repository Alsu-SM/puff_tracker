import clsx from 'clsx';
import { NextBreakTimerProps } from './types';

import styles from './NextBreakTimer.module.css';
import Timer from '../../Components/Timer';
import useNextBreakTimer from './useNextBreakTimer';

function NextBreakTimer({ className, style }: NextBreakTimerProps) {
	const { goalDate, isIntervalFinished, title } = useNextBreakTimer();

	return (
		<div
			className={clsx(
				styles.root,
				{ [styles.finished]: isIntervalFinished },
				className,
			)}
			style={style}
		>
			<div className={styles.title}>{title}</div>
			{!isIntervalFinished && (
				<Timer goalDate={goalDate} className={styles.timer} />
			)}
		</div>
	);
}

export default NextBreakTimer;
