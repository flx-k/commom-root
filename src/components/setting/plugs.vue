<template>
<div class="plugs">
    <Divider orientation="left">插件列表</Divider>
    <CellGroup>
        <Cell>
            <el-switch v-model="plugsStatusMap.a" active-color="#13ce66"></el-switch>
            A
        </Cell>
        <Cell>
            <el-switch v-model="plugsStatusMap.b" active-color="#13ce66"></el-switch>
            B
        </Cell>
    </CellGroup>
    <!-- <circle-menu type="middle-around" :number="4"  animate="animated jello" mask='false' circle>
        <button type="button" slot="item_btn"></button>
        <a slot="item_1" class="fa fa-twitter fa-lg"></a>
        <a slot="item_2" class="fa fa-weixin fa-lg"></a>
        <a slot="item_3" class="fa fa-weibo fa-lg"></a>
        <a slot="item_4" class="fa fa-github fa-lg"></a>
    </circle-menu>
    <circle-menu type="middle-around" :number="5" mask='false' >
        <a slot="item_1" class="fa fa-twitter fa-lg"></a>
        <a slot="item_2" class="fa fa-weixin fa-lg"></a>
        <a slot="item_3" class="fa fa-weibo fa-lg"></a>
        <a slot="item_4" class="fa fa-weibo fa-lg"></a>
        <a slot="item_5" class="fa fa-weibo fa-lg"></a>
    </circle-menu> -->
</div>
</template>

<script>
import CircleMenu from 'vue-circle-menu'
export default {
    name: 'plugs-page',
    data() {
        return {
            a: true,
            b: false,
            plugsStatusMap: {
                a: false,
                b: true
            },
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        CircleMenu
    },
    mounted() {
        this.$store.commit('menu/setPath', this.$route.path)
    }
}
</script>
