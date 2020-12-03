<template>
  <div id="app">
    <h1>count:{{ $store.state.count }}</h1>
        <!-- <ul v-for="item in list" :key="item.id">
            <li>{{ item.name }}</li>
        </ul> -->

    <!-- 第二个坑 -->
     <!-- <ul v-if="list.length" v-for="item in list" :key="item.id">
            <li>{{ item.name }}</li>
    </ul> -->

    <!-- v-for已经在遍历渲染了，渲染后才用v-if判断，切换开销更高，影响性能 -->
    <!-- <ul v-for="item in list" :key="item.id">
            <li v-if="list.length">{{ item.name }}</li>
    </ul> -->

    <!-- 渲染后会在ul外面生成一个div，样式有可能受影响 -->
    <!-- <div v-if="list.length">
        <ul v-for="item in list" :key="item.id">
            <li>{{ item.name }}</li>
        </ul>
    </div> -->

    <!-- template标签渲染之后是不存在的 -->
    <template v-if="list.length">
        <ul v-for="item in list" :key="item.id">
            <li>{{ item.name }}</li>
        </ul>
    </template>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:[]
        };
    },

    created() {
        // 发送ajax获取数据，放进data里
        // 第一个小坑
        // 如果挂载数据比ajax快，页面渲染时就还没有数据可以渲染，报错
        // li标签渲染时拿不到item.name的数据，就会报错，name没定义
        // 解决：加v-if
        // 遇到第二个坑
        // v-if和v-for不能共用，不能写在同一个节点
        getList().then(res=>{
            this.list=res.data;
        });
    },
}
</script>

<style>

</style>