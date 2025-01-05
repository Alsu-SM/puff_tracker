import { ReactNode } from 'react';

export type SheetProps = {
	onTransitionEnd?: () => void;
	children: ReactNode;
	isShown: boolean;
	className?: string;
};
