<template>
    <div class="mainBar" :class="[isCollapse?'MainBar-left':'MainBar-right']">
        <!-- <router-view></router-view> -->
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