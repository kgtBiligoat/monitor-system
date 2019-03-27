<template>
    <div class="user">
        <column-chart v-if="name === 'columnChart'"></column-chart>
        <line-chart v-else-if="name === 'lineChart'"></line-chart>
        <pie-chart v-else></pie-chart>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import columnChart from './ColumnChart.vue'
import lineChart from './LineChart.vue'
import pieChart from './PieChart.vue'
import eventBus from '@/views/Users/eventBus'

@Component({
    components: { columnChart, lineChart, pieChart },
    data() {
        return {
            name: 'lineChart',
            allName: ['lineChart', 'pieChart', 'columnChart']
        }
    }
})
export default class ShowData extends Vue {
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
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>