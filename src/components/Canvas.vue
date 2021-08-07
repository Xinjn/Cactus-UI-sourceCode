<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa=""><h2 id="画一个皮卡丘">Canvas涂鸦板</h2>
<blockquote>
<p>canvas涂鸦板基于canvas的涂鸦板，可撤销画笔动作、改变画笔颜色大小、保存涂鸦图片等功能。</p>
</blockquote>
<h3 id="技术点">技术点</h3>
<ul>
<li>原生JavaScript</li>
<li>面向对象</li>
</ul>
<h3 id="项目演示效果">项目演示效果</h3>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/canvas">源码链接</a>可查看。</li>
<li>如果想看演示效果，<strong>支持响应式</strong> ， 请点击 <a href="https://xinjn.github.io/canvas/">演示链接</a>可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/377079056">动态展示CSS的形式 画皮卡丘</a> 👈可查看</li> -->
</ul>
<h3 id="效果图">效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMda8S.png" alt="image-20210601174458221"></p>
</article>

  <div>
   下一节： <router-link to="/doc/pikachu"><span class="title">画一只皮卡丘</span></router-link>
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
