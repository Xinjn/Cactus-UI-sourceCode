import { createWebHashHistory ,createRouter} from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'
import InputDemo from './components/InputDemo.vue'
import IconDemo from './components/IconDemo.vue'

import Blog from './components/Blog.vue'
import MorenyVue from './components/MorenyVue.vue'
import MultiplayerBlog from './components/MultiplayerBlog.vue'
import Evernote from './components/Evernote.vue'
import ImgUpload from './components/ImgUpload.vue'
import MorneyReact from './components/MorneyReact.vue'
import Translator from './components/Translator.vue'
import Canvas from './components/Canvas.vue'
import Pikachu from './components/Pikachu.vue'

import { h } from 'vue'
import Markdown from './components/Markdown.vue'

import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const md = string => h(Markdown, { content:string, key: string })

const history = createWebHashHistory()
export const router = createRouter({
    history: history,
    routes: [
        { path: '/', component: Home },
        { path: '/doc', component: Doc, 
            children: [
            { path: '', redirect:'/doc/intro' },
            { path: 'intro', component: md(intro) },
            { path: 'get-started', component: md(getStarted) },
            { path: 'install', component: md(install) },
            { path: 'switch', component: SwitchDemo },
            { path: 'button', component: ButtonDemo },
            { path: 'dialog', component: DialogDemo },
            { path: 'tabs', component: TabsDemo },
            { path: 'input', component: InputDemo },
            { path: 'icon', component: IconDemo },
            { path:'morenyVue',component:MorenyVue},
            { path: 'blog', component: Blog },
            { path: 'multiplayerBlog', component: MultiplayerBlog },
            { path: 'evernote', component: Evernote },
            { path: 'imgUpload', component: ImgUpload },
            { path: 'morneyReact', component: MorneyReact },
            { path: 'translator', component: Translator },
            { path: 'canvas', component: Canvas },
            { path: 'pikachu', component: Pikachu },
                                    
        ]}
        
    ]
})
router.afterEach(() => {
    console.log('路由切换了')
})