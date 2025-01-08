import { useUnit } from 'effector-react';
import { $puffsModel, setIsTrackOnlyEvent } from '../../Model/puffs';
import { setIsQuitPlanSettingsModalShownEvent } from '../../Model/ui';
import { formatTimeToString } from '../../Utils/formatTime';
import { MouseEvent } from 'react';

function useQuitPlanSettingsButton() {
	const {
		isTrackOnly,
		startInterval,
		currentInterval,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
	} = useUnit($puffsModel);

	const startIntervalFormatted = formatTimeToString(
		startInterval * 1000,
		false,
	);

	const currentIntervalFormatted = formatTimeToString(
		currentInterval * 1000,
		false,
	);

	const handleClick = () => {
		setIsQuitPlanSettingsModalShownEvent(true);
	};

	const handleIsTrackOnlyToggle = (e: MouseEvent<HTMLInputElement>) => {
		e.stopPropagation();
		setIsTrackOnlyEvent(!isTrackOnly);
	};

	return {
		isTrackOnly,
		startIntervalFormatted,
		currentIntervalFormatted,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		handleClick,
		handleIsTrackOnlyToggle,
	};
}

export default useQuitPlanSettingsButton;
