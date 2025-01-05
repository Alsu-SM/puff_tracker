import clsx from 'clsx';
import { QuitPlanSettingsButtonProps } from './types';

import styles from './QuitPlanSettingsButton.module.css';
import useQuitPlanSettingsButton from './useQuitPlanSettingsButton';

function QuitPlanSettingsButton({
	className,
	style,
}: QuitPlanSettingsButtonProps) {
	const {
		startDateFormatted,
		endDateFormatted,
		startIntervalFormatted,
		currentIntervalFormatted,
		increaseIntervalStepFormatted,
		goalIntervalCleanDaysFormatted,
		handleClick,
	} = useQuitPlanSettingsButton();

	return (
		<button
			className={clsx(styles.root, className)}
			style={style}
			onClick={handleClick}
		>
			<div className={styles.title}>Quit plan settings</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>Start date: </div>
				<div className={styles.settings_item_value}>{startDateFormatted}</div>
			</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>Estimated end date: </div>
				<div className={styles.settings_item_value}>{endDateFormatted}</div>
			</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>Start interval:</div>
				<div className={styles.settings_item_value}>
					{startIntervalFormatted}
				</div>
			</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>
					Increase interval step:
				</div>
				<div className={styles.settings_item_value}>
					{increaseIntervalStepFormatted}
				</div>
			</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>Current interval:</div>
				<div className={styles.settings_item_value}>
					{currentIntervalFormatted}
				</div>
			</div>
			<div className={styles.settings_item}>
				<div className={styles.settings_item_title}>Goal interval:</div>
				<div className={styles.settings_item_value}>
					{goalIntervalCleanDaysFormatted}
				</div>
			</div>
		</button>
	);
}

export default QuitPlanSettingsButton;
