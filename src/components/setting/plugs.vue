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
</div>
</template>

<script>
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
    mounted(){
      console.info(this.$route.path)
      // this.$store.commit('set')

      this.$store.commit('set',this.$route.path)
    }
}
</script>
