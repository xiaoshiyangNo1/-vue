<template>
   <div class="app">

  <mt-header fixed title="首页"></mt-header>

<transition>
  <router-view></router-view>
</transition>
  

<nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">0</span>
          </span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
          <!-- <mt-tab-item id="tab1" >
            tab1
          </mt-tab-item>
          <mt-tab-item id="tab2">
            tab2
          </mt-tab-item>
          <mt-tab-item id="tab3">
            tab3
          </mt-tab-item>
          <mt-tab-item id="tab4">
            tab4
          </mt-tab-item>
        </mt-tabbar> -->
 
          
   
   


   </div>
   

</template>

<script>

</script>

<style>
  *{
    padding: 0;
    margin: 0;
  }
  .app{
    padding-top: 40px;
    padding-bottom: 50px;
    overflow: hidden;
  }

  .v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.mt-tabbar{
  position:fixed;
  display: flex
}
#tab1{
  flex:1;
  height:40px;
  line-height: 40px;
  text-decoration: none;
}
#tab2{
  flex:1;
   height: 40px;
  line-height: 40px;
  text-decoration: none;
}
#tab3{
  flex:1;
   height: 40px;
  line-height: 40px;
   text-decoration: none;
}
#tab4{
  flex:1;
   height: 40px;
  line-height: 40px;
  text-decoration: none;
}

</style>
