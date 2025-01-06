import clsx from 'clsx';
import { PageProfileProps } from './types';

import styles from './PageProfile.module.css';
import ProfileName from '../../Containers/ProfileName';
import QuitPlanSettings from '../../Containers/QuitPlanSettings';
import QuitPlanSettingsButton from '../../Containers/QuitPlanSettingsButton';
import ClearDataButton from '../../Containers/ClearDataButton';
import BackupSection from '../../Containers/BackupSection';

function PageProfile({ className, style }: PageProfileProps) {
	return (
		<div className={clsx(styles.root, 'page', className)} style={style}>
			<ProfileName />
			<QuitPlanSettingsButton />
			<BackupSection />
			<ClearDataButton />
			<QuitPlanSettings />
		</div>
	);
}

export default PageProfile;
