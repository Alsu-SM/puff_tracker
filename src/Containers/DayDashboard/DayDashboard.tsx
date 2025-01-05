import clsx from 'clsx';
import { DayDashboardProps } from './types';

import styles from './DayDashboard.module.css';
import BlockSlider from '../../Components/BlockSlider';
import useDayDashboard from './useDayDashboard';

function DayDashboard({ className, style }: DayDashboardProps) {
	const { handleAddEntry, renderCount, renderDay } = useDayDashboard();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<BlockSlider
				renderContentLeft={renderCount}
				renderContentRight={renderDay}
				onSwipeRight={handleAddEntry}
			/>
		</div>
	);
}

export default DayDashboard;
