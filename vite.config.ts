import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
	server: {
		host: true, 
		port: 5174,
		allowedHosts: ['larrystokes.com']
	},
	plugins: [
		tailwindcss(),
		sveltekit(),
		// Case-insensitive include so uppercase-extension photos (e.g. *.JPG) are
		// also optimized; imagetools' default matcher is lowercase-only.
		imagetools({ include: /^[^?]+\.(avif|gif|heif|jpe?g|png|tiff|webp)(\?.*)?$/i })
	],
	test: {
		projects: [
			{
				extends: './vite.config.ts',
				test: {
					name: 'client',
					environment: 'browser',
					browser: {
						enabled: true,
						provider: 'playwright',
						instances: [{ browser: 'chromium' }]
					},
					include: ['src/**/*.svelte.{test,spec}.{js,ts}'],
					exclude: ['src/lib/server/**'],
					setupFiles: ['./vitest-setup-client.ts']
				}
			},
			{
				extends: './vite.config.ts',
				test: {
					name: 'server',
					environment: 'node',
					include: ['src/**/*.{test,spec}.{js,ts}'],
					exclude: ['src/**/*.svelte.{test,spec}.{js,ts}']
				}
			}
		]
	}
});
