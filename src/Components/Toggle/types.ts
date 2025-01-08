import { ChangeEvent, MouseEvent } from 'react';

export type ToggleProps = {
	checked: boolean;
	onClick: (e: MouseEvent<HTMLInputElement>) => void;
	onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
	className?: string;
};
