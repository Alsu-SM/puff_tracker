import React, { ReactNode } from 'react';

export interface BottomSheetProps {
	children: ReactNode;
	isShown: boolean;
	onClose: () => void;
	className?: string;
	style?: React.CSSProperties;
}
