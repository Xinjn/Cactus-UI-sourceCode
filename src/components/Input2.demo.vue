<demo>
双向绑定
</demo>

<template>
<div>
  <div>预览</div>
  <Input  v-model:value="value"/> 
  <div>
    value：{{value}}
  </div>
</div>
</template>

<script lang="ts">
import {Input} from "../lib/index";
export default {
  components: {
    Input
  },
  data() {
    return {
      value:'双向绑定'
    }
  },
  setup(props,contest){
  return {}
  }
}
</script>

