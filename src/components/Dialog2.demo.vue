<demo>
一键打开 Dialog
</demo>
<template>
<div class="describe">Dialog 组件可以是标签，甚至可以是js代码</div>
<div>
  <Button @click="showDialog">打开对话框</Button>
</div>
</template>

<script lang="ts">
import {Button, openDialog} from '../lib/index'
import {
  h
} from 'vue'
export default {
  components: {
    Button
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: h('strong', {}, '标题'),
        content: '你好',
        ok() {
          console.log('ok')
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return {
      showDialog
    }
  }
}
</script>

<style lang="scss" scoped>
.describe{
  margin-bottom:16px;
}
</style>