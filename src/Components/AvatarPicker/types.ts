import React from 'react';

export interface AvatarPickerProps {
	isShown: boolean;
	src: string;
	title: string;
	onCancel: () => void;
	onConfirm: (src: string) => void;
	className?: string;
	style?: React.CSSProperties;
}

export type UseAvatarPickerParams = {
	src: string;
	onConfirm: (src: string) => void;
};
