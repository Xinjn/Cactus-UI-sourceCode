<template>
  <h1>Tabs 标签</h1>
  <div class="line"></div>
  <div>分隔内容上有关联但属于不同类别的数据集合。</div>
  <Demo :component="Tabs1Demo" />
  <h2>Tab Attributes</h2>
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
      <td>title </td>
      <td>当前导航栏的名称，唯一且必填</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </table>
  <h2>Tabs Attributes</h2>
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
      <td>name</td>
      <td>v-model:selected绑定的ref实例</td>
      <td>String</td>
      <td>—</td>
      <td>—</td>
    </tr>
  </table>
   下一节： <router-link to="/doc/input"><span class="title">输入框</span></router-link>
</template>

<script lang="ts">
import Demo from './Demo.vue'
import Tabs1Demo from './Tabs1.demo.vue'

export default {
  components: {
    Demo
  },
  setup() {
    return {
      Tabs1Demo
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
