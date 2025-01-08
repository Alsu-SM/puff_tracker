export type FormatTimeResponse = {
	seconds: string;
	minutes: string;
	hours: string;
	days: string;
	isDaysSeparatorShown: boolean;
	isHoursSeparatorShown: boolean;
	isMinutesSeparatorShown: boolean;
	hasDays: boolean;
	hasHours: boolean;
	hasMinutes: boolean;
	hasSeconds: boolean;
};

export function addLeadingZero(value: number): string {
	return value > 9 ? `${value}` : `0${value}`;
}

export function formatTime(
	delta: number,
	shouldAddLeadingZero: boolean = true,
): FormatTimeResponse {
	const daysRaw = delta / (1000 * 60 * 60 * 24);
	const daysRounded = Math.floor(daysRaw);
	const days = daysRounded
		? shouldAddLeadingZero
			? addLeadingZero(daysRounded)
			: String(daysRounded)
		: '';

	const hoursRaw = (daysRaw - daysRounded) * 24;
	const hoursRounded = Math.floor(hoursRaw);
	const hours = hoursRounded
		? shouldAddLeadingZero
			? addLeadingZero(hoursRounded)
			: String(hoursRounded)
		: '';

	const minutesRaw = (hoursRaw - hoursRounded) * 60;
	const minutesRounded = Math.floor(minutesRaw);
	const minutes = shouldAddLeadingZero
		? addLeadingZero(minutesRounded)
		: String(minutesRounded);

	const secondsRaw = (minutesRaw - minutesRounded) * 60;
	const secondsRounded = Math.floor(secondsRaw);
	const seconds = shouldAddLeadingZero
		? addLeadingZero(secondsRounded)
		: String(secondsRounded);

	const isDaysSeparatorShown = !!days && (!!hours || !!minutes || !!seconds);
	const isHoursSeparatorShown = !!hours && (!!minutes || !!seconds);
	const isMinutesSeparatorShown = !!minutes;

	const hasDays = !!daysRounded;
	const hasHours = !!hoursRounded;
	const hasMinutes = !!minutesRounded;
	const hasSeconds = !!secondsRounded;

	return {
		days,
		hours,
		minutes,
		seconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
		hasDays,
		hasHours,
		hasMinutes,
		hasSeconds,
	};
}

export function formatTimeToString(
	delta: number,
	shouldAddLeadingZero: boolean = true,
	shouldUseShortFormat: boolean = false,
): string {
	const {
		days,
		hours,
		minutes,
		seconds,
		hasDays,
		hasHours,
		hasMinutes,
		hasSeconds,
	} = formatTime(delta, shouldAddLeadingZero);

	const isDaysPlural = Number(days) > 1;
	const isHoursPlural = Number(hours) > 1;
	const isMinutesPlural = Number(minutes) > 1;
	const isSecondsPlural = Number(seconds) > 1;

	const daysLabel = shouldUseShortFormat ? ':' : isDaysPlural ? 'days' : 'day';
	const hoursLabel = shouldUseShortFormat
		? ':'
		: isHoursPlural
			? 'hours'
			: 'hour';
	const minutesLabel = shouldUseShortFormat
		? ':'
		: isMinutesPlural
			? 'minutes'
			: 'minute';
	const secondsLabel = shouldUseShortFormat
		? ':'
		: isSecondsPlural
			? 'seconds'
			: 'second';

	return `${hasDays ? `${days} ${daysLabel} ` : ''}${
		hasHours ? `${hours} ${hoursLabel} ` : ''
	}${hasMinutes ? `${minutes} ${minutesLabel} ` : ''}${
		hasSeconds ? `${seconds} ${secondsLabel} ` : ''
	}`;
}

export function formatTimeToStringShort(
	delta: number,
	shouldAddLeadingZero: boolean = true,
): string {
	const {
		days,
		hours,
		minutes,
		seconds,
		hasDays,
		hasHours,
		hasMinutes,
		hasSeconds,
		isDaysSeparatorShown,
		isHoursSeparatorShown,
		isMinutesSeparatorShown,
	} = formatTime(delta, shouldAddLeadingZero);

	const daysLabel = isDaysSeparatorShown ? ':' : '';
	const hoursLabel = isHoursSeparatorShown ? ':' : '';
	const minutesLabel = isMinutesSeparatorShown ? ':' : '';

	return `${hasDays ? `${days} ${daysLabel} ` : ''}${
		hasHours ? `${hours} ${hoursLabel} ` : ''
	}${hasMinutes ? `${minutes} ${minutesLabel} ` : ''}${
		hasSeconds ? `${seconds}` : '00'
	}`;
}
