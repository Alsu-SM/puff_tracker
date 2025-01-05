import React from 'react';

export interface InputCounterProps {
	value: number;
	onChange: (value: number) => void;
	max?: number;
	className?: string;
	style?: React.CSSProperties;
}

export type UseInputCounterParams = {
	value: number;
	onChange: (value: number) => void;
};
