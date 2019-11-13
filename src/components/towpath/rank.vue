<template>
  <div id="rank">
    <div class="ranking">
      <ul>
        <li v-show="index<4" v-for="(item,index) in songList" :key="item.id" class="rankLi">
          <div class="rankL">
            <img :src="item.coverImgUrl" alt class="rankingImg" />
          </div>
          <div class="rankR">
            <h3>{{item.name}}</h3>
            <p v-for="(ite,i) in item.tracks" :key="i">
              {{i+1}}{{ite.first}}{{ite.second}}
              </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      songList: [
       /*  {
          id: 1,
          url: require("../../assets/images/songlist1.jpg"),
          sort: "流行指数榜",
          song: [
            {
              songname: "千灯之约",
              author: "-无限王者团"
            },
            {
              songname: "Walk on Water",
              author: "- G.E.M. 邓紫棋"
            },
            {
              songname: "那什么",
              author: "- 永彬Ryan.B/李晧轩"
            }
          ]
        },
        {
          id: 2,
          url: require("../../assets/images/songlist2.jpg"),
          sort: "热歌榜",
          song: [
            {
              songname: "野狼Disco（feat.陈伟霆）",
              author: "- 宝石Gem/陈伟霆"
            },
            {
              songname: "嚣张",
              author: "- en"
            },
            {
              songname: "说好不哭（with 五月天阿信）",
              author: "- 周杰伦"
            }
          ]
        },
        {
          id: 3,
          url: require("../../assets/images/songlist3.jpg"),
          sort: "新歌榜",
          song: [
            {
              songname: "野狼Disco（feat.陈伟霆）",
              author: "- 宝石Gem/陈伟霆"
            },
            {
              songname: "悬溺",
              author: "- 葛东琪"
            },
            {
              songname: "I Adore You",
              author: "- 易烊千玺"
            }
          ]
        },
        {
          id: 4,
          url: require("../../assets/images/songlist4.jpg"),
          sort: "飙升榜",
          song: [
            {
              songname: "火花 (Spark) (불티)",
              author: "- 태연 (太妍)"
            },
            {
              songname: "入戏又动心",
              author: "- 寂悸"
            },
            {
              songname: "致曾来过的你",
              author: "- 汪苏泷"
            }
          ]
        },
        {
          id: 5,
          url: require("../../assets/images/songlist5.jpg"),
          sort: "内地榜",
          song: [
            {
               songname: "野狼Disco（feat.陈伟霆）",
              author: "- 宝石Gem/陈伟霆"
            },
            {
              songname: "I Adore You",
              author: "- 易烊千玺"
            },
            {
              songname: "雨幕",
              author: "- 许嵩"
            }
          ]
        } */
      ]
    };
  },
  mounted(){
    // 排行榜
    this.$http({
      url:this.$api.detail,
      methed:'get'
    })
    .then(res=>{
      // console.log(res.data.list);
      this.songList = res.data.list
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
};
</script>
<style scoped>
#rank {
  width: 7.1rem;
  padding: 0 0.2rem;
}
.rankLi {
  display: flex;
  justify-content: space-between;
  margin-top: 0.2rem;
}
.ranking > ul {
  width: 7.1rem;
}
.rankingImg {
  width: 2rem;
  height: 2rem;
}
.rankL {
  width: 2rem;
  height: 2rem;
}
.rankR {
  width: 4.7rem;
  height: 2rem;
  padding:0 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.rankR p{
  font-size: 14px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  width:4.7rem;
}
.rankR h3{
  font-size: 16px;
}
</style>