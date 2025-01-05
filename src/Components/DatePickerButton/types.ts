import React from 'react';

export enum DateType {
	DateOnly = 'dd.MM.yyyy',
	DateTime = 'dd.MM.yyyy HH:mm',
	TimeOnly = 'HH:mm',
}
export interface DatePickerButtonProps {
	title: string;
	date: Date;
	dateType: DateType;
	onChange: (date: Date) => void;
	disabled?: boolean;
	className?: string;
	style?: React.CSSProperties;
}

export type UseDatePickerButtonParams = {
	date: Date;
	dateType: DateType;
	onChange: (date: Date) => void;
};
