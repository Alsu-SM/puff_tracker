import React from 'react';

export interface BugReportProps {
	className?: string;
	style?: React.CSSProperties;
}

export enum BugType {
	Visual = 'visual',
	Functional = 'functional',
	Both = 'both',
	Unsure = 'unsure',
}

export enum Severity {
	Low = 'low',
	Medium = 'medium',
	High = 'high',
	Critical = 'critical',
}
