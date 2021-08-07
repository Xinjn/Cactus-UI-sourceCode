<template>
<article class="markdown-body" >
  <h1 id="技术文章与学习笔记">技术文章与学习笔记</h1>
  
<blockquote>
  <p>在一路学习前端以来，我都会把我所学的知识总结在博客中并分享出去</p>
</blockquote>

<p>您可以选择 <a href="https://www.zhihu.com/people/xin-jia-nan-51">知乎</a> / <a href="https://www.jianshu.com/u/21202a3f9caf">简书</a> 来查看我的文章</p>

<h2 id="推荐一些我写的文章">推荐一些我写的文章</h2>
<p id="推荐一些我写的文章">项目实战：</p>
<p><a href="https://xinjn.github.io/morney-Vue/#/money">【Vue版】卡片记账</a></p>
<p><a href="https://xinjn.github.io/multiplayerBlog/index.html#/">【Vue版】多人博客</a></p>
<p><a href="https://xinjn.github.io/evernote/#/login">【Vue版】印象云笔记</a></p>
<p><a href="https://xinjn.github.io/ImgUp/#/">【React版】ImgUp图床</a></p>
<p><a href="https://xinjn.github.io/morney-react/index.html#/money">【React版】简易记账</a></p>
<p>未完..</p>

</article>

  <div>
    下一节： <router-link to="/doc/morenyVue"><span class="title">卡片记账</span></router-link>
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
