<template>
    <div class="user">test getData</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component
export default class GetData extends Vue {}
</script>

<style lang='less' scoped>
.user {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
}
</style>