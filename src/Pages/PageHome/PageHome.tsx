import clsx from 'clsx';

import styles from './PageHome.module.css';
import DayDashboard from '../../Containers/DayDashboard';
import ModalAddEntry from '../../Containers/ModalAddEntry';
import NextBreakTimer from '../../Containers/NextBreakTimer';
import CleanStopwatch from '../../Containers/CleanStopwatch';

function PageHome() {
	return (
		<div className={clsx('page', styles.root)}>
			<CleanStopwatch />
			<DayDashboard />
			<NextBreakTimer />
			<div className={styles.image_wrapper} />
			<ModalAddEntry />
		</div>
	);
}

export default PageHome;
