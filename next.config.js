module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      loader: 'url-loader',
      options: {
        outputPath: 'public'
      }
    })
    return config
  }
}
