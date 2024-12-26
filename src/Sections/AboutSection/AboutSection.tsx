import clsx from 'clsx';
import { AboutSectionProps } from './types';

import styles from './AboutSection.module.css';

function AboutSection({ className, style }: AboutSectionProps) {
	return (
		<div className={clsx(styles.root, className)} style={style} id="about">
			AboutSection
		</div>
	);
}

export default AboutSection;
