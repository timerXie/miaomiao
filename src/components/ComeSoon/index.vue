<template>
    <div class="movie_body">
        <Loading v-if="isLoading"/>
        <Scroller v-else>
        <ul>
            <li v-for="item in comingList" :key="item.id">
                <div class="pic_show" @tap="handleToDetail(item.id)"><img :src="item.img | setWH('128.180')" alt=""></div>
                <div class="info_list">
                    <h2 @tap="handleToDetail(item.id)">{{item.nm}}</h2>
                    <p><span class="grade">{{item.wish}}</span>人想看</p>
                    <p>主演：{{item.star}}</p>
                    <p>{{item.rt}}</p>
                </div>
                <div class="btn_pre">
                    预售
                </div>

            </li>
           
        </ul>
        </Scroller>
    </div>
</template>
<script>
export default {
    name:"ComeSoon",
    data(){
   return{
       comingList:[],
       isLoading:true,
       preCityId:-1
   }
    },
    methods:{
   handleToDetail(movieId){
     this.$router.push("/movie/detail/2/"+movieId)

  }
    },
    activated(){
            var cityId =this.$store.state.city.id
            if(this.preCityId===cityId){return;}
             this.isLoading=true
        this.axios.get("/api/movieComingList?cityId="+cityId).then((res)=>{
            // console.log(res);
            
            var msg = res.data.msg;
            if(msg==="ok"){
                this.comingList = res.data.data.comingList
                this.isLoading=false
            }
        })
    }
}
</script>
<style lang="scss" scoped>
    .movie_body{
        flex: 1;
        overflow:auto;
        ul{
            margin: 0 12px;
            overflow: hidden;
            li{
                margin-top: 12px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid #b69a9a;
                padding-bottom: 10px;
                .pic_show{
                    width: 64px;
                    height: 90px;
                    img{
                        width: 100%;
                    }
                }
                .info_list{
                    margin-left: 10px;
                    flex: 1;
                    position: relative;
                    h2{
                        font-size: 17px;
                        line-height: 24px;
                        width: 150px;
                        overflow: hidden;
                        white-space: nowrap;
                          text-overflow: ellipsis

                    }
                    p{
                         font-size: 13px;
                         color:#666;
                         line-height: 22px;
                         width: 200px;
                         overflow: hidden;
                         white-space: nowrap;
                         text-overflow: ellipsis

                    }
                    .grade{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }
                    img{
                        width: 50px;
                        position: absolute;
                        right: 10px;
                        top: 5px;
                    }
                }
                .btn_mall{
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    background: #f03d37;
                    color:#fff;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;
                }
                .btn_pre{
                    width: 47px;
                    height: 27px;
                    line-height: 28px;
                    text-align: center;
                    background: #3c9fe6;
                    color:#fff;
                    border-radius: 4px;
                    font-size: 12px;
                    cursor: pointer;

                }
            }
           
        }

    }
</style>