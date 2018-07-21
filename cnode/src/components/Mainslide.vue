<template>
  <div class="slide-bar">

    <div class="panel">
<div class="inner">
  <p class="community">CNode：Node.js专业中文社区</p>
  <p class="loading">您可以 <a href="#">登录</a> 或 <a href="#">注册</a> , 也可以</p>
  <a href="#"><span class="github">通过GitHub登录</span></a>
</div>
</div>
<div class="panel">
                  <div class="inner">
                    <a href="#"><img src="../assets/4.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/1.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/3.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/2.jpg" alt=""></a>
                  </div>
        </div>
        <div class="panel">
          <div class="header">友情社区</div>
                  <div class="inner inner2">
                    <a href="#"><img src="../assets/5.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/6.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/7.jpg" alt=""></a>
                    <!-- <div class="space"></div> -->
                    <a href="#"><img src="../assets/8.jpg" alt=""></a>
                  </div>
        </div>
               <div class="panel">
          <div class="header">客户端二维码</div>
                  <div class="inner">
                    <div class="wraper">
                  <img class="erweima" src="../assets/9.jpg"><br>
                  <a href="#">客户端源码地址</a>
                  </div>
                  </div>
        </div>


  </div>
</template>
<script>
export default {
    name: 'Mainslide',
    data: function(){
        return { }
    },
    methods:{
       getData() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics",{
          page:10,
          limit:10,
        })
        .then(res => {
          // console.dir(res)
          this.arrdata = res.data.data;
        })
    },

},
computed: {

},
 beforeMount: function() {

    this.getData()
  },
}
</script>
<style scoped>
*{
  margin: 0;
  padding:0;
}
.community {
  line-height: 2em;
  color: #333;
}
.loading{
  margin-top:8px;
}
.loading a:hover {
  text-decoration: underline;
}
.github {
    display: inline-block;
    padding: 3px 10px;
    margin: 0;
    font-size: 14px;
    transition: all .2s ease-in-out;
    cursor: pointer;
    letter-spacing: 2px;
    border-radius: 3px;
    line-height: 2em;
    vertical-align: middle;
    color: #fff;
    background-color: #5bc0de;
}
.github:hover {
      color: #fff;
    background-color: #2f96b4;
}
 .slide-bar {
         width: 290px;
    font-size: 14px;
    float: right;
    margin-bottom: 20px;
    word-break: break-word;
        line-height: 20px;
    color: #333;
    /* border: 1px solid #000; */
 }
 .panel {
         margin-bottom: 13px;
 }
 .header {
     color: #51585c;
    border-radius: 3px 3px 0 0;
        padding: 10px;
    background-color: #f6f6f6;
 }
 .inner {
        padding: 10px;
    background: white;
 }
  .inner a {
    text-decoration: none;
    color: #778087;
    font-size: 13px;
    line-height: 2em;
  }
  .inner img {
    width: 270px;
    line-height: 2em;
  }
  .space {
    height: 10px;
  }
    .inner2 img {
width: 150px;
    background: white;

    }
    .inner .erweima {
      width: 200px;
    }
    .inner .wraper{
      text-align: center;
    }
    .inner .wraper a{
      color: #778087;
      text-decoration: none;
      font-size: 13px;
    }
    .inner .wraper a:hover{
      text-decoration: underline;
    }
</style>
