<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1 >【Vue版】卡片记账</h1>
<blockquote>
<p><strong>本项目是一款及其简洁的记账App，也是一款基于Vue、VueRouter、Vuex来实现的单页面应用，由本人独立设计及实现，且源代码几乎完全用 TypeScript 和 装饰器 语法 来实现</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/morney-Vue-sourceCode">【Vue版】卡片记账</a> 可查看。</li>
<li>如果想看演示效果，<strong>请用手机模式来查看</strong> ， 请点击 <a href="https://xinjn.github.io/morney-Vue/#/money">预览链接</a> 可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 id="所用到的技术">所用到的技术</h3>

<li>为了支持 <strong>typescript</strong> ， 使用 <strong>类组件 + 装饰器</strong> 的形式来写</li>
<li>使用 <strong>Vue-Router</strong> 来实现路由切换</li>
<li>使用 <strong>Vuex</strong> 来实现全局数据管理</li>
<li>使用 <strong>localStorage</strong> 来进行本地数据存储</li>
<li>在父子组件通信中，让子组件修改父组件的值， 使用了 <strong>.sync</strong> 的语法来实现</li>
<li>以 <strong>模块化</strong> 的思想来分离组件，使用 <strong>slot 插槽，props等</strong></li>

<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMaSQH.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/multiplayerBlog"><span class="title">多人笔记</span></router-link>
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
