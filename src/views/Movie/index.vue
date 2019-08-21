<template>
  <div id="main">
    <Header title="喵喵电影" />
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>{{$store.state.city.nm}}</span>
          <i class="iconfont icon-xia"></i>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowplaying" class="hot_item">正在热映</router-link>
          <router-link tag="div" to="/movie/comesoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry">
          <i class="iconfont icon-icon_search"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>

    <TabBar />
  </div>
</template>
<script>
import Header from "@/components/Header";
import TabBar from "@/components/TabBar";
import { messageBox } from "@/components/JS";
export default {
  name: "Movie",
  components: {
    Header,
    TabBar
  },
  mounted() {
    setTimeout(() => {
      this.axios.get("/api/getLocation").then((res) => {
      var msg = res.data.msg;
      if (msg === "ok") {
       
        var nm = res.data.data.nm;
         var id = res.data.data.id;
         if(this.$store.state.city.id==id){return;}
                  console.log(this.$store.state.city.id);
        messageBox({
          title: "定位",
          content: nm,
          cancel: "取消",
          ok: "切换定位",
          handleCancel() {
            console.log("111");
          },
          handleOk() {
               window.localStorage.setItem("nowNm",nm)
                window.localStorage.setItem("nowId",id)
                window.location.reload()
          }
        });
      }
    });
    }, 3000);
    
  }
};
</script>
<style lang="scss" scoped>
#main {
  height: 100%;
  display: flex;
  flex-direction: column;
}
#content {
  flex: 1;
  overflow: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  .movie_menu {
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    .city_name {
      margin-left: 20px;
      height: 100%;
      line-height: 45px;
      &.active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
      &.router-link-active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
    }
    .hot_switch {
      display: flex;
      height: 100%;
      line-height: 45px;
      .hot_item {
        font-size: 15px;
        color: #666;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
        &.active {
          color: #ef4238;
          border-bottom: 2px solid #ef4238;
        }
        &.router-link-active {
          color: #ef4238;
          border-bottom: 2px solid #ef4238;
        }
      }
    }
    .search_entry {
      margin-right: 20px;
      height: 100%;
      line-height: 45px;
      &.active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
      &.router-link-active {
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
      i {
        font-size: 24px;
        color: red;
      }
    }
  }
}
</style>