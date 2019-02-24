const pkg = require('./package')

module.exports = {
  mode: 'universal',

  server: {
    host: '0.0.0.0'
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    'assets/scss/variables.css',
    'assets/scss/app.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/pwa'
  ],

  /**
   * PWA config
   */
  meta: {
    theme_color: '#000000',
    mobileApp: true,
    mobileAppIOS: true,
    appleStatusBarStyle: 'default',
    name: 'Lars Klopstra',
    short_name: 'Lars Klopstra — Software developer',
    author: 'Lars Klopstra',
    ogType: 'Website',
    ogSiteName: 'Lars Klopstra — Software developer',
    ogTitle: 'Lars Klopstra — Software developer',
    ogDescription: `Hi there, I'm a software developer specialized in fast and good looking progressive web applications.`,
    description: `Hi there, I'm a software developer specialized in fast and good looking progressive web applications.`
  },

  manifest: {
    name: 'Lars Klopstra — Software developer',
    background_color: '#000',
    theme_color: '#000',
    display: 'standalone'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
