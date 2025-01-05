import clsx from 'clsx';
import { ChartsContainerProps } from './types';

import styles from './ChartsContainer.module.css';
import useCharts from './useCharts';
import LineChart from '../../Components/LineChart';

function ChartsContainer({ className, style }: ChartsContainerProps) {
	const { dataIntervals, dataPuffs, dataCigarettes } = useCharts();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.chart}>
				<LineChart
					series={[dataCigarettes, dataPuffs]}
					title={'Nicotine intake dynamic'}
					className={styles.chart}
				/>
			</div>
			<div className={styles.chart}>
				<LineChart
					series={[dataIntervals]}
					title={'Average intervals between breaks, min'}
					className={styles.chart}
				/>
			</div>
		</div>
	);
}

export default ChartsContainer;
