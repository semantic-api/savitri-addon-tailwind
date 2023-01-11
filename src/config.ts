export default (appDir: string) => ({
  loader: 'postcss-loader',
  options: {
    postcssOptions: {
      plugins: {
        tailwindcss: {
          config: {
            prefix: 'tw-',
            darkMode: 'class',
            content: [
              `${appDir}/../**/*.vue`
            ]
          }
        },
        autoprefixer: {}
      }
    }
  }
})
