import clsx from 'clsx';
import { CountersProps } from './types';

import styles from './Counters.module.css';
import NextBreakTimer from '../NextBreakTimer';
import CleanStopwatch from '../CleanStopwatch';

function Counters({ className, style }: CountersProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<NextBreakTimer />
			<CleanStopwatch />
		</div>
	);
}

export default Counters;
