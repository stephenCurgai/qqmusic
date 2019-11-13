<template>
    <div id="playMusic">
        <div>
            <audio :src="musicUrl" controls autoplay class="play" ref="audi"></audio>
            
        </div>
        <div class="imgs">
            <img :src="imgurl" alt="">
            <P class="music">《{{musicName}}》</P>
            <P class="auter">{{pop}}</P>
        </div>
    </div>
</template>
<script>
export default{
    data(){return{
        musicid:'',
        musicName:'',
        pop:'',
        imgurl:'',
        musicUrl:''
    }},
    methods(){
        
    },
    mounted(){
    this.musicid = this.$route.query.id
    this.musicName = this.$route.query.name
    this.pop = this.$route.query.pop
        // 排行榜
    this.$http({
      url: this.$api.song+this.musicid,
      methed: "get"
    })
      .then(res => {
        console.log(res);
        console.log(res.data.data[0].url);
        this.musicUrl = res.data.data[0].url;
      })
      .catch(err => {
        console.log(err);
      });
    this.$http({
      url: 'http://localhost:3000/song/detail?ids='+this.musicid,
      methed: "get"
    })
      .then(res => {
        //   console.log(res.data.songs[0].al.picUrl,'图片');
          this.imgurl = res.data.songs[0].al.picUrl
      })
      .catch(err => {
        console.log(err);
      });
    }
}
</script>
<style lang="" scoped>
#playMusic{
    width:7.5rem;
    margin: 0 auto;
}
.play{
    width: 7.5rem;
    margin: 0 auto;
}
.music{
    color: #333;
    font-size: 16px;
    text-align: center;
    margin-top: 0.2rem;
}
.auter{
    color: #333;
    font-size: 14px;
    text-align: center;
    margin-top: 0.2rem;
}
.imgs img{
    width: 7.5rem;
}
/* .listMain{
    width: 7.5rem;
}
.listMain li{
    width: 6.86rem;
    height: 0.84rem;
    padding: 0.2rem 0.32rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.listMain li h2{
    font-size: 0.32rem;
}
.listMain li p{
    font-size: 0.24rem;
} */
</style>