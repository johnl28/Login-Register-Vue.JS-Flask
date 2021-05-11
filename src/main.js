// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueCoreVideoPlayer from 'vue-core-video-player'
import VueCookie from 'vue-cookie'


Vue.use(VueCookie);
Vue.config.productionTip = false
//Vue.use(axios)
Vue.use(VueCoreVideoPlayer)

/* eslint-disable no-new */
new Vue({

el: '#app',

router,

components: { App },

template: '<App/>',

data: 
{
	title: "Anime is free",
	server_addr: "http://34.89.96.181:5000/",
	security_key: 'we4tgdrgf34tergdghhfj',
	test: -1,
	down: false,
	user_data: {'user' : '', 'coins' : 0, 'level' : 1, 'picture': "https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/fe/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"},
},

methods: 
{


// main methods
navigatee: function (page) 
{
	if(this.$route.name == page)
	{
		return;
	}
	console.log(this.$route.name);
	router.push(page);
},

getFromServer: function(args, func)
{
	axios.get(`${this.server_addr}${args}&key=${this.security_key}`).then((response) => {
		func(response.data);
		this.down = false;
	}).catch((error) => {
		this.down = true;
		console.error(error);
		});
},

sendToServer: function(args)
{
	axios.post(`${this.server_addr}${args}&key=${this.security_key}`).then((response) => {
	}).catch((error) => {
		this.down = true;
		console.error(error);
		});
},
// end main methods

setSession: function(data)
{
	console.log(`got session ${data.result}`);
	if(data.result)
	{
		this.$cookie.delete('session_id');
		this.$cookie.delete('session_code');
		this.$cookie.delete('session_user');
		router.push('login');
		return;
	}
	this.$root.user_data = data.table;
	this.user_data.user = this.$cookie.get('session_user');
	router.push('/');
},


logout: function()
{
	this.sendToServer(`logout?session_id=${this.$cookie.get('session_id')}`);
	this.$cookie.delete('session_id');
	this.$cookie.delete('session_code');
	this.$cookie.delete('session_user');
	router.push('login');
}

},

watch: 
{
	'$route' (to, from) 
	{
		document.title = this.title + ' - ' +  to.meta.title || this.title;
	},
},

mounted()
{
	document.title = this.title;
	var session_id = this.$cookie.get('session_id');
	var session_code = this.$cookie.get('session_code');
	var user = this.$cookie.get('session_user');

    if(!session_id && !session_code)
	{
		router.push('login');
	}
	else
	{
		this.getFromServer(`check_session?session_id=${session_id}&session_code=${session_code}&user=${user}`, this.setSession);
	}
},



})



