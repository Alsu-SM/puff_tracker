const monthMap = new Map<number, string>([
	[1, 'January'],
	[2, 'February'],
	[3, 'March'],
	[4, 'April'],
	[5, 'May'],
	[6, 'June'],
	[7, 'July'],
	[8, 'August'],
	[9, 'September'],
	[10, 'October'],
	[11, 'November'],
	[12, 'December'],
]);

export const dateConfig = {
	month: {
		format: (value: any) => monthMap.get(value.getMonth() + 1),
		caption: 'Month',
		step: 1,
	},
	date: {
		format: 'DD',
		caption: 'Day',
		step: 1,
	},
	year: {
		format: 'YYYY',
		caption: 'Year',
		step: 1,
	},
	hour: {
		format: 'hh',
		caption: 'Hour',
		step: 1,
	},
	minute: {
		format: 'mm',
		caption: 'Min',
		step: 1,
	},
};

export const headerFormat = 'DD.MM.YYYY hh:mm';
export const theme = 'default';
export const confirmText = 'Done';
export const cancelText = 'Now';
