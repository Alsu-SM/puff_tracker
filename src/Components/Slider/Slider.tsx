import clsx from 'clsx';
import { SliderProps } from './types';

import styles from './Slider.module.css';

function Slider({ className, style, ...props }: SliderProps) {
	return (
		<div className={clsx(styles.root, className)} style={style}>
			<input type="range" className={styles.input} {...props} />
			<div className={styles.value}>{props.value || 0}</div>
		</div>
	);
}

export default Slider;
