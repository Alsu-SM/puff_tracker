import clsx from 'clsx';
import { QuitPlanSettingsProps } from './types';

import styles from './QuitPlanSettings.module.css';
import Sheet from '../../Components/Sheet';
import useQuitPlanSettings from './useQuitPlanSettings';
import DatePickerButton from '../../Components/DatePickerButton';
import { DateType } from '../../Components/DatePickerButton/types';
import Slider from '../../Components/Slider';
import {
	MAX_CLEAN_DAYS,
	MAX_INTERVAL_STEP,
	MAX_START_INTERVAL,
	MIN_CLEAN_DAYS,
	MIN_INTERVAL_STEP,
	MIN_START_INTERVAL,
} from './constants';
import Button from '../../Components/Button';
import Toggle from '../../Components/Toggle';

function QuitPlanSettings({ className }: QuitPlanSettingsProps) {
	const {
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
						Choose a start date and increase the interval between smoke breaks
						until you reach day X.
					</div>
					<div className={styles.description_item}>
						{`End date is calculated when interval between breaks reaches ${cleanDays} ${cleanDaysTitleFormatted}.`}
					</div>
				</div>
				<div className={styles.date_settings}>
					<DatePickerButton
						title="Start day"
						date={currentStartDate}
						dateType={DateType.DateOnly}
						onChange={handleStartDateChange}
						className={styles.datepicker}
					/>
				</div>
				<div className={styles.slider_settings}>
					<div className={styles.interval_slider}>
						<div className={styles.interval_slider_title}>
							Start interval between breaks (min):
						</div>
						<Slider
							value={currentStartInterval}
							min={MIN_START_INTERVAL}
							max={MAX_START_INTERVAL}
							onChange={handleIntervalChange}
						/>
					</div>
					<div className={styles.interval_slider}>
						<div className={styles.interval_slider_title}>
							Interval increase step (min):
						</div>
						<Slider
							value={currentIntervalStep}
							min={MIN_INTERVAL_STEP}
							max={MAX_INTERVAL_STEP}
							onChange={handleIntervalStepChange}
						/>
					</div>
					<div className={styles.interval_slider}>
						<div className={styles.interval_slider_title}>
							Goal clean days to reach day X:
						</div>
						<Slider
							value={cleanDays}
							min={MIN_CLEAN_DAYS}
							max={MAX_CLEAN_DAYS}
							onChange={handleCleanDaysChange}
						/>
					</div>
				</div>
				<div className={styles.toggle_settings}>
					<div className={styles.toggle_title}>Reset current interval:</div>
					<Toggle checked={shouldResetCurrentInterval} onClick={handleToggle} />
				</div>
				<div
					className={styles.result}
				>{`You will reach your goal in ${endDateFormatted}`}</div>
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
