import { TimelineContentProps } from './types';
import useTimelineContent from './useTimelineContent';
import styles from './TimelineContainer.module.css';

function TimelineContent({ entries }: TimelineContentProps) {
	const {
		entriesCount,
		puffsCount,
		cigarettesCount,
		goalIntervalsSuccessRate,
		isTrackOnly,
	} = useTimelineContent(entries);

	return (
		<div className={styles.content}>
			<div className={styles.content_row}>
				{`${entriesCount} breaks: ${puffsCount} puffs, ${cigarettesCount} cigarettes`}
			</div>
			{!isTrackOnly && (
				<div className={styles.content_row}>
					{`Intervals success rate: ${goalIntervalsSuccessRate}%`}
				</div>
			)}
		</div>
	);
}

export default TimelineContent;
