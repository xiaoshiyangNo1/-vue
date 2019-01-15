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
                <div class="son">新闻资讯</div>
        </router-link>
        <router-link class="block" to="/222">
                 <img src="../images/menu2.png" alt="">
                <div class="son">图片分享</div>
        </router-link>
        <router-link class="block" to="/333">
                 <img src="../images/menu3.png" alt="">
                 <div class="son">留言反馈</div>
        </router-link>
        <router-link class="block" to="/444">
                 <img src="../images/menu4.png" alt="">
                 <div class="son">视频专区</div>
        </router-link>
        <router-link class="block" to="/555">
                 <img src="../images/menu5.png" alt="">
                 <div class="son">新闻资讯</div>
        </router-link>
        <router-link class="block" to="/666">
                 <img src="../images/menu6.png" alt="">
                 <div class="son">联系我们</div>
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
            this.$http.get("api/getLunbo").then(result => {
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


<style  lang="less" scoped>
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
        background:white;
    }
    img {
        width: 66px;
        height: 66px;
    }
    .box .block{
        margin-top:3%;
        /* background-color: orange; */
        width: 30%;
        .son{
            font-size: 13px;
             line-height: 15px;
     display: block;
    width: 100%;
    height: 15px;
    margin-top: 8px;
    text-overflow: ellipsis;
    color: #333;

        }
    }
    .tupian {
        width: 100%;
        height: 100%;
    }


</style>