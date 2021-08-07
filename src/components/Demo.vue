<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>

    <div class="demo-code" v-if="codeVisible">
      <pre class="language-html" 
      v-html="html" />
    </div>  
     
    <div class="demo-actions">
      <div @click="hideCode" v-if="codeVisible" class="hidenwrapper">
        <svg class="icon">
          <use xlink:href="#icon-sanjiao"></use>
        </svg>
        
        <span class="hiddencode">隐藏代码</span>
      </div>

      <div @click="showCode" v-if="!codeVisible" class="showwrapper">

        <svg class="icon" >
          <use xlink:href="#icon-sanjiao"></use>
        </svg>

        <span class="showcode">显示代码</span>

      </div>
    </div>


  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs'
import 'prismjs/themes/prism.css'
import { computed } from 'vue'
const Prism = (window as any).Prism
import {
  ref
} from 'vue'

export default {
    components:{
        Button
    },
    props:{
        component:Object
    },
    setup(props){
      const html = computed(()=>{
        return Prism.highlight(props.component.__sourceCode,Prism.languages.html,'html')
      })
      
      const showCode = () => {
        codeVisible.value = true     
      }
      const hideCode = () => {
        codeVisible.value = false
        }
      const codeVisible = ref(false)
        return {
            Prism,html,codeVisible,showCode,hideCode
        }
    }
}
</script>


<style lang="scss" scoped>
$border-color: #586F80;
.demo {
  border: 2px solid $border-color;
  margin: 16px 0 32px;
  border-radius: 10px;
  background:#182B3E;
      overflow: hidden;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    text-align: center;
    // padding: 8px 16px;
    border-top: 1px dashed $border-color;

    .showwrapper{
      transition:all .5s;
      padding: 8px 16px;
      position: relative;
      .icon{
        // border: 1px solid red;  
        transition:all .2s;
      }
      .showcode{
        opacity: 0;
        // border: 1px solid red;
        position: absolute;
        left: 50%;
        margin-left: -30px;
        line-height: 34px;
        transition:all .2s;
      }

    }
    .showwrapper:hover{
        background: #061928;
        .icon{
          transform:translateX(-48px);
        }
        .showcode{
          opacity: 100;
        }
    }
    .hidenwrapper{
      transition:all .5s;
      padding: 8px 16px;
      position: relative;
      .icon{
        // border: 1px solid red;  
        transition:all .2s;
        transform:rotate(180deg);
      }
      .hiddencode{
        opacity: 0;
        // border: 1px solid red;
        position: absolute;
        left: 50%;
        margin-left: -30px;
        line-height: 34px;
        transition:all .2s;
      }

    }
    .hidenwrapper:hover{
        background: #061928;
        .icon{
          transform:translateX(-48px) rotate(180deg);
        }
        .hiddencode{
          opacity: 100;
        }
    }
  }
  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style> 