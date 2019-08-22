<template>
  <div class="movie_body" ref="movie_body">
      <Loading v-if="isLoading"/>
<Scroller v-else :handleToScroll="handleToScroll" :handleToTouchEnd="handleToTouchEnd">
    <ul>
      
        <li>{{pullDownMsg}}</li>
        <li v-for="item in movieList" :key="item.id">
          <div class="pic_show" @tap="handleToDetail(item.id)">
            <img :src="item.img | setWH('128.180')" alt />
          </div>
          <div class="info_list">
            <h2 @tap="handleToDetail(item.id)">{{item.nm}}</h2>
            <p>
              观众评
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>主演：{{item.star}}</p>
            <p>{{item.showInfo}}</p>
          </div>
          <div class="btn_mall">购票</div>
        </li>
     
    </ul>
     </Scroller>
  </div>
</template>
<script>
// import BScroll from "better-scroll"
import { setTimeout } from "timers";
export default {
  name: "NowPlaying",
  data() {
    return {
      movieList: [],
      pullDownMsg: "",
      isLoading:true,
      preCityId:-1
    };
  },
  activated() {
    
      var cityId = this.$store.state.city.id
      if(this.preCityId===cityId){return;}
       this.isLoading=true;
    this.axios.get("/api/movieOnInfoList?cityId="+cityId).then(res => {
      var msg = res.data.msg;
      if (msg === "ok") {
        this.movieList = res.data.data.movieList;
        this.isLoading=false;
        this.preCityId = cityId;
        // this.$nextTick(() => {
        //   var scroll = new BScroll(this.$refs.movie_body, {
        //     tap: true,
        //     probeType: 1
        //   });

        //   scroll.on("scroll", pos => {
        //     if (pos.y > 30) {
        //       this.pullDownMsg = "正在更新";
        //     }
        //   });
        //   scroll.on("touchEnd", pos => {
        //     if (pos.y > 30) {
        //       this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
        //         var msg = res.data.msg;
        //         if (msg === "ok") {
        //           this.pullDownMsg = "更新成功";
        //           setTimeout(() => {
        //             this.movieList = res.data.data.movieList;
        //             this.pullDownMsg = "";
        //           }, 1000);
        //         }
        //       });
        //     }
        //   });
        // });
      }
    });
  },
  methods: {
    handleToDetail(movieId) {
      
      this.$router.push("/movie/detail/1/"+movieId)
    },
    handleToScroll(pos) {
      if (pos.y > 30) {
        this.pullDownMsg = "正在更新";
      }
    },
    handleToTouchEnd(pos) {
      if (pos.y > 30) {
        this.axios.get("/api/movieOnInfoList?cityId=10").then(res => {
          var msg = res.data.msg;
          if (msg === "ok") {
            this.pullDownMsg = "更新成功";
            setTimeout(() => {
              this.movieList = res.data.data.movieList;
              this.pullDownMsg = "";
            }, 1000);
          }
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#content {
  .movie_body {
    flex: 1;
    overflow: auto;

    ul {
      margin: 0 12px;

      overflow: hidden;
      li {
        margin-top: 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #b69a9a;
        padding-bottom: 10px;
        .pic_show {
          width: 64px;
          height: 90px;
          img {
            width: 100%;
          }
        }
        .info_list {
          margin-left: 10px;
          flex: 1;
          position: relative;
          h2 {
            font-size: 17px;
            line-height: 24px;
            width: 150px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            font-size: 13px;
            color: #666;
            line-height: 22px;
            width: 200px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .grade {
            font-weight: 700;
            color: #faaf00;
            font-size: 15px;
          }
          img {
            width: 50px;
            position: absolute;
            right: 10px;
            top: 5px;
          }
        }
        .btn_mall {
          width: 47px;
          height: 27px;
          line-height: 28px;
          text-align: center;
          background: #f03d37;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        }
        .btn_pre {
          width: 47px;
          height: 27px;
          line-height: 28px;
          text-align: center;
          background: #3c9fe6;
          color: #fff;
          border-radius: 4px;
          font-size: 12px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>