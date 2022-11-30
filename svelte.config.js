// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';
const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs",
			// fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : '/combocoupons',
		},
		// prerender: { entries: [] }
	}
};

export default config;
