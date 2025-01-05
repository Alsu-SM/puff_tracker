import { Entry } from '../../Model/puffs';
import TimelineContent from './TimelineContent';
import TimelineDetailedContent from './TimelineDetailedContent';
import TimelineDetailedContentItem from './TimelineDetailedContentItem';
import { TimelineContentItemProps } from './types';

export function renderTimelineContent(entries: Entry[]) {
	return <TimelineContent entries={entries} />;
}
export function renderTimelineDetailedContent(entries: Entry[]) {
	return <TimelineDetailedContent entries={entries} />;
}

export function renderTimelineDetailedContentItem(
	params: TimelineContentItemProps,
) {
	return <TimelineDetailedContentItem {...params} />;
}
