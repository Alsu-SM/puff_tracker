import React, { ReactNode } from 'react';

export interface TimelineProps {
	items: TimelineItem[];
	renderLastItemContent: () => ReactNode;
	className?: string;
	style?: React.CSSProperties;
}

export type TimelineItem = {
	id: string;
	date: Date;
	renderContent: () => ReactNode;
	renderDetails: () => ReactNode;
};

export type TimelineItemProps = {
	item: TimelineItem;
};
