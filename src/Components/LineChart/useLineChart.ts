import {
	COLOR_WHITE_100,
	COLOR_WHITE_30,
	COLOR_WHITE_50,
	COLOR_WHITE_70,
} from './constants';
import { UseLineChartParams } from './types';
import { getCategoryBySeries } from './utils';
import styles from './LineChart.module.css';

function useLineChart({ series, title, dateFormat }: UseLineChartParams) {
	const category = getCategoryBySeries(series, dateFormat);
	const isLegendShown = series.length > 1;
	const hasData = series.reduce(
		(value, item) => (value ||= item.data.length > 0),
		false,
	);

	const seriesList = series.map((seriesItem) => {
		return {
			type: 'line',
			name: seriesItem.name,
			emphasis: {
				itemStyle: {
					opacity: 1,
				},
				areaStyle: {
					opacity: 1,
				},
			},
			smooth: true,
			itemStyle: {
				color: seriesItem.lineColor,
				opacity: 0.6,
			},
			areaStyle: {
				color: seriesItem.fillColor,
				opacity: 0.6,
			},
			data: seriesItem.data,
			label: {
				show: false,
			},
			z: seriesItem.z,
		};
	});
	const legend = series.map(({ name }) => name);

	const options = {
		title: {
			text: title,
			left: 'center',
			top: 10,
			padding: 0,
			textStyle: {
				color: COLOR_WHITE_100,
				fontFamily: 'Sour Gummy',
				fontSize: '16px',
				fontWeight: '300',
				marginBottom: -20,
			},
		},
		legend: {
			data: legend,
			bottom: 0,
			left: 'center',
			itemGap: 30,
			show: isLegendShown,
			textStyle: {
				color: COLOR_WHITE_100,
				fontFamily: 'Sour Gummy',
				fontSize: '12px',
				fontWeight: 500,
			},
			lineStyle: {
				inactiveColor: COLOR_WHITE_30,
			},
			itemStyle: {
				inactiveColor: COLOR_WHITE_30,
			},
			inactiveColor: COLOR_WHITE_50,
			inactiveBorderColor: COLOR_WHITE_30,
		},
		tooltip: {
			trigger: 'axis',
			textStyle: {
				fontFamily: 'Sour Gummy',
			},
			axisPointer: {
				type: 'none',
			},
			className: styles.tooltip,
		},
		grid: {
			containLabel: true,
			left: 0,
			right: 15,
			top: !!title ? 40 : 0,
			bottom: isLegendShown ? 30 : 0,
		},
		yAxis: {
			type: 'value',
			axisLabel: {
				color: COLOR_WHITE_70,
				fontFamily: 'Sour Gummy',
				fontSize: '12',
				show: true,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: COLOR_WHITE_30,
					type: 'solid',
				},
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: COLOR_WHITE_70,
					type: 'solid',
				},
			},
			axisTick: {
				show: false,
			},
		},
		xAxis: {
			type: 'category',
			data: category,
			boundaryGap: false,
			axisLabel: {
				color: COLOR_WHITE_70,
				fontFamily: 'Sour Gummy',
				fontSize: '12',
				show: true,
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: COLOR_WHITE_30,
					type: 'solid',
				},
			},
			axisLine: {
				lineStyle: {
					color: COLOR_WHITE_30,
					type: 'solid',
				},
			},
			axisTick: {
				show: false,
			},
		},
		series: seriesList,
	};

	return { options, hasData };
}

export default useLineChart;
