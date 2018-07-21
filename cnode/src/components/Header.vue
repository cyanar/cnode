<template>
  <div class="header">
      <div class="inner">
      <div class="content clearfix">
<a href="/" class="logolink"><img src="../assets/logo.svg" alt=""></a>
<form action="">
<input type="text" class="input" id="search">
</form>
<ul class="nav-list">
    <li><router-link :to="{name:'root'}">首页 </router-link></li>
    <li><a href="#">新手入门</a></li>
    <li><a href="#">API</a></li>
    <li><a href="#">关于</a></li>
    <li><a href="#">注册</a></li>
    <li><a href="#">登录 </a></li>
</ul>
</div>
</div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
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
.header {
  margin-bottom: 0;
  width: 100%;
  background: #444;
  font-size: 13px;
}
.inner {
  width: 90%;
  margin: auto;
  padding: 5px;
}
.content {
  width: 100%;
  min-width: 960px;
  margin: 0 auto;
  max-width: 1400px;
}
.header .logolink {
  width: 120px;
  padding: 3px 20px 3px 0;
  height: 34px;
  line-height: 34px;
  color: #ccc;
  font-weight: 700;
  display: block;
  float: left;
}
.header .input {
  background: url(../assets/search.png) 4px 4px no-repeat #888;
  padding: 3px 5px 3px 22px;
  color: #666;
  border: 0;
  margin-top: 2px;
  transition: all 0.5s;
  margin-bottom: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 13px;
  border-radius: 15px;
  width: 206px;
  outline-style: none;
}
.header .input:hover,
.header .input:focus {
  background-color: #fff;
}
.nav-list {
  list-style: none;
  float: right;
  font-family: "Helvetica Neue","Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB";
}
.nav-list li {
  float: left;
}
.nav-list li a {
  color: #ccc;
  padding: 10px 15px;
  text-decoration: none;
  display: block;
  line-height: 20px;
  font-size: 13px;
  word-break: break-word;
}
.nav-list li a:hover {
  color: white;
}
#search {
  margin-top: 8px;
  line-height: 20px;
  color: #333;
  float: left;
}
</style>
