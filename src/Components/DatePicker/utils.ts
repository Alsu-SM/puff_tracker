import { DateType } from '../DatePickerButton/types';
import { dateConfig } from './constants';

export function getConfigByDateType(dateType: DateType) {
	const { month, date, year, hour, minute } = dateConfig;

	switch (dateType) {
		case DateType.DateOnly:
			return { month, date, year };
		case DateType.DateTime:
			return { month, date, year, hour, minute };
		case DateType.TimeOnly:
			return { hour, minute };
	}
}
