<style src="@/style/style.css"></style>


<template>
<div id="navigation">
    <nav class="nav-bar">
        <button @click="$root.navigatee('/')" class="button-nav">Home</button>
         <button @click="$root.navigatee('/hot')" class="button-nav">
        <img class="icon" src="./../assets/icons/hot.jpg">     
         Hot
         </button>
         <button @click="$root.navigatee('/donate')" class="button-nav">
         <img class="icon" src="./../assets/icons/donate.jpg">   
         Donate
         </button>
         <button @click="$root.navigatee('/about')" class="button-nav">About</button>
        <input class="search-bar" type="text" placeholder="Search..." id="fname" name="fname">
    </nav>


    <div class="user-panel" style="width:200px">
        <img class="card-img-top profile-picture" style="width: 150px; height: 150px; margin-top: 15px; margin-bottom: 15px; left: 12%; position: relative;" v-bind:src="this.$root.user_data.picture" alt="Card image">
        <div class="card-header">
            <h4 class="card-title">{{this.$root.user_data.user}}</h4>     
        </div>
        <div class="card-header">
            <img class="icon" src="./../assets/icons/coins.png">     
             <b>Coins: {{this.$root.user_data.coins}}</b>
        </div>
        <div class="card-header">
            <img class="icon" src="./../assets/icons/level.png">   
           <b>Level: {{this.$root.user_data.level}}</b></div>
        <div class="card-header">
           <b>Rank: {{this.$root.user_data.level}}</b></div>
        <div class="card-footer"> 
            <button style="width: 140px;" @click="$root.navigatee('/profile/')" class="button">Profile</button>
            <button style="width: 140px;" @click="$root.logout" class="button button-red">Logout</button>
        </div>
    </div>

     <div class="user-panel" style="width:200px; margin-top: 540px;">
        <div class="card-body">
            <h4 class="card-title">Top Anime</h4>     
        </div>
        <div class="card-header">         
            Dragon Ball Z: 124k
        </div>
        <div class="card-header">Dragon Ball Super: 94k</div>
        <div class="card-header">Naruto: 23k</div>
        <div class="card-header">One Piece: 423</div>
        
    </div>   
</div>
</template>



<script>
export default {
data(){
    return {} 
}
}
</script>


<style scoped>
.icon
{
    width: 25px;
    height: 25px;
}

.nav-bar {
    position:relative;
    display:flex;
    flex-wrap:wrap;
    align-items:center;

    padding-top:.5rem;
    padding-bottom:.5rem;

    left: 1%;
    border: solid 1px #393a3f;
    top: 5px;
    width: 86.5%;
    border-radius: 5px;
	-webkit-box-shadow: 0px 0px 12px 0px #000000; 
	box-shadow: 0px 0px 12px 0px #000000;
}



.card-header, .card-footer {
    border: solid 1px #393a3f; 
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: none;
}

.card-footer {
    background: #17171a; 
}

.card-header:hover {
    background: #18181c; 
}

button {
    height: 30px; 
    padding: 0;
    padding-left: 10px;
    padding-right: 10px;
}

.button-nav {
	position:relative;
	width: auto;
    height: 60px;
	display:inline-block;
	color:#ecf0f1;
	text-decoration:none;
	border-radius:5px;
	border:solid 1px #373430;
	background:#151313;
	text-align:center;
	padding: 14px;
	margin-left: 30px;
	
	-webkit-transition: all 0.1s;
	-moz-transition: all 0.1s;
	transition: all 0.1s;
}

.button-nav:hover {
	background:#1513133a;
}

.search-bar {
    left: 85%;
    position: absolute;
    padding: 10px;
    background:#0e0d0d;
    border:solid 1px #373430;
    color: rgba(255, 255, 255, 0.337);
    border-radius:10px;
    width: 13.5%;
}


.user-panel
{
    position: fixed;
    left: 88.5%;
    border: solid 1px #393a3f;
    top: 5px;
    width: 60%;
    border-radius: 5px;
	-webkit-box-shadow: 0px 0px 12px 0px #000000; 
	box-shadow: 0px 0px 12px 0px #000000;
    color: #8b8d9b;
}

.user-panel:hover
{
    border: solid 1px #898b92;
    transition: all 0.2s;
}

.profile-picture {
    border-radius: 100px;
    border: solid 3px #393a3f38;
}

#navigation {
     background-color: #222326;  
}

.card-title
{
    color:#e67e22;
    text-align: center;
}


</style>

