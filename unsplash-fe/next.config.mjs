/** @type {import('next').NextConfig} */
const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES'
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'plus.unsplash.com'],
    },
    output: 'export',
    basePath: isGithubPages ? '/unsplash-website' : '',
    assetPrefix: isGithubPages? '/unsplash-website': '',
    trailingSlash: true
  };

export default nextConfig
