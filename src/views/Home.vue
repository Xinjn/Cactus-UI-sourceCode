<template>
  <div>
    <Topnav/>
    <div class="topnavAndBanner">
        
        <div class="banner">
            <h1>Cactus UI</h1>
            <h2>一款 Vue 3.0 的UI框架</h2>
            <h3>简约 轻巧 好用</h3>
            <p class="actions">
                <a href="https://github.com/Xinjn">GitHub</a>
                <router-link to="/doc">开始使用</router-link>
            </p>
        </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-TS"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-gongju"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>

    <div class="line"></div>
    <div class="bottomnav">
      <ul>
        <li>
          <div>资源</div>
          <dvi>设计资源</dvi>
          <div>图标库</div>

        </li>
        <li>
          <div>帮助</div>
          <dvi>常见问题</dvi>
          <div>更新日志</div>
          <div>报告BUG</div>

        </li>
        <li>
          <div>社区</div>
          <dvi>GITHUB</dvi>
          <div>DISCORD</div>

        </li>
              <li>
          <div>联系我们</div>
          <div>加入我们</div>

        </li>

      </ul>
    </div>
  </div>
</template>

<script lant="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components:{Topnav}
}
</script>

<style lang="scss" scoped>
$green: #3F9C68;
$border-radius: 4px;
$color: #B2C3CD;
.topnavAndBanner {

  background: #182B3E;
  clip-path: ellipse(80% 60% at 50% 40%);
}
.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  >.actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
    h1{
                      // color: #007974;
      font-size: 45px;
      font-weight: 800;
  }
}
.features {

  // margin: 64px auto;
  padding: 0 16px;
  color: #586F80;
  height: 50vh;
  display: flex;
  justify-content: center;

  >ul {
    // border: 1px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    >li {
      width: 300px;
      margin: 16px 0;
      display: grid;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      >svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }
      >h3 {
        grid-area: title;
        font-size: 28px;
      }
      >p {
        grid-area: text
      }
    }
  }

}
.rightIcon{
  border: 1px solid red;
  position: absolute;
  top: 300px;
  right: -50px;

  .icon{
    width: 35em;
    height: 35em;
  }
}
.bottomnav{
    // border: 1px solid red;
    padding: 16px;
    border-top: 1px solid #586f805d;
    background: #182b3e77;
    color: #586f805d;
  ul{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    font-size: 14px;
    svg {
      width: 23px;
      height: 23px;
      margin-left: 30px;
      
    }
}
}
@media (max-width: 320px) {
  .bottomnav{
    margin-top: 40px;
  }
}
</style>