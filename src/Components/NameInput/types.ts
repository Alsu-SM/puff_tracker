import React from 'react';

export interface NameInputProps {
	value: string;
	noDataMessage: string;
	placeholder: string;
	onConfirm: (value: string) => void;
	className?: string;
	style?: React.CSSProperties;
}

export type UseNameInputParams = {
	value: string;
	onConfirm: (value: string) => void;
};
