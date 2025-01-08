import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { DataItem, SeriesItem } from '../../Components/LineChart/types';
import { getDaysByEntries } from '../../Model/puffs/utils';

function useCharts() {
	const { entries } = useUnit($puffsModel);
	const days = getDaysByEntries(entries);

	const sortedDays = days.sort((a, b) => +a.date - +b.date);

	const itemsEntries: DataItem[] = sortedDays.map((day) => ({
		date: day.date,
		value: day.entries.length,
	}));

	const dataEntries: SeriesItem = {
		name: 'Smoke breaks',
		data: itemsEntries,
		lineColor: 'rgba(146, 146, 146, 1)',
		fillColor: 'rgba(146, 146, 146, 0.4)',
	};

	const itemsIntervals: DataItem[] = sortedDays.map((day) => ({
		date: day.date,
		value: Math.floor(
			day.entries.reduce(
				(interval, entry) => (interval += entry.interval / 60),
				0,
			) / day.entries.length,
		),
	}));

	const dataIntervals: SeriesItem = {
		name: 'Average intervals',
		data: itemsIntervals,
		lineColor: 'rgba(146, 146, 146, 1)',
		fillColor: 'rgba(146, 146, 146, 0.4)',
	};

	const itemsPuffs: DataItem[] = sortedDays.map((day) => ({
		date: day.date,
		value: day.entries.reduce((value, entry) => (value += entry.puffs), 0),
	}));

	const dataPuffs: SeriesItem = {
		name: 'Puffs',
		data: itemsPuffs,
		lineColor: 'rgba(72, 72, 72, 1)',
		fillColor: 'rgba(72, 72, 72, 0.4)',
		z: 1,
	};

	const itemsCigarettes: DataItem[] = sortedDays.map((day) => ({
		date: day.date,
		value: day.entries.reduce((value, entry) => (value += entry.cigarettes), 0),
	}));

	const dataCigarettes: SeriesItem = {
		name: 'Cigarettes',
		data: itemsCigarettes,
		lineColor: 'rgba(117, 117, 117, 1)',
		fillColor: 'rgba(117, 117, 117, 0.4)',
		z: 2,
	};

	return { dataEntries, dataPuffs, dataCigarettes, dataIntervals };
}

export default useCharts;
