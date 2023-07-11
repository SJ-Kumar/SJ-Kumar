const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  experimental: {
    turboMode: true,
  },
}
)

module.exports = withNextra()
