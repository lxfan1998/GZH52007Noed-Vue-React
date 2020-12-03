<template>
    <ul class="tabs">
        <li class="tabs-item">
            <router-link to="/movies">
                <i class="fa fa-file-movie-o fa-lg"></i>
                电影
            </router-link>
        </li>
        <li class="tabs-item">
            <router-link to="/homes">
                <i class="fa fa-home fa-lg"></i>
                影院
            </router-link>
        </li>
        <li class="tabs-item">
            <!--router-link 底层变成a-->
            <router-link to="/news">
                <i class="fa fa-newspaper-o fa-lg"></i>
                资讯
            </router-link>
        </li>
        <li class="tabs-item">
            <router-link to="/my">
                <i class="fa fa-user fa-lg"></i>
                我的
            </router-link>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped lang="less">
    /*这里也可以使用import引入less文件*/
    /*编写主组件的样式*/
    /*点击导航的时候的高亮的类名*/
    .tabs-active{
        color: #ff5f16;
    }
    .tabs{
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        background-color: #FFFFFF;
        display: flex;
        /*主轴 交叉轴*/
        justify-content: space-around;
        align-items: center;
        .tabs-item{
            a{
                i{
                    padding-bottom: 5px;
                }
                display: flex;
                flex-direction: column;
                align-items: center;
                }
            }
    }
</style>