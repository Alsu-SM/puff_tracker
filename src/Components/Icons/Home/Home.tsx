import { IconProps } from '../types';

function Home({ className, style }: IconProps) {
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
				d="M56.9993 23.7188V53.9997C56.9993 57.3134 54.313 59.9997 50.9993 59.9997H20.9993C17.6856 59.9997 14.9993 57.3134 14.9993 53.9997V23.7188M5.99927 30L32.5585 11.4085C34.6244 9.9624 37.3741 9.9624 39.44 11.4085L65.9993 30"
				stroke="black"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export default Home;
