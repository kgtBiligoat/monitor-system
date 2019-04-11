<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>设置展示的数据</span>
        </div>
        <el-row class="row">
            <label>选择展示数据：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="selectData" placeholder="选择展示数据">
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
            <el-select style="display: inline-block; width: 80%;" v-model="graphData" placeholder="选择图的类型" :disabled="selectData === ''">
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
            <el-select style="display: inline-block; width: 80%;" v-model="timeData" placeholder="选择时间段" :disabled="graphData === 'pie' || graphData === ''">
                <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select> 
        </el-row>
        <el-row>
            <label>展现:</label>
        </el-row>

    </el-card>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import columnChart from './component/ColumnChart'
import lineChart from './component/LineChart'
import pieChart from './component/PieChart'
@Component({
    data() {
        return {
            selectData: '',
            selectOptions:[
                {
                    label: 'CPU',
                    value: 'CPU'
                },
                {
                    label: '硬盘',
                    value: '硬盘'
                },
                {
                    label: '内存',
                    value: '内存'
                },
                {
                    label: '网络流量',
                    value: '网络流量'
                },
                {
                    label: '数据库',
                    value: '数据库'
                }
            ],
            graphData: '',
            graphOptions: [
                {
                    label: '饼图',
                    value: 'pie'
                },
                {
                    label: '柱状图',
                    value: 'column'
                },
                {
                    label: '折线图',
                    value: 'line'
                },
                {
                    label: '雷达图',
                    value: 'radar'
                },
            ],
            timeData: '',
            timeOptions: [
                {
                    label: '24h',
                    valeu: '24h'
                }, 
                {
                    value: '12h',
                    label: '12h'
                }
            ]
        }
    }
})
export default class EditData extends Vue {
    get graphOptionsSelected() {
        switch(this.$data.selectData) {
            case 'CPU': return 
            case '内存': return 
            case '硬盘': return 
            case '网络流量': return 
            case '数据库': return 
        }
    }
}
</script>
<style lang='less' scoped>
.el-card {
    margin-bottom: 30px;
    .row {
        margin-bottom: 20px;
    }    
}

</style>