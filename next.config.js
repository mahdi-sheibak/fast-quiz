/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
		typedRoutes: true,
		serverActions: true,
	},
	// compiler: {
	// 	removeConsole: true,
	// },
}

module.exports = nextConfig
