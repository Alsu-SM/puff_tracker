import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { getLastEntryByDays } from '../../Model/puffs/utils';
import { useEffect, useRef, useState } from 'react';

function useNextBreakTimer() {
	const { days, currentInterval } = useUnit($puffsModel);
	const [isIntervalFinished, setIsIntervalFinished] = useState<boolean>();

	const lastEntry = getLastEntryByDays(days);

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

	return { goalDate, isIntervalFinished, title };
}

export default useNextBreakTimer;
