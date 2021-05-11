<template>
    <div class="home">  

        <div class="card-body">
            <h4 class="card-title">Welcome {{this.$root.user_data.user}} !</h4>     
        </div>
        <img src="https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg" />
        <div class="card-body">
            <h4 class="card-title">Welcome {{this.$root.user_data.user}} !</h4>     
        </div>
        <img src="https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg" />        <div class="card-body">
            <h4 class="card-title">Welcome {{this.$root.user_data.user}} !</h4>     
        </div>
        <img src="https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg" />        <div class="card-body">
            <h4 class="card-title">Welcome {{this.$root.user_data.user}} !</h4>     
        </div>
        <img src="https://www.fortressofsolitude.co.za/wp-content/uploads/2019/05/The-15-Most-Powerful-Anime-Characters-Of-All-Time-scaled.jpg" />
    </div>
</template>

<script>
export default 
{
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped>
.home
{
  
    position: relative;
    left: 1%;
    border: solid 1px #393a3f;
    top: 20px;
    width: 86.5%;
    border-radius: 5px;
	  -webkit-box-shadow: 0px 0px 12px 0px #000000; 
	  box-shadow: 0px 0px 12px 0px #000000;
    color: #8b8d9b;
    padding: 30px;
}

img {
  width: 1000px;
  height: 500px;
}
</style>


