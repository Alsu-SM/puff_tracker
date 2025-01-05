import React from 'react';
import { Entry } from '../../Model/puffs';

export interface TimelineContainerProps {
	className?: string;
	style?: React.CSSProperties;
}

export interface TimelineContentProps {
	entries: Entry[];
}

export interface TimelineContentItemProps {
	entry: Entry;
}
