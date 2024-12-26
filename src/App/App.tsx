import clsx from 'clsx';

import { AppProps } from './types';
import { Outlet } from 'react-router-dom';

import styles from './App.module.css';


function App({ className, style }: AppProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Outlet />
		</div>
	);
}

export default App;
