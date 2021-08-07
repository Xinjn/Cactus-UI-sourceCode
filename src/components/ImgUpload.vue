<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1 id="小吴记账-vue版">【React版】ImgUp图床</h1>
<blockquote>
<p><strong>本项目是使用React技术栈实现的用于快速生成在线图片链接的图床工具，简单高效。
用户可以定制图片大小、浏览已上传的图片。</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/ImgUp-sourceCode">【React版】ImgUp图床</a> 可查看。</li>
<li>如果想看演示效果，<strong>请用PC模式来查看</strong> ， 请点击 <a href="https://xinjn.github.io/ImgUp/#/">预览链接</a> 可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 id="所用到的技术">功能实现及技术栈</h3>

<li><strong>登录注册</strong></li>
<li><strong>图片上传</strong></li>
<li><strong>图片定制</strong></li>
<li><strong>发布历史展示</strong></li>

<strong>
技术栈：react-create-app / styled-components / React-Router / Mobx / Antd / LeanCloud
</strong>

<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMdABR.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/morneyReact"><span class="title">简易记账</span></router-link>
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
