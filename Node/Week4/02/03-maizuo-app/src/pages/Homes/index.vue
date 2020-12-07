<template>
    <div ref="rootContainer">
        <!--由于影院的信息默认是一次性加载229条，出现了滚动条，这个在PC端浏览器是没有任何性能问题的，但是在部分的手机端效果不是那么好（可能会卡顿）。一般会使用第三方的插件做滚动的优化，或者是做上拉或下拉加载。-->
        <!--better-scroll-->
        <!--1. 外层要存在一个父容器 wrapper
            1.1 父容器的高度是固定的 手机端有碎屏化，不能直接写死（要根据不同的手机动态算出来，better-scroll的外层一定要固定）
            1.2 禁用浏览器自身的滚动条
            1.3 当前的父容器有且仅有一个子元素-->
        <!--1.vue里面存在一个ref属性，当给DOM元素设置ref属性后，属性值由用户自定义-->
        <!--2. 在vue的代码里面，可以通过this.$refs获取到页面上所有的通过ref定义的对象-->
        <div class="wrapper" ref="wrapper">
            <ul class="list">
                <li class="list-item" v-for="ele in homeList">
                    <div class="left">
                        <h3>{{ele.name}}</h3>
                        <p>{{ele.address}}</p>
                    </div>
                    <div class="right">
                        <!--lowPrice 后台存储价钱的单位是“分”，因为小数计算有精度问题（0.1+0.2不等于0.3）-->
                        <p>{{ele.lowPrice}}起点</p>
                        <p>距离未知</p>
                    </div>
                </li>
            </ul>
        </div>
        <Nav/>
    </div>
</template>

<script>
    import Nav from '../../components/Nav/index.vue';
    import {getHomes} from "../../api/homes";
    import BScroll from 'better-scroll';

    export default {
        name: "index",
        data:function(){
            return {
                homeList:[],
                scroll:null,
            }
        },
        created(){
            this.getHomes();
        },
        // 可以确保页面的DOM结构已经形成
        mounted() {
            console.log('this.$refs',this.$refs);  // $refs，vue自带的
            // DOM设置元素的高度，根据视窗高度来决定
            this.$refs.wrapper.style.height=document.documentElement.clientHeight-50+'px';  // 滚动窗口的高度
        },
        methods:{
          getHomes(){
              getHomes().then(response=>{
                  // console.log('response.data.data.cinemas',response.data.data.cinemas);
                  this.homeList=response.data.data.cinemas;
                  this.$nextTick(() => {
                      this.scroll = new BScroll('.wrapper', {
                          // 设置配置项
                      });
                  });
              })
          }
        },
        components:{
            Nav
        }
    }
</script>

<style scoped lang="less">
    .wrapper{
        /*高度不能写死*/
        /*height: 500px;*/
        /*border: 1px solid gold;*/
        overflow: hidden;
    }
    .list{
        .list-item{
            height: 45px;
            border: 1px solid #ff5f16;
            padding: 15px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>