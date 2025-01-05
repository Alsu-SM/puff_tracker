import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../../Utils/formatTime';

function useStopwatch(startDate: Date) {
	const [delta, setDelta] = useState<number>(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const updateDelta = () => {
		setDelta(+new Date() - +startDate);
	};

	const clearCurrentInterval = () => {
		if (intervalRef.current) {
			clearInterval(intervalRef.current);
		}
	};

	const {
		days,
		hours,
		minutes,
		seconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
	} = formatTime(delta);

	useEffect(() => {
		clearCurrentInterval();

		intervalRef.current = setInterval(updateDelta, 500);
		updateDelta();

		return () => {
			clearCurrentInterval();
		};
	}, [startDate]);

	return {
		days,
		hours,
		minutes,
		seconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
	};
}

export default useStopwatch;
