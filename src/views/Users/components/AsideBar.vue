<template>
    <el-menu
        default-active="1"
        class="el-menu-vertical-demo"  
        :collapse="isCollapse" 
    >
        <img 
            src="@/assets/login.png" 
            style="position:absolute;
            left:7px;
            top:40px;
            "
        >
        <el-menu-item index="0" style="margin-bottom: 100px; display: flex; justify-content: center; align-items: center;">
            <i class="el-icon-menu iconfont" @click="constrolSideBar"></i>
            <el-tag type="sucess" slot="title" style="margin-left: 20px;">当前用户：{{username}}</el-tag>
        </el-menu-item>
        <el-menu-item index="1" @click="messageMange('messageMange')">
           <i class="el-icon-edit"></i>
           <span slot="title">信息管理</span>
        </el-menu-item>
        <el-menu-item index="2" @click="messageMange('getData')">
            <i class="el-icon-document"></i>
            <span slot="title">数据接入</span>
        </el-menu-item>
        <el-menu-item index="3" @click="messageMange('showData')">
            <i class="el-icon-tickets"></i>
            <span slot="title">数据展示</span>
        </el-menu-item>
        <el-menu-item index="4" @click="logout">
            <i class="el-icon-back"></i>
            <span slot="title">登出</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang='ts'>
import Vue from 'vue';
import axios from 'axios'
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component
export default class AsideBar extends Vue {
    @Prop({
        type: Boolean
    })
    isCollapse!: boolean

    constrolSideBar() {
        this.$emit('update:isCollapse', !this.isCollapse)
    }

    get username() {
        return this.$store.state.UserMsg.username
    }

    async check() {
        let data = await this.$store.dispatch('check')
        if(data.status === -1) {
            this.$message({
                message: '请先登录',
                type: 'error'
            });   
            this.$router.push('/')
        }
    }

    async logout() {
        let data = await this.$store.dispatch('logout')
        console.log(data[0])
        if(data[0].data.status === 1) {
            this.$router.push('/')
        }
    }

    async messageMange(name: String) {
        let data = await axios.get('/api/users/bar' ,{
            params: {
                name : name
            }
        })
        if (data.data.status === 1) {
            this.$emit('changeHeaderName', data.data.data.name)
            this.$router.push(`/users/${name}`)
        } else {
            this.$message({
                type: 'error',
                message: '服务器端错误'
            })
        }
        
    }
    created() {
        this.check()
        this.messageMange('messageMange')
    }
}
</script>

<style lang='less' scoped>
.el-menu-vertical-demo {
    z-index: 200;
    position: fixed;
    top: 0px;
    box-sizing: border-box;
    padding-top: 10%;
    height: 100%;
    max-width: 30%;
    overflow: hidden;
    &:after {
        content:"";
        display:block;
        clear:both;
        height:0;
    }
    &:not(.el-menu--collapse) {
        width: 30%;
        min-height: 400px;        
    }
    .iconfont {
        font-size: 30px;
        color: #409EFF;
        opacity: 0.5;
    }
}
</style>