import { TimelineContentItemProps } from './types';
import styles from './TimelineContainer.module.css';
import useTimelineDetailedContentItem from './useTimelineDetailedContentItem';
import clsx from 'clsx';

function TimelineDetailedContentItem({ entry }: TimelineContentItemProps) {
	const {
		formattedDate,
		cigarettes,
		puffs,
		intervalTime,
		goalIntervalTime,
		handleRowClick,
	} = useTimelineDetailedContentItem(entry);

	return (
		<button
			className={styles.detailed_content_item}
			onClick={handleRowClick}
			key={entry.id}
		>
			<div className={styles.content}>
				<div
					className={styles.content_item}
				>{`${formattedDate}: ${puffs} puffs, ${cigarettes} cigarettes`}</div>
				<div
					className={clsx(styles.content_item, styles.content_item__time)}
				>{`${intervalTime} | ${goalIntervalTime}`}</div>
			</div>
		</button>
	);
}

export default TimelineDetailedContentItem;
