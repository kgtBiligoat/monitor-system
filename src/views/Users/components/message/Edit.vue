<template>
    <div>test edit</div>
</template>

<script lang='ts'>
import Vue from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
@Component({
    data() {
        return {
            userMessage: {}
        }
    }
})
export default class EditMessage extends Vue {
    mounted() {
        this.$data.userMessage = { ...this.$store.state.UserMsg }
        console.log(this.$data.userMessage)
    }
}
</script>

<style lang='less' scoped>
</style>