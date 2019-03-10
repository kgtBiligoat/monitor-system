<template>
    <div class="users">
        <head-bar :isCollapse="isCollapse"></head-bar>
        <aside-bar :isCollapse.sync="isCollapse"></aside-bar>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import asideBar from './components/AsideBar.vue'
import headBar from './components/Header.vue'

@Component({
    components: { asideBar, headBar },
    data() {
        return {
            isCollapse: false
        }
    }
})
export default class Users extends Vue {

}
</script>

<style lang='less' scoped>
.users {
    height: 100%;
    width: 100%;
}
</style>