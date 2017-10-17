import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo, {
	container: "body",
	duration: 500,
	easing: "ease",
	offset: -100
})

// Vue.use(VueScrollTo);