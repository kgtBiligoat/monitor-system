<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>设置展示的数据</span>
             <i style="float: right; padding: 3px 0; color: #409eff" class="el-icon-circle-close icon" @click="close"></i>
        </div>
        <el-row class="row">
            <label>选择展示数据：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="selectData" placeholder="选择展示数据" >
                <el-option
                    v-for="item in selectOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>            
        </el-row>
        <el-row v-show="selectData !== ''" style="margin-bottom: 10px;">
            <el-col v-for="(item, index) in cpu"  v-show="selectData === 'CPU'">
                {{selectData + (index + 1)}}：{{cpu[index]}} {{getDW}}
            </el-col>
            <el-col v-for="(item, index) in cpu"  v-show="selectData === '硬盘' || selectData === '数据库' || selectData === '内存'">
                {{msg1[index]}}：{{cpu[index]}} {{getDW}}
            </el-col>
        </el-row>
        <el-row class="row">
            <label >选择图的类型：</label>
            <el-select style="display: inline-block; width: 80%;" v-model="graphData" placeholder="选择图的类型" :disabled="selectData === ''" >
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
            <el-select style="display: inline-block; width: 80%;" v-model="timeData" placeholder="选择时间段" :disabled="graphData === 'pie' || graphData === ''" >
                <el-option
                    v-for="item in timeOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                ></el-option>
            </el-select> 
        </el-row>
        <el-row>
            <label @click="test">展现:</label>
            <!-- <column-chart v-show="graphData === 'column' && timeData !== ''" :labels="labels" :data="data" :bc="bc" :label="label"></column-chart>
            <line-chart v-show="graphData === 'line' && timeData !== ''" :labels="labels" :data="data" :bc="bc" :label="label"></line-chart> -->
            <!-- 11111111 -->
            <pie-chart v-show="graphData === 'pie' && selectData === 'CPU' " :labels="pieData.CPU.labels" :data="pieData.CPU.data" :bc="pieData.CPU.bc" ></pie-chart>
            <pie-chart v-show="graphData === 'pie' && selectData === '硬盘'  " :labels="pieData.yingpan.labels" :data="pieData.yingpan.data" :bc="pieData.yingpan.bc" ></pie-chart>
            <pie-chart v-show="graphData === 'pie' && selectData === '数据库'  " :labels="pieData.shujuku.labels" :data="pieData.shujuku.data" :bc="pieData.shujuku.bc" ></pie-chart>
            <pie-chart v-show="graphData === 'pie' && selectData === '内存'  " :labels="pieData.neichun.labels" :data="pieData.neichun.data" :bc="pieData.neichun.bc" ></pie-chart>
            <!-- 111111111 -->

            <!-- 22222222 -->
            <line-chart v-show="graphData === 'line' && selectData === 'CPU' && timeData == '12h'" 
                :labels="lineData.CPU.H12.labels" 
                :data="lineData.CPU.H12.data" 
                :bc="lineData.CPU.H12.bc" 
                :label="lineData.CPU.H12.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === 'CPU' && timeData == '24h'" 
                :labels="lineData.CPU.H24.labels" 
                :data="lineData.CPU.H24.data" 
                :bc="lineData.CPU.H24.bc" 
                :label="lineData.CPU.H24.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '硬盘' && timeData == '12h'" 
                :labels="lineData.yingpan.H12.labels" 
                :data="lineData.yingpan.H12.data" 
                :bc="lineData.yingpan.H12.bc" 
                :label="lineData.yingpan.H12.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '硬盘' && timeData == '24h'" 
                :labels="lineData.yingpan.H24.labels" 
                :data="lineData.yingpan.H24.data" 
                :bc="lineData.yingpan.H24.bc" 
                :label="lineData.yingpan.H24.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '数据库' && timeData == '12h'" 
                :labels="lineData.shujuku.H12.labels" 
                :data="lineData.shujuku.H12.data" 
                :bc="lineData.shujuku.H12.bc" 
                :label="lineData.shujuku.H12.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '数据库' && timeData == '24h'" 
                :labels="lineData.shujuku.H24.labels" 
                :data="lineData.shujuku.H24.data" 
                :bc="lineData.shujuku.H24.bc" 
                :label="lineData.shujuku.H24.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '内存' && timeData == '12h'" 
                :labels="lineData.neichun.H12.labels" 
                :data="lineData.neichun.H12.data" 
                :bc="lineData.neichun.H12.bc" 
                :label="lineData.neichun.H12.label"></line-chart>
            <line-chart v-show="graphData === 'line' && selectData === '内存' && timeData == '24h'" 
                :labels="lineData.neichun.H24.labels" 
                :data="lineData.neichun.H24.data" 
                :bc="lineData.neichun.H24.bc" 
                :label="lineData.neichun.H24.label"></line-chart>
            <!-- 2222222222 -->

            <!-- 33333333 -->
            <column-chart v-show="graphData === 'column' && selectData === 'CPU' && timeData == '12h'" 
                :labels="lineData.CPU.H12.labels" 
                :data="lineData.CPU.H12.data" 
                :bc="lineData.CPU.H12.bc" 
                :label="lineData.CPU.H12.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === 'CPU' && timeData == '24h'" 
                :labels="lineData.CPU.H24.labels" 
                :data="lineData.CPU.H24.data" 
                :bc="lineData.CPU.H24.bc" 
                :label="lineData.CPU.H24.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '硬盘' && timeData == '12h'" 
                :labels="lineData.yingpan.H12.labels" 
                :data="lineData.yingpan.H12.data" 
                :bc="lineData.yingpan.H12.bc" 
                :label="lineData.yingpan.H12.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '硬盘' && timeData == '24h'" 
                :labels="lineData.yingpan.H24.labels" 
                :data="lineData.yingpan.H24.data" 
                :bc="lineData.yingpan.H24.bc" 
                :label="lineData.yingpan.H24.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '数据库' && timeData == '12h'" 
                :labels="lineData.shujuku.H12.labels" 
                :data="lineData.shujuku.H12.data" 
                :bc="lineData.shujuku.H12.bc" 
                :label="lineData.shujuku.H12.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '数据库' && timeData == '24h'" 
                :labels="lineData.shujuku.H24.labels" 
                :data="lineData.shujuku.H24.data" 
                :bc="lineData.shujuku.H24.bc" 
                :label="lineData.shujuku.H24.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '内存' && timeData == '12h'" 
                :labels="lineData.neichun.H12.labels" 
                :data="lineData.neichun.H12.data" 
                :bc="lineData.neichun.H12.bc" 
                :label="lineData.neichun.H12.label"></column-chart>
            <column-chart v-show="graphData === 'column' && selectData === '内存' && timeData == '24h'" 
                :labels="lineData.neichun.H24.labels" 
                :data="lineData.neichun.H24.data" 
                :bc="lineData.neichun.H24.bc" 
                :label="lineData.neichun.H24.label"></column-chart>
            <!-- 333333 -->
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
import { pieData, lineData } from './graphData'
var os = require('os')
@Component({
    data() {
        return {
            selectData: '',
            selectOptions: selectOptions,
            graphData: '',
            graphOptions: graphOptions,
            timeData: '',
            timeOptions: timeOptions,

            msg: {},
            pieData: pieData,
            lineData: lineData,

            msg1: ['总容量','剩余容量' , '已使用容量'],
            cpu: '',
        }
    },
    components: { columnChart, lineChart, pieChart }
})
export default class EditData extends Vue {
    

    test() {
        console.log(1)
        this.$data.data[0] ++
    }

    get getDW() {
        let data = this.$data.selectData
        if(data === 'CPU') return 'Hz'
        else if (data === '硬盘' || data === '数据库' || data === '内存') return "GB"
        else return 'test' 
    }

    get graphOptionsSelected() {
        switch(this.$data.selectData) {
            case 'CPU': return 
            case '内存': return 
            case '硬盘': return 
            case '数据库': return 
        }
    }

    // setData() {
    //     this.$data.msg.dataName = this.$data.selectData
    // }

    // async setGraphType() {
    //     this.$data.msg.dataType = this.$data.graphData
    //     if(this.$data.graphData === 'pie') {
    //         let data = await axios.get('/api/users/getdata', {
    //             params: {
    //                 ...this.$data.msg
    //             }
    //         })
    //         this.$data.bc = data.data.bc
    //         this.$data.data = data.data.data
    //         this.$data.labels = data.data.labels
    //         console.log(data)
    //     } else return
    // }

    // async setTime() {
    //     this.$data.msg.timeData = this.$data.timeData
    //     let data = await axios.get('/api/users/getdata', {
    //             params: {
    //                 ...this.$data.msg
    //             }
    //         })
    //     // this.$data.bc = data.data.bc
    //     // this.$data.data = data.data.data
    //     // this.$data.labels = data.data.labels
    //     console.log(data)
    // }

    mounted() {

        setInterval(async () => {
            let data = await axios.get('/api/users/get', {
                params: {
                    type: this.$data.selectData
                }
            })
            console.log(data)
            this.$data.cpu = data.data
        },1000)
        console.log(os.loadavg())
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