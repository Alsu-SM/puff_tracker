import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import clsx from 'clsx';
import { RenderNavItemParams } from './types';

export function renderNavItem({ item, isActive }: RenderNavItemParams) {
	const { Icon, displayName } = item;
	const path = `${item.path}`;

	return (
		<NavLink
			id={`nav_link_${item.key}`}
			to={path}
			key={path}
			className={clsx(styles.link, {
				[styles.link_active]: isActive,
			})}
		>
			<div className={styles.link_content}>
				{Icon && <Icon className={styles.icon} />}
				<div className={styles.label}>{displayName}</div>
			</div>
		</NavLink>
	);
}
