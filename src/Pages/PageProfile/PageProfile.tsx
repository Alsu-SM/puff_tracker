import clsx from 'clsx';
import { PageProfileProps } from './types';

import styles from './PageProfile.module.css';
import ProfileName from '../../Containers/ProfileName';
import QuitPlanSettings from '../../Containers/QuitPlanSettings';
import QuitPlanSettingsButton from '../../Containers/QuitPlanSettingsButton';
import ClearDataButton from '../../Containers/ClearDataButton';
import BackupSection from '../../Containers/BackupSection';
import p_json from '../../../package.json';
import ButtonReload from '../../Components/ButtonReload';

function PageProfile({ className, style }: PageProfileProps) {
	return (
		<div className={clsx(styles.root, 'page', className)} style={style}>
			<ProfileName />
			<div className={styles.settings}>
				<QuitPlanSettingsButton />
				<BackupSection />
				<ClearDataButton />
			</div>

			<QuitPlanSettings />
			<ButtonReload className={styles.button_reload} />
			<div className={styles.version}>{`v.${p_json.version}`}</div>
		</div>
	);
}

export default PageProfile;
