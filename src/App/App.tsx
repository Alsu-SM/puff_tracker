import clsx from 'clsx';

import { AppProps } from './types';
import { Outlet } from 'react-router-dom';

import styles from './App.module.css';
import Navbar from '../Components/Navbar';
import BugReport from '../Components/BugReport';
import { ToastContainer } from 'react-toastify';

function App({ className, style }: AppProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Outlet />
			<Navbar />
			<BugReport />
			<ToastContainer
				autoClose={3000}
				position="bottom-center"
				className={styles.toast}
			/>
		</div>
	);
}

export default App;
