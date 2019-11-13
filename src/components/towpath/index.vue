<template>
  <div class="indexbox">
    <div class="lunboimg">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-if="4>index" v-for="(item,index) in imaegsList" :key="index">
            <img :src="item.imageUrl" alt />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="indexCent">
      <h3>电台</h3>
      <div class="indexCentList">
        <div v-show='2>index' v-for="(itme,index) in imgsList" :key="index">
          <img :src="itme.picUrl" alt />
          <p>{{itme.name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../../node_modules/swiper/js/swiper.min.js";
import Swiper from "swiper";
// import api from '../../Interface/api'
// console.log(api.banner);

export default {
  data() {
    return {
      imaegsList: [],
      imgsList: []
    };
  },
  methods: {
    mySwiper() {
      var swiper = new Swiper(".swiper-container", {
        autoplay: {
          disableOnInteraction: false
        },
        freeMode: false,
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
  },
  mounted() {
    // banner接口
    this.$http({
      url: this.$api.banner,
      methed: "get"
    })
      .then(res => {
        // console.log(res, "rrrrr");
        this.imaegsList = res.data.banners;
        // $nextTick()延迟加载，将回调延迟到下次dom更新循环之后执行
        // 这里轮播如果不用延迟加载，会出现顺序问题，所以，就不能轮播，只能加载出图片
        this.$nextTick(() => {
          this.mySwiper();
        });
      })
      .catch(err => {
        console.log(err);
      });
      // 推荐电台接口，用户一进来就渲染推荐电台
    this.$http({
      url:this.$api.perfered,
      methed:'get'
    })
    .then(res=>{
      // console.log(res.data.data);
      this.imgsList = res.data.data
    })
    .catch(err=>{
      console.log(err);
      
    })
  }
};
</script>
<style lang="" scoped>
@import "../../../node_modules/swiper/css/swiper.min.css";
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  width: 7.5rem;
}
.indexbox {
  width: 7.5rem;
}
.lunboimg {
  width: 7.5rem;
  height: 3rem;
}
.indexCent {
  width: 7.1rem;
  padding: 0 0.2rem;
  margin-top: 0.4rem;
}
.indexCentList {
  width: 7.1rem;
  display: flex;
  justify-content: space-between;
}
.indexCentList div {
  width: 3.47rem;
}
.indexCentList img {
  width: 3.47rem;
  height: 3.47rem;
}
.indexCentList p {
  font-size: 14px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  width: 3.2rem;
}
.indexCent h3 {
  font-size: 16px;
  margin-bottom: 0.22rem;
}
</style>