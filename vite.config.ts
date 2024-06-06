import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), svgr()],
	resolve: {
		alias: {
			assets: '/src/assets',
			core: '/src/core',
			hooks: '/src/hooks',
			Layout: '/src/Layout',
			pages: '/src/pages',
			routes: '/src/routes',
			shared: '/src/shared',
			store: '/src/store',
			styles: '/src/styles'
		}
	}
});
