<template>
	<div class='list'>
		<slot name='body' style='margin: 20px 0px'>
		</slot>
	</div>
</template>

<script>

export default {
	name: 'List'
}
</script>

<style>

.list h2{
	padding-top: 20px;
	color: black;
	font-size: 1.5em;
}
.list h3{
	font-weight: normal;
	font-size: 1.4em;
	color: black;
}
.list h4{
	color: black;
	font-size: 1.1em;
	font-weight: normal;
}
.list .item{
	text-align: left;
	margin: 40px 0;
}
.item.flex{
	padding: 20px 0;
}
.item.flex>div{
	text-align: right;
}
.item.flex img{
	height: auto;
	width: 100%;
	min-width: 100px;
	padding-right: 40px;
}
.list .item .person{
	text-align: left;
}
</style>