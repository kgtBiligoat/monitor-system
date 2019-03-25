<template>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" >
            <el-menu-item
                v-for="(item, index) in name" 
                :index="String(index)" 
                :key="index"
                @click="change(item)"
            >{{item.cnName}}</el-menu-item>
        </el-menu>        
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import eventBus from '@/views/Users/eventBus'

@Component({
    data() {
        return {
            activeIndex: '0'
        }
    }
})
export default class Header extends Vue {
    @Prop({
        type: Boolean
    })
    isCollapse!: boolean
    @Prop()
    name!: any

    change(name: String) {
        console.log(name)
        eventBus.$emit('change', name)
    }

    mounted() {
        eventBus.$on('activeIndexChange', (val: any) => {
            this.$data.activeIndex = val.toString()
        })
    }
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