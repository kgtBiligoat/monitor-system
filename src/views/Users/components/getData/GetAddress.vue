<template>
    <div class="getAddress">
        <el-card>
            <div slot="header" >
                <span>接入地址</span>
            </div>
            <div class="row">
                <label>当前代理：localhost:{{value}}</label>
            </div>
            <div class="row">
                <label>代理选择：</label>
                <el-select v-model="value" placeholder="请选择地址">
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    >
                    </el-option>
                </el-select>            
            </div>
            <div class="row">
                <el-table
                    border
                >
                    <el-table-column type="expand"></el-table-column>
                    <el-table-column label="地址名"></el-table-column>
                    <el-table-column label="描述"></el-table-column>
                </el-table>                 
            </div>
           
        </el-card>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            options: [{value: 3000, label: 'localhost:3000'}],
            value: ''
        }
    }
})
export default class getAddress extends Vue {}
</script>

<style lang='less' scoped>
.getAddress {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 0px 10%;
    .row {
        margin-bottom: 20px;
        .el-table {
            min-height: 300px;
        }
    }
}
</style>