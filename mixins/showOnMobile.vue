<script>

export default{
	data(){
		return{
			width: '',
			mobileLimit: 450
		}
	},
	mounted(){
		this.width = window.innerWidth;
	},
	computed: {
		showOnMobile(){
			return this.width > this.mobileLimit ? true : false;
		}
	}
}

</script>