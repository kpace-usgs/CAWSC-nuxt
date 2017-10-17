<template>
	<div class='list' id='References'>
		<div v-for='item in sortedArray'  class='citation' >
			<p :id='item.id' :ref='item.id' :class='{"active" : active == item.id}'>{{item.citation}}</p>
			<a v-if='item.link' :href='item.link'><p>{{item.link}}</p></a>
		</div>
	</div>
</template>

<script>

export default{
	name: 'References',
	props: ['array', 'active'],
	computed: {
		sortedArray(){
			return this.array.sort((a,b) => {
				let comparison = a.authors < b.authors;
				if(comparison) {
					return -1;
				}
				else if(!comparison){
					return 1;
				}
				else {
					return 0;
				}
			})
		}
	},
}
</script>


<style scoped>
.citation{
	line-height: 1.428;
	width: 100%;
	margin: 20px 0;
}
.citation p, .citation a{
	margin: 0;
}
.active{
	background-color: rgba(232, 230, 230, 0.8);
}
</style>