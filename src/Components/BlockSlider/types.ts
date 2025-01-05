import React, { ReactNode } from 'react';

export interface BlockSliderProps {
	renderContentLeft?: () => ReactNode;
	renderContentRight?: () => ReactNode;
	onSwipeLeft?: () => void;
	onSwipeRight?: () => void;
	className?: string;
	style?: React.CSSProperties;
}

export type UseBlockSliderParams = {
	onSwipeLeft: () => void;
	onSwipeRight: () => void;
};
