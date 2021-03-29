<template>
  <div class="cacat">
<h2>User id {{ $route.params.id }}</h2>
      {{test}}

  </div>
</template>

<script>
export default 
{
  name: 'Test',
  data () 
  {
    return {
      msg: 'Welcome to Your Vue.js App',
      test: 23,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
