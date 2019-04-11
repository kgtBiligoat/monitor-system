<template>
    <div class="mainBar" :class="{ 'trigger': isCollapse }">
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
    position: relative;
    left: 30%;
    min-height: 90%;
    width: 70%;  
    transition: all .3s;
}
.trigger {
    transition: all .3s;
    left: 0%;
    width: 100%;  
}
</style>