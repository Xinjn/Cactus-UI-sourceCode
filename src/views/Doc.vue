<template>
    <div class="layout">
        <Topnav toggleMenuBttonVisible class="nav"/>
        <div class="content" >
        <aside :class="menuVisible ? 'show' : ''" >
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>
            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>
            </li>
          </ol>
            <h2>组件列表</h2>
            <ol>
                <li>
                    <router-link to="/doc/icon">Icon 图标
                    </router-link>
                </li> 
                <li>
                   <router-link to="/doc/switch">Switch 开关</router-link>
                </li>
                <li>
                    <router-link to="/doc/button">Button 按钮</router-link>
                </li>
                <li>
                    <router-link to="/doc/dialog">Dialog 对话框

</router-link>
                </li>
                <li>
                    <router-link to="/doc/tabs">Tabs 标签
                    </router-link>
                </li> 
                <li>
                    <router-link to="/doc/input">Input 输入框
                    </router-link>
                </li> 
            </ol>
             <h2>其他项目</h2>
            <ol>
                <li>
                    <router-link to="/doc/blog">技术文章与学习笔记
                    </router-link>
                </li> 
                <li>
                   <router-link to="/doc/morenyVue">卡片记账</router-link>
                </li>
                <li>
                    <router-link to="/doc/multiplayerBlog">多人博客
                    </router-link>
                </li> 
                <li>
                    <router-link to="/doc/evernote">印象云笔记
                    </router-link>
                </li> 
                <li>
                    <router-link to="/doc/imgUpload">ImgUp图床
                    </router-link>
                </li> 
                <li>
                    <router-link to="/doc/morneyReact">简易记账</router-link>
                </li>
                <li>
                    <router-link to="/doc/translator">小程序开发翻译工具
                    </router-link>
                </li>
                <li>
                    <router-link to="/doc/canvas">Canvas涂鸦板
                    </router-link>
                </li>
                <li>
                    <router-link to="/doc/pikachu">画一个皮卡丘
                    </router-link>
                </li>
            </ol>
        </aside>
        <main>
          <router-view />
        </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from 'vue';
export default {
  components: { Topnav },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get
    
    return {menuVisible}
  }
};
</script>

<style lang="scss" scoped>
$aside-index:10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  >.nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
 
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;

  }
}
aside {
  z-index: $aside-index;
  background: #061928;
  width: 150px;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  color: #586F80;
  left: -150px;
  transition: left .3s;
  overflow-y: scroll;
  > h2 {
    margin-bottom: 4px;
    padding: 0 16px;
    font-weight: bold;
  }
  > ol {

    > li {
      >a {
        display: block;
        padding: 4px 16px;
        text-decoration: none;
      }
      .router-link-active {
        // background: #256E53;
          color: #256E53;
          border-left:5px solid #256E53;
      }
    }
  }
}
aside.show{
  left: 0;
}
aside::-webkit-scrollbar {
    width: 1px;
}
aside::-webkit-scrollbar-thumb {
    background-color: #061928;
}
main {
  overflow: auto;
  color: #586F80;
  
  .markdown-body{
    color: #586F80;
  }
}
</style>