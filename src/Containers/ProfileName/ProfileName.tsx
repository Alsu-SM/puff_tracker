import clsx from 'clsx';
import { ProfileNameProps } from './types';

import styles from './ProfileName.module.css';
import useProfileName from './useProfileName';
import AvatarPicker from '../../Components/AvatarPicker';
import NameInput from '../../Components/NameInput';

function ProfileName({ className, style }: ProfileNameProps) {
	const {
		userName,
		userAvatar,
		isPickerShown,
		handleAvatarClick,
		handlePickerClose,
		handlePickerConfirm,
		handleNameChange,
	} = useProfileName();

	return (
		<div className={clsx(styles.root, className)} style={style}>
			<button className={styles.avatar_wrapper} onClick={handleAvatarClick}>
				{!!userAvatar ? (
					<img src={userAvatar} className={styles.avatar} />
				) : (
					<div className={styles.avatar_placeholder}>?</div>
				)}
			</button>
			<NameInput
				value={userName}
				placeholder="edit name"
				noDataMessage="click to edit name"
				onConfirm={handleNameChange}
			/>
			<AvatarPicker
				src={userAvatar}
				isShown={isPickerShown}
				title="Choose your avatar"
				onCancel={handlePickerClose}
				onConfirm={handlePickerConfirm}
			/>
		</div>
	);
}

export default ProfileName;
