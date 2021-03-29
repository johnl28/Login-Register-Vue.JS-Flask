// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false
//Vue.use(axios)


/* eslint-disable no-new */
new Vue({

el: '#app',

router,

components: { App },

template: '<App/>',

data: 
{
	title: "CSGORoll",
	server_addr: "http://127.0.0.1:5000/",
	security_key: 'we4tgdrgf34tergdghhfj',
	test: -1,
},

methods: 
{
	navigatee: function (page) 
	{
		router.push(page);
	},

	getFromServer: function(args, func)
	{

		axios.get(`${this.server_addr}${args}&key=${this.security_key}`).then((response) => {
			func(response.data);
		}).catch((error) => {
			console.error(error);
		  });
	},

},

watch: 
{
	'$route' (to, from) 
	{
		document.title = this.title + ' - ' +  to.meta.title || this.title;
	},
	test: function (val)
	{
		console.info(`aegesgdddddddddddddddddddddddddd ${val}`);
	}
},

})



