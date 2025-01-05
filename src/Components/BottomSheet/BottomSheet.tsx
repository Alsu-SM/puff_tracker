import { useRef } from 'react';
import clsx from 'clsx';

import { BottomSheetProps } from './types';

import styles from './BottomSheet.module.css';
import useOnClickTouchOutside from '../../Utils/useOnClickTouchOutside';

function BottomSheet({
	onClose,
	children,
	isShown,
	className,
	style,
}: BottomSheetProps) {
	const sheetClassName = clsx(styles.sheet, styles.root, className, {
		[styles.shown]: isShown,
	});
	const overlayClassName = clsx(styles.overlay, {
		[styles.overlay__shown]: isShown,
	});

	const ref = useRef<HTMLDivElement | null>(null);

	const handleClickOutside = () => {
		setTimeout(() => {
			if (isShown) {
				onClose();
			}
		}, 100);
	};

	useOnClickTouchOutside(ref, ['touchend', 'mousedown'], handleClickOutside);

	return (
		<>
			<div className={overlayClassName} />
			<div className={sheetClassName} style={style} ref={ref}>
				{children}
			</div>
		</>
	);
}

export default BottomSheet;
