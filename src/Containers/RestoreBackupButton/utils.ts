import { parsePuffsModelRestoredData } from '../../Model/puffs/utils';
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

			const puffsModel = parsePuffsModelRestoredData(puffsModelValue);

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
