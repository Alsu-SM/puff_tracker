import React from 'react';

export interface QuitPlanSettingsProps {
	className?: string;
	style?: React.CSSProperties;
}

export type GetEndDateParams = {
	startDate: Date;
	interval: number;
	step: number;
	cleanDays: number;
};
