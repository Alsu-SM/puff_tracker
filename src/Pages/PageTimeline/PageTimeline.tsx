import clsx from 'clsx';
import { PageTimelineProps } from './types';

import styles from './PageTimeline.module.css';
import TimelineContainer from '../../Containers/TimelineContainer';
import ModalAddManualEntry from '../../Containers/ModalAddManualEntry';
import ModalEditEntry from '../../Containers/ModalEditEntry';

function PageTimeline({ className, style }: PageTimelineProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<TimelineContainer />
			<ModalAddManualEntry />
			<ModalEditEntry />
		</div>
	);
}

export default PageTimeline;
