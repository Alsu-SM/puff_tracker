import { useEffect, useRef, useState } from 'react';
import { formatTime } from '../../Utils/formatTime';

function useTimer(goalDate: Date) {
	const [delta, setDelta] = useState<number>(0);
	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const updateDelta = () => {
		setDelta(+goalDate - +new Date());
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
	}, [goalDate]);

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

export default useTimer;
