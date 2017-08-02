<template>
	<div id='app'>
		<div class='content' style='margin-top: 30px;'>
			<Slider></Slider>
			<div class="newsList">
				<ul>
					<li v-for='(val,index) in arrList'>
						<router-link :to="'/list/'+val.id" >
							<h2>{{index}}.{{val.title}}</h2>
							<p>{{val.detail}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Slider from './Slider.vue'
	export default{
		data(){
			return{
				arrList:[]
			}
		},
		components:{
			Slider
		},
		mounted(){
		    this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this
				//console.log(this.$http)
				 this.$http.get('src/data/index.data').then(function(res){
				 	console.log(res);
				 	_this.arrList=res.data
				 }).catch(function(err){
				 	console.log('Home',err)
				 })
			}
		}
	}
</script>
<style scoped>
	@import '../assets/css/index.css';
</style>