import { useUnit } from 'effector-react';
import { $puffsModel } from '../../Model/puffs';
import { $uiModel, setLastBackupDateEvent } from '../../Model/ui';
import { createBackup } from '../../Utils/createBackup';

function useCreateBackup() {
	const puffsModel = useUnit($puffsModel);
	const uiModel = useUnit($uiModel);

	const handleCreateBackup = () => {
		const date = new Date();
		createBackup({
			puffsModel,
			uiModel: { ...uiModel, lastBackupDate: date },
			date,
		});
		setLastBackupDateEvent(date);
	};

	return { handleCreateBackup };
}

export default useCreateBackup;
