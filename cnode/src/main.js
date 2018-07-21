// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//导入Axios
import Axios from 'axios'
//把Axios插入到VUE原型上，这样在所有的的vue实例中都可以直接使用了
import jquery from 'jquery'
Vue.prototype.$http=Axios
Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.filter('formatTime',function(str){
  var lastDate=new Date(str)
      var newDate=new Date()
      var interval=newDate.getTime()-lastDate.getTime()
      if(interval/1000<30){
        return '刚刚'
      }
      else if(interval/1000<60){
        return parseInt(interval/1000)+'秒前'
      }
      else if(interval/60000<60){
        return parseInt(interval/60000)+'分钟前'
      }
      else if(interval/3600000<24){
        return parseInt(interval/3600000)+'小时前'
      }
      else if(interval/3600000<24){
        return parseInt(interval/3600000)+'小时前'
      }
      else if(interval/86400000<31){
        return parseInt(interval/86400000)+'天前'
      }
      else if(interval/2592000000<12){
        return parseInt(interval/2592000000)+'个月前'
      }
      else{
        return '一年前'
      }




})
Vue.filter('selType',function(obj){
if(obj.top==true){
  return '置顶'
}
if(obj.good==true){
  return '精华'
}
if(obj.tab=='ask'){
  return '问答'
}
if(obj.tab=='share'){
  return '分享'
}
else {
  return '招聘'
}
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods:{
    //es6写法，等价于getData:function(){}

  },

})
