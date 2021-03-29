

<template>
<div class="login">
<body>
  <center>
    <form>
		<div class="form-group">
			<input v-model="email" class="form-control" aria-describedby="emailHelp" placeholder="User Name">
		</div>

		<div class="form-group">
			<input v-model="pass" type="password" class="form-control" placeholder="Password">
		</div>

     	<button v-on:click="loginFunc(email, pass)" type="submit" class="button button-red">Login</button>
		 <button v-on:click="$root.navigatee('/register')" type="submit" class="button">Register</button>
		<button style="padding: 0px; padding-bottom: 10px; width: 200px; height: 50px;" type="submit" class="button button-green"><img style="width: 75px; height: 55px; margin-bottom: 30px" src="https://img.itch.zone/aW1nLzE3MjQ2MTkucG5n/original/ca0pBR.png" /></button>
    </form>
  </center>
</body>





</div>
</template>

<script>
import md5 from "js-md5";
export default 
{

name: 'Test',
data ()  {
return {
	msg: 'Welcome to Your Vue.js App',
	test: 23,
	pass: '',
	email: ''

}

},

methods: 
{
	loginFunc: function (id, pass) 
	{
		var tmpPass = md5(pass);
		this.$root.getFromServer(`auth?login=${id}&pass=${tmpPass}`, this.testf);
	},

	testf: function(data)
	{
		console.info('fawgesgeghehedsrhedrhftdjrtdfjrtdfjtdrfjrtdf'+data.result);
	}
},

}
</script>

<style scoped>
input, select, textarea{
    color: #ffffff;
}

input:focus{
    color: #ffffff;
}

body {
    background-color: #222326;   
}

form {
	position: relative;
	width: 400px;
	height: 500px; 
	background: #222326; 
	top: 200px;
	padding: 3%;
	border:  solid rgba(39, 33, 33, 0.426) 1px;
	border-radius: 10px;
	-webkit-box-shadow: 0px 0px 12px 0px #000000; 
	box-shadow: 0px 0px 12px 0px #000000;
}



.form-control {
    padding: 1rem;
    margin-bottom: 1rem;
    background-color: #18191c;
	border: none; 
	outline: none;
}

.form-control:focus {
    background-color: #18191c;
	border: solid 1px rgba(163, 70, 70, 0.426); 
}


</style>
