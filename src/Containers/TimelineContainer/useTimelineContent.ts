import { Entry } from '../../Model/puffs';

function useTimelineContent(entries: Entry[]) {
	const entriesCount = entries.length;
	const puffsCount = entries.reduce(
		(puffs: number, entry) => (puffs += entry.puffs),
		0,
	);
	const cigarettesCount = entries.reduce(
		(cigarettes: number, entry) => (cigarettes += entry.cigarettes),
		0,
	);
	const goalIntervalsCount = entries.reduce((intervals, entry) => {
		if (entry.interval >= entry.goalInterval) {
			intervals += 1;
		}

		return intervals;
	}, 0);
	console.log(entries, goalIntervalsCount);
	const goalIntervalsSuccessRate = Math.floor(
		(goalIntervalsCount / entriesCount) * 100,
	);

	return {
		entriesCount,
		puffsCount,
		cigarettesCount,
		goalIntervalsSuccessRate,
	};
}

export default useTimelineContent;
