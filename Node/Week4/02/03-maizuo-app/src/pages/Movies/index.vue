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

        <!--动态组件-->
        <!--<component is=""></component>-->

        <!--显示对应的列表-->
        <!--列表组件-->

        <!--列表组件和Loading组件是互斥的-->
        <ul class="list" v-if="movieStatus">
            <li class="list-item" v-for="ele in Movies">
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

        <Loading v-else/>
        <Nav/>
    </div>
</template>

<script>
    import Nav from '../../components/Nav/index.vue'
    import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    import {getHotingMovie,getComingMovie} from '../../api/movie.js'
    import Loading from '../../components/Loading'

    // 优化：希望在加载电影数据的时候，在数据还没有返回之前，页面出现一个loading的加载小动画。等信息加载回来后，再隐藏该动画
    // 参考网址：https://www.cnblogs.com/jr1993/p/4622039.html
    export default {
        data() {
            return {
                currentItem: 'hoting',
                hotMovies:[],
                comingMovies:[],
                movieStatus:false,  // 代表当前的电影信息是否已经从服务器返回的状态
                Movies:[],  // 因为正在热映和即将上映使用的组件是同一个组件，只是数据源不一样，那么定义同一个模型变量，在用户点击切换的时候，把不同的数据赋值给当前的Movies即可。
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
                this.movieStatus=false;
                console.log('hoting',response);
                this.Movies=response.data.data.films;
                this.movieStatus=true;
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
            SwiperSlide,
            Loading
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
                    this.movieStatus=false;
                    getHotingMovie().then(response=>{
                        console.log('hoting',response);
                        this.Movies=response.data.data.films;
                        this.movieStatus=true;
                    });
                }else if(type=='coming'){
                    this.currentItem='coming';
                    this.movieStatus=false;
                    getComingMovie().then(response=>{
                        console.log('coming',response);
                        this.Movies=response.data.data.films;
                        this.movieStatus=true;
                    });
                }
            }
        },
        filters:{
            // 局部过滤器
            filterActors:function (input) {
                let rs=[];
                input.forEach(item=>{
                    rs.push(item.name);
                });
                return rs.join(' | ').substr(0,7)+'...';
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
        margin-left: 15px;
        .list-item{
            padding: 15px 15px 15px 0;
            display: flex;
            width: 100%;
            /*flex: 1;*/
            justify-content: space-around;
            align-items: center;
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
        }
    }
</style>