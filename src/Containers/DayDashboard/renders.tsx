import styles from './DayDashboard.module.css';

export function renderContentLeft(count: number) {
	return (
		<div className={styles.counter}>
			<div className={styles.value}>{count}</div>
			<div className={styles.label}>Current</div>
		</div>
	);
}

export function renderContentRight(time: string, date: string) {
	return (
		<div className={styles.last}>
			<div className={styles.time}>{time || '—'}</div>
			{date && <div className={styles.date}>{date}</div>}
			<div className={styles.label}>Last</div>
		</div>
	);
}
