import clsx from 'clsx';
import { ButtonReloadProps } from './types';

import styles from './ButtonReload.module.css';
import Button from '../Button/Button';
import { Reload } from '../Icons';
import useButtonReload from './useButtonReload';

function ButtonReload({ className }: ButtonReloadProps) {
	const { handleClick } = useButtonReload();

	return (
		<Button
			className={clsx(styles.root, className)}
			primary
			onClick={handleClick}
		>
			<Reload className={styles.icon} />
		</Button>
	);
}

export default ButtonReload;
