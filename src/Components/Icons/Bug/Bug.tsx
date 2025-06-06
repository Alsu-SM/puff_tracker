import { IconProps } from '../types';

function Bug({ className, style }: IconProps) {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			className={className}
			style={style}
		>
			<path
				d="M9.5 5.5L8 3M11 10H13M5 8H7.41797M19 8H16.582M5 16H7.41797M19 16H16.582M11 14H13M5 12H7M19 12H17M14.5 5.5L16 3M12 19C9.23858 19 7 16.7614 7 14V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V14C17 16.7614 14.7614 19 12 19Z"
				stroke="black"
				stroke-width="1.5"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Bug;
