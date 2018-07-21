<template>
<div class="artical">
        <div id="loading-img" v-if="isloading">
          <img src="../assets/load.png"  alt="">
      </div>
      <div v-else>
          <div class="artical-header">
    <span class="artical-title">{{arcdata.title}}</span>
    <div class="artical-inform">
    <span>●发布于 {{arcdata.last_reply_at|formatTime}}</span>
    <span>●作者 {{arcdata.author.loginname}}</span>
    <span>●{{arcdata.visit_count}} 次浏览</span>
    <span>●来自 {{arcdata|selType}}</span>
    <span></span>
    </div>
</div>
<div class="artical-wraper">
<div class="artical-content" v-html=arcdata.content>
</div></div>
<div class="response-num common">{{arcdata.reply_count}} 回复</div>
<div class="response-data common" v-for='(resp,index) in arcdata.replies'>
    <div class="attach-inform ">
        <router-link :to="{name:'userinfo',params:{name:resp.author.loginname}}"><img :src=resp.author.avatar_url alt=""></router-link>

    <router-link class="author-name" :to="{name:'userinfo',params:{name:resp.author.loginname}}">{{resp.author.loginname}}</router-link>
    <span class="floor">{{index+1}}楼●{{resp.last_reply_at|formatTime}}</span>
    </div>
    <div class="commit">
        <div v-html=resp.content></div>
    </div>




</div>

      </div>
</div>
</template>
<script>
export default {
  name: 'Artical',
  data: function() {
    return {
      isloading: false,
      arcdata: {}
    };
  },
  methods: {
    getArtical() {
      this.$http
        .get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id)
        .then(res => {
          this.isloading = false;
          this.arcdata = res.data.data;
        //   console.dir(res.data.data.replies)
        //   console.dir(res.data.data.replies[0]);
        });
    },
    toBottom:function(){
        // console.dir(document.body)

        // console.dir(document.body.clientHeight)
        // console.dir(document.body.offsetHeight)
        // console.dir(document.body.scrollHeight)


    //    window.scrollY=document.body.scrollHeight
    }
  },
  beforeMount:function(){
      this.isloading=true
      this.getArtical();
  },
  mounted: function(){
      if(this.$route.params.tobottom==true){
          this.toBottom()
      }
  },
    watch:{
    '$route'(to,from){
      this.getArtical()
    }
  }
}
</script>
<style >
@import url(../assets/markdown.css);
* {
    margin: 0;
    padding: 0;
}
#loading-img {
  position: fixed;
  left: 30%;
  top: 50%;
}
.artical-header {
    padding: 10px;
    background-color: white;
    border-radius: 13px 13px 0 0;
    border-bottom: solid 1px rgb(1,1,1,0.1)

}
.artical-title {
    font-size: 22px;
    font-weight: 700;
    margin: 8px 0;
    display: inline-block;
    vertical-align: bottom;
    width: 75%;
    line-height: 130%;
    background-color: white;

}
.artical-inform {
        font-size: 12px;
    color: #838383;
        line-height: 20px;
}
.artical-content {
    margin:0 10px;
}
.artical-wraper {
    padding: 10px;
    margin-bottom: 13px;
    background-color: white;


}
.response-num {
        background-color: #f6f6f6;
        border-radius: 5px 5px 0 0;

}
.common {
    padding: 10px;
}

.attach-inform img {
width: 30px;
height: 30px;
border-radius: 3px;

}
.response-data {
    background-color: white;
    border-bottom: solid 1px rgb(1,1,1,0.1);

}
.author-name {
        color: #666;
            text-overflow: ellipsis;
            overflow: hidden;
                font-size: 12px;
    font-weight: 700;
    line-height: 20px;
}
.floor {
        font-size: 11px;
            color: #08c;
}
.commit p {
    padding-left: 50px;

    margin-bottom: 0 !important;

}
</style>
