import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { getLastEntry } from '../../Model/puffs/utils';

function useCleanStopwatch() {
	const { entries } = useUnit($puffsModel);

	const lastEntry = getLastEntry(entries);
	const date = lastEntry?.date;

	return { date };
}

export default useCleanStopwatch;
