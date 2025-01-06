import { useEffect, useState } from 'react';

import { MobileSelectOption } from './types';
import { getValue } from './utils';

function useMobileSelect(
	options: MobileSelectOption[],
	selectedId: string,
	onSelect: (id: string, name?: string) => void,
	onSelectOpen: () => void,
	toggleMobileSelect?: (flag: boolean) => void,
	isMobileSelectShown?: boolean,
	onSearch?: (value: string) => void,
) {
	const [searchValue, setSearchValue] = useState('');
	const [selectedOptionId, setSelectedOptionId] = useState<string>(selectedId);
	const [areOptionsShown, setAreOptionsShown] = useState<boolean>(false);

	const filteredOptions = searchValue
		? options.filter((item) => {
				return item.name.includes(searchValue);
			})
		: options;

	const value = getValue(options, selectedId);

	const handleClick = () => {
		// если внешний хендлер передан, то триггерим его, иначе - меняем внутренний стейт
		if (toggleMobileSelect) {
			toggleMobileSelect(true);
		} else {
			setAreOptionsShown(true);
		}
		onSelectOpen();
	};

	const handleSelect = (id: string) => {
		setSelectedOptionId(id);
	};

	const handleConfirm = () => {
		const name = getValue(options, selectedOptionId)?.name;

		onSelect(selectedOptionId, name);
		if (toggleMobileSelect) {
			toggleMobileSelect(false);
		} else {
			setAreOptionsShown(false);
		}
	};

	const handleCancel = () => {
		if (toggleMobileSelect) {
			toggleMobileSelect(false);
		} else {
			setAreOptionsShown(false);
		}

		/* если нажали стрелку "назад", то в стейт возвращаем выбранное изначально значение */
		setSelectedOptionId(selectedId);
	};

	const handleSearchValueChange = (value: string) => {
		setSearchValue(value);

		if (onSearch) {
			onSearch(value);
		}
	};

	/* если isMobileSelectShown передан, то использовать его значение, 
		в противном случае - устанавливать значение стейта */
	const isMobileSelectOpen: boolean =
		isMobileSelectShown !== undefined ? isMobileSelectShown : areOptionsShown;

	useEffect(() => {
		setSelectedOptionId(selectedId);
	}, [selectedId]);

	return {
		selectedOptionId,
		areOptionsShown: isMobileSelectOpen,
		value,
		handleClick,
		handleSelect,
		handleConfirm,
		handleCancel,
		searchValue,
		handleSearchValueChange,
		filteredOptions,
	};
}

export default useMobileSelect;
