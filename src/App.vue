<template> 
	 <div id='app'> 
	 	  <NavView></NavView>
	 	  <transition name="slide-down">
	 	     <router-view></router-view>
	 	  </transition>
	 	  <FooterView></FooterView>
	 </div>
</template>

<script>
     import NavView from './components/Nav.vue'
     import FooterView from './components/Footer.vue'
     export default{
     	 components:{
     	 	  NavView,
     	 	  FooterView
     	 }
     }
</script>

<style>
 @import './assets/css/index.css';
 .slide-down-enter-active,.slide-down-leave-avtive{
 	transition:.2s all ease;
 	opacity: 0.7;
 	transform: translate3d(0,6em,0);
 }
 .slide-down-enter,.slide-down-leave{
 	opacity: 1;
 	transform: translate3d(0,6em,0);
 }
</style>
