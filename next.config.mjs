let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
  
  // Add these configurations to prevent static generation for auth pages
  async rewrites() {
    return [
      {
        source: '/forgot-password',
        destination: '/forgot-password',
        has: [
          {
            type: 'header',
            key: 'x-make-dynamic',
          },
        ],
      },
    ]
  },
  
  // Add this to exclude specific pages from static generation
  unstable_excludeFiles: [
    '**/app/forgot-password/**',
    '**/app/login/**',
    '**/app/register/**',
    '**/app/reset-password/**',
  ],
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig

