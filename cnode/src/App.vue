<template>
  <div id="app">
<Header/>
<div id="main">
    <div class="slide-wraper">
  <router-view name="slide"></router-view>
</div>
  <div class="main-wraper">
  <router-view name="main"></router-view>
  </div>

<!-- <slidebar/> -->

</div>
<Footer/>
  </div>
</template>





<script>
import Header from  './components/Header'
import Postlist from './components/Postlist'
import Artical from './components/Artical'
import Userinfo from './components/Userinfo'
import Slidebar from './components/Slidebar'
import Footer from './components/Footer'
import Mainslide from './components/Mainslide'
import Pageselect from './components/Pageselect'
import Slideuser from './components/Slideuser'

export default {
  name: 'App',
  components:{
    //es6写法：等价于Header:Header;当键名和健值相同时，可以简写成下面的写法
    Header,
    Postlist,
    Artical,
    Userinfo,
    Slidebar,
    Footer,
    Mainslide,
    Pageselect,
    Slideuser,
  }
}
</script>

<style scoped>
#main {
  width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 15px auto;
    min-height: 400px;
    /* border: 1px solid #000; */
}
#main:after {
  content: '';
  display:block;
  clear: both;
}
.main-wraper {
 padding-right: 305px;
    background-color: #e1e1e1;
}
</style>
