module.exports = {
  /*** Headers of the page */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '~/assets/js/polyfill.min.js'}
    ]
  },
  /*** Customize the progress-bar color*/
  loading: { color: '#003366' },


  generate: {
    minify: {
      removeComments: false
    }
  },

  // base URL of the app. change to projects folder path when building for production
  router: {
    base: '/nuxt/dist/'
  },

  plugins: [

  ],

  modules: [
    '@nuxtjs/font-awesome',
    ['@nuxtjs/bootstrap-vue', { css: false }]
  ],

  /*** Build configuration*/
  build: {
     analyze: true,
     publicPath: '/_nuxt/',
     extractCSS: true,
     vendor: [
       'babel-polyfill'
     ]
  }
}
