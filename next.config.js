/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const hasNginxPrefix = process.env.NGINX_PREFIX === 'true';
const path = require('path');

const getBasePath = () => {
  let basePath = isProd ? '' : '';
  if (hasNginxPrefix) {
    basePath = '/dzg-official-website-front';
  }

  if (isProd && process.env.BASE_PATH) {
    if (process.env.BASE_PATH.startsWith('/')) {
      basePath = process.env.BASE_PATH;
    } else {
      basePath = `/${process.env.BASE_PATH}`;
    }
  }

  return basePath;
};

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'eshipping.oss-cn-shanghai.aliyuncs.com',
        port: '',
      },
      // TODO: Develop domain
      {
        protocol: 'https',
        hostname: 'img.js.design',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'hd-gm1-public.oss-cn-hangzhou.aliyuncs.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'qa600jit-public.oss-cn-hangzhou.aliyuncs.com',
        port: '',
      }
    ],
    path: `${getBasePath()}/_next/image`,
  },
  assetPrefix: getBasePath(),
  basePath: getBasePath(),
  publicRuntimeConfig: {
    basePath: getBasePath(),
    consolePath: '/dzg-official-website-front',
  },
  webpack(config) {
    config.output.publicPath = getBasePath() + config.output.publicPath;
    return config;
  },
  i18n: {
    locales: ['cn', 'en'],
    defaultLocale: 'cn',
    localeDetection: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/solutions',
        destination: '/solutions/allinone',
        permanent: true,
      },
      {
        source: '/cases',
        destination: '/cases/supply',
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: '/dzg-mdm/:path*',
        destination: 'http://gm1-scysa.100jit.com/dzg-mdm/:path*',
      }
    ]
  }
};
