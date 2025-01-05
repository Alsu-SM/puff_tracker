import clsx from 'clsx';
import { CreateBackupButtonProps } from './types';

import styles from './CreateBackupButton.module.css';
import useCreateBackup from './useCreateBackup';
import Button from '../../Components/Button';

function CreateBackupButton({ className }: CreateBackupButtonProps) {
	const { handleCreateBackup } = useCreateBackup();

	return (
		<Button
			className={clsx(styles.button, className)}
			onClick={handleCreateBackup}
			primary
		>
			Create backup
		</Button>
	);
}

export default CreateBackupButton;
