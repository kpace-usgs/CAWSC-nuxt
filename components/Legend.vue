<template>
	<div v-if='show' class='legend'>
		<slot name='title'>
			<p class='title'>Legend</p>
		</slot>
		<slot name='body'>
			<!-- default is TDS gradient -->
			<div>
				<div class='legendLabel withGradient'>
					<div class='gradient'></div>
					<div class='label'>
						<p>0</p>
						<p>> 10,000</p>
					</div>
				</div>
			</div>
		</slot>
	</div>
</template>

<script>

export default{
	name: 'Legend',
	props: ['show']
}
</script>

<style scoped>
.title p{
	margin-bottom: 3px;
}
.legendLabel{
	display: flex;
}
.legendLabel.withGradient{
	height: 70px;
}
.legendLabel i{
	width: 30px;
	height: 30px;
}
.gradient{
	background-image: linear-gradient(#f1eef6, #045a8d);
	background: linear-gradient(#f1eef6, #045a8d);
	width: 30px;
	height: auto;
	border: 1px solid black;
}
.label{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 10px;
	text-align: left;
	height: 100%;
}
.label p{
	font-size: 12px;
	margin: 0;
}
.legend{
	margin: 20px 5px;
}
</style>