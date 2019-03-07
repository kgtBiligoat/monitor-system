<template>
    <el-dialog title="sign up" :before-close="closeDialog" :visible.sync="isShow" status-icon>
        <el-form label-width="80px" :model="form" ref="elForm" :rules="rules">
            <el-form-item label="username:" prop="username" required>
                <el-input v-model="form.username" placeholder="please write your username"></el-input>
            </el-form-item>
            <el-form-item label="password:" prop="password" required>
                <el-input v-model="form.password" placeholder="please write your password" show-password></el-input>
            </el-form-item>
            <el-form-item label="checkPassword:" prop="checkPassword" required>
                <el-input v-model="form.checkPassword" placeholder="please check your password" show-password></el-input>
            </el-form-item>
            <el-form-item label="email:">
                <el-input v-model="form.email" placeholder="please write your email"></el-input>
            </el-form-item>
            <el-form-item label="phone:">
                <el-input v-model="form.phone" placeholder="please write your phone"></el-input>
            </el-form-item>
            <el-form-item label="sex:">
                <el-radio v-model="form.sex" label="man"></el-radio>
                <el-radio v-model="form.sex" label="women"></el-radio>
            </el-form-item>
        </el-form>

        <el-row style="margin-left: 200px;">
            <el-button plain style="margin-right: 75px;" @click="reset('elForm')">reset</el-button>
            <el-button plain type="primary" @click="submit">confirm</el-button>            
        </el-row>

    </el-dialog>
</template>
<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    data() {
        var validateUser = (rule: any, value: string, callback: any) => {
            if (!value.trim()) {
                return callback(new Error('password is not allowed be empty'))
            } else if (/\d|\s/.test(value.trim())) {
                return callback(new Error('password should be alphabet'))
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
        var validateCheck = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('password is not allowed be empty'))
            } else if (this.$data.form.password !== value) {
                return callback(new Error('The two passwords are inconsistent!'))
            } else {
                callback()
            }
        }
        return {
            isShow: Boolean,
            form: {
                username: '',
                password: '',
                checkPassword: '',
                email: '',
                sex: 'man',
                phone: ''
            },      
            rules: {
                username: [
                    { validator: validateUser, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPassword: [
                    { validator: validateCheck, trigger: 'blur' }
                ]
            }     
        };
    }
})
export default class SignUp extends Vue {
    @Prop({
        type: Boolean
    })
    isSignUpShow!: boolean

    closeDialog() {
        this.$data.isShow = false;
        this.$emit('update:isSignUpShow', this.$data.isShow);
    }

    @Watch("isSignUpShow", { immediate: true }) 
    watchIsSignUpShow() {
        this.$data.isShow = this.isSignUpShow;
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

    async submit() {
        let isEmpty =  await this.isEmpty('elForm') as any
        if(!isEmpty) {
            console.log('提交')
            //TODO
        } else {
            console.log('校验')
            //TODO 
        }
    }

    reset(formName: string) {
         (this.$refs[formName] as any).resetFields();
    }
}
</script> 

<style lang='less' scoped>
</style>