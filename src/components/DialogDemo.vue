<template>
    <h1>
        Dialog 对话框
    </h1>
    <div class="line"></div>
    <div>在保留当前页面状态的情况下，告知用户并承载相关操作。</div>
    <Demo :component="Dialog1Demo" />
    <Demo :component="Dialog2Demo" />
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
      <td>visible</td>
      <td>是否显示 Dialog，支持 .sync 修饰符	</td>
      <td>boolean</td>
      <td>true / false</td>
      <td>false</td>
    </tr>
    <tr>
      <td>closeOnClickOverlay	</td>
      <td>是否支撑点击关闭遮罩层	</td>
      <td>boolean</td>
      <td>true / false</td>
      <td>true</td>
    </tr>
  </table>

    <h2>Slot</h2>
    <div class="line"></div>
    <table>
    <tr>
      <td>参数</td>
      <td>说明</td>

    </tr>
    <tr>
      <td>name</td>
      <td>Dialog 的内容
</td>

    </tr>

    </table>

    <h2>Events</h2>
    <div class="line"></div>
    <table>
    <tr>
      <td>事件名称</td>
      <td>说明</td>
    </tr>
    <tr>
      <td>ok</td>
      <td>Dialog 点击ok的回调</td>
    </tr>
    <tr>
      <td>cancel</td>
      <td>Dialog 点击取消的回调</td>
    </tr>
    </table>
  下一节： <router-link to="/doc/tabs"><span class="title">标签页</span></router-link>
</template>

<script lang="ts">
import Demo from "./Demo.vue"
import Dialog1Demo from './Dialog1.demo.vue';
import Dialog2Demo from './Dialog2.demo.vue';
export default {
    components:{
       Demo
    },
    setup(){
            
        return {Dialog1Demo,Dialog2Demo}
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