<template>
<article class="markdown-body" data-v-76269876="" data-v-58d0a4aa="">
  <h1 id="小吴记账-vue版">【Vue版】印象云笔记</h1>
<blockquote>
<p><strong>一款风格简单的在线笔记本，用户注册登录后可以创建自己的笔记本进行记录，支持 Markdown 语法，支持预览和增删改查恢复等功能</strong></p>
</blockquote>
<ul>
<li>如果想看源码，请点击 <a href="https://github.com/Xinjn/evernote-sourceCode">【Vue版】印象云笔记</a> 可查看。</li>
<li>如果想看演示效果，<strong>请用PC模式来查看</strong> ， 请点击 <a href="https://xinjn.github.io/evernote/#/login">预览链接</a> 可查看</li>
<!-- <li>如果想看学习笔记和技术细节，<strong>请用访问我的知乎查看</strong> ， 请点击 <a href="https://zhuanlan.zhihu.com/p/370401647">小吴记账Vue版笔记</a> 可查看</li> -->
</ul>
<h3 id="所用到的技术">功能</h3>

<li><strong>登陆注册</strong></li>
<li><strong>笔记本和笔记的增删改查功能</strong></li>
<li><strong>笔记可以使用Markdown书写</strong></li>
<li><strong>笔记删除可以在废纸篓选择恢复或彻底删除</strong></li>
<li><strong>友好的错误提示，简洁的界面</strong></li>

<h3 id="项目效果图">项目效果图</h3>
<p><img src="https://z3.ax1x.com/2021/08/07/fMdku9.png" alt="img"></p>
</article>

  <div>
  下一节： <router-link to="/doc/imgUpload"><span class="title">ImgUp图床</span></router-link>
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
