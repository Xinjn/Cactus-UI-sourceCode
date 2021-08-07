<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1>小程序翻译工具</h1>
<blockquote>
<p><strong> 一款微信小程序翻译工具，支持中、英、法、韩、日、阿拉伯、西班牙语的翻译应用。该工具还能保存用户翻译记录以便之后查看。</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/translator-applet">小程序翻译工具</a> 可查看。</li>
<!-- <li>如果想看演示效果，<strong>请用手机模式来查看</strong> ， 请点击 <a href="https://xinjn.github.io/morney-Vue/#/money">预览链接</a> 可查看</li> -->
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 id="所用到的技术">项目技术栈</h3>
小程序框架中的页面注册、模块化、响应的数据绑定
小程序常用组件的使用，包括 view ,scroll-view, navigator 等其他一些 html 相似标签
小程序 api 中的路由 switchTab, reLaunch 以及界面的交互 showToast 等
整体页面布局采用 flex 布局
<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMwsQe.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/canvas"><span class="title">Canvas涂鸦板</span></router-link>
  </div>
</template>

<script lang="ts">

export default {

  setup() {
    return {
      
    }
  }
}

</script>
<style lang="scss" scoped>
.markdown-body{
  color: #586f80;
  h1,h2,h3,h4,h5{
    line-height: 40px;
    border-bottom:2px solid #586f805d ;
  }
  blockquote{
    color: #586f80;
    border-left:0.25em solid #586f80;
    background: #182b3e;
    padding: 10px;
  }
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
