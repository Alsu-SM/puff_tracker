import { useLocation } from 'react-router-dom';
import { routes } from '../../Routes';
import { renderNavItem } from './renders';

function useNavbar() {
	const location = useLocation();

	const items: JSX.Element[] = routes.map((item) => {
		const isActive: boolean = location.pathname === `${item.path}`;

		return renderNavItem({ item, isActive });
	});

	return { items };
}

export default useNavbar;
