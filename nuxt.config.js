module.exports = {
  /*** Headers of the page */
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'http-equiv', content: 'IE=Edge', http-equiv: 'X-UA-Compatible'}
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

  // could use @nuxtjs/bootstrap-vue module, but for bootstrap v 3 that sally wrote must use older version of bootstrap css code. v4 doesn't include many of the elements that she uses in header and footer
  css: ['bootstrap/dist/css/bootstrap.css'],
  // base URL of the app. change to projects folder path when building for production
  router: {
    base: '/nuxt/dist/'
  },

  plugins: [
    {src: '~/plugins/leaflet', ssr: false}
  ],

  modules: [
    '@nuxtjs/font-awesome',
    // ['@nuxtjs/bootstrap-vue', { css: false }]
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
