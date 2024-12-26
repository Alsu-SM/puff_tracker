import clsx from 'clsx';
import { LanguageButtonProps } from './types';

import styles from './LanguageButton.module.css';

function LanguageButton({ className, style }: LanguageButtonProps) {
	return (
		<div
			className={clsx(styles.root, className)}
			style={style}
			id="lang_button"
		>
			EN
		</div>
	);
}

export default LanguageButton;
