<style src="@/style/style.css"></style>

<template>
<div id="app">



	<div v-if="$root.$cookie.get('session_id')">
	<navigation></navigation>
	</div>
	<div v-if="$root.down" class="alert alert-danger" role="alert">
		<h4 class="alert-heading">Server connection error</h4>
		<p>Couldn't connect the client to the server.</p>
		<hr>
		<p class="mb-0">Try to refresh the page.</p>
	</div>

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

