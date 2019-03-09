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
        <el-menu-item index="1">
           <i class="el-icon-edit"></i>
           <span slot="title">个人信息编辑</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-document"></i>
            <span slot="title">数据接入</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-tickets"></i>
            <span slot="title">数据展示</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-back"></i>
            <span slot="title">登出</span>
        </el-menu-item>
    </el-menu>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

@Component({
    data() {
        return {
            isCollapse: true
        }
    }
})
export default class AsideBar extends Vue {
    constrolSideBar() {
        this.$data.isCollapse = !this.$data.isCollapse
        setTimeout(() => {}, 0) 
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

    created() {
        this.check()
    }
}
</script>

<style lang='less' scoped>
.el-menu-vertical-demo {
    padding-top: 10%;
    height: 100%;
    max-width: 20%;
    overflow: hidden;
    &:not(.el-menu--collapse) {
        width: 20%;
        min-height: 400px;        
    }
    .iconfont {
        font-size: 30px;
        color: #409EFF;
        opacity: 0.5;
    }
}
</style>