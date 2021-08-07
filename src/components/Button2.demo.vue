<demo>
支持 size
</demo>
<template>
<div class="describe">Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。</div>
<div>
  <div>
    <Button size="small">小型按钮</Button>
    <Button>默认按钮</Button>
    <Button size="big">大型按钮</Button>
  </div>
  <div>
    <Button size="small" theme="link">小型按钮</Button>
    <Button theme="link">默认按钮</Button>
    <Button theme="link" size="big">大型按钮</Button>
  </div>
  <div>
    <Button size="small" theme="text">小型按钮</Button>
    <Button theme="text">默认按钮</Button>
    <Button size="big" theme="text">大型按钮</Button>
  </div>
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