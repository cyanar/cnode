import Vue from 'vue'
import Router from 'vue-router'
import Artical from '../components/Artical'
import Postlist from '../components/Postlist'
import Userinfo from '../components/Userinfo'
import Slidebar from '../components/Slidebar'
import Mainslide from '../components/Mainslide'
import Slideuser from '../components/Slideuser'



Vue.use(Router)

export default new Router({
  routes: [

    {
      name:'root',
      path:'/',
      components:{
        main: Postlist,
        slide: Mainslide,

      }},

    {
    name:'artical_content',
    path:'/artical/:id&:loginname',
    components:{
      main: Artical,
      slide: Slidebar,

    }
  },
  {
    name:'userinfo',
    path:'/userinfo/:name',
    components:{
      main:Userinfo,
      slide: Slideuser,

    },
  },


  ]
})
