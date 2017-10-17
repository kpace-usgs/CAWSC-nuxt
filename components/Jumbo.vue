<template>
	<div>
		<div class='title'>
			<a href='/projects/oil-gas-groundwater/'>
			<!-- <a href='/projects/COGG_drupal/'> -->
				<h1>California Oil, Gas, and Groundwater (COGG) Program</h1>
			</a>
			<a target='_blank' href='http://www.waterboards.ca.gov/water_issues/programs/groundwater/sb4/index.shtml' class='lead'>
				<p >In cooperation with the California State Water Resources Control Board
				</p>
			</a>
		</div>

		<div class='jumbo'></div>
	</div>
</template>

<script>
export default{
	name: 'Jumbo'
};
</script>

<style scoped>
.title{
	background-color: #eceeef;
	margin: 0;
	padding: 50px 0 0 20px;
	height: 40%;
	font-family: 'Open Sans';
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}
.lead{
	padding: 20px 0;
	font-size: 20px;
	font-weight: bold;
}
h1{
	font-weight: 700;
	font-size: 36px;
}
a>h1, a:hover{
	color: #003366;
}

.jumbo{
	background-image: url('../static/kern-county-injection-well.jpg');
	background-size: cover;
	padding: 0;
	background-position: center;
	margin: 0px 0px 20px 0;
	height: 40vh;
}
@media(max-width: 500px){
	.title{
		padding-top: 20px;
	}
}
</style>