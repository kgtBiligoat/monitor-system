<template>
        <el-menu default-active="0" class="el-menu-demo" mode="horizontal" >
            <el-menu-item v-for="(item, index) in name" :index="String(index)" :key="index">{{item}}</el-menu-item>
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
    @Prop()
    name!: any

}
</script>

<style lang='less' scoped>
.el-menu-demo {
    display: flex;
    justify-content: center;
    transition: all .3s;
    width: 100%;
}
</style>