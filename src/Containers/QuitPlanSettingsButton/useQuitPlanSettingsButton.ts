import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { setIsQuitPlanSettingsModalShownEvent } from '../../Model/ui';
import { format } from 'date-fns';
import { DateType } from '../../Components/DatePickerButton/types';
import { formatTimeToString } from '../../Utils/formatTime';

function useQuitPlanSettingsButton() {
	const {
		startDate,
		endDate,
		startInterval,
		currentInterval,
		increaseIntervalStep,
		goalIntervalCleanDays,
	} = useUnit($puffsModel);

	const startDateFormatted = format(startDate, DateType.DateOnly);
	const endDateFormatted = format(endDate, DateType.DateOnly);

	const startIntervalFormatted = formatTimeToString(
		startInterval * 1000,
		false,
	);
	const currentIntervalFormatted = formatTimeToString(
		currentInterval * 1000,
		false,
	);
	const increaseIntervalStepFormatted = formatTimeToString(
		increaseIntervalStep * 1000,
		false,
	);
	const goalIntervalCleanDaysFormatted =
		goalIntervalCleanDays > 1
			? `${goalIntervalCleanDays} days`
			: `${goalIntervalCleanDays} day`;

	const handleClick = () => {
		setIsQuitPlanSettingsModalShownEvent(true);
	};

	return {
		startDateFormatted,
		endDateFormatted,
		startIntervalFormatted,
		currentIntervalFormatted,
		increaseIntervalStepFormatted,
		goalIntervalCleanDaysFormatted,
		handleClick,
	};
}

export default useQuitPlanSettingsButton;
