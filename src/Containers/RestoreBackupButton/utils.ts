import { PuffsModel } from '../../Model/puffs';
import { UIModel } from '../../Model/ui';
import { BackupData } from '../../Utils/createBackup';

// return a promise that resolves with a File instance
export function urlToText(url: string): string {
	const arr = url.split(',');
	const bstr = atob(arr[arr.length - 1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);

	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}

	let textDecoder = new TextDecoder();
	let result = textDecoder.decode(u8arr);

	return result;
}

export function parseBackup(data: string): Promise<BackupData> {
	return new Promise<BackupData>((resolve, reject) => {
		try {
			const {
				puffsModel: puffsModelValue,
				uiModel: uiModelValue,
				date: dateValue,
			}: BackupData = JSON.parse(data);
			const date = new Date(dateValue);
			const {
				days: daysValue,
				startDate: startDateValue,
				endDate: endDateValue,
				startInterval: startIntervalValue,
				currentInterval: currentIntervalValue,
				increaseIntervalStep: increaseIntervalStepValue,
				goalIntervalCleanDays: goalIntervalCleanDaysValue,
			} = puffsModelValue;
			const startDate = new Date(startDateValue);
			const endDate = new Date(endDateValue);
			const startInterval = Number(startIntervalValue);
			const currentInterval = Number(currentIntervalValue);
			const increaseIntervalStep = Number(increaseIntervalStepValue);
			const goalIntervalCleanDays = Number(goalIntervalCleanDaysValue);

			const days = daysValue.map(
				({ date: currentDateValue, entries: entriesValue }) => {
					const date = new Date(currentDateValue);
					const entries = entriesValue.map(
						({ id, date, puffs, cigarettes, interval, goalInterval }) => ({
							id,
							date: new Date(date),
							puffs: Number(puffs),
							cigarettes: Number(cigarettes),
							interval: Number(interval),
							goalInterval: Number(goalInterval),
						}),
					);

					return { date, entries };
				},
			);

			const puffsModel: PuffsModel = {
				startDate,
				endDate,
				startInterval,
				currentInterval,
				increaseIntervalStep,
				goalIntervalCleanDays,
				days,
				currentDay: null,
				currentEntry: null,
			};

			const { lastBackupDate: lastBackupDateValue, ...rest } = uiModelValue;
			const lastBackupDate = lastBackupDateValue
				? new Date(lastBackupDateValue)
				: undefined;

			const uiModel: UIModel = {
				...rest,
				lastBackupDate,
			};

			const backupData: BackupData = {
				puffsModel,
				uiModel,
				date,
			};

			resolve(backupData);
		} catch (e) {
			console.log(e);
			reject(e);
		}
	});
}
