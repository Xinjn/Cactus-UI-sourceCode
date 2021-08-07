<template>
    <h1>Button 按钮</h1>
    <div class="line"></div>
        <Demo :component="Button1Demo" />
        <Demo :component="Button2Demo" />
        <Demo :component="Button3Demo" />
        <Demo :component="Button4Demo" />
        <Demo :component="Button5Demo" />
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
      <td>type</td>
      <td>按钮类型</td>
      <td>string</td>
      <td>button / main / success / info / warning / danger</td>
      <td>button</td>
    </tr>
    <tr>
      <td>size</td>
      <td>尺寸大小</td>
      <td>string</td>
      <td>normal / small / big</td>
      <td>normal</td>
    </tr>
    <tr>
      <td>loading</td>
      <td>是否加载</td>
      <td>boolean</td>
      <td>false / true</td>
      <td>false</td>
    </tr>
  </table>
          下一节： <router-link to="/doc/dialog"><span class="title">对话框</span></router-link>
</template>
<script lang="ts">
import Demo from "./Demo.vue"
import Button1Demo from "./Button1.demo.vue"
import Button2Demo from "./Button2.demo.vue"
import Button3Demo from "./Button3.demo.vue"
import Button4Demo from "./Button4.demo.vue"
import Button5Demo from "./Button5.demo.vue"

export default {
    components:{Demo},
    setup(){
        return {Button1Demo,Button2Demo,Button3Demo,Button4Demo,Button5Demo}
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