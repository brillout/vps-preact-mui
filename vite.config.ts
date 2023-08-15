import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import ssr from 'vite-plugin-ssr/plugin';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preact(), ssr({ prerender: true })],
	resolve: {
		alias: {
			"react-dom/test-utils": "preact/test-utils",
			"react-dom": "preact/compat",     // Must be below test-utils
			"react/jsx-runtime": "preact/jsx-runtime",
			react: "preact/compat",
		},
	},
	ssr: {
		noExternal: ["@mui/*", "@emotion/*", "react-transition-group"]
	}
});
