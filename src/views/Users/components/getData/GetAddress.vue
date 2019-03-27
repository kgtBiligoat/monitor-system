<template>
    <div class="getAddress">
        <el-card>
            <div slot="header" >
                <span @click="getData">接入地址</span>
                <el-button style="position: relative; left: 80%;" @click="edit">{{editMsg}}</el-button>
            </div>
            <div class="row">
                <label>当前代理：{{toLocalhost(value)}}</label>
            </div>
            <div class="row">
                <label>代理选择：</label>
                <el-select v-model="value" placeholder="请选择地址" @visible-change="getList" @change="getData" :disabled="isEdit">
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
                                <el-form-item label="用户名:"> {{scope.row.username}}</el-form-item>
                                <el-form-item label="主机名:">{{scope.row.PcName}}</el-form-item>
                                <el-form-item label="域名:">{{scope.row.YuMing}}</el-form-item>
                                <el-form-item label="端口号:">{{scope.row.port}}</el-form-item>
                                <el-form-item label="URL:">{{scope.row.URL}}</el-form-item>
                                <el-form-item label="描述:">{{scope.row.description}}</el-form-item>
                            </el-form>
                        </template>
                    </el-table-column>
                    <el-table-column label="地址名" prop="URL"></el-table-column>
                    <el-table-column label="描述" prop="description"></el-table-column>
                </el-table>                 
            </div>
           
        </el-card>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import axios from 'axios'
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            options: [ {value: 3000, label: 'localhost:3000'} ],
            value: '无',
            tableData: [],
            isEdit: true
        }
    }
})
export default class getAddress extends Vue {
    get editMsg(){
        if(this.$data.isEdit) return '编辑'
        else return '确定'
    }

    async edit() {
        if(this.editMsg === '确定') {
            if(this.$data.value === '无') {
                this.$message({
                    type: 'error',
                    message: '请先选择数据库'
                })
                return 
            }
            let data = await axios.get('/api/users/setPortData')
            if(data.data.status !== -1) {
                this.$data.isEdit = !this.$data.isEdit
                this.$message({
                    type: 'success',
                    message: '选择成功'
                })
            } else {
                this.$message({
                    type: 'error',
                    message: '服务器端错误'
                })
                return
            }
        } else {
            this.$data.isEdit = !this.$data.isEdit            
        }
    }

    toLocalhost(name: String) {
        if(name === '无') return name
        else return 'localhost:' + name
    }

    async getData() {
        this.$data.tableData = []
        let data = await axios.get('/api/users/getPortData', {
            params: {
                username: this.$store.state.UserMsg.username
            }
        })       
        this.$data.tableData.push(data.data.data)
    }
    async getList(item: boolean) {
        if(item === true) {
            // let data = await this.getData()
            // this.$data.tableData = data
        }
    }
}
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