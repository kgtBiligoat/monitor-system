<template>
    <div class="users">
        <div class="row">
            <aside-bar :isCollapse.sync="isCollapse" @changeHeaderName="changeHeaderName"></aside-bar>
            <div class="col">
                <head-bar :isCollapse="isCollapse" :name="name"></head-bar>
                <main-bar :isCollapse="isCollapse" ></main-bar>                
            </div>             
        </div>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import asideBar from './components/AsideBar.vue'
import headBar from './components/Header.vue'
import mainBar from './components/MainBar.vue'

@Component({
    components: { asideBar, headBar, mainBar },
    data() {
        return {
            isCollapse: false,
            name: ['展示', '修改']
        }
    }
})
export default class Users extends Vue {
    changeHeaderName(data: any) {
        this.$data.name = data
    }
}
</script>

<style lang='less' scoped>
.users {
    height: 100%;
    width: 100%;
    .row {
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;;
        .col {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>