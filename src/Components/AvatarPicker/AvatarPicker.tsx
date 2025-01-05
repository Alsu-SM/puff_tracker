import clsx from 'clsx';
import { AvatarPickerProps } from './types';

import styles from './AvatarPicker.module.css';
import Button from '../Button';
import useAvatarPicker from './useAvatarPicker';
import { Delete } from '../Icons';
import BottomSheet from '../BottomSheet';

function AvatarPicker({
	isShown,
	title,
	src,
	onCancel,
	onConfirm,
	className,
	style,
}: AvatarPickerProps) {
	const { currentSrc, inputRef, handleConfirm, handleChange, handleDelete } =
		useAvatarPicker({
			src,
			onConfirm,
		});

	return (
		<BottomSheet
			isShown={isShown}
			onClose={onCancel}
			className={clsx(styles.root, className)}
			style={style}
		>
			<div className={styles.content}>
				<div className={styles.title}>{title}</div>
				<div className={styles.image_wrapper}>
					{!!currentSrc ? (
						<img src={currentSrc} className={styles.image} />
					) : (
						<div className={styles.image_placeholder}>?</div>
					)}
					<input
						type="file"
						className={styles.input}
						accept=".jpg, .jpeg, .png, .gif"
						ref={inputRef}
						onChange={handleChange}
					/>
				</div>
				<button className={styles.delete_button} onClick={handleDelete}>
					<Delete className={styles.delete_button_icon} />
				</button>
				<div className={styles.buttons_row}>
					<Button className={styles.button} onClick={onCancel}>
						Cancel
					</Button>
					<Button className={styles.button} primary onClick={handleConfirm}>
						Confirm
					</Button>
				</div>
			</div>
		</BottomSheet>
		// <Modal className={clsx(styles.root, className)} style={style}>
		// 	<div className={styles.content}>
		// 		<div className={styles.title}>{title}</div>
		// 		<div className={styles.image_wrapper}>
		// 			{!!currentSrc ? (
		// 				<img src={currentSrc} className={styles.image} />
		// 			) : (
		// 				<div className={styles.image_placeholder}>?</div>
		// 			)}
		// 			<input
		// 				type="file"
		// 				className={styles.input}
		// 				accept=".jpg, .jpeg, .png, .gif"
		// 				ref={inputRef}
		// 				onChange={handleChange}
		// 			/>
		// 		</div>
		// 		<button className={styles.delete_button} onClick={handleDelete}>
		// 			<Delete className={styles.delete_button_icon} />
		// 		</button>
		// 		<div className={styles.buttons_row}>
		// 			<Button className={styles.button} onClick={onCancel}>
		// 				Cancel
		// 			</Button>
		// 			<Button className={styles.button} primary onClick={handleConfirm}>
		// 				Confirm
		// 			</Button>
		// 		</div>
		// 	</div>
		// </Modal>
	);
}

export default AvatarPicker;
