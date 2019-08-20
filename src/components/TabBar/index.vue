<template>
    <footer id="footer">
        <ul>
            <router-link tag="li" to="/movie">
                <i class="iconfont icon-dianying"></i>
                <p>电影</p>
            </router-link>
             <router-link tag="li" to="/cinema">
                <i class="iconfont icon-ziyuan"></i>
                <p>影院</p>
            </router-link>
             <router-link tag="li" to="/mine">
                <i class="iconfont icon-yingyuanxinxigongjiao"></i>
                <p>我的</p>
            </router-link>
        </ul>
    </footer>
</template>
<script>
export default {
    name:"TabBar"
}
</script>
<style lang="scss" scoped>
     #footer{
         width: 100%;
         height: 50px;
         background: #f7f4f4;
         border-top: 1px solid #302e2e;
         position: fixed;
         left: 0;
         bottom: 0;
         ul{
             display: flex;
             text-align: center;
             height: 50px;
             align-items: center;
             li{
                 flex: 1;
                 height: 40px;
                 .active{
                     color: #f03d37;
                 }
                 
                 i{
                     font-size: 20px;
                 }
                 p{
                     font-size: 12px;
                     line-height: 18px;
                 }
             }
             li.router-link-active{
                     color:#f03d37;
                 }
         }
     }
</style>