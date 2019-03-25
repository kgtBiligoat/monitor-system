<template>
    <div class="user">
        <Edit v-if="name !== 'Show'"></Edit>
        <Show v-else></Show>        
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import eventBus from '@/views/Users/eventBus'

import Edit from './Edit.vue'
import Show from './Show.vue'



@Component({
    components: { Edit, Show },
    data() {
        return {
            name: 'Show',
            allName: ['Show', 'Edit']
        }
    }
})
export default class Message extends Vue {

    @Watch('name', { immediate: true }) 
    activeIndex() {
        eventBus.$emit('activeIndexChange', this.$data.allName.indexOf(this.$data.name))
    }

    mounted() {
        eventBus.$on('change', (val: any) => {
            this.$data.name = val.enName
        })        
    }
}
</script>

<style lang='less' scoped>
.user {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>