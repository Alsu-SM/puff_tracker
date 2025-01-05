import clsx from 'clsx';
import { NavbarProps } from './types';

import styles from './Navbar.module.css';
import useNavbar from './useNavbar';

function Navbar({ className, style }: NavbarProps) {
	const { items } = useNavbar();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{items}
		</div>
	);
}

export default Navbar;
