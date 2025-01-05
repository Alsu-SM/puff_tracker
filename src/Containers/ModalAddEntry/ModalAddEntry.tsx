import clsx from 'clsx';
import { ModalAddEntryProps } from './types';

import styles from './ModalAddEntry.module.css';
import useModalAddEntry from './useModalAddEntry';
import Sheet from '../../Components/Sheet';
import Stopwatch from '../../Components/Stopwatch';
import InputCounter from '../../Components/InputCounter';
import Button from '../../Components/Button';

function ModalAddEntry({ className }: ModalAddEntryProps) {
	const {
		isAddEntryModalShown,
		startDate,
		cigarettes,
		puffs,
		isConfirmDisabled,
		handleCigarettesChange,
		handlePuffsChange,
		handleCancel,
		handleConfirm,
	} = useModalAddEntry();

	return (
		<Sheet
			isShown={isAddEntryModalShown}
			className={clsx(styles.root, className)}
		>
			<div className={styles.content}>
				<div className={styles.title}>Smoke break</div>
				<Stopwatch startDate={startDate} className={styles.stopwatch} />
				<div className={styles.counter_rows}>
					<div className={styles.counter_row}>
						<div className={styles.counter_row_title}>Cigarettes smoked:</div>
						<InputCounter
							value={cigarettes}
							onChange={handleCigarettesChange}
						/>
					</div>
					<div className={styles.counter_row}>
						<div className={styles.counter_row_title}>Puffs puffed:</div>
						<InputCounter value={puffs} onChange={handlePuffsChange} />
					</div>
				</div>
				<div className={styles.image_wrapper} />
				<div className={styles.buttons_row}>
					<Button className={styles.button} onClick={handleCancel}>
						Nah
					</Button>
					<Button
						className={styles.button}
						primary
						disabled={isConfirmDisabled}
						onClick={handleConfirm}
					>
						Done
					</Button>
				</div>
			</div>
		</Sheet>
	);
}

export default ModalAddEntry;
