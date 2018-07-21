<template>
  <div>

      <div id="loading-img">
          <img src="../assets/load.png" v-if="isloading" alt="">
      </div>
      <div class="post-header">
      <a @click=greenBgc href="#" class="greenbgc">全部 </a>
      <a @click=greenBgc href="#"> 精华</a>
      <a @click=greenBgc href="#">分享 </a>
      <a @click=greenBgc href="#"> 问答</a>
      <a @click=greenBgc href="#"> 招聘</a>
      <a @click=greenBgc href="#">客户端测试 </a></div>
      <ul id="postlist">
          <li v-for="content in showdata" >
              <div class="content-wraper">
                  <router-link :to="{name:'userinfo',params:{name:content.author.loginname}}">
              <img :src="content.author.avatar_url" alt="">
                  </router-link>
              <span class="count-num ">
                    <span class="response-num">{{content.reply_count}}</span><span class="break">/</span><span class="click-num">{{content.visit_count}}</span>
                  </span>
                  <span :class='{is_good:(content.good==true),is_top:(content.top==true),is_normal:(content.good!=true)&(content.top!=true)}'>{{content |selType}}</span>
                  <router-link :to="{name:'artical_content',params:{id:content.id,loginname:content.author.loginname}}"
                    class="post-title">{{content.title}}</router-link>
                    <router-link :to="{name:'artical_content',params:{id:content.id,tobottom:true}}">
                    <img src="" alt="">
                  <span class="final-response-time">{{content.last_reply_at |formatTime}}</span>
                  </router-link>
                  </div>
          </li>
      </ul>

  <Pageselect @pagechange=changePage></Pageselect>

  </div>
</template>

<script>
import Pageselect from './Pageselect'
import $ from 'jquery'
export default {
  name: "Postlist",
  data: function() {
    return {
      isloading: false,
      showdata:[],
      arrdata: [],
      page:1,
      thousand:{},
      share:[],
      ask:[],
      good:[],
      job:[],
      test:[],


    };
  },
  components:{
    Pageselect,
  },
  computed: {},
  methods: {
    greenBgc(x){
  $(x.currentTarget).addClass('greenbgc').siblings().removeClass('greenbgc')
  if(x.currentTarget.innerText=='全部'){this.showdata=this.arrdata}
  else if(x.currentTarget.innerText=='分享'){this.showdata=this.ask      ;console.log(2)              }


       else if(x.currentTarget.innerText=='精华'){this.showdata=this.good     ;console.log(1)              }



  else if(x.currentTarget.innerText=='问答'){this.showdata=this.ask      ;console.log(3)              }
  else if(x.currentTarget.innerText=='招聘'){this.showdata=this.job      ;console.log(4)              }
  else if(x.currentTarget.innerText=='客户端测试'){this.showdata=this.test               }

          console.log("good:"+this.good.length)
          console.log("ask:"+this.ask.length)

          console.log("share:"+this.share.length)

          console.log("job:"+this.job.length)
          console.log("test:"+this.test.length)

console.dir(this.share)



    },

// $(this).addClass('greenbgc').siblings().removeClass('greenbgc')

    //es6简写：等价于getData:function()){}
    getData() {
      //get接受两个参数，第一个是url，这个是cnode提供的api接口，第二个参数是一个对象，用来存放设置参数
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {params:{
          page: this.page,
          limit: 40,
        }})
        //Axios基于promise
        //处理成功
        //   .then(function(value){
        //       //这样写是不行的，因为这个时候的this不是vue实例对象，而是一个虚拟节点，解决方法就是1.在getData里把this赋值给一个变量，然后在这里使用这个变量代替vue实例对象  2. 使用es6的写法
        //       this.isloading=false
        //     console.dir(value)
        //   })
        //这样写之后，里面再用this指的就是vue实例对象了
        .then(res => {
          this.isloading = false;
          // console.dir(res.data.data)
          this.arrdata = res.data.data;
          // console.dir(res.data.data[0]);
          this.showdata=this.arrdata
        })
        //处理失败
        .catch(function() {});
    },
    getAll(){
         this.$http.get("https://cnodejs.org/api/v1/topics",{params:{
           limit:50,
         }})
         .then(res=>{
          this.thousand=res.data.data
          // console.dir(res.data.data)
          console.dir(res.data.data[0])
          this.fenlei(res.data.data)
         })
    },
    fenlei(x){
      console.log('获取50条数据')
      console.dir(x)
      for(let index in x){
            if(x[index].good==true){
          this.good.push(x[index])
        }
        else if(x[index].tab=="share"){
          this.share.push(x[index])
        }
        else if(x[index].tab=="ask"){
          this.ask.push(x[index])
        }
          else if(x[index].tab=="job"){
          this.job.push(x[index])
        }
        else if(x[index].top!=true){
          this.test.push(x[index])
        }
      }
    },
       changePage(value){
this.page=value
this.getData()
    },
  },
  beforeMount: function() {
    //加载成功之前显示加载动画
    this.isloading = true;
    //在页面加载之前获取数据
    this.getData();
    this.getAll();



  },
  mounted:function(){

  }
}

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}
#postlist {
  background: white;
}
#postlist li img {
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  vertical-align: middle;
}
#postlist li {
  padding: 10px;
  font-size: 0px;
  line-height: 2em;
  word-break: break-word;
  color: #333;
  display: block;
  border-bottom: solid 1px rgb(0, 0, 0, 0.05);
}
#postlist li:first-child {
  padding: 10px 10px 9px 10px !important;
}
#postlist li:hover {
background: #f5f5f5;
}
.count-num {
  width: 70px;
  text-align: center;
  display: inline-block;
  line-height: 30px;
  vertical-align: middle;
  font-size: 14px;
  cursor: default;
}

.response-num {
  color: #9e78c0;
  text-align: center;
  font-size: 14px;
  line-height: 30px;
}
.break {
  font-size: 12px;
}
.click-num {
  font-size: 12px;
  color: #b4b4b4;
  text-align: center;

  line-height: 30px;
}
.post-title {
  color: #333;
  max-width: 70%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
  font-size: 16px;
  line-height: 30px;
  text-decoration: none;
  margin-left: 4px;
}
.post-title:hover {
  text-decoration: underline;
}

.final-response-time {
  float: right;
  font-size: 12px;

  height: 28px;
  line-height: 28px;
}
.is_good,
.is_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  color: #fff;
  font-size: 12px;
  vertical-align: middle;
  cursor: default;
}
.is_normal {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  vertical-align: middle;
  cursor: default;

  font-size: 12px;
}

.post-header {
  padding: 9px 10px 10px 10px;
  background-color: #f6f6f6;
}
.post-header a {
  margin: 0 10px;
  color: #80bd01;
  text-decoration: none;
  font-size: 14px;
  word-break: break-word;
  line-height: 20px;
}
.post-header a:hover {
    color: #005580;

}
#loading-img {
  position: fixed;
  left: 30%;
  top: 50%;
}
.greenbgc{
      background-color: #80bd01;
    color: #fff !important;
    padding: 3px 4px;
    border-radius: 3px;
        margin: 0 10px;
}
</style>
