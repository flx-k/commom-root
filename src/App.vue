<template>
<div id="app">
    <div id="body">
        <div id="main-menu">
            <div>
                <div class="logo">
                </div>
                <div v-for="menu in $store.getters.menuArrs" :key="menu.id" class="menu" :class="[$store.getters.activeMenuArrs[1]==menu.id?'select':'']" @click="gotoPath(menu.path)">
                    {{menu.title}}
                </div>
            </div>
        </div>
        <div class="view">
            <div class="header">{{$store.getters.activeMenuArrs}}</div>
            <router-view class="view-body"></router-view>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            activeIndex: '/', 
        };
    },
    mounted(){
        this.setMenu();
        this.$store.commit('set',this.$route.path) 
    },
    methods: {
        setMenu(){
            let arr=[
                {
                    id:'work',
                    path:'work',
                    title:'工作'
                },
                {
                    id:'data-base',
                    path:'data-base',
                    title:'数据库'
                },{
                    id:'setting',
                    path:'setting',
                    title:'设置'
                }
            ]
             this.$store.commit('initMenu',arr)
        },
        gotoPath(path) {
            this.activeIndex=path
            this.$router.push({
                path: "/" + path
            });
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    height: 100%;
    width: 100%;
    position: absolute;

    #body {
        width: 100%;
        height: 100%;
        position: absolute;

        .view {
            width: calc(100% - 50px);
            height: 100%;
            left: 50px;
            position: absolute;

            .header {
                background: #666666;
                height: 50px;
                width: 100%;
                color: #ffffff;
                line-height: 50px;
            }

            .view-body {
                width: 100%;
                height: calc(100% - 50px);
                position: absolute;
            }
        }

        #main-menu {
            width: 50px;
            height: 100%;
            position: absolute;
            background: #222222;

            .logo {
                color: #ffffff;
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-align: center
            }

            .menu {
                width: 100%;
                height: 50px;
                line-height: 50px;
                text-align: center;
                color: #f5f5f5;
            }
            .menu.select {
                font-weight:bold;
                    color: black;
                    background: #999999;
                }

            .menu:hover {
                transform: scale(1.05);
                transition: all .5s;
                color: whitesmoke;
                background: #333333;
                
            }

        }
    }

}
</style>
