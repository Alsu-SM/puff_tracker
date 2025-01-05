import clsx from 'clsx';
import { TimelineProps } from './types';

import styles from './Timeline.module.css';
import useTimeline from './useTimeline';
import { Calendar } from '../Icons';

function Timeline({
	items,
	renderLastItemContent,
	className,
	style,
}: TimelineProps) {
	const { timelineRows, lastDateFormatted } = useTimeline(items);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{timelineRows}
			{lastDateFormatted && (
				<div className={clsx(styles.timeline_item, styles.timeline_item__last)}>
					<div className={styles.icon_wrapper}>
						<Calendar className={styles.icon} />
					</div>
					<div className={styles.content}>
						<div
							className={styles.title}
						>{`No events before ${lastDateFormatted}`}</div>
						{
							<div className={styles.item_content}>
								{renderLastItemContent()}
							</div>
						}
					</div>
				</div>
			)}
		</div>
	);
}

export default Timeline;
