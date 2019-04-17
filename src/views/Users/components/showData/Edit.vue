<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>设置展示的数据</span>
             <i style="float: right; padding: 3px 0; color: #409eff" class="el-icon-circle-close icon" @click="close"></i>
        </div>
        <el-row class="row">
            <label>选择展示数据：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="selectData" placeholder="选择展示数据" @change="getData">
                <el-option
                    v-for="item in selectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>            
        </el-row>
        <el-row class="row">
            <label >选择图的类型：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="graphData" placeholder="选择图的类型" :disabled="selectData === ''" @change="getData">
                <el-option
                    v-for="item in graphOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select> 
        </el-row>
        <el-row class="row">
            <label style="margin-right: 15px;">选择时间段：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="timeData" placeholder="选择时间段" :disabled="graphData === 'pie' || graphData === ''" @change="getData">
                <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select> 
        </el-row>
        <el-row>
            <label @click="getData">展现:</label>
            <column-chart v-show="graphData === 'column' && timeData !== ''" :labels="label" :data="data" label="2"></column-chart>
            <line-chart v-show="graphData === 'line' && timeData !== ''"></line-chart>
            <pie-chart v-show="graphData === 'pie' && timeData !== ''"></pie-chart>
        </el-row>

    </el-card>
</template>
<script lang='ts'>
import Vue from 'vue';
import axios from 'axios'
import { Component, Prop, Watch } from 'vue-property-decorator';
import { selectOptions , graphOptions, timeOptions} from './data'
import columnChart from './component/ColumnChart'
import lineChart from './component/LineChart'
import pieChart from './component/PieChart'
@Component({
    data() {
        return {
            selectData: '',
            selectOptions: selectOptions,
            graphData: '',
            graphOptions: graphOptions,
            timeData: '',
            timeOptions: timeOptions,
            data: [11,22],
            label: ['1h', '2h']
        }
    },
    components: { columnChart, lineChart, pieChart }
})
export default class EditData extends Vue {

    get getLabel() {
        if(this.$data.timeData === '24h') return [] 
    }

    get graphOptionsSelected() {
        switch(this.$data.selectData) {
            case 'CPU': return 
            case '内存': return 
            case '硬盘': return 
            case '网络流量': return 
            case '数据库': return 
        }
    }

    async getData() {
        
        this.$data.data[0] ++ 
        console.log(this.$data.data[0])      
    }

    mounted() {


    }

    close() {
        this.$emit('close')
    }
}
</script>
<style lang='less' scoped>
.el-card {
    margin-bottom: 30px;
    .row {
        margin-bottom: 20px;
    }    
    .icon {
        & {
            cursor: pointer;
        }
    }
}

</style>