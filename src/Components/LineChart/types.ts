import React from 'react';

export interface LineChartProps {
	series: SeriesItem[];
	title?: string;
	dateFormat?: DateFormat;
	className?: string;
	style?: React.CSSProperties;
}

export type DataItem = {
	date: Date;
	value: number;
};

export type SeriesItem = {
	name: string;
	data: DataItem[];
	lineColor?: string;
	fillColor?: string;
	z?: number;
};

export type UseLineChartParams = {
	series: SeriesItem[];
	title: string;
	dateFormat?: DateFormat;
};

export enum DateFormat {
	DayMonth = 'dd.MM',
	MonthYear = 'MM.yy',
	DayMonthYear = 'dd.MM.yy',
}
