<template>
  <div class="slide-bar">
    <div class="header">作者</div>
    <div class="panel">
      <div class="inner">
      <div class="head-container">
               <router-link :to="{name:'userinfo',params:{name:this.arcdata.author.loginname}}">
           <img v-cloak :src="this.arcdata.author.avatar_url" alt="">
                  </router-link>
                      <router-link :to="{name:'userinfo',params:{name:this.arcdata.author.loginname}}">
          {{this.arcdata.author.loginname}}
                  </router-link>
                  <p class="score"><span>积分:{{this.slideinfo.score}}</span></p>
                  <span class="sign">“ 这家伙很懒，什么个性签名都没有留下。 ”</span>
                  </div>
      </div>
</div>
<div class="panel">
                  <div class="inner">
                    <a href="#"><img src="../assets/1.jpg" alt=""></a>
                    <div class="space"></div>
                    <a href="#"><img src="../assets/2.jpg" alt=""></a>
                    <div class="space"></div>
                    <a href="#"><img src="../assets/3.jpg" alt=""></a>
                    <div class="space"></div>
                    <a href="#"><img src="../assets/4.jpg" alt=""></a>
                  </div>
        </div>
                  <div class="panel">
                  <div class="other-topic">
                    <div class="header">作者其他话题</div>
                    <div class="inner">
                      <router-link :to="{name:'artical_content',params:{id:recenttopic.id,loginname:recenttopic.author.loginname,tobottom:false}}"
                      class="single-line" v-for="recenttopic in fiverecent">
                      {{recenttopic.title}}
                      </router-link>
                    </div>
                  </div>
                  </div>
                   <div class="panel">
                  <div class="recent-response">
                    <div class="header">作者最近回复</div>
                    <div class="inner">
                      <router-link :to="{name:'artical_content',params:{id:recentresponse .id,loginname:recentresponse .author.loginname,tobottom:false}}"
                      class="single-line" v-for="recentresponse in fiveresponse">{{recentresponse.title}}</router-link>
                      </div>

                  </div>
                   </div>


  </div>
</template>
<script>
export default {
    name: 'Slidebar',
    data: function(){
        return {
         arcdata: {author:{}},
         slideinfo:{recent_topics:[],recent_replies:[]},

        }
    },
    methods: {
    getSlide() {

      this.$http
        .get("https://cnodejs.org/api/v1/user/"+this.$route.params.loginname)
        .then(res => {
        this.slideinfo=res.data.data
        })
  },
      getArtical() {
      this.$http
        .get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id)
        .then(res => {
          this.arcdata = res.data.data;
        });
    },
},
computed: {
  fiverecent: function(){
      if(this.slideinfo.recent_topics.length<=6){
        return this.slideinfo.recent_topics.slice(1)
      }
      else {
        return this.slideinfo.recent_topics.slice(1,6)
      }
  },
   fiveresponse: function(){
      if(this.slideinfo.recent_replies.length<=5){
        return this.slideinfo.recent_replies
      }
      else {
        return this.slideinfo.recent_replies.slice(1,6)
      }
  },
},
 beforeMount: function() {
    this.getArtical()
    this.getSlide()
  },
}
</script>
<style scoped>
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
 }
  .inner img {
    width: 270px;
  }
  .space {
    height: 10px;
  }
  .single-line {
     text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 14px;
      color: #778087;
          line-height: 30px;
         max-width: 270px;
             text-decoration: none;
                 display: inline-block;
    vertical-align: middle;
  }
  .head-container {
    background:white;
  }
    .head-container img {
          width: 48px;
    height: 48px;
        border-radius: 3px;
    }
    .head-container .score{
      margin:0;
    }
    .head-container .score span {
      vertical-align: middle;
      line-height: 34px;
    }
    .head-container .sign {
          font-style: italic;
              font-size: 13px;
                  line-height: 2em;
    }
</style>
