<template>
    <div>
        <cpu></cpu>
        <neicun></neicun>
        <shujuku></shujuku>
        <yinpan></yinpan>
        <all></all>
    </div>
</template>
<script >
import all from './all.vue'
import cpu from './cpu.vue'
import shujuku from './shujuku.vue'
import yinpan from './yinpan.vue'
import neicun from './neicun.vue'

export default {
    components: {
        all,
        cpu,
        shujuku,
        yinpan,
        neicun
    }
}
</script>
<style >
</style>