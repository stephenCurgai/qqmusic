<template>
  <div id="search">
    <div class="searchTop">
      <div class="searchTopL">
        <span>
          <img src="../../assets/images/ico2.png" alt />
        </span>
        <input type="text" name id class="searchMain" placeholder="搜索歌曲、歌单、专辑" />
      </div>
      <div class="searchTopR"></div>
    </div>
    <div class="searchList">
      <h3>热门搜索</h3>
      <ul>
        <li @click="getlist(item.first)" v-for="(item,index) in searchList" :key="index" :class="index==0?red:''">{{item.first}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        red:'red',
      searchList: [
        /* "乐队的夏天",
        "世间美好与你环环相扣 ",
        "谁",
        "世间美好与你环环相扣 ",
        "I NEVER TOLD YOU ",
        "不爱我就别伤害我 ",
        "你笑起来真好看 " */
      ]
    };
  },
  methods:{
    // 编程式导航将歌名传过去
    getlist(name){
      console.log(111);
      this.$router.push({
        path:'/musicList',
        query:{
          name:name
        }
      })
    }
  },
  mounted() {
    // 热搜
    this.$http({
      url: this.$api.hot,
      methed: "get"
    })
      .then(res => {
        console.log(res,'热搜');
        
        // console.log(res.data.result.hots);
        this.searchList = res.data.result.hots;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style scoped>
#search {
  width: 7.5rem;
}
.searchTop {
  width: 7.5rem;
  height: 0.92rem;
  background: #f4f4f4;
  padding-top: 0.2rem;
}
.searchTopL {
  width: 6.66rem;
  height: 0.4rem;
  background: #fff;
  margin: 0 auto;
  padding: 0.16rem 0.24rem 0.16rem 0.2rem;
}
.searchMain {
  width: 5.7rem;
  height: 0.36rem;
  border: none;
  /* background: pink; */
  outline: none;
  float: left;
  padding-left: 0.1rem;
}
.searchTopL span {
  width: 0.36rem;
  height: 0.36rem;
  display: block;
  float: left;
}
.searchTopL span img {
  width: 0.36rem;
  height: 0.36rem;
  float: left;
}
.searchList {
  width: 6.8rem;
  padding: 0.3rem 0.3rem 0.2rem 0.3rem;
}
.searchList h3 {
  font-size: 0.28rem;
}
.searchList ul {
  width: 6.8rem;
}
.searchList ul li {
  display: inline-block;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  padding: 0 0.2rem;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 0.5rem;
  margin: 0.2rem 0.2rem 0 0;
}
.searchList ul .red{
    color:red;
    border: 1px solid red;
}
</style>