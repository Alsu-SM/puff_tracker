import { restorePuffsModelEvent } from '../Model/puffs';
import { restoreUIModelEvent } from '../Model/ui';

export default function loader() {
	restorePuffsModelEvent();
	restoreUIModelEvent();

	return null;
}
