<template>

<a v-scroll-to="'#References'" >
	<slot name='text'></slot>
</a>

</template>

<script>
//import makeActive from '~/mixins/makeActive.vue'

export default{
	name: 'RefLink',
	props: ['num'],
	// mixins: [makeActive],

	// methods: {
	// 	getActive(){
	// 		this.makeActive(this.num);
	// 	}
	// }
}
</script>