/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
		serverActions: true,
		// typedRoutes: true,
	},
	// compiler: {
	// 	removeConsole: true,
	// },
}

module.exports = nextConfig
