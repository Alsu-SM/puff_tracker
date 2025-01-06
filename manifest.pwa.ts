import { VitePWAOptions } from 'vite-plugin-pwa';

const manifest: Partial<VitePWAOptions> = {
	registerType: 'autoUpdate',
	injectRegister: 'auto',
	includeAssets: ['favicon.ico'],
	devOptions: {
		enabled: true,
	},
	manifest: {
		name: 'puff_tracker',
		short_name: 'puff_tracker',
		start_url: 'https://alsu-sm.github.io/puff_tracker/home',
		scope: 'https://alsu-sm.github.io/puff_tracker/',
		description: 'cute quit slowly assistance app',
		theme_color: '#1d1d1d',
		background_color: '#1d1d1d',
		icons: [
			{
				src: './icons/144_144.png',
				type: 'image/png',
				sizes: '144x144',
			},
			{
				src: './icons/192_192_maskable.png',
				type: 'image/png',
				sizes: '192x192',
				purpose: 'maskable',
			},
			{
				src: './icons/384_384_maskable.png',
				type: 'image/png',
				sizes: '384x384',
				purpose: 'maskable',
			},
			{
				src: './icons/512_512_maskable.png',
				type: 'image/png',
				sizes: '512x512',
				purpose: 'maskable',
			},
			{
				src: './icons/1024_1024_maskable.png',
				type: 'image/png',
				sizes: '1024x1024',
				purpose: 'maskable',
			},
		],
	},
};

export default manifest;
