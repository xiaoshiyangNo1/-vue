import Vue from 'vue'
import Router from 'vue-router'


import lunbotu from "@/xiaoshiyang/lunbotu"


import ta2 from "@/xiaoshiyang/ta2"

import ta3 from "@/xiaoshiyang/ta3"

import ta4 from "@/xiaoshiyang/ta4"

import jiu1 from "@/xiaoshiyang/jiu1"
import jiu2 from "@/xiaoshiyang/jiu2"
import jiu3 from "@/xiaoshiyang/jiu3"
import jiu4 from "@/xiaoshiyang/jiu4"
import jiu5 from "@/xiaoshiyang/jiu5"
import jiu6 from "@/xiaoshiyang/jiu6"


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name:"lunbotu",component: lunbotu },
 
    {path: '/bbb',name:"ta2",component:ta2},
    {path: '/ccc',name:"ta3",component:ta3},
    {path: '/ddd',name:"ta4",component:ta4},
    {path: '/111',name:"jiu1",component:jiu1},
    {path: '/222',name:"jiu2",component:jiu2},
    {path: '/333',name:"jiu3",component:jiu3},
    {path: '/444',name:"jiu4",component:jiu4},
    {path: '/555',name:"jiu5",component:jiu5},
    {path: '/666',name:"jiu6",component:jiu6},

  ]
})
