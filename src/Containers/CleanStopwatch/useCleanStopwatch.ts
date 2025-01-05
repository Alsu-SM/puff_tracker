import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { getLastEntryByDays } from '../../Model/puffs/utils';

function useCleanStopwatch() {
	const { days, startDate } = useUnit($puffsModel);

	const lastEntry = getLastEntryByDays(days);
	const date = lastEntry?.date || startDate;

	return { date };
}

export default useCleanStopwatch;
