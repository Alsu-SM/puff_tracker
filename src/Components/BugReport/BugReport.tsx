import clsx from 'clsx';
import { BugReportProps } from './types';

import styles from './BugReport.module.css';
import { Bug } from '../Icons';
import useBugReport from './useBugReport';
import Sheet from '../Sheet';
import MobileSelect from '../MobileSelect';
import { bugTypeOptions, severityOptions } from './constants';
import Button from '../Button';
import PendingOverlay from '../PendingOverlay';

function BugReport({ className, style }: BugReportProps) {
	const {
		severity,
		bugType,
		isModalShown,
		screenshot,
		description,
		isEmailPending,
		handleClick,
		handleCancel,
		handleSeverityChange,
		handleBugTypeChange,
		handleDescriptionChange,
		handleConfirm,
	} = useBugReport();

	return (
		<div>
			<button
				className={clsx(
					styles.root,
					{ [styles.button__hidden]: isModalShown },
					className,
				)}
				style={style}
				onClick={handleClick}
			>
				<Bug className={styles.icon} />
			</button>
			{isEmailPending && <PendingOverlay />}
			<Sheet isShown={isModalShown}>
				<div className={styles.content}>
					<div className={styles.title}>Bug report</div>
					<div className={styles.fields}>
						<div className={styles.field_wrapper}>
							<div className={styles.field_title}>Description:</div>
							<textarea
								className={clsx(styles.field, styles.textarea)}
								placeholder="Please describe where and under what conditions the bug occurred"
								value={description}
								onChange={handleDescriptionChange}
							/>
						</div>
						<div className={styles.inline_field_wrapper}>
							<div className={styles.field_title}>Choose bug type:</div>
							<MobileSelect
								options={bugTypeOptions}
								onSelect={handleBugTypeChange}
								selectedId={bugType}
								label="Bug type"
								outlined
								className={clsx(styles.field, styles.select)}
							/>
						</div>
						<div className={styles.inline_field_wrapper}>
							<div className={styles.field_title}>Choose severity:</div>
							<MobileSelect
								options={severityOptions}
								onSelect={handleSeverityChange}
								selectedId={severity}
								label="Bug severity"
								outlined
								className={clsx(styles.field, styles.select)}
							/>
						</div>
						{screenshot && (
							<div className={styles.screenshot_wrapper}>
								<div className={styles.screenshot_message}>
									Screenshot taken:
								</div>
								<img
									src={screenshot}
									alt="bug screenshot"
									className={styles.screenshot}
								/>
							</div>
						)}
					</div>
					<div className={styles.button_wrapper}>
						<Button className={styles.button} onClick={handleCancel}>
							Cancel
						</Button>
						<Button className={styles.button} onClick={handleConfirm} primary>
							Confirm
						</Button>
					</div>
				</div>
			</Sheet>
		</div>
	);
}

export default BugReport;
