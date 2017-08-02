import Home from './components/Home.vue'
import Follow from './components/Follow.vue'
import Column from './components/Column.vue'
import My from './components/My.vue'
import List from './components/List.vue'

export default[
    {
    	path:'/home',
    	component:Home
    },
     {
    	path:'/follow',
    	component:Follow
    },
     {
    	path:'/column',
    	component:Column
    },
    {
    	path:'/my',
    	component:My
    },
    {
    	path:'/list/:id',
    	component:List
    },
    { 
    path: '/', 
    redirect: '/home' 
    },
    { 
    path: '*', 
    redirect: '/home' 
  }
]
