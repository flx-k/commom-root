<template>
<div id="setting-page">
    <div class="left-menu">
        <div style="height:50px;"></div>
        <div class="menu" v-for="submenu in submenuArrs" :key="submenu.id" 
        :class="[submenu.id===activeMenuArrs[2]?'select':'']" 
        @click="gotoPath(submenu.path)">{{submenu.title}}</div>

    </div>
    <div class="view">
        <router-view class="view-body"></router-view>
    </div>
</div>
</template>

<style lang="scss" scoped>
#setting-page {
    .view {
        width: calc(100% - 100px);
        height: 100%;
        left: 100px;
        position: absolute;
        padding:0 10px;
        padding-top: 10px;
    }
    .left-menu {
        width: 100px;height: 100%;
        position: absolute;
        text-align: center;
        background: #bbbbbb;
        .menu {
            height: 50px;
            line-height: 50px;
        }
        .menu:hover{
            height: 50px;
            line-height: 50px;
            background:#ffffff; 
        }
        .menu.select{
            height: 50px;
            line-height: 50px;
            background:#eeeeee; 
        }
    }
}
</style>

<script>
import {
    mapGetters
} from "vuex";
export default {
    name: 'HelloWorld',
    data() {
        return {
            activeMenu:"/",
            msg: 'Welcome to Your Vue.js App'
        }
    },
    computed: {
        ...mapGetters(["submenuArrs", "activeMenuArrs"])
    },
    mounted(){
        this.$store.commit('menu/setPath',this.$route.path)
    },
    methods: {
        gotoPath(path) {
            this.activeMenu=path;
            this.$router.push({
                path: '/data-base/' + path
            });
        }
    }
}
</script>
