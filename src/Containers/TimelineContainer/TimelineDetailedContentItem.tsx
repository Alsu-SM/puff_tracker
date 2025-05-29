import { TimelineContentItemProps } from './types';
import styles from './TimelineContainer.module.css';
import useTimelineDetailedContentItem from './useTimelineDetailedContentItem';

function TimelineDetailedContentItem({ entry }: TimelineContentItemProps) {
	const { formattedDate, cigarettes, puffs, intervalTime, handleRowClick } =
		useTimelineDetailedContentItem(entry);

	return (
		<button
			className={styles.detailed_content_item}
			onClick={handleRowClick}
			key={entry.id}
		>
			<div className={styles.content}>
				<div className={styles.content_item}>{`${formattedDate}: ${
					puffs ? puffs + ' puffs' : ''
				} ${cigarettes ? cigarettes + ' cig-s' : ''} `}</div>
				<div className={styles.content_item}>{intervalTime}</div>
			</div>
		</button>
	);
}

export default TimelineDetailedContentItem;
