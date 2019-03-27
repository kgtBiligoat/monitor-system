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
                    :data="tableData"
                >
                    <el-table-column type="expand">
                        <template slot-scope="scope">
                            <el-form>
                                <el-form-item label="用户名:"> {{scope.row}}</el-form-item>
                                <el-form-item label="数据库名:">{{scope.row}}</el-form-item>
                                <el-form-item label="当前空间:">{{scope.row}}</el-form-item>
                                <el-form-item label="描述:">{{scope.row}}</el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="数据库名" prop="name"></el-table-column>
                    <el-table-column label="描述" prop="description"></el-table-column>
                </el-table>                 
            </div>
        </el-card>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios'
@Component({
    data() {
        return {
            options: [ {value: 3000, label: 'Users'} ],
            value: '',
            tableData: [
                {
                    name: 'test2',
                    description: '999999999999999999'
                }
            ]
        }
    }
})
export default class getDataBase extends Vue {

}
</script>

<style lang='less' scoped>
.getDataBase {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    padding: 0px 10%;
    .row {
        margin-bottom: 20px;
        .el-form {
            .el-form-item {
                margin-bottom: 0px;
                /deep/.el-form-item__label {
                    color: rgb(153, 169, 191)
                }                
            }

        }
    }
}
</style>