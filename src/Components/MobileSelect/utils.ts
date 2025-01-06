import { MobileSelectOption } from './types';

export function getValue(
	options: MobileSelectOption[],
	selectedId: string,
): MobileSelectOption | undefined {
	return options.find(({ id }) => id === selectedId);
}
