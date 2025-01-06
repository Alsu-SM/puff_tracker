import clsx from 'clsx';

import { renderOptionsSheet, renderValue } from './renders';
import { MobileSelectProps } from './types';
import useMobileSelect from './useMobileSelect';

import styles from './MobileSelect.module.css';

function MobileSelect({
	selectedId = '',
	options,
	onSelect,
	selectedName,
	noDataMessage,
	label,
	disabled,
	placeholder,
	isLoading,
	onSelectOpen = () => {},
	className,
	style,
	outlined,
	toggleMobileSelect,
	isMobileSelectShown,
	searchData,
}: MobileSelectProps) {
	const {
		selectedOptionId,
		areOptionsShown,
		value,
		searchValue,
		filteredOptions,
		handleSearchValueChange,
		handleClick,
		handleSelect,
		handleConfirm,
		handleCancel,
	} = useMobileSelect(
		options,
		selectedId,
		onSelect,
		onSelectOpen,
		toggleMobileSelect,
		isMobileSelectShown,
		searchData?.onSearch,
	);

	return (
		<div className={clsx(styles.root, className)} style={style}>
			{renderValue(
				handleClick,
				value,
				selectedName,
				placeholder,
				disabled,
				outlined,
			)}
			{renderOptionsSheet({
				areOptionsShown,
				options: filteredOptions,
				onSelect: handleSelect,
				onConfirm: handleConfirm,
				onCancel: handleCancel,
				selectedId: selectedOptionId,
				title: label,
				noDataMessage,
				isLoading,
				searchProps: {
					searchValue,
					onSearch: handleSearchValueChange,
					isSearchActive: searchData?.isSearchActive,
				},
			})}
		</div>
	);
}

export default MobileSelect;
