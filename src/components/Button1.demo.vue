<demo>
基础用法
</demo>
<template>
<div class="describe">基础的按钮用法。</div>
<div>
  <Button>默认按钮</Button>
  <Button theme="link">链接按钮</Button>
  <Button theme="text">文本按钮</Button>
</div>
</template>

<script lang="ts">
import {Button} from "../lib/index";
export default {
  components: {
    Button
  }
}
</script>

<style lang="scss" scoped>
.describe{
  margin-bottom:16px;
}
</style>