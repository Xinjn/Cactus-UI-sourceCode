<demo>
简单用法
</demo>

<template>
<div>
  <Input value="请输入内容"/> 
  <Input value="不可点击" disabled/> 
  <Input value="只读" readonly/> 
</div>
</template>

<script lang="ts">
import {Input} from "../lib/index";
export default {
  components: {
    Input
  }
}
</script>
