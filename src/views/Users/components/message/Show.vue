<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>个人信息（展示态）</span>
        </div>
        <div v-for="(item, index) in userMessage" :key="index" class="text item" v-show="index !== '_id' && index !== '__v'">
            {{toCn(index)}}:&nbsp;&nbsp;{{getSex(item, index)}}
        </div>
        <el-progress style="width: 100%;" :percentage="Number(percent)"></el-progress>
        <el-alert style="width: 94%;" title="请在“修改”中完善个人信息" type="warning" v-show="Number(percent) < 100"> </el-alert>
    </el-card>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            userMessage: {}
        }
    }
})
export default class ShowMessage extends Vue {
    toCn(enName: String) {
        switch(enName) {
            case 'username' :
                return '用户名'
            case 'password' : 
                return '密码'
            case 'phone' :
                return '电话'
            case 'email' :
                return '邮箱'
            case 'identity' :
                return '身份证号'
            case 'sex': 
                return '性别'
            case 'address':
                return '住址'
            default: 
                return ''
        }
    }

    get percent() {
        let sum = Object.keys(this.$data.userMessage).length - 2
        let simple = 0
        Object.keys(this.$data.userMessage).forEach((item: any) => {
            if(this.$data.userMessage[item] <= -1 || this.$data.userMessage[item] === '') {}
            else simple++
        })
        let temp = (simple-2)/sum * 100
        return temp.toFixed(0)
    }

    async getUserInfo() {
        let a = await this.$store.dispatch('check')
        return a
    }

    getSex(name: String, index: String) {
        if (name === 'man') return '男'
        else if (name === 'women') return '女'
        else if (index === 'password') return '******'
        else if (name === '') return '无'
        else return name
    }

    mounted() {
        let a = this.getUserInfo().then((val: any) => { 
             this.$data.userMessage = { ...this.$store.state.UserMsg }
        })
    }
}
</script>

<style lang='less' scoped>
.text {
    font-size: 25px;
}
.item {
    margin-bottom: 18px;
}
</style>