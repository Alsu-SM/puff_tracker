import clsx from 'clsx';
import { BackupSectionProps } from './types';

import styles from './BackupSection.module.css';
import useBackupSection from './useBackupSection';
import CreateBackupButton from '../CreateBackupButton';
import RestoreBackupButton from '../RestoreBackupButton';

function BackupSection({ className, style }: BackupSectionProps) {
	const { lastDateFormatted } = useBackupSection();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<div className={styles.title}>
				<div className={styles.title_label}>Last backup: </div>
				<div className={styles.title_value}>{lastDateFormatted}</div>
			</div>
			<div className={styles.buttons_row}>
				<RestoreBackupButton />
				<CreateBackupButton />
			</div>
		</div>
	);
}

export default BackupSection;
