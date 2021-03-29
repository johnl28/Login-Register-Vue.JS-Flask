<style src="@/style/style.css"></style>

<template>
<div id="app">
	<head>
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
	</head>
	<navigation></navigation>
	<body>
		<transition name="fade" mode="out-in">
			<router-view/>
		</transition>
	</body>
</div>
</template>

<script>
import navigation from './components/navigation.vue'

export default 
{
	components: { navigation },
	name: 'App'
}
</script>

<style scoped>
body 
{
	background-color: #222326;   
}
</style>

