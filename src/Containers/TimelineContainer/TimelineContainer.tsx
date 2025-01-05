import clsx from 'clsx';
import { TimelineContainerProps } from './types';

import styles from './TimelineContainer.module.css';
import useTimeline from './useTimeline';
import Timeline from '../../Components/Timeline';

function TimelineContainer({ className, style }: TimelineContainerProps) {
	const { items, handleAddEntry } = useTimeline();

	const renderLastItemContent = () => {
		return (
			<button className={styles.button} onClick={handleAddEntry}>
				Add entry
			</button>
		);
	};

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<Timeline items={items} renderLastItemContent={renderLastItemContent} />
		</div>
	);
}

export default TimelineContainer;
