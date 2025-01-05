import clsx from 'clsx';
import { BlockSliderProps } from './types';

import styles from './BlockSlider.module.css';
import useBlockSlider from './useBlockSlider';

function BlockSlider({
	renderContentLeft = () => <></>,
	renderContentRight = () => <></>,
	onSwipeLeft = () => {},
	onSwipeRight = () => {},
	className,
	style,
}: BlockSliderProps) {
	const { ref, angle, handleTouchMove, handleTouchStart, handleTouchEnd } =
		useBlockSlider({ onSwipeLeft, onSwipeRight });

	const blockSliderStyle = {
		...style,
		'--angle': `${angle}deg`,
	};

	return (
		<div
			className={clsx(styles.root, className)}
			style={blockSliderStyle}
			onTouchMove={handleTouchMove}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			ref={ref}
		>
			<div className={clsx(styles.content, styles.content_left)}>
				{renderContentLeft()}
			</div>
			<div className={clsx(styles.content, styles.content_right)}>
				{renderContentRight()}
			</div>
		</div>
	);
}

export default BlockSlider;
