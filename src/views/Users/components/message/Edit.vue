<template>
    <el-card class="box-card" style="width: 80%;">
        <div slot="header" class="clearfix">
            <span>个人信息（展示态）</span>
        </div>
        <el-form label-position="right" label-width="80px" :model="userMessage" :rules="rules" ref="elForm">
            <el-form-item 
                v-for="(item, index) in userMessage" 
                :prop="index"
                :key="index"
                :label="toCn(index)"
            >
                <div>
                    <el-input v-show="toCn(index)" style="width: 80%;" v-model="userMessage[index]" v-if="index !== 'sex'"></el-input>
                    <div v-else>
                        <el-radio v-model="userMessage[index]" label="man">男</el-radio>
                        <el-radio v-model="userMessage[index]" label="women">女</el-radio>                    
                    </div>                    
                </div>
            </el-form-item>  
        </el-form>
        <el-button style="margin-left: 40%;" @click="submit">提交</el-button>
        <el-progress style="width: 100%;" :percentage="Number(percent)"></el-progress>
    </el-card>
</template>

<script lang='ts'>
import Vue from 'vue';
import eventBus from '@/views/Users/eventBus'
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
            var validateUser = (rule: any, value: string, callback: any) => {
            if (!value.trim()) {
                return callback(new Error('username is not allowed be empty'))
            } else if (/\d|\s/.test(value.trim())) {
                return callback(new Error('username should be alphabet'))
            }
            else {
                callback()
            }
        }
        var validatePass = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('password is not allowed be empty'))
            } else {
                callback()
            }
        }
        var validatePhone = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('password is not allowed be empty'))
            } else if (value.length !== 11) {
                return callback(new Error('The phone number must be 11!'))
            } else if (/[a-zA-Z]/.test(value)) {
                return callback(new Error('The phone can not have alphria'))
            } else {
                callback()
            }
        }
        var validateEmail = (rule: any, value: string, callback: any) => {
            var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
            if (!value) {
                return callback(new Error('password is not allowed be empty'))
            } else if (!reg.test(value)) {
                return callback(new Error('The email is not exist'))
            } else {
                callback()
            }
        }
        return {
            userMessage: {},
            rules: {
                username: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur' }
                ]
            }  
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

    async submit() {
        let isEmpty =  await this.isEmpty('elForm') as any
        console.log(isEmpty)
        if(!isEmpty) {
            let data = await this.$store.dispatch('changeUserInfo', this.$data.userMessage)
        } else {
            this.$message({
                type: 'error',
                message: '请按要求填写'
            })           
        }
        
    }

    isEmpty(formName: string) {
        return new Promise((resolve: any) => {
            (this.$refs[formName] as any).validate((valid: any) => {
                if (!valid) {
                    resolve(true)
                } else {
                    resolve(false)
                }
            });   
        })
    }

    mounted() {
        this.$data.userMessage = { ...this.$store.state.UserMsg }
    }
}
</script>

<style lang='less' scoped>

</style>