 //vue-router是vue的核心插件
// 引入vue核心库
import Vue from 'vue'
// 引入路由插件
import Router from 'vue-router'
// 引入一级路由组件
import myPublic from '@/components/public'
import MusicList from '@/components/views/musicList'
import PlayMusic from '@/components/views/playMusic'
// 引入二级路由组件
import Rank from '../components/towpath/rank'
// 引入index组件
import Index from '@/components/towpath/index'
// 引入搜索页
import Search from '@/components/towpath/search'

// 中间件
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/public',
      component:myPublic,
      children:[
        {
          path:'/index',
          component:Index
        },
        {
          path:'/rank',
          component:Rank
        },
        {
          path:'/search',
          component:Search
        },
        {
          path:'/musicList',
          component:MusicList
        },
        {
          path:'/playmusic',
          component:PlayMusic
        },
      ]
    },
    
    //redirect重定向，只要上边的不符合就是*
    {
      path:'*',
      redirect:'/index'
    }

  ]
})
