/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['images.unsplash.com', 'plus.unsplash.com'],
    },
    output: 'export'
  };
  
  const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES'

  module.exports = {
    basePath: isGithubPages ? '/unsplash-website' : '',
    assetPrefix: isGithubPages? '/unsplash-website': '',
    trailingSlash: true
  }
export default nextConfig
