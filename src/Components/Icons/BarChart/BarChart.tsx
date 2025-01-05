import { IconProps } from '../types';

function BarChart({ className, style }: IconProps) {
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
				d="M42 57V21C42 17.6863 39.3137 15 36 15H33C29.6863 15 27 17.6863 27 21V57M27 39H18C14.6863 39 12 41.6863 12 45V51C12 54.3137 14.6863 57 18 57H51C54.3137 57 57 54.3137 57 51V36C57 32.6863 54.3137 30 51 30H42"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default BarChart;
