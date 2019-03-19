<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>个人信息（展示态）</span>
        </div>
        <el-form label-position="right" label-width="80px" :model="userMessage">
            <el-form-item 
                v-for="(item, index) in userMessage" 
                :key="index"
                :label="toCn(index)"
            >
                <el-input v-show="toCn(index)" style="width: 80%;" v-model="userMessage[index]"></el-input>
            </el-form-item>  
        </el-form>
        <el-button style="margin-left: 40%;" @click="submit">提交</el-button>
        <el-progress style="width: 100%;" :percentage="Number(percent)"></el-progress>
    </el-card>
</template>

<script lang='ts'>
import Vue from 'vue';
import eventBus from './messageBus'
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            userMessage: {}
        }
    }
})
export default class EditMessage extends Vue {
    toCn(enName: String) {
        switch(enName) {
            case 'username' :
                return '用户名:'
            case 'password' : 
                return '密码:'
            case 'phone' :
                return '电话:'
            case 'email' :
                return '邮箱:'
            case 'identity' :
                return '身份证号:'
            case 'sex': 
                return '性别:'
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

    submit() {}

    mounted() {
        this.$data.userMessage = { ...this.$store.state.UserMsg }
    }
}
</script>

<style lang='less' scoped>

</style>