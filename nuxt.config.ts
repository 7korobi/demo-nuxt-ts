const pkg = require('./package')


module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'msapplication-TileColor', content: "#ffc40d" },
      { name: 'theme-color', content: "#ffffff" },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/icon/favicon.ico' },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/images/icon/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/images/icon/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/images/icon/favicon-16x16.png" },
      { rel: "mask-icon", href: "/images/icon/safari-pinned-tab.svg", color: "#5bbad5" },
      { rel: "manifest", href: "/manifest.json" },
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
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    "~/plugins/sw",
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config : any, ctx : any) : void {
      config;
      ctx;
    }
  },

  workbox: {
    dev: true,
    offlineAssets: [
      "icon.png"
    ],
    importScripts: [
      'sample-sw.js'
    ]
  },

  manifest: {
    name: 'Nuxt TS demo',
    lang: 'ja',
    nativeUI: true
  }
}
