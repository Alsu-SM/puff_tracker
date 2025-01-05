import React, { ReactNode } from 'react';

export interface ModalProps {
	isToBeClosed?: boolean;
	onCloseBegin?: () => void;
	onClose?: () => void;
	children?: ReactNode;
	className?: string;
	style?: React.CSSProperties;
}
