import React, { ReactNode } from 'react';

export interface SearchFieldProps {
	isSearchActive?: boolean;
	searchValue?: string;
	onSearch?: (searchValue: string) => void;
}

export interface MobileSelectProps {
	selectedId?: string;
	options: MobileSelectOption[];
	selectedName?: string;
	label?: string;
	required?: boolean;
	disabled?: boolean;
	placeholder?: string;
	noDataMessage?: ReactNode;
	isLoading?: boolean;
	onSelect: (id: string, name?: string) => void;
	onSelectOpen?: () => void;
	className?: string;
	style?: React.CSSProperties;
	outlined?: boolean;
	toggleMobileSelect?: () => void;
	isMobileSelectShown?: boolean;
	searchData?: SearchFieldProps;
}

export type MobileSelectOption = {
	id: string;
	name: string;
	renderOption?: (value: string) => ReactNode;
};

export type RenderOptionsSheetParams = {
	areOptionsShown: boolean;
	options: MobileSelectOption[];
	onSelect: (id: string) => void;
	onConfirm: () => void;
	onCancel: () => void;
	selectedId?: string;
	title?: string;
	noDataMessage?: ReactNode;
	isLoading?: boolean;
	searchProps?: SearchFieldProps;
};

export type RenderOptionsParams = {
	options: MobileSelectOption[];
	onSelect: (id: string) => void;
	selectedId?: string;
	noDataMessage?: ReactNode;
	searchProps?: SearchFieldProps;
};
