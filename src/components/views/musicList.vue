<template>
  <div id="musicList">
    <ul class="listMain">
      <li v-for="item in musicList" :key="item.id" @click="goPlay(item.id,item.name,item.artists[0].name)">
        <h2>{{item.name}}</h2>
        <p>{{item.artists[0].name}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      musicList: [],
      Passname: ""
    };
  },
  methods: {
    goPlay(id,name,pop) {
      this.$router.push({
        path: "/playmusic",
        query: {
          id: id,
          name:name,
          pop:pop,
        }
      });
    }
  },
  mounted() {
    this.Passname = this.$route.query.name;
    // 播放列表
    this.$http({
      url: this.$api.search + this.Passname,
      methed: "get"
    })
      .then(res => {
        console.log(res,'成功');
        // console.log(res.data.result.songs);
        this.musicList = res.data.result.songs;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="" scoped>
#musicList {
  width: 7.5rem;
  margin: 0 auto;
}
.listMain {
  width: 7.5rem;
}
.listMain li {
  width: 6.86rem;
  height: 0.84rem;
  padding: 0.2rem 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.listMain li h2 {
  font-size: 0.32rem;
}
.listMain li p {
  font-size: 0.24rem;
}
</style>