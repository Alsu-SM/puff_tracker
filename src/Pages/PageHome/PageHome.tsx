import clsx from 'clsx';

import styles from './PageHome.module.css';
import IntroSection from '../../Sections/IntroSection';
import AboutSection from '../../Sections/AboutSection';

function PageHome() {
	return (
		<div className={clsx('page', styles.root)}>
			<IntroSection />
			<AboutSection />
		</div>
	);
}

export default PageHome;
