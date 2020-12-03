<template>
    <div>
        <!--<h2>电影页面</h2>-->

        <!--实现轮播图的效果-->
        <!--https://github.com/surmon-china/vue-awesome-swiper-->
        <!--yarn add swiper@5.x vue-awesome-swiper-->

        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide class="slide-item">
                <img src="/banners/1.jpg">
            </swiper-slide>
            <swiper-slide class="slide-item">
                <img src="/banners/2.jpg">
            </swiper-slide>
            <swiper-slide class="slide-item">
                <img src="/banners/3.jpg">
            </swiper-slide>
            <swiper-slide class="slide-item">
                <img src="/banners/4.jpg">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>

        <!--完成选项卡-->
        <ul class="tabs">
            <li class="tabs-item" :class="{active:currentItem=='hoting'}" @click="tabHandler('hoting')">正在热映</li>
            <li class="tabs-item" :class="{active:currentItem=='coming'}" @click="tabHandler('coming')">即将上映</li>
        </ul>

        <!--显示对应的列表-->
        <!--列表组件-->
        <ul class="list">
            <li class="list-item" v-for="ele in hotMovies">
                <img :src="ele.poster">
                <div>
                    <h3>{{ele.name}}</h3>
                    <p>主演：{{ele.actors | filterActors}}</p>
                    <p>上映时间：{{ele.premiereAt}}</p>
                </div>
                <span class="prevbuy">
                    预购
                </span>
            </li>
        </ul>

        <Nav/>
    </div>
</template>

<script>
    import Nav from '../../components/Nav/index.vue'
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {getHotingMovie,getComingMovie} from '../../api/movie.js'

    export default {
        data() {
            return {
                currentItem: 'hoting',
                hotMovies:[],
                comingMovies:[],
                swiperOptions: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                }
            }
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.$swiper;
            }
        },
        created(){
            getHotingMovie().then(response=>{
                console.log('hoting',response);
            });
        },
        mounted() {
            console.log('Current Swiper instance object', this.swiper)
            // 设置轮播图显示的默认下标为0就是第一张图
            this.swiper.slideTo(0, 1000, false)
        },
        name: "index.vue",
        components:{
            Nav,
            Swiper,
            SwiperSlide
        },
        directives: {
            swiper: directive
        },
        methods:{
            tabHandler(type){
                if(type=='hoting'){
                    // 1. 需要使用一个模型变量来记录用户当前记录的是哪个按钮，需要根据点击的是哪个按钮来决定是否增加active类名
                    // 2. 根据用户的点击操作，和后台进行接口的联调，获取对应的电影的列表数据信息
                    // 3. 抓取卖座网的数据包得出电影接口
                    // https://www.juhe.cn

                    this.currentItem='hoting';
                    getHotingMovie().then(response=>{
                        console.log('hoting',response);
                        this.hotMovies=response.films;
                    });
                }else if(type=='coming'){
                    this.currentItem='coming';
                    getComingMovie().then(response=>{
                        console.log('coming',response);
                        this.comingMovies=response.films;
                    });
                }
            }
        },
        filters:{
            // 局部过滤器
            filterActors:function (input) {
                input.forEach(item=>{
                    let rs=[];
                    rs.push(item.name);
                });
                return rs.join('|').substr(0,7)+'...';
            }
        }
    }
</script>

<style scoped lang="less">
    .slide-item{
        /*height: 100px;*/
        /*color: #cccccc;*/
        img{
            max-width: 100%;
        }
    }

    .tabs{
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: 16px;
        margin-top: 10px;
        .tabs-item{
            padding-bottom: 10px;
        }
        /*这种写法在less里面的理解是：.tabs .active{}*/
        .active{
            color: #ff5f16;
            border-bottom: 2px solid #ff5f16;
        }
    }
    .list{
        padding: 10px;
        .list-item{
            img{
                width: 66px;
            }
            .prevbuy{
                display: inline-block;
                width: 50px;
                height: 25px;
                line-height: 25px;
                text-align: center;
                color: #ffb232;
                border: 1px solid #ffb232;
                border-radius: 4px;
            }
            display: flex;
            width: 100%;
            /*flex: 1;*/
            justify-content: space-around;
            align-items: center;
        }
    }
</style>