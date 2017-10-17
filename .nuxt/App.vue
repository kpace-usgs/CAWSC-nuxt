<template>
  <div id="__nuxt">
    <nuxt-loading ref="loading"></nuxt-loading>
    <component v-if="layout" :is="layout"></component>
  </div>
</template>

<script>
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\font-awesome\\css\\font-awesome.css'

import '..\\node_modules\\bootstrap-vue\\dist\\bootstrap-vue.css'


let layouts = {

  "_default": () => import('..\\layouts\\default.vue'  /* webpackChunkName: "layouts/default" */).then(m => m.default || m)

}

export default {
  head: {"title":"USGS COGG | California Oil Gas and Groundwater","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"U.S. Geological Survey (USGS) California Oil, Gas, and Groundwater Program in partnership with the California State Water Resources Control Board"}],"link":[{"rel":"icon","type":"image/x-icon","href":"/favicon.ico"}],"script":[{"src":"~/assets/js/polyfill.min.js"}],"style":[]},
  data: () => ({
    layout: null,
    layoutName: ''
  }),
  
  mounted () {
    this.$loading = this.$refs.loading
    this.$nuxt.$loading = this.$loading
  },
  
  methods: {
    setLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      this.layoutName = layout
      let _layout = '_' + layout
      this.layout = layouts[_layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) layout = 'default'
      let _layout = '_' + layout
      if (typeof layouts[_layout] !== 'function') {
        return Promise.resolve(layouts[_layout])
      }
      return layouts[_layout]()
      .then((Component) => {
        layouts[_layout] = Component
        return layouts[_layout]
      })
      .catch((e) => {
        if (this.$nuxt) {
          return this.$nuxt.error({ statusCode: 500, message: e.message })
        }
      })
    }
  },
  components: {
    NuxtLoading
  }
}
</script>

