<template>

	<form accept-charset="UTF-8" action="https://search.usa.gov/search" method="get" >
		<div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
		<input id="affiliate" name="affiliate" title="this field for search engine functionality only" type="hidden" value="california-water-science-usgs" />
		<!-- <label for="query">Enter Search Term(s):</label> -->
		<input  autocomplete="off" class="usagov-search-autocomplete" id="query" name="query" type="text" title="search term input" placeholder="Search..." />
		<!-- <input name="commit" type="submit" value="Search" /> -->
		<button type="submit" value="Search" name="commit" class="btn btn-default">
			<i class="fa fa-search" aria-hidden="true"></i>
		</button>
	</form>		

</template>

<script>

export default {
	name: 'USASearch'
}
</script>

<style scoped>
	form{
		float: right;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 3.5px;
		width: 232px;
	}
	#query{
		padding: 5px 5px 5px 0px;
		font-weight: 700;
		font-size: 14px;
		line-height: 20px;
		color: #222;
		font-family: 'Open Sans', sans-serif;
		height: 25px;
		width: 183px;
		margin-right: 4px;
		margin-bottom: 2px;
	}
	form button{
		height: 34px;
		width: 39px;
		font-style: normal;
		border-radius: 3px;
		color: #222;
		background-color: white;
		border: none;
		padding: 6px 12px;
		vertical-align: center;
	}
	form button:hover{
		cursor: pointer;
	}
	
	
	
	@media only screen and (max-width:768px){
		form{
			margin : 0 -50px;
			text-align: center;
			float: none;
		}

	}

</style>