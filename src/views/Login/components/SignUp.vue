<template>
    <el-dialog title="sign up" :before-close="closeDialog" :visible.sync="isShow" status-icon>
        <el-form label-width="80px" :model="form" ref="elForm" :rules="rules">
            <el-form-item label="username:" prop="username" required>
                <el-input v-model="form.username" placeholder="please write your username"></el-input>
            </el-form-item>
            <el-form-item label="password:" prop="password" required>
                <el-input v-model="form.password" placeholder="please write your password" show-password></el-input>
            </el-form-item>
            <el-form-item label="check:" prop="checkPassword" required>
                <el-input v-model="form.checkPassword" placeholder="please check your password" show-password></el-input>
            </el-form-item>
            <el-form-item label="email:" prop="email" required>
                <el-input v-model="form.email" placeholder="please write your email"></el-input>
            </el-form-item>
            <el-form-item label="phone:" prop="phone" required>
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
        var validateCheck = (rule: any, value: string, callback: any) => {
            if (!value) {
                return callback(new Error('password is not allowed be empty'))
            } else if (this.$data.form.password !== value) {
                return callback(new Error('The two passwords are inconsistent!'))
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
                ],
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                phone: [
                    { validator: validatePhone, trigger: 'blur' }
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
            let data = await this.$store.dispatch('signUp', this.$data.form)
            if(data.status === 0) {
                this.$message({
                    type: 'warning',
                    message: data.msg
                })                
            } else if(data.status === -1) {
                this.$message({
                    type: 'error',
                    message: data.msg
                })
            } else {
                this.$message({
                    message: data.msg,
                    type: 'success'
                });
                this.closeDialog()
                this.$router.push('/users')
            }
        } else {
            this.$message({
                type: 'error',
                message: '请按要求填写'
            })           
        }
    }

    reset(formName: string) {
         (this.$refs[formName] as any).resetFields();
    }
}
</script> 

<style lang='less' scoped>
</style>