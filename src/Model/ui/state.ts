import { createStore } from 'effector';
import { UIModel } from './types';
import { UI_MODEL_DEFAULT } from './constants';
import {
	resetUIModelEvent,
	restoreUIModelEvent,
	restoreUIModelEventHandler,
	setIsAddEntryModalShownEvent,
	setIsAddEntryModalShownEventHandler,
	setIsAddManualEntryModalShownEvent,
	setIsAddManualEntryModalShownEventHandler,
	setIsEditEntryModalShownEvent,
	setIsEditEntryModalShownEventHandler,
	setIsQuitPlanSettingsModalShownEvent,
	setIsQuitPlanSettingsModalShownEventHandler,
	setLastBackupDateEvent,
	setLastBackupDateEventHandler,
	setUIModelEvent,
	setUIModelEventHandler,
	setUserAvatarEvent,
	setUserAvatarEventHandler,
	setUserNameEvent,
	setUserNameEventHandler,
} from './events';

export const $uiModel = createStore<UIModel>(UI_MODEL_DEFAULT)
	.on(restoreUIModelEvent, restoreUIModelEventHandler)
	.on(setUIModelEvent, setUIModelEventHandler)
	.on(setIsAddEntryModalShownEvent, setIsAddEntryModalShownEventHandler)
	.on(setIsEditEntryModalShownEvent, setIsEditEntryModalShownEventHandler)
	.on(
		setIsAddManualEntryModalShownEvent,
		setIsAddManualEntryModalShownEventHandler,
	)
	.on(
		setIsQuitPlanSettingsModalShownEvent,
		setIsQuitPlanSettingsModalShownEventHandler,
	)
	.on(setUserAvatarEvent, setUserAvatarEventHandler)
	.on(setUserNameEvent, setUserNameEventHandler)
	.on(setLastBackupDateEvent, setLastBackupDateEventHandler)
	.reset(resetUIModelEvent);
