<template>
    <div class="topnav">
        <router-link to='/' class="logo">
          <svg class="icon">
              <use xlink:href="#icon-food3"></use>
          </svg>
          <span class="title">Cactus</span>
        </router-link>
        <ul class="menu">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li>
                <router-link to="/doc/intro">文档</router-link>
            </li>
            <li>
                <router-link to="/doc/icon">组件</router-link>
            </li>
            <li>
                <router-link to="/doc">联系</router-link>
            </li>
            <li>
                <router-link to="">1.0.0</router-link>
            </li>
        </ul>
        <svg v-if="toggleMenuBttonVisible" class="toggleAside" @click="toggleMenu">
          <use xlink:href="#icon-cebian5"></use>
        </svg>
        <div class="rightIcon" @click="showAside">
          <svg class="icon">
              <use xlink:href="#icon-cebian3"></use>
          </svg>
          <div class="aside" :class=" x ? '' : 'selected' ">
            <div class="triangle_down"></div>
            <ul>
              <li>
                <router-link to="/">首页</router-link>
              </li>
              <li>
                <router-link to="/doc">文档</router-link>
                
              </li>
              <li>
                 <router-link to="/doc/icon">组件</router-link>
                
              </li>
              <li>
                <a href="https://github.com/Xinjn">GitHub</a>
              </li>
            </ul>

          </div>
        </div>

    </div>
</template>

<script lang="ts">
import { inject, Ref, ref } from 'vue';

export default {
  props:{
    toggleMenuBttonVisible:{
      type:Boolean,
      default:false
    }
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible') // get
    let x = ref(false)
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value
    }
    const showAside = ()=>{
      x.value = !x.value
    }
    return {toggleMenu,showAside,x}
  }
}
</script>

<style lang="scss" scoped>
$color:#007974;
     .topnav {
        color: $color;
        display: flex;
        padding: 16px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 20;
        justify-content: center;
        align-items: center;
        background:#182B3E ;
        border-bottom: 1px solid #586f805d;
        > .logo {

            // max-width: 6em;
            margin-right: auto;
            display: flex;
            text-decoration: none;
            >svg {
              width: 32px;
              height: 32px;
            }
            .title{

              margin-top:5px ;
              font-weight: bolder;
              color: #b2c3cd;
              font-size: 20px;
               font-weight: 1000;
            }
        }
        > .menu {
            display: flex;
            white-space: nowrap;
            flex-wrap: nowrap;

            > li {
            margin: 0 1em;
              a{
                text-decoration: none;
                font-weight: bold;
                color: #b2c3cd;
              }
            }
        }
        > .toggleAside {
          width: 32px;
          height: 32px;
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          display: none;

        }
        @media (max-width:1200px) {
          > .menu{display:none;}
          >.rightIcon{display:block;}
          >.logo{
            margin:0 auto
          }
          >.toggleAside{display:inline-block;}
        }

        }
       .rightIcon{
          display:none;
          position: relative;
          .icon {
            width: 1em;
            height: 1em;
            vertical-align: -0.15em;
            fill: currentColor;
            // overflow: hidden;
          }
          .aside{
  
            position: absolute;
            top: 30px;
            right:0;
            border-radius: 5px;
            // overflow: hidden;
            background: rgb(37, 61, 83);

            li{
              padding: 10px 10px;
              width: 200px;
              border-radius: 5px;
              color: #586f80;
            }
            li:hover{
              color: #b2c3cd;
              background: #256e53;
            }
            .triangle_down{
              width: 0;
              height: 0;
              border-width: 0 8px 8px;
              border-style: solid;
              border-color: transparent transparent #253d53;
              position: absolute;
              top: -5px;
              right: 0;
              z-index: -1;
            }
          }
          .aside.selected{
            display: none;
          }
}

</style>