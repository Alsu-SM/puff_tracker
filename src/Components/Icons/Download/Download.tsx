import { IconProps } from '../types';

function Download({ className, style }: IconProps) {
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
				d="M48 33L36 45M36 45L24 33M36 45V9M63 45V51C63 54.3137 60.3137 57 57 57H15C11.6863 57 9 54.3137 9 51V45"
				stroke="black"
				stroke-width="4"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Download;
