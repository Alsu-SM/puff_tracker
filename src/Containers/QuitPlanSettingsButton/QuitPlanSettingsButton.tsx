import clsx from 'clsx';
import { QuitPlanSettingsButtonProps } from './types';

import styles from './QuitPlanSettingsButton.module.css';
import useQuitPlanSettingsButton from './useQuitPlanSettingsButton';
import { Check } from '../../Components/Icons';
import Toggle from '../../Components/Toggle';

function QuitPlanSettingsButton({
	className,
	style,
}: QuitPlanSettingsButtonProps) {
	const {
		isTrackOnly,
		startIntervalFormatted,
		currentIntervalFormatted,
		shouldAskToDecreaseIntervalOnFail,
		shouldAskToIncreaseIntervalOnSuccess,
		handleClick,
		handleIsTrackOnlyToggle,
	} = useQuitPlanSettingsButton();

	return (
		<button
			className={clsx(styles.root, className)}
			style={style}
			onClick={handleClick}
		>
			<div className={styles.title}>Quit plan settings</div>
			<div
				className={clsx(styles.settings_item, styles.toggle_item, {
					[styles.toggle_item__off]: !isTrackOnly,
				})}
			>
				<div className={styles.settings_item_title}>I just want to track</div>
				<div className={styles.settings_item_value}>
					<Toggle
						checked={isTrackOnly}
						onClick={handleIsTrackOnlyToggle}
						className={styles.toggle}
					/>
				</div>
			</div>
			{!isTrackOnly && (
				<>
					<div className={styles.settings_item}>
						<div className={styles.settings_item_title}>Start interval:</div>
						<div className={styles.settings_item_value}>
							{startIntervalFormatted}
						</div>
					</div>
					<div className={styles.settings_item}>
						<div className={styles.settings_item_title}>Current interval:</div>
						<div className={styles.settings_item_value}>
							{currentIntervalFormatted}
						</div>
					</div>
					{shouldAskToIncreaseIntervalOnSuccess && (
						<div className={styles.settings_item}>
							<div
								className={styles.settings_item_title}
							>{`Ask to increase interval on success`}</div>
							<div className={styles.settings_item_value}>
								<Check className={styles.icon} />
							</div>
						</div>
					)}
					{shouldAskToDecreaseIntervalOnFail && (
						<div className={styles.settings_item}>
							<div
								className={styles.settings_item_title}
							>{`Ask to decrease interval on fail`}</div>
							<div className={styles.settings_item_value}>
								<Check className={styles.icon} />
							</div>
						</div>
					)}
				</>
			)}
		</button>
	);
}

export default QuitPlanSettingsButton;
