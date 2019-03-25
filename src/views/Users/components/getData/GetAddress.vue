<template>
    <div>
        <el-select v-model="value" placeholder="请选择">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>
    </div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            options: [{value: 1, label: 2}],
            value: ''
        }
    }
})
export default class getAddress extends Vue {}
</script>

<style lang='less' scoped>
</style>