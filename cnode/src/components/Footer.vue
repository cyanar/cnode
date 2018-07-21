<template>
    <div class="bottom">
        <div class="footer-wraper">
<div class="links">
    <a href="">RSS</a> <span>|</span> <a href="">源码地址</a>
</div>
<p >CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
<p class="logo-link">服务器赞助商为<a href=""><img class="ucloud" src="../assets/ucloud.png" alt=""></a> ，存储赞助商为  <a href=""><img class="seven-cloud" src="../assets/七牛云.png" alt=""></a> ，由  <a href=""><img class="alinode" src="../assets/alinode.png" alt=""></a> 提供应用性能服务。</p>
<p>新手搭建 Node.js 服务器，推荐使用无需备案的<a class="last-link" href=""> DigitalOcean(https://www.digitalocean.com/)</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Footer',

    
}
</script>
<style>
   .footer-wraper {
       width: 90%;
    max-width: 1400px;
    min-width: 960px;
    margin: 0 auto;
  color: #ababab;
    padding: 20px 0;
    font-size: 14px;
    line-height: 20px;
    background: white;
   } 

   .seven-cloud{
       width: 115px;
       vertical-align: middle;
       
   }
   .alinode {
       width: 166px;
       vertical-align: middle;
       
   }
   .ucloud {
       width: 92px;
       vertical-align: middle;
       
   }
   .footer-wraper p {
       margin-bottom: 10px;
   }
   .links {
    color: #e2e2e2;
  
    font-size: 13px;
    line-height: 2em;
   }
   .links a {
       color: #666;
    text-decoration: none;
   }
   .bottom {
       width:100%;
       background: white;
       cursor: default;
       
   }
.last-link {
    color: #08c;
    text-decoration: none;
}
   
</style>