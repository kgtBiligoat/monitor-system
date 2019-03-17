<template>
    <el-card class="box-card" style="width: 80%;">
    <div slot="header" class="clearfix">
        <span>个人信息（展示态）</span>
    </div>
    <div v-for="(item, index) in userMessage" :key="index" class="text item" v-show="index !== '_id' && index !== '__v'">
        {{toCn(index)}}:&nbsp;&nbsp;{{getSex(item)}}
    </div>
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
            case 'sex': 
                return '性别'
        }
    }

    getSex(name: String) {
        if(name === 'man') return '男'
        else if(name === 'women') return '女'
        else return name
    }

    async getUserInfo() {
        let a = await this.$store.dispatch('check')
        return a
    }

    mounted() {
        let a = this.getUserInfo().then((val: any) => { 
             this.$data.userMessage = { ...val.data }
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