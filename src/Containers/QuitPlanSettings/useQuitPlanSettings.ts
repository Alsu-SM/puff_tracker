import { useUnit } from 'effector-react';
import {
	$puffsModel,
	setQuitPlanSettingsDataEvent,
	SetQuitPlanSettingsDataEventParams,
} from '../../Model/puffs';
import { $uiModel, setIsQuitPlanSettingsModalShownEvent } from '../../Model/ui';
import { ChangeEvent, useEffect, useState } from 'react';

function useQuitPlanSettings() {
	const {
		currentInterval,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		successIntervalNumberToPrompt,
		failIntervalNumberToPrompt,
		increaseIntervalStep,
		decreaseIntervalStep,
	} = useUnit($puffsModel);
	const { isQuitPlanSettingsModalShown } = useUnit($uiModel);

	const [currentSettings, setCurrentSettings] =
		useState<SetQuitPlanSettingsDataEventParams>({
			shouldAskToIncreaseIntervalOnSuccess,
			shouldAskToDecreaseIntervalOnFail,
			successIntervalNumberToPrompt,
			failIntervalNumberToPrompt,
			currentInterval: Math.floor(currentInterval / 60),
			increaseIntervalStep: Math.floor(increaseIntervalStep / 60),
			decreaseIntervalStep: Math.floor(decreaseIntervalStep / 60),
		});

	const handleToggleSuccess = () => {
		setCurrentSettings({
			...currentSettings,
			shouldAskToIncreaseIntervalOnSuccess:
				!currentSettings.shouldAskToIncreaseIntervalOnSuccess,
		});
	};

	const handleToggleFail = () => {
		setCurrentSettings({
			...currentSettings,
			shouldAskToDecreaseIntervalOnFail:
				!currentSettings.shouldAskToDecreaseIntervalOnFail,
		});
	};

	const handleSuccessIntervalNumberToPromptChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentSettings({
			...currentSettings,
			successIntervalNumberToPrompt: Number(event.target.value || 1),
		});
	};

	const handleFailIntervalNumberToPromptChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentSettings({
			...currentSettings,
			failIntervalNumberToPrompt: Number(event.target.value || 1),
		});
	};

	const handleIncreaseIntervalStepChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentSettings({
			...currentSettings,
			increaseIntervalStep: Number(event.target.value || 1),
		});
	};
	const handleDecreaseIntervalStepChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentSettings({
			...currentSettings,
			decreaseIntervalStep: Number(event.target.value || 1),
		});
	};
	const handleCurrentIntervalChange = (
		event: ChangeEvent<HTMLInputElement>,
	) => {
		setCurrentSettings({
			...currentSettings,
			currentInterval: Number(event.target.value || 1),
		});
	};

	const handleCancel = () => {
		resetCurrentSettings();
		setIsQuitPlanSettingsModalShownEvent(false);
	};

	const handleConfirm = () => {
		setQuitPlanSettingsDataEvent(currentSettings);
		setIsQuitPlanSettingsModalShownEvent(false);
	};

	const resetCurrentSettings = () => {
		setCurrentSettings({
			shouldAskToIncreaseIntervalOnSuccess,
			shouldAskToDecreaseIntervalOnFail,
			successIntervalNumberToPrompt,
			failIntervalNumberToPrompt,
			currentInterval: Math.floor(currentInterval / 60),
			increaseIntervalStep: Math.floor(increaseIntervalStep / 60),
			decreaseIntervalStep: Math.floor(decreaseIntervalStep / 60),
		});
	};

	useEffect(() => {
		if (isQuitPlanSettingsModalShown) {
			resetCurrentSettings();
		}
	}, [isQuitPlanSettingsModalShown]);

	return {
		isQuitPlanSettingsModalShown,
		...currentSettings,
		handleToggleSuccess,
		handleToggleFail,
		handleSuccessIntervalNumberToPromptChange,
		handleFailIntervalNumberToPromptChange,
		handleIncreaseIntervalStepChange,
		handleDecreaseIntervalStepChange,
		handleCurrentIntervalChange,
		handleCancel,
		handleConfirm,
	};
}

export default useQuitPlanSettings;
