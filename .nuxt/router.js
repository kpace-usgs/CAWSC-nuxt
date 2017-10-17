import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _428d1688 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _e71ccc3a = () => import('..\\pages\\team.vue' /* webpackChunkName: "pages/team" */).then(m => m.default || m)
const _acbe539e = () => import('..\\pages\\partners.vue' /* webpackChunkName: "pages/partners" */).then(m => m.default || m)
const _d4642f66 = () => import('..\\pages\\publications.vue' /* webpackChunkName: "pages/publications" */).then(m => m.default || m)
const _4309b759 = () => import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */).then(m => m.default || m)
const _4618ffdb = () => import('..\\pages\\datatools.vue' /* webpackChunkName: "pages/datatools" */).then(m => m.default || m)
const _aa48c0ce = () => import('..\\pages\\science\\salinity.vue' /* webpackChunkName: "pages/science-salinity" */).then(m => m.default || m)
const _ac8b9d52 = () => import('..\\pages\\science\\pathways.vue' /* webpackChunkName: "pages/science-pathways" */).then(m => m.default || m)
const _3f90d940 = () => import('..\\pages\\science\\geochem.vue' /* webpackChunkName: "pages/science-geochem" */).then(m => m.default || m)
const _198f490c = () => import('..\\pages\\science\\design.vue' /* webpackChunkName: "pages/science-design" */).then(m => m.default || m)
const _5cd9d728 = () => import('..\\pages\\science\\geology.vue' /* webpackChunkName: "pages/science-geology" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/projects/oil-gas-groundwater/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _428d1688,
			name: "index"
		},
		{
			path: "/team",
			component: _e71ccc3a,
			name: "team"
		},
		{
			path: "/partners",
			component: _acbe539e,
			name: "partners"
		},
		{
			path: "/publications",
			component: _d4642f66,
			name: "publications"
		},
		{
			path: "/news",
			component: _4309b759,
			name: "news"
		},
		{
			path: "/datatools",
			component: _4618ffdb,
			name: "datatools"
		},
		{
			path: "/science/salinity",
			component: _aa48c0ce,
			name: "science-salinity"
		},
		{
			path: "/science/pathways",
			component: _ac8b9d52,
			name: "science-pathways"
		},
		{
			path: "/science/geochem",
			component: _3f90d940,
			name: "science-geochem"
		},
		{
			path: "/science/design",
			component: _198f490c,
			name: "science-design"
		},
		{
			path: "/science/geology",
			component: _5cd9d728,
			name: "science-geology"
		}
    ],
    fallback: false
  })
}
