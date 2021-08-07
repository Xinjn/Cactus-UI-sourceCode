<template>
<div>
  <h1>Switch 开关 </h1>
  <div class="line"></div>
  <div>表示两种相互对立的状态间的切换，多用于触发「开/关」。</div>
  <Demo :component="Switch1Demo"/>
  <Demo :component="Switch2Demo"/>
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
      <td>value / v-model</td>
      <td>绑定值</td>
      <td>boolean / string / number	</td>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <td>disabled</td>
      <td>是否禁用</td>
      <td>boolean</td>
      <td>—</td>
      <td>false</td>
    </tr>
  </table>
  下一节： <router-link to="/doc/button"><span class="title">按钮</span></router-link>
  
</div>
</template>

<script lang="ts">
import Switch1Demo from '../components/Switch1.demo.vue'
import Switch2Demo from '../components/Switch2.demo.vue'
import Demo from './Demo.vue'
// console.log(Switch1Demo)
// console.log(Switch1Demo.__sourceCode)
export default {
    components:{Demo},
    setup(){
        return {Switch1Demo,Switch2Demo,}
    }
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
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