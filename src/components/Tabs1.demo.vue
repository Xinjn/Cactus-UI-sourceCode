<demo>
常规使用
</demo>
<template>
<div>基础的、简洁的标签页。</div>
<Tabs v-model:selected="name">
  <Tab title="导航1">内容1</Tab>
  <Tab title="导航2">内容2</Tab>
</Tabs>
</template>

<script lang="ts">
import {Tabs, Tab} from '../lib/index'

import {
  ref
} from 'vue'
export default {
  components: {
    Tabs,
    Tab
  },
  setup() {
    const name = ref('导航1')
    return {
      name
    }
  }
}
</script>