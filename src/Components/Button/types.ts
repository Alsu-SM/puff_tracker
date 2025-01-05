import { ReactNode } from 'react';

export interface ButtonProps {
	children: ReactNode;
	primary?: boolean;
	disabled?: boolean;
	onClick?: () => void;
	className?: string;
}
