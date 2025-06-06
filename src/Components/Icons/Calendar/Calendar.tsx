import { IconProps } from '../types';

function Calendar({ className, style }: IconProps) {
	return (
		<svg
			width="72"
			height="72"
			viewBox="0 0 72 72"
			fill="none"
			className={className}
			style={style}
		>
			<path
				id="Icon"
				d="M60 27H12M21 9V15M51 9V15M48 46.5C48 48.9853 45.9853 51 43.5 51C41.0147 51 39 48.9853 39 46.5C39 44.0147 41.0147 42 43.5 42C45.9853 42 48 44.0147 48 46.5ZM18 63H54C57.3137 63 60 60.3137 60 57V21C60 17.6863 57.3137 15 54 15H18C14.6863 15 12 17.6863 12 21V57C12 60.3137 14.6863 63 18 63Z"
				stroke="black"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Calendar;
