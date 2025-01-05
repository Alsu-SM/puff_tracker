import { useUnit } from 'effector-react';
import { $puffsModel, setQuitPlanSettingsDataEvent } from '../../Model/puffs';
import { $uiModel, setIsQuitPlanSettingsModalShownEvent } from '../../Model/ui';
import { ChangeEvent, useEffect, useState } from 'react';
import { MIN_CLEAN_DAYS } from './constants';
import { getEndDate } from './utils';
import { format } from 'date-fns';

function useQuitPlanSettings() {
	const {
		startDate,
		startInterval,
		endDate,
		increaseIntervalStep,
		goalIntervalCleanDays,
	} = useUnit($puffsModel);
	const { isQuitPlanSettingsModalShown } = useUnit($uiModel);

	const [currentStartDate, setCurrentStartDate] = useState<Date>(startDate);
	const [currentEndDate, setCurrentEndDate] = useState<Date>(endDate);
	const [currentStartInterval, setCurrentStartInterval] = useState<number>(
		Math.floor(startInterval / 60),
	);
	const [currentIntervalStep, setCurrentIntervalStep] = useState<number>(
		Math.floor(increaseIntervalStep / 60),
	);
	const [cleanDays, setCleanDays] = useState<number>(goalIntervalCleanDays);
	const [shouldResetCurrentInterval, setShouldResetCurrentInterval] =
		useState<boolean>(false);

	const cleanDaysTitleFormatted = cleanDays === MIN_CLEAN_DAYS ? `day` : 'days';
	const endDateFormatted = format(currentEndDate, 'dd.MM.yyyy');

	const handleToggle = () => {
		setShouldResetCurrentInterval(!shouldResetCurrentInterval);
	};

	const handleStartDateChange = (date: Date) => {
		setCurrentStartDate(date);
	};

	const handleIntervalChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentStartInterval(Number(event.target.value));
	};

	const handleIntervalStepChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCurrentIntervalStep(Number(event.target.value));
	};
	const handleCleanDaysChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCleanDays(Number(event.target.value));
	};

	const handleCancel = () => {
		setCurrentStartDate(startDate);
		setCurrentEndDate(endDate);
		setCurrentStartInterval(Math.floor(startInterval / 60));
		setCurrentIntervalStep(Math.floor(increaseIntervalStep / 60));
		setCleanDays(goalIntervalCleanDays);
		setShouldResetCurrentInterval(false);

		setIsQuitPlanSettingsModalShownEvent(false);
	};

	const handleConfirm = () => {
		setQuitPlanSettingsDataEvent({
			startDate: currentStartDate,
			endDate: currentEndDate,
			startInterval: currentStartInterval * 60,
			increaseIntervalStep: currentIntervalStep * 60,
			goalIntervalCleanDays: cleanDays,
			shouldResetCurrentInterval,
		});

		setIsQuitPlanSettingsModalShownEvent(false);
	};

	useEffect(() => {
		setCurrentStartDate(startDate);
	}, [startDate]);

	useEffect(() => {
		setCurrentEndDate(endDate);
	}, [endDate]);

	useEffect(() => {
		setCurrentStartInterval(Math.floor(startInterval / 60));
	}, [startInterval]);

	useEffect(() => {
		setCurrentIntervalStep(Math.floor(increaseIntervalStep / 60));
	}, [increaseIntervalStep]);

	useEffect(() => {
		setCleanDays(goalIntervalCleanDays);
	}, [goalIntervalCleanDays]);

	useEffect(() => {
		const newEndDate = getEndDate({
			startDate: currentStartDate,
			interval: currentStartInterval * 60,
			step: currentIntervalStep * 60,
			cleanDays,
		});

		setCurrentEndDate(newEndDate);
	}, [currentStartDate, currentIntervalStep, currentStartInterval, cleanDays]);

	return {
		isQuitPlanSettingsModalShown,
		currentStartDate,
		currentStartInterval,
		currentIntervalStep,
		cleanDays,
		cleanDaysTitleFormatted,
		endDateFormatted,
		shouldResetCurrentInterval,
		handleStartDateChange,
		handleIntervalChange,
		handleIntervalStepChange,
		handleCleanDaysChange,
		handleToggle,
		handleCancel,
		handleConfirm,
	};
}

export default useQuitPlanSettings;
