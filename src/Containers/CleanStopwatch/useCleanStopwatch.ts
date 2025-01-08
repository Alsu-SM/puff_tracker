import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { getLastEntry } from '../../Model/puffs/utils';

function useCleanStopwatch() {
	const { entries, startDate } = useUnit($puffsModel);

	const lastEntry = getLastEntry(entries);
	const date = lastEntry?.date || startDate;

	return { date };
}

export default useCleanStopwatch;
