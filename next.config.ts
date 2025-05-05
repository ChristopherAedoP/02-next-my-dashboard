/** @format */

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	//para imagenes remotas
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
			{
				protocol: 'https',
				hostname: 'raw.githubusercontent.com',
			},
			// new URL('https://images.unsplash.com/*'),
		],
	},
};

export default nextConfig;
