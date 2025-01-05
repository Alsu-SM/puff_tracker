import { createEvent } from 'effector';
import { UIModel } from '../types';

export const restoreUIModelEvent = createEvent<void>();
export const setUIModelEvent = createEvent<UIModel>();

export const setIsAddEntryModalShownEvent = createEvent<boolean>();
export const setIsEditEntryModalShownEvent = createEvent<boolean>();
export const setIsAddManualEntryModalShownEvent = createEvent<boolean>();
export const setIsQuitPlanSettingsModalShownEvent = createEvent<boolean>();
export const setUserAvatarEvent = createEvent<string>();
export const setUserNameEvent = createEvent<string>();
export const setLastBackupDateEvent = createEvent<Date>();
export const resetUIModelEvent = createEvent<void>();
