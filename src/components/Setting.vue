<template>
<div id="setting-page">
    <div class="left-menu">
        <div class="menu" @click="gotoPath('authority')">authority</div>
        <div class="menu" @click="gotoPath('theme')">theme</div>
        <div class="menu" @click="gotoPath('plugs')">plugs</div>
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
        background: #999999;
        .menu {
            height: 50px;
            line-height: 50px;
        }
        .menu :hover{
            height: 50px;
            line-height: 50px;
            background:#CCCCCC; 
        }
    }
}
</style>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        gotoPath(path) {
            this.$router.push({
                path: '/setting/' + path
            });
        }
    }
}
</script>
