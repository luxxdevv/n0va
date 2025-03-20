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
  
  // Completely disable static generation for the entire app
  // This is a drastic measure but will fix the issue
  output: 'server',
  
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
    // Disable static generation
    disableStaticGeneration: true,
  },
  
  // These are no longer needed with output: 'server'
  // but keeping them for reference
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

