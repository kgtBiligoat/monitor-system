<template>
    <div class="mainBar">
        <router-view></router-view>
        11112121
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component
export default class MainBar extends Vue {
    @Prop({
        type: Boolean
    })
    isCollapse!: boolean
}
</script>

<style lang='less' scoped>
.MainBar {
    display: flex;
    justify-content: center;  
    height: 100%;
    width: 100%;  
}
</style>