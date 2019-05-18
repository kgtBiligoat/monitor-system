<template>
    <div class="user">
       
            <edit v-for="item in number" :key="item" @close="deleteRow(item)" v-if="name === 'EditData'"></edit>     
            <monitor v-else></monitor>

       
        <i class="el-icon-circle-plus class" @click="addNewRow"  v-show="name === 'EditData'">添加新的需要展示的数据</i>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import Edit from './Edit.vue'
import { Component, Prop, Watch } from 'vue-property-decorator';
import eventBus from '@/views/Users/eventBus'
import monitor from '@/views/Users/components/dataMonitor/index.vue'

@Component({
    components: { Edit, monitor },
    data() {
        return {
            name: 'EditData',
            allName: ['EditData'],
            number: [ 0 ]
        }
    }
})
export default class ShowData extends Vue {
    @Watch('name', { immediate: true }) 
    activeIndex() {
        eventBus.$emit('activeIndexChange', this.$data.allName.indexOf(this.$data.name))
    }

    deleteRow(index: number) {
        this.$data.number.splice(this.$data.number.indexOf(index), 1)
    }

    addNewRow() {
        this.$data.number.push(this.$data.number[this.$data.number.length-1] + 1)
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
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    .class {
        opacity: 0.8;
        color: #409eff;
        margin-bottom: 40px;
        & {
            cursor: pointer;
        }
    }
}
</style>