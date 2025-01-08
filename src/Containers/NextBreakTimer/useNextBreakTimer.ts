import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { useEffect, useRef, useState } from 'react';
import { getLastEntry } from '../../Model/puffs/utils';

function useNextBreakTimer() {
	const { entries, currentInterval, isTrackOnly } = useUnit($puffsModel);
	const [isIntervalFinished, setIsIntervalFinished] = useState<boolean>();

	const lastEntry = getLastEntry(entries);

	const goalDate = lastEntry
		? new Date(+lastEntry.date + currentInterval * 1000)
		: new Date();

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const update = () => {
		setIsIntervalFinished(+new Date() >= +goalDate);
	};

	const clearCurrentInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const title = isIntervalFinished ? 'Next break available' : 'Next break in:';

	useEffect(() => {
		clearCurrentInterval();

		intervalRef.current = setInterval(update, 500);
		update();

		return () => {
			clearCurrentInterval();
		};
	}, [goalDate]);

	return { goalDate, isIntervalFinished, title, isTrackOnly };
}

export default useNextBreakTimer;
