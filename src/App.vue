<template>
<div id="app">
    <div id="body">
        <div id="main-menu">
            <div>
                <div class="logo">
                    <!-- <Spin size="large"></Spin> -->
                    <!-- <Icon type="ios-briefcase" size="30" /> -->
                </div>
                <div class="menu" :class="[activeIndex=='work'?'select':'']" @click="gotoPath('work')">
                    menu1
                    <!-- <Icon type="ios-briefcase" size="30" /> -->
                </div>
                <div class="menu" :class="[activeIndex=='date-base'?'select':'']" @click="gotoPath('date-base')">
                    menu2
                    <!-- <Icon type="ios-albums" size="30" /> -->
                </div>
                <div class="menu" :class="[activeIndex=='setting'?'select':'']" @click="gotoPath('setting')">
                    menu3
                    <!-- <Icon type="md-settings" size="30" /> -->
                </div>
            </div>
        </div>
        <div class="view">
            <div class="header"></div>
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
    methods: {
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
            background: #333333;

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
                color: #ffffff;
            }
            .menu.select {
                    color: black;
                    background: #999999;
                }

            .menu:hover {
                // transform: scale(1.2);
                transition: all .75s;
                color: black;
                background: #777777;
            }

        }
    }

}
</style>
