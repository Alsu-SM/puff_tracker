import { TimelineContentItemProps } from './types';
import styles from './TimelineContainer.module.css';
import useTimelineDetailedContentItem from './useTimelineDetailedContentItem';

function TimelineDetailedContentItem({ entry }: TimelineContentItemProps) {
	const { formattedDate, cigarettes, puffs, handleRowClick } =
		useTimelineDetailedContentItem(entry);

	return (
		<button
			className={styles.detailed_content_item}
			onClick={handleRowClick}
			key={entry.id}
		>
			<div
				className={styles.content}
			>{`${formattedDate}: ${puffs} puffs, ${cigarettes} cigarettes`}</div>
		</button>
	);
}

export default TimelineDetailedContentItem;
