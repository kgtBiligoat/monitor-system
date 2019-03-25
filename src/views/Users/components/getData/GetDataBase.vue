<template>
    <div class="getDataBase">
        <el-card>
            <div slot="header" >
                <span>接入数据库</span>
            </div>
            <div class="row">
                <label>当前数据库：</label>
            </div>
            <div class="row">
                <label>数据库选择：</label>
                <el-select v-model="value" placeholder="请选择数据库">
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
                    <el-table-column label="数据库名"></el-table-column>
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
            options: [{value: 3000, label: 'Users'}],
            value: ''
        }
    }
})
export default class getDataBase extends Vue {}
</script>

<style lang='less' scoped>
.getDataBase {
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