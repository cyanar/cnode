<template>
  <div class="page-select">
<button class="normal-button" @click=main>首页</button>
<button class="normal-button" @click=back>上一页</button>
<button class="normal-button" v-if=ifshow>•••</button>
<button v-for="num in pagearry" :class='["normal-button",{click:num==pagenum}]' @click=changePage(num)>{{num}}</button>
<button class="normal-button" >•••</button>
<button class="normal-button" @click=go>下一页</button>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  name:'Pageselect',
  data: function(){
    return {
     pagearry:[1,2,3,4,5],
     pagenum: 1,
    }
  },
  methods:{
    init:function(){
this.$emit('pagechange',this.pagenum)
},
    changePage(num){
this.pagenum=num
      console.log(num)
      if(num>=5&num==this.pagearry[4]){
       this.pagearry.splice(0,1)
        this.pagearry.push(num+1)
        console.log(this.pagearry)
      }
      else if(num>5){
        this.pagearry.pop()
        this.pagearry.unshift(this.pagearry[0]-1)
        console.log(this.pagearry)
      }
      else {
        this.pagearry=[1,2,3,4,5]
      }
      this.init()
    },
    back(){
$('.click').eq(0).prev().click()
      this.init()
    },
    go(){
$('.click').eq(0).next().click()
      this.init()
    },
    main(){
      this.pagenum=1
this.pagearry=[1,2,3,4,5]
      this.init()
    }
  },
  computed:{
    ifshow:function(){
      if(this.pagenum<5){
        return false
      }
      else {
        return true
      }
    },
  }
}

</script>
<style scoped>
.normal-button{
 width: 70px;
  height: 40px;
  cursor: pointer;
  background: white;
  color: #778087;
      padding: 4px 12px;
          line-height: 20px;
              font-size: 14px;
              outline-style:none;
              float: left;
              border-radius: 8px;
}
.normal-button:hover{
background-color: #f5f5f5;;
}
.click {
  background: #000 !important;
  color:white !important;
}
</style>
