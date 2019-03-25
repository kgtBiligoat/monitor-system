<template>
    <div class="user">
        <get-address v-if="name === 'getAddress'"></get-address>
        <get-data-base v-else></get-data-base>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import getAddress from './GetAddress.vue'
import getDataBase from './GetDataBase.vue'

import eventBus from '@/views/Users/eventBus'
@Component({
    components: { getAddress, getDataBase },
    data() {
        return {
            name: 'getAddress',
            allName: ['getAddress', 'getDataBase']
        }
    }
})
export default class GetData extends Vue {

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