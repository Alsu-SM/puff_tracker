import { IconProps } from '../types';

function ArrowRight({ className, style }: IconProps) {
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
				d="M27 60L51 36L27 12"
				stroke="black"
				stroke-width="6"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default ArrowRight;
