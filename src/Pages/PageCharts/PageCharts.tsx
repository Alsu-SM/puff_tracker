import clsx from 'clsx';
import { PageChartsProps } from './types';

import styles from './PageCharts.module.css';
import ChartsContainer from '../../Containers/ChartsContainer';

function PageCharts({ className, style }: PageChartsProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<ChartsContainer />
		</div>
	);
}

export default PageCharts;
