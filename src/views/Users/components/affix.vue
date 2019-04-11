<template>
    <div ref="box" class="sticky" :style="boxStyle">
        <div ref="content" class="sticky-wrap" :style="contentStyle">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component({
  data() {
    return {
      boxStyle: {
        position: 'static',
        top: '0px',
        left: '0px',
        width: 'auto',
        height: 'auto'
      },
      contentStyle: {
        position: 'static',
        top: '0px',
        left: '0px',
        width: 'auto',
        height: 'auto'
      },
      isFixedY: false
    }
  }
})
export default class Affix extends Vue {
  @Prop({
    type: String,
    default: 'unset'
  })
  top!: String
  mounted() {
    this.getContentSize()
    this.scrollHandler()
    window.addEventListener('scroll', this.scrollHandler, true)
  }
  getContentSize() {
    const { content } = this.$refs as any
    const { boxStyle, contentStyle } = this.$data
    const style = window.getComputedStyle(content)
    boxStyle.width = style.width
    boxStyle.height = style.height
    contentStyle.top = `${this.top}px`
  }
  scrollHandler() {
    const { contentStyle } = this.$data
    const { content, box } = this.$refs
    var boxTop = (box as any).getBoundingClientRect().top
    if (this.top !== 'unset') {
      if (boxTop > Number(this.top) && this.$data.isFixedY) {
        this.$data.isFixedY = false
        contentStyle.position = 'static'
      } else if (boxTop < Number(this.top) && !this.$data.isFixedY) {
        this.$data.isFixedY = true
        contentStyle.position = 'fixed'
      }
    }
  }
}
</script>

<style scoped lang="less">
.sticky {
  width: 100%;
  .sticky-wrap {
    width: 100%;
    background: inherit;
    height: inherit;
    top: inherit;
  }
}
</style>
