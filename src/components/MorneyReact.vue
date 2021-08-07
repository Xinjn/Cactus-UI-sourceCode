<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1>【React版】简易记账</h1>
<blockquote>
<p><strong>本项目是一个款基于 React / TypeScript 的移动端单页面应用。
这是我从自己的需求出发，设计出的极简记账应用，特点是快速记账， 而且可以通过图表查看自己的消费习惯。
该项目大量使用 React Hooks，让我对 Hooks 有了深刻的理解和应用</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/morney-react-sourceCode">【Vue版】多人博客</a> 可查看。</li>
<li>如果想看演示效果，<strong>请用手机模式来查看</strong> ， 请点击 <a href="https://xinjn.github.io/morney-react/index.html#/money">预览链接</a> 可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 id="所用到的技术">所用到的技术</h3>

<li>使用 <strong>Vue-TypeScript</strong> </li>
<li>使用 <strong>React</strong> </li>
<li>使用 <strong>Hooks</strong> </li>
<li>使用 <strong>LocalStorage</strong> </li>
<li>使用 <strong>React Router</strong> </li>

核心功能包括：记录收入支出流水、收支流水列表、可视化图表展示
<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMdEH1.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/translator"><span class="title">小程序翻译</span></router-link>
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
