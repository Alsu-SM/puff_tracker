import { ReactNode } from 'react';

export type RouteItem = {
	index?: boolean;
	path?: string;
	element?: ReactNode;
	displayName: string;
	key: string;
	Icon?: (props?: any) => JSX.Element;
};

export enum RoutePath {
	Home = '/puff_tracker/home',
	Timeline = '/puff_tracker/timeline',
	Charts = '/puff_tracker/charts',
	Profile = '/puff_tracker/profile',
}

export default {};
