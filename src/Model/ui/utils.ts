import { UI_MODEL_DEFAULT, UI_MODEL_STORAGE_KEY } from './constants';
import { UIModel } from './types';

export function storeUIModel(model: UIModel) {
	localStorage.setItem(UI_MODEL_STORAGE_KEY, JSON.stringify(model));
}

export function restoreUIModel(): UIModel {
	const data = localStorage.getItem(UI_MODEL_STORAGE_KEY);

	if (!data) {
		return UI_MODEL_DEFAULT;
	}

	const { lastBackupDate: lastBackupDateValue, ...rest } = JSON.parse(data);
	const lastBackupDate = lastBackupDateValue
		? new Date(lastBackupDateValue)
		: undefined;

	return { ...rest, lastBackupDate };
}
