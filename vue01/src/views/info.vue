<template>
    <div>
        Hello I am  Yaozhuomin
        <button type="button" @click="add()">添加</button>
    </div>
</template>

<script>
import store from '@/store'
export default {
    name: "info",
    store,
    methods: {
        add () {
            console.log('add Event from info')
            store.commit('increase')
        }
    },
}
</script>

<style scoped>


</style>

