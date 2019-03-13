<template>
    <div class="login" >
        <img 
            src="@/assets/login.png" 
            style="position:absolute;
            left:30px;
            top:30px;"
        >
        <div class="login-input__group">
            <el-input placeholder="please input username" v-model="username">
                <template slot="prepend">username</template>
            </el-input>
            <el-input placeholder="please input pasdword" v-model="password" show-password>
                <template slot="prepend">password</template>
            </el-input>            
        </div>
        <el-row>
            <el-button plain type="primary" style="margin-right: 50px;" @click="signIn">sign in</el-button>
            <el-button plain type="primary" @click="signUp" >sign up</el-button>
        </el-row>

        <sign-up v-show="isSignUpShow" :isSignUpShow.sync="isSignUpShow"></sign-up>

    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import SignUp from './components/SignUp.vue'

@Component({
    data() {
        return {
            username: '',
            password: '',
            isSignUpShow: false,
        };
    },
    components: { SignUp }
})
export default class Login extends Vue {
    signUp() {
        this.$data.isSignUpShow = true;
    }

    async signIn() {
        let param = {
            ...this.$data
        }
        let data = await this.$store.dispatch('signIn', param)
        if(data.status === 1) {                
            this.$message({
                message: data.msg,
                type: 'success'
            });
            setTimeout(() => {
                this.$router.push('/users')
            }, 1000)
        } else {
            this.$message({
                message: data.msg,
                type: 'error'
            });            
        }
    }

    change(e: any) {
        console.log(e)
    }

}
</script>

<style lang='less' scoped>
.login{
    background: url(assets/background.jpg);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .login-input__group {
        display: flex;
        flex-direction: column;
        width: 400px;
        height: 100px;
        justify-content: space-between;
        margin-bottom: 20px;
        .el-input {
            width: 400px;
        }        
    }

}
</style>