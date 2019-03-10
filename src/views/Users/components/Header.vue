<template>
        <el-menu  class="el-menu-demo" mode="horizontal" :class="[isCollapse?'el-menu-demo-left':'el-menu-demo-right']">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
            <el-menu-item index="3" >消息中心</el-menu-item>
            <el-menu-item index="4">个人</el-menu-item>
        </el-menu>        

</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component
export default class Header extends Vue {
    @Prop({
        type: Boolean
    })
    isCollapse!: boolean
}
</script>

<style lang='less' scoped>
.el-menu-demo {
    display: flex;
    justify-content: center;
    position: absolute;
    transition: all .3s ease-in-out;
    &-left {
        left: 64px;
        width: 95%;;
    }
    &-right {
        left: 20%;
        width: 80%;
    }   
}
</style>