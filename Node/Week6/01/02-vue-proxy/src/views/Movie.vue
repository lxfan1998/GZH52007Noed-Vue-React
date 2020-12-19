<template>
    <div>
        <h2>电影的请求</h2>
        <p>本地的网页：8080</p>
        <p>api服务器：3000</p>
        <p>出现了跨域请求</p>
        <button @click="getMovie">点击获取3000服务器的电影信息</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "Movie",
        data:function () {
            return {
                movieList:[]
            }
        },
        methods:{
            getMovie(){
                // 目标路径：http://localhost:3000/api/v1/movie/list
                let url='/proxyapi/v1/movie/list';
                // 相对路径方式的url地址，前缀：自己的web服务器http://localhost:8080/
                // 因为服务器是在8080端口运行的，所以最后的url地址是拼接起来的http://localhost:8080/api/v1/movie/list
                // url：http://localhost:3000/api/v1/movie/list
                axios.get(url).then(response=>{
                    console.log(response.data);
                }).catch(error=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>

</style>