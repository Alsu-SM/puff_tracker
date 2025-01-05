import { useUnit } from 'effector-react';
import { $uiModel } from '../../Model/ui';
import { format } from 'date-fns';

function useBackupSection() {
	const { lastBackupDate } = useUnit($uiModel);

	const lastDateFormatted = !!lastBackupDate
		? format(lastBackupDate, 'dd.MM.yyyy HH:mm:ss')
		: '-';

	return { lastDateFormatted };
}

export default useBackupSection;
