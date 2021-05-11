

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

     	<button v-on:click="loginFunc(email, pass)" type="submit" class="button button-red">
		 <span v-if="this.isLoading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>		 
			Login
		</button>
		 <button v-on:click="$root.navigatee('/register')" type="submit" class="button">Register</button>

		 <div v-if="error" class="alert alert-danger" role="alert">
 			 {{error}}
		</div>
		<!-- 
			Steam auth button
			<button style="padding: 0px; padding-bottom: 10px; width: 200px; height: 50px;" type="submit" class="button button-green"><img style="width: 75px; height: 55px; margin-bottom: 30px" src="https://img.itch.zone/aW1nLzE3MjQ2MTkucG5n/original/ca0pBR.png" /></button> -->
    </form>
  </center>

</body>





</div>
</template>

<script>
import md5 from "js-md5";
export default 
{

name: 'Login',
data ()  {
return {
	messages: [
		"",
		"This account doesn't exist!",
		"Wrong data sent to the server!",
		"Wrong password entered!",
	],
	isLoading: false,
	error: '',
	pass: '',
	email: ''

}

},

methods: 
{
loginFunc: function (id, pass) 
{
	this.isLoading = true;
	this.error = "";
	var tmpPass = md5(pass);
	this.$root.getFromServer(`auth?login=${id}&pass=${tmpPass}`, this.loginCallBack);
},

loginCallBack: function(data)
{
	this.isLoading = false;
	this.error = this.messages[data.result];
	console.info(data.result);
	if(data.result == 0)
	{ 
		this.$cookie.set('session_id', data.session.id, 1);
		this.$cookie.set('session_code', data.session.code, 1);
		this.$cookie.set('session_user', data.session.user, 1);
		this.$root.user_data = data.table;
		this.$root.user_data.user = this.$cookie.get('session_user');
		this.$root.navigatee("/");	
	}
}

},

mounted()
{
	this.isLoading = false;
	var session_id = this.$cookie.get('session_id');
	var session_code = this.$cookie.get('session_code');
    if(session_id || session_code)
	{
		this.$root.navigatee("/");
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
	width: 370px;
	height: auto; 
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
.alert
{
	margin-top: 20px; 
}

</style>
