import React from 'react';
import { RouteItem } from '../../Routes/types';

export interface NavbarProps {
	className?: string;
	style?: React.CSSProperties;
}

export type RenderNavItemParams = {
	item: RouteItem;
	isActive: boolean;
};
