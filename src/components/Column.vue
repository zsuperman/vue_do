<template>
	<div id='app'>
		<div class='content' style='margin-top: 40px;'>
			<div class="newsList">
				<ul>
					<li v-for='(val,index) in folList'>
						<h2>{{index}}.{{val.title}}</h2>
						<p>{{val.detail}}</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export  default{
		data(){
			return{
				folList:[]
			}
		},
		mounted(){
		    this.fetchData()
		},
		methods:{
			fetchData(){
				var _this=this
				this.$http.get('src/data/follow.data').then(function(res){
					_this.folList=res.data
				}).catch(function(err){
					console.log('Follow',err)
				})
			}
		}
	
	}
</script>