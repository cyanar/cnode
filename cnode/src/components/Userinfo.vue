<template>
    <div>
<div class="wraper">
<div class="author">
    <div class="first-line">主页/</div>
    <div class="out-wraper">
        <div ><img class="photo" :src=authorinfo.avatar_url><span class="top">{{authorinfo.loginname}}</span></div>
        <div class="count">{{authorinfo.score}} 积分
          <div>话题收藏</div>
          <div class="collection" v-for="collect in fivecollect">{{collect.title}}</div>

        </div>
    </div>
</div>
<div class="create">
    <div class="first-line">最近创建的话题</div>
    <div id="postlist">
       <div class="wraper" v-for="join in fiverecent">
       <img class="photo2" :src=join.author.avatar_url alt="">
        <router-link :to="{name:'artical_content',params:{id:join.id,loginname:join.loginname,tobottom:false}}">{{join.title}} </router-link>
        <span class="recent-replay">{{join.last_reply_at|formatTime}}</span>
    </div>
    <div class="wraper">
<a href="#" class="seemore">查看更多>></a>

    </div>

    </div>
</div>
<div class="join">
    <div class="first-line">最近参与的话题</div>
  <div id="postlist">
       <div class="wraper"v-for="topic in fiveresponse">
        <img class="photo2" :src=topic.author.avatar_url alt="">
            <router-link :to="{name:'artical_content',params:{id:topic.id}}">{{topic.title}}</router-link>
        <span class="recent-replay">{{topic.last_reply_at|formatTime}}</span>
    </div>
    <div class="wraper">
<a href="#" class="seemore">查看更多>></a>

    </div>

    </div>
    </div>
</div>
</div>

</template>
<script>
export default {
    name: 'Userinfo',
    data: function(){
        return {
           authorinfo:{recent_topics:[],recent_replies:[]},
           collects:'00',


        }
    },
    methods: {
        getUserInfo(){
this.$http.get('https://cnodejs.org/api/v1/user/'+this.$route.params.name)
  .then(res=>{
            // console.dir(res.data.data)
            // console.dir(res.data)

            this.authorinfo=res.data.data
            // console.dir(res.data.data.avatar_url)
        })

        },
        getCollection(){
          this.$http.get('https://cnodejs.org/api/v1/topic_collect/'+this.$route.params.name)
  .then(res=>{
           console.dir(res.data)
           this.collects=res.data.data
           console.log(0)
        })


        },


    },
    beforeMount: function(){
        this.getUserInfo()
        this.  getCollection()


    },
    mounted:function(){
        console.log(this.collecs)

    },
    computed: {
  fiverecent: function(){
    // console.dir(this. authorinfo.recent_topics.length)
      if(this. authorinfo.recent_topics.length<=6){
        return this.authorinfo.recent_topics.slice(1)
      }
      else {
        return this.authorinfo.recent_topics.slice(1,6)
      }
  },
   fiveresponse: function(){
      if(this.authorinfo.recent_replies.length<=5){
        return this.authorinfo.recent_replies
      }
      else {
        return this.authorinfo.recent_replies.slice(0,5)
      }
  },
  fivecollect: function(){
      if(this.collects.length<=5){
        return this.collects
      }
      else {
        return this.collects.slice(0,5)
      }
  },
},

}
</script>
<style>
    .photo {
        width: 40px;
        height: 40px;
        border-radius: 3px;
    }
      .photo2 {
        width: 30px;
        height: 30px;
        border-radius: 3px;
    }
    .first-line {
            padding: 10px;
    background-color: #f6f6f6;
    border-radius: 13px 13px 0 0;
    color: #80bd01;
    }
    .out-wraper {
        background: white;
        padding: 10px;
    }
    .top {
        vertical-align: top;
            color: #778087;
                font-size: 14px;
                    line-height: 2em;
                    margin-left: 10px;
    }
    .count {
        font-size:14px;
        color: #333;
    }
    #postlist {
        background: white;
    }
      #postlist .wraper {
          padding: 10px;

  line-height: 2em;
  word-break: break-word;
  color: #333;
  display: block;
  border-bottom: solid 1px rgb(0, 0, 0, 0.05);
      }
       #postlist .wraper img {
           width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 3px;
  vertical-align: middle;
       }
       #postlist .wraper a {
         max-width: 70%;
    -o-text-overflow: ellipsis;
    white-space: nowrap;
    display: inline-block;
    vertical-align: middle;
    font-size: 16px;
    text-decoration: none;
    color: #08c;
    margin-left: 15px;
       }
        #postlist .wraper:hover{
background: #f5f5f5;
        }
         #postlist  .recent-replay{
               text-align: right;
    min-width: 50px;
   float: right;
    white-space: nowrap;
        font-size: 11px;
        color: #777;
            line-height: 20px;
         }
          #postlist .seemore {
                color: #666;
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
          }
          .author .collection {
            padding-left:40px;
            cursor: default;
            color: #778087;
          }
</style>
