import clsx from 'clsx';
import { DayDashboardProps } from './types';

import styles from './DayDashboard.module.css';
import BlockSlider from '../../Components/BlockSlider';
import useDayDashboard from './useDayDashboard';
import Modal from '../../Components/Modal';
import Button from '../../Components/Button';

function DayDashboard({ className, style }: DayDashboardProps) {
	const {
		isWarningModalShown,
		handleAddEntry,
		renderCount,
		renderDay,
		handleWarningCancel,
		handleWarningConfirm,
	} = useDayDashboard();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<BlockSlider
				renderContentLeft={renderCount}
				renderContentRight={renderDay}
				onSwipeRight={handleAddEntry}
			/>
			{isWarningModalShown && (
				<Modal className={styles.modal}>
					<div className={styles.modal_content}>
						<div className={styles.modal_title}>Are you sure?</div>
						<div className={styles.modal_description}>
							<div className={styles.modal_description_item}>
								It's not time for a smoke break yet.
							</div>
							<div className={styles.modal_description_item}>
								This action will lower interval success rate and slow down your
								progress progress: the interval between breaks will not be
								increased.
							</div>
						</div>
						<div className={styles.buttons_row}>
							<Button className={styles.button} onClick={handleWarningCancel}>
								Cancel
							</Button>
							<Button
								className={styles.button}
								primary
								onClick={handleWarningConfirm}
							>
								Continue
							</Button>
						</div>
					</div>
				</Modal>
			)}
		</div>
	);
}

export default DayDashboard;
