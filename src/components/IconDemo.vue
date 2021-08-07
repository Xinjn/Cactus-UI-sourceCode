<template>
  <h1>Icon 图标</h1>
  <div class="line"></div>
  <div>提供一些常用的 Icon 图标集合。</div>
  <Demo :component="Icon1Demo" />
  <h2>Attributes</h2>
  <div class="line"></div>
  <div>虽然Icon图标将被渲染为span标签，但其width、height 、fill属性将与组件根元素保持一致，因此你可以直接在组件标签上设置样式。</div>
  <table>
    <tr>
      <td>参数</td>
      <td>说明</td>
      <td>类型</td>
      <td>可选值</td>
      <td>默认值</td>
    </tr>
    <tr>
      <td>name</td>
      <td>	icon 图标名</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    
  </table>
   下一节： <router-link to="/doc/switch"><span class="title">开关</span></router-link>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Icon1Demo from "./Icon1.demo.vue"
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Icon1Demo
    }
  }
}

</script>
<style lang="scss" scoped>
.line{
  border-top: 1px solid #586f805d;
  margin-bottom: 20px;
}
.title{
  color: #3f9c68;
}
table{
  border-collapse: collapse;
  font-size: 14px;
  margin-bottom: 45px;
  line-height: 1.5em;
  overflow: auto;
  margin-top: 20px;
  background:#182B3E;
  border: 1px solid #586f805d;
  width: 100%;
  overflow: auto;
  td{
    text-align: left;
    color: #586f80;
    font-weight: 400;
    padding: 15px;
    border: 1px solid #586f805d;
    white-space:pre-wrap; 
    word-break:break-all;
  }
}
</style> 
