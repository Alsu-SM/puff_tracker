import { format } from 'date-fns';
import { PuffsModel } from '../Model/puffs';
import { UIModel } from '../Model/ui';

export type BackupData = {
	puffsModel: PuffsModel;
	uiModel: UIModel;
	date: Date;
};

export function createBackup(data: BackupData) {
	const element = document.createElement('a');
	const parsedDate = format(data.date, 'yyyy-MM-dHH:mm:ss:SSS');
	const title = `puffs_backup_${parsedDate}`;
	const textFile = new Blob([JSON.stringify(data)], {
		type: 'text/plain',
	});
	element.href = URL.createObjectURL(textFile);
	element.download = `${title}.txt`;
	document.body.appendChild(element);
	element.click();
}
