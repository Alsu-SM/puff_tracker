import { TimelineContentProps } from './types';
import styles from './TimelineContainer.module.css';
import useTimelineDetailedContent from './useTimelineDetailedContent';

function TimelineDetailedContent({ entries }: TimelineContentProps) {
	const { rows, handleAddEntry } = useTimelineDetailedContent(entries);

	return (
		<div className={styles.detailed_content}>
			<div className={styles.message}>Tap row to edit</div>
			<div className={styles.detailed_content_items}>{rows}</div>
			<button className={styles.button} onClick={handleAddEntry}>
				Add entry
			</button>
		</div>
	);
}

export default TimelineDetailedContent;
