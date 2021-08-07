<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1 id="小吴记账-vue版">【Vue版】多人博客</h1>
<blockquote>
<p><strong>本项目是一款基于 Vue.js 技术栈实现多人共享博客应用</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/multiplayerBlog-sourceCode">【Vue版】多人博客</a> 可查看。</li>
<li>如果想看演示效果，<strong>请用PC模式来查看</strong>，请点击 <a href="https://xinjn.github.io/multiplayerBlog/index.html#/">预览链接</a> 可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 >所用到的技术</h3>

<li><strong>使用vue-cli作为脚手架</strong></li>
<li><strong>使用vue-router进行前端路由的切换及传参</strong></li>
<li><strong>使用axios获取数据</strong></li>
<li><strong>使用vuex来做全局状态管理</strong></li>
<li><strong>JSON格式化工具对数据整理</strong></li>
<li><strong>webpack打包</strong></li>

<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMdijJ.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/evernote"><span class="title">印象云笔记</span></router-link>
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
