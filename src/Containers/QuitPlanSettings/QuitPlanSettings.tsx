import clsx from 'clsx';
import { QuitPlanSettingsProps } from './types';

import styles from './QuitPlanSettings.module.css';
import Sheet from '../../Components/Sheet';
import useQuitPlanSettings from './useQuitPlanSettings';
import Slider from '../../Components/Slider';
import {
	MAX_INTERVAL_STEP,
	MAX_NUMBERS_TO_PROMPT,
	MAX_START_INTERVAL,
	MIN_INTERVAL_STEP,
	MIN_NUMBERS_TO_PROMPT,
	MIN_START_INTERVAL,
} from './constants';
import Button from '../../Components/Button';
import Toggle from '../../Components/Toggle';

function QuitPlanSettings({ className }: QuitPlanSettingsProps) {
	const {
		isQuitPlanSettingsModalShown,
		shouldAskToIncreaseIntervalOnSuccess,
		shouldAskToDecreaseIntervalOnFail,
		successIntervalNumberToPrompt,
		failIntervalNumberToPrompt,
		currentInterval,
		increaseIntervalStep,
		decreaseIntervalStep,
		handleToggleSuccess,
		handleToggleFail,
		handleSuccessIntervalNumberToPromptChange,
		handleFailIntervalNumberToPromptChange,
		handleIncreaseIntervalStepChange,
		handleDecreaseIntervalStepChange,
		handleCurrentIntervalChange,
		handleCancel,
		handleConfirm,
	} = useQuitPlanSettings();

	return (
		<Sheet
			isShown={isQuitPlanSettingsModalShown}
			className={clsx(styles.root, className)}
		>
			<div className={styles.content}>
				<div className={styles.title}>Quit slowly</div>
				<div className={styles.description}>
					<div className={styles.description_item}>
						May your journey be as smooth and successful as possible
					</div>
				</div>
				<div className={styles.settings}>
					<div
						className={clsx(styles.group_settings, {
							[styles.group_settings__open]:
								shouldAskToIncreaseIntervalOnSuccess,
						})}
					>
						<div className={styles.toggle_settings}>
							<div className={styles.toggle_title}>
								Prompt to increase interval on X successful breaks:{' '}
							</div>
							<Toggle
								checked={shouldAskToIncreaseIntervalOnSuccess}
								onClick={handleToggleSuccess}
							/>
						</div>
						{shouldAskToIncreaseIntervalOnSuccess && (
							<div className={styles.interval_slider}>
								<div className={styles.interval_slider_title}>
									Number of successful intervals :
								</div>
								<Slider
									value={successIntervalNumberToPrompt}
									min={MIN_NUMBERS_TO_PROMPT}
									max={MAX_NUMBERS_TO_PROMPT}
									onChange={handleSuccessIntervalNumberToPromptChange}
								/>
							</div>
						)}
						{shouldAskToIncreaseIntervalOnSuccess && (
							<div className={styles.interval_slider}>
								<div className={styles.interval_slider_title}>
									Default increase interval step (min):
								</div>
								<Slider
									value={increaseIntervalStep}
									min={MIN_INTERVAL_STEP}
									max={MAX_INTERVAL_STEP}
									onChange={handleIncreaseIntervalStepChange}
								/>
							</div>
						)}
					</div>
					<div
						className={clsx(styles.group_settings, {
							[styles.group_settings__open]: shouldAskToDecreaseIntervalOnFail,
						})}
					>
						<div className={styles.toggle_settings}>
							<div className={styles.toggle_title}>
								Prompt to decrease interval on X failed breaks:
							</div>
							<Toggle
								checked={shouldAskToDecreaseIntervalOnFail}
								onClick={handleToggleFail}
							/>
						</div>
						{shouldAskToDecreaseIntervalOnFail && (
							<div className={styles.interval_slider}>
								<div className={styles.interval_slider_title}>
									Number of failed intervals to prompt interval increase:
								</div>
								<Slider
									value={failIntervalNumberToPrompt}
									min={MIN_NUMBERS_TO_PROMPT}
									max={MAX_NUMBERS_TO_PROMPT}
									onChange={handleFailIntervalNumberToPromptChange}
								/>
							</div>
						)}
						{shouldAskToDecreaseIntervalOnFail && (
							<div className={styles.interval_slider}>
								<div className={styles.interval_slider_title}>
									Default decrease interval step (min):
								</div>
								<Slider
									value={decreaseIntervalStep}
									min={MIN_INTERVAL_STEP}
									max={MAX_INTERVAL_STEP}
									onChange={handleDecreaseIntervalStepChange}
								/>
							</div>
						)}
					</div>
					<div className={styles.group_settings}>
						<div className={styles.interval_slider}>
							<div className={styles.interval_slider_title}>
								Current interval between breaks:
							</div>
							<Slider
								value={currentInterval}
								min={MIN_START_INTERVAL}
								max={MAX_START_INTERVAL}
								onChange={handleCurrentIntervalChange}
							/>
						</div>
					</div>
				</div>

				<div className={styles.footer} />
				<div className={styles.buttons_row}>
					<Button className={styles.button} onClick={handleCancel}>
						Cancel
					</Button>
					<Button className={styles.button} primary onClick={handleConfirm}>
						Save
					</Button>
				</div>
			</div>
		</Sheet>
	);
}

export default QuitPlanSettings;
