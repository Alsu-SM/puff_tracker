import { ReactNode } from 'react';

import clsx from 'clsx';

import {
	MobileSelectOption,
	RenderOptionsParams,
	RenderOptionsSheetParams,
} from './types';

import styles from './MobileSelect.module.css';
import { ArrowRight, Check } from '../Icons';
import Button from '../Button';

export function renderValue(
	onClick: () => void,
	selectedOption?: MobileSelectOption,
	selectedName?: string,
	placeholder?: string,
	disabled?: boolean,
	outlined?: boolean,
): ReactNode {
	const isValueMissing = !selectedOption && !selectedName;
	let value: ReactNode = isValueMissing
		? placeholder
		: selectedOption?.name || selectedName || '';
	const classNames = clsx(styles.value, {
		[styles.value__placeholder]: isValueMissing,
	});

	return (
		<button
			className={clsx(styles.value_button, {
				[styles.value_button__outlined]: outlined,
			})}
			onClick={onClick}
			disabled={disabled}
		>
			<div className={classNames}>{value}</div>
			<ArrowRight className={styles.value_icon} />
		</button>
	);
}

export function renderOptionsHeader(
	areOptionsShown: boolean,
	title?: string,
): ReactNode {
	if (!areOptionsShown) {
		return null;
	}

	return (
		<div className={styles.header}>
			<div className={styles.title}>{title}</div>
		</div>
	);
}

function renderHighlightedOptionName(name: string, searchValue?: string) {
	if (!searchValue) {
		return name;
	}

	const nameParts = name.split(searchValue);

	return (
		<>
			{name.split(searchValue).map((namePart, index) => (
				<>
					{namePart}
					{index + 1 < nameParts.length && (
						<span className={styles.highlighted_name}>{searchValue}</span>
					)}
				</>
			))}
		</>
	);
}

export function renderOptionItem(
	option: MobileSelectOption,
	onSelect: (id: string) => void,
	selectedId?: string,
	searchValue?: string,
): ReactNode {
	const { id, name, renderOption } = option;
	const isSelected = id === selectedId;

	const handleClick = () => {
		onSelect(id);
	};

	return (
		<div className={styles.option_wrapper} key={id}>
			<button className={styles.option_button} onClick={handleClick}>
				<div className={styles.option_value}>
					{renderOption
						? renderOption(name)
						: renderHighlightedOptionName(name, searchValue)}
				</div>
				{isSelected && <Check className={styles.icon_check} />}
			</button>
		</div>
	);
}

export function renderOptions({
	options,
	onSelect,
	selectedId,
	noDataMessage,
}: RenderOptionsParams): ReactNode {
	const optionsList = options.map((option) =>
		renderOptionItem(option, onSelect, selectedId),
	);

	if (optionsList.length === 0) {
		return (
			<div className={styles.options}>
				<div className={styles.no_data_message_wrapper}>{noDataMessage}</div>
			</div>
		);
	}

	return (
		<div className={styles.options}>
			{optionsList}
			{optionsList.length === 0 && (
				<div className={styles.no_data_message_wrapper}>{noDataMessage}</div>
			)}
		</div>
	);
}

export function renderButtons(
	onConfirm: () => void,
	onCancel: () => void,
): ReactNode {
	return (
		<div className={styles.button_wrapper}>
			<Button className={styles.confirm_button} onClick={onCancel}>
				Cancel
			</Button>
			<Button className={styles.confirm_button} onClick={onConfirm} primary>
				Confirm
			</Button>
		</div>
	);
}
export function renderOptionsSheet({
	areOptionsShown,
	options,
	onSelect,
	onConfirm,
	onCancel,
	selectedId,
	title,
	noDataMessage,
}: RenderOptionsSheetParams): ReactNode {
	if (!areOptionsShown) {
		return null;
	}

	return (
		<div className={styles.options_sheet}>
			{renderOptionsHeader(areOptionsShown, title)}
			{renderOptions({
				options,
				onSelect,
				selectedId,
				noDataMessage,
			})}
			{renderButtons(onConfirm, onCancel)}
		</div>
	);
}
