

<template>
<div class="register">
<body>
  <center>
    <form>
		<div class="form-group">
			<input v-model="user" class="form-control" placeholder="User Name">
		</div>
		<div class="form-group">
			<input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
		</div>

		<div class="form-group">
			<input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
		</div>
		<div class="form-group">
			<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Repeat Password">
		</div>
		 <button v-on:click="register" type="submit" class="button button-blue">Register</button>
         <b><font color="#5a5c5a">Or</font></b>
        <button v-on:click="$root.navigatee('/login')" type="submit" class="button">Login</button>
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
	data () 
	{
	return {
		msg: 'Welcome to Your Vue.js App',
		email: '',
		password: '',
		user: '',
	}},

	methods : 
	{
		register : function()
		{
			console.info(this.email);
			var tmpPass = md5(this.password);
			this.$root.getFromServer(`reg?user=${this.user}&pass=${this.tmpPass}&email=${this.email}`, this.recvServer);
		},

		recvServer: function(data)
		{
			console.error(data.result);
		}
	}
}
</script>

<style scoped>
body {
    background-color: #222326;   
}

input, select, textarea{
    color: #ffffff;
}

input:focus{
    color: #ffffff;
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
