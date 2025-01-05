import React from 'react';
import { DateType } from '../DatePickerButton/types';

export interface DatePickerProps {
	date: Date;
	dateType: DateType;
	minDate?: Date;
	maxDate?: Date;
	isShown: boolean;
	onCancel: () => void;
	onConfirm: (date: Date) => void;
	title: string;
	className?: string;
	style?: React.CSSProperties;
}

export interface DatePickerHeaderProps {
	title: string;
	onCancel: () => void;
}

export interface DatePickerFooterProps {
	onNow: () => void;
	onConfirm: () => void;
}

export type UseDatePickerParams = {
	date: Date;
	onCancel: () => void;
	onConfirm: (date: Date) => void;
};
