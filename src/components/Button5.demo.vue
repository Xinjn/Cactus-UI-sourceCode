<demo>
支持显示加载中
</demo>
<template>
<div class="describe">点击按钮后进行数据加载操作，在按钮上显示加载状态。</div>
<div>
  <Button loading>加载中</Button>
  <Button>加载完毕</Button>
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