<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">

                    <img  :src="item.img" alt="" class="tupian">
            </mt-swipe-item>
                
        </mt-swipe>

    <div class="box">
        <router-link class="block" to="/111">
                <img src="../images/menu1.png" alt="">
        </router-link>
        <router-link class="block" to="/222">
                 <img src="../images/menu2.png" alt="">
        
        </router-link>
        <router-link class="block" to="/333">
                 <img src="../images/menu3.png" alt="">
        </router-link>
        <router-link class="block" to="/444">
                 <img src="../images/menu4.png" alt="">
        </router-link>
        <router-link class="block" to="/555">
                 <img src="../images/menu5.png" alt="">
        </router-link>
        <router-link class="block" to="/666">
                 <img src="../images/menu6.png" alt="">
        </router-link>
    </div>
    </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {

    
    data()  {
        return {
            lunbotuList: []
        };
    },
    created () {
        this.getLunbotu() ;
    },
    methods: {
        getLunbotu() {
            this.$http.get("http://www.lovegf.cn:8899/api/getLunbo").then(result => {
                if (result.body.status === 0) {
                    this.lunbotuList = result.body.message;
                }else {
                    Toast('加载轮播图失败')
                }
            });
        }
    }
    
};
</script>


<style >
    .mint-swipe{
        width: 100%;
        height: 200px;
        /* background-color:pink; */
    }
    .box {
        
        height: 304px;
        /* background: red; */
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        text-align: center;
        justify-content: space-around;
    }
    img {
        width: 60px;
        height: 60px;
    }
    .box .block{
        margin-top:3%;
        /* background-color: orange; */
        width: 30%;
    }
    .tupian {
        width: 100%;
        height: 100%;
    }


</style>