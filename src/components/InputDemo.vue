<template>
  <h1>Input 输入框</h1>
  <div class="line"></div>
  <div>基础表单组件，支持v-model绑定和原生事件。</div>
  <Demo :component="Input1Demo" />
  <Demo :component="Input2Demo" />
  <h2>Attributes</h2>
  <div class="line"></div>
  <table>
    <tr>
      <td>参数</td>
      <td>说明</td>
      <td>类型</td>
      <td>可选值</td>
      <td>默认值</td>
    </tr>
    <tr>
      <td>placeholder</td>
      <td>原生属性</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>type</td>
      <td>原生属性</td>
      <td>String</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>icon</td>
      <td>icon 图标名</td>
      <td>String</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>disabled 状态</td>
      <td>Boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
    <tr>
      <td>error</td>
      <td>error 状态</td>
      <td>Boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
  </table>
   回到开始：<router-link to="/doc/intro"><span class="title">介绍</span></router-link>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'
import Input1Demo from "./Input1.demo.vue"
import Input2Demo from "./Input2.demo.vue"
export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo,Input1Demo,Input2Demo
    }
  }
}

</script>
<style lang="scss" scoped>
.line{
  border-top: 1px solid #586f805d;
  margin-bottom: 20px;
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
.title{
  color: #3f9c68;
}
</style> 
