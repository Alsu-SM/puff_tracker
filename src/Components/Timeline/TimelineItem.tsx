import { TimelineItemProps } from './types';
import styles from './Timeline.module.css';
import useTimelineItem from './useTimelineItem';
import { Calendar, MoreVertical } from '../Icons';

function TimelineItem({ item }: TimelineItemProps) {
	const { isOpen, content, formattedDate, handleToggle } =
		useTimelineItem(item);

	return (
		<button className={styles.timeline_item} onClick={handleToggle}>
			<div className={styles.icon_wrapper}>
				{isOpen ? (
					<MoreVertical className={styles.icon} />
				) : (
					<Calendar className={styles.icon} />
				)}
			</div>
			<div className={styles.content}>
				<div className={styles.title}>{formattedDate}</div>
				{<div className={styles.item_content}>{content}</div>}
			</div>
		</button>
	);
}

export default TimelineItem;
