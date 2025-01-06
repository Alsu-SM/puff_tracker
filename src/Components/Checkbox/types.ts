import React from 'react';

export interface CheckboxProps {
	checked?: boolean;
	onChange?: () => void;
	className?: string;
	style?: React.CSSProperties;
}
