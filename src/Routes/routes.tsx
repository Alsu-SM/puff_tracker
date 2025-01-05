import { BarChart, Book, Home, Settings } from '../Components/Icons';
import PageCharts from '../Pages/PageCharts';
import PageHome from '../Pages/PageHome';
import PageProfile from '../Pages/PageProfile';
import PageTimeline from '../Pages/PageTimeline';
import { RouteItem, RoutePath } from './types';

const routes: RouteItem[] = [
	{
		index: false,
		displayName: 'Home',
		key: RoutePath.Home,
		path: RoutePath.Home,
		Icon: Home,
		element: <PageHome />,
	},
	{
		index: false,
		displayName: 'Timeline',
		key: RoutePath.Timeline,
		path: RoutePath.Timeline,
		Icon: Book,
		element: <PageTimeline />,
	},
	{
		index: false,
		displayName: 'Charts',
		key: RoutePath.Charts,
		path: RoutePath.Charts,
		Icon: BarChart,
		element: <PageCharts />,
	},
	{
		index: false,
		displayName: 'Profile',
		key: RoutePath.Profile,
		path: RoutePath.Profile,
		Icon: Settings,
		element: <PageProfile />,
	},
];

export default routes;
