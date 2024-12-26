import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mcret from 'vite-plugin-mkcert';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.pwa';

export default defineConfig({
	server: {
		https: {},
	},
	plugins: [VitePWA(manifest), react(), mcret()],
	css: {
		modules: {
			generateScopedName: '[folder]_[local]__[hash:base64:5]',
		},
	},
});
