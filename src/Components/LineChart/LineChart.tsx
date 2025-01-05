import { LineChartProps } from './types';

import ReactEcharts from 'echarts-for-react';
import useLineChart from './useLineChart';
import styles from './LineChart.module.css';

function LineChart({
	series,
	title = '',
	dateFormat,
	className,
}: LineChartProps) {
	const { options, hasData } = useLineChart({ series, title, dateFormat });

	if (!hasData) {
		return (
			<div className={styles.no_data_message}>
				<div className={styles.title}>{title}</div>
				<div className={styles.message}>No data</div>
			</div>
		);
	}
	return (
		<ReactEcharts
			option={options}
			style={{ height: '100%', width: '100%', wordBreak: 'keep-all' }}
			className={className}
		/>
	);
}

export default LineChart;
