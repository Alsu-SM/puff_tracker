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
	Home = 'home',
	Timeline = 'timeline',
	Charts = 'charts',
	Profile = 'profile',
}

export default {};
