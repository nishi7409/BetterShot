export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'BetterShot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "An open-source version of Streamable, Gyazo, Lightshot, and NVIDIA's GeForce Experience screen capturing tool",
      },
      { title: 'title', content: 'BetterShot' },
      { url: 'url', content: 'https://bettershot.io/' },
      {
        image: 'image',
        content:
          'https://media.discordapp.net/attachments/930291717742153778/930291865524248647/Linkedin_cover.jpg?width=2303&height=699',
      },
      { theme_color: 'theme-color', content: '#0ac483' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: './assets/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // auth
    '@nuxtjs/auth',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:8000/',
  },

  auth: {
    cookie: {
      prefix: 'auth.',
      options: {
        path: '/',
      },
    },
    localStorage: {
      prefix: 'auth.',
    },
    token: {
      prefix: '_token',
      global: true,
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'token/login/',
            method: 'post',
            propertyName: 'auth_token',
          },
          logout: { url: 'token/logout/', method: 'post' },
          user: {
            url: 'accounts/data/',
            method: 'get',
            propertyName: false,
          },
        },
        tokenType: 'Token',
        tokenName: 'Authorization',
      },
      redirect: {
        login: '/login',
        logout: '/',
        callback: '/login',
        home: '/',
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
