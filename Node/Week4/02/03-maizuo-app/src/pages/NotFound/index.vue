<template>
    <div>
        <h2>404页面</h2>
        <!--1. 提示用户当前的操作可能是错误的-->
            <!--1.1 图片 404图片-->
            <img src="/images/404.png" width="320px">
            <!--1.2 文字-->
            <h3>抱歉！页面无法访问……</h3>
        <!--2. 引导用户跳转到正确的页面-->
        <router-link to="/movies">电影页面</router-link>
        <!--利于SEO的，网站里面不要出现死链-->
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>