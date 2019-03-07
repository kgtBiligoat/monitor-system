<template>
    <div class="users">
        <aside-bar></aside-bar>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';

import asideBar from './components/AsideBar.vue'

@Component({
    components: { asideBar }
})
export default class App extends Vue {

}
</script>

<style lang='less' scoped>
.users {
    height: 100%;
    width: 100%;
}
</style>