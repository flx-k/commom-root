<template>
<div class="theme-page">
    <ColorPicker v-model="color1" />
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
          color1: '#19be6b',
          msg: 'Welcome to Your Vue.js App'
        }
    }
}
</script>
