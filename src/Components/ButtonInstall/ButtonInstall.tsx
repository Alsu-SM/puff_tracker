import clsx from 'clsx';
import { ButtonInstallProps } from './types';

import styles from './ButtonInstall.module.css';
import { Download } from '../Icons';
import useButtonInstall from './useButtonInstall';

function ButtonInstall({ className, style }: ButtonInstallProps) {
	const { isDisabled, handleInstall } = useButtonInstall();

	return (
		<button
			className={clsx(styles.root, className)}
			style={style}
			disabled={isDisabled}
			onClick={handleInstall}
		>
			<Download className={styles.icon} />
		</button>
	);
}

export default ButtonInstall;
