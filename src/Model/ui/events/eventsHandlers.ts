import { UIModel } from '../types';
import { restoreUIModel, storeUIModel } from '../utils';

export function restoreUIModelEventHandler(): UIModel {
	const model = restoreUIModel();

	return model;
}

export function setIsAddEntryModalShownEventHandler(
	state: UIModel,
	isAddEntryModalShown: boolean,
): UIModel {
	return { ...state, isAddEntryModalShown };
}

export function setIsAddManualEntryModalShownEventHandler(
	state: UIModel,
	isAddManualEntryModalShown: boolean,
): UIModel {
	return { ...state, isAddManualEntryModalShown };
}

export function setIsEditEntryModalShownEventHandler(
	state: UIModel,
	isEditEntryModalShown: boolean,
): UIModel {
	return { ...state, isEditEntryModalShown };
}

export function setIsQuitPlanSettingsModalShownEventHandler(
	state: UIModel,
	isQuitPlanSettingsModalShown: boolean,
): UIModel {
	return { ...state, isQuitPlanSettingsModalShown };
}

export function setUserAvatarEventHandler(
	state: UIModel,
	userAvatar: string,
): UIModel {
	const newState = { ...state, userAvatar };
	storeUIModel(newState);

	return newState;
}

export function setUserNameEventHandler(
	state: UIModel,
	userName: string,
): UIModel {
	const newState = { ...state, userName };
	storeUIModel(newState);

	return newState;
}

export function setLastBackupDateEventHandler(
	state: UIModel,
	lastBackupDate: Date,
): UIModel {
	const newState = { ...state, lastBackupDate };
	storeUIModel(newState);

	return newState;
}

export function setUIModelEventHandler(_: UIModel, model: UIModel): UIModel {
	storeUIModel(model);

	return model;
}
