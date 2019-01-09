<template>
   <div class="app">

  <mt-header fixed title="首页"></mt-header>

<transition>
  <router-view></router-view>
</transition>
  

  <mt-tabbar class="mt-tabbar">
        <router-link class="mt-tab-item" id="tab1" to="/">tab1</router-link>
        <router-link class="mt-tab-item" id="tab2" to="/bbb">tab2</router-link>
        <router-link class="mt-tab-item" id="tab3" to="/ccc">tab3</router-link>
        <router-link class="mt-tab-item" id="tab4" to="/ddd">tab4</router-link>
</mt-tabbar>
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
