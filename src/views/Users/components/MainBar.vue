<template>
    <div class="mainBar">
        <keep-alive>
            <router-view></router-view>             
        </keep-alive>
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
.mainBar { 
    height: 90%;
    width: 100%;  
}
</style>