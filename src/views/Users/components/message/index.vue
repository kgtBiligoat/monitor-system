<template>
    <div class="user">
        <component :is="name"></component>        
    </div>

</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import eventBus from './messageBus'

import Edit from './Edit.vue'
import Show from './Show.vue'



@Component({
    components: { Edit, Show },
    data() {
        return {
            name: 'Show'
        }
    }
})
export default class Message extends Vue {
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