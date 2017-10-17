<script>
export default{
	name: 'toggleFunction',
	data(){
		return {
			show: false
		}
	},
	methods: {
		toggle(binary){
			this.show = binary;
		}
	},
	mounted(){
		console.log('toggle function mounted');
	}
}
</script>