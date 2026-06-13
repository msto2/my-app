// Build-time image optimization.
//
// The photos used to live in `static/images` and were served raw (6–8 MB each).
// They now live in `src/lib/images` so vite-imagetools can compress and resize
// them at build time into responsive WebP. Pages keep referencing photos by
// their original public path (e.g. "/images/sports/img1.jpg"); getImage() maps
// that path to an optimized srcset + a fallback src.

// Multiple widths as a WebP srcset so the browser can pick the smallest variant
// that fits the rendered size (big win on mobile).
const srcsets = import.meta.glob('./images/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
	query: { format: 'webp', w: '480;800;1200', quality: '72', as: 'srcset' },
	import: 'default',
	eager: true
}) as Record<string, string>;

// A single mid-size WebP used as the `src` fallback (also what older browsers
// without srcset support will load).
const fallbacks = import.meta.glob('./images/**/*.{jpg,JPG,jpeg,JPEG,png,PNG}', {
	query: { format: 'webp', w: '800', quality: '72' },
	import: 'default',
	eager: true
}) as Record<string, string>;

export type OptimizedImage = { srcset: string; src: string };

// Turn a public path like "/images/sports/img1.jpg" (or a Windows-style
// "\images\..." used on the homepage) into the glob key "./images/...".
function toKey(publicPath: string): string {
	const normalized = publicPath.replace(/\\/g, '/').replace(/^\//, '');
	return './' + normalized;
}

export function getImage(publicPath: string): OptimizedImage {
	const key = toKey(publicPath);
	const srcset = srcsets[key];
	const src = fallbacks[key];
	if (!srcset || !src) {
		// Fail loudly during dev/build if a path doesn't resolve to an asset.
		throw new Error(`No optimized image found for "${publicPath}" (looked up "${key}")`);
	}
	return { srcset, src };
}

// Convenience for the carousels, which keep a plain array of public paths.
export function getImages(publicPaths: string[]): OptimizedImage[] {
	return publicPaths.map(getImage);
}
