import { IconProps } from '../types';

function MoreVertical({ className, style }: IconProps) {
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
				d="M36 21C37.65 21 39 19.65 39 18C39 16.35 37.65 15 36 15C34.35 15 33 16.35 33 18C33 19.65 34.35 21 36 21Z"
				stroke="black"
				stroke-width="2"
			/>
			<path
				d="M36 39C37.65 39 39 37.65 39 36C39 34.35 37.65 33 36 33C34.35 33 33 34.35 33 36C33 37.65 34.35 39 36 39Z"
				stroke="black"
				stroke-width="2"
			/>
			<path
				d="M36 57C37.65 57 39 55.65 39 54C39 52.35 37.65 51 36 51C34.35 51 33 52.35 33 54C33 55.65 34.35 57 36 57Z"
				stroke="black"
				stroke-width="2"
			/>
		</svg>
	);
}

export default MoreVertical;
