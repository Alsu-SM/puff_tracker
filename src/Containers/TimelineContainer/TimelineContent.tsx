import { TimelineContentProps } from './types';
import useTimelineContent from './useTimelineContent';
import styles from './TimelineContainer.module.css';

function TimelineContent({ entries }: TimelineContentProps) {
	const {
		entriesCount,
		puffsCount,
		cigarettesCount,
		goalIntervalsSuccessRate,
	} = useTimelineContent(entries);

	return (
		<div className={styles.content}>
			<div className={styles.content_row}>
				{`${entriesCount} breaks: ${puffsCount} puffs, ${cigarettesCount} cigarettes`}
			</div>
			<div className={styles.content_row}>
				{`Intervals success rate: ${goalIntervalsSuccessRate}%`}
			</div>
		</div>
	);
}

export default TimelineContent;
