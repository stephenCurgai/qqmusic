<template>
      <div id="app">
    <div class="Header">
      <div class="HeaderL">
        <img src="../assets/images/logo.svg" alt />
      </div>
      <div class="HeaderR">
        <a href="#">下载APP</a>
      </div>
    </div>
    <ul class="headerMain">
      <li>
        <router-link to="/index" activeClass="select" class="headerlist">推荐</router-link>
      </li>
      <li>
        <router-link to="/rank" activeClass="select" class="headerlist">排行榜</router-link>
      </li>
      <li>
        <router-link to="/search" activeClass="select" class="headerlist">搜索</router-link>
      </li>
    </ul>

   <router-view />
  </div>
</template>
<script>
    
</script>
<style lang="" scoped>
#app {
  width: 7.5rem;
}
.Header {
  width: 7.1rem;
  height: 1.6rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.HeaderL {
  width: 2.53rem;
  height: 0.7rem;
}
.HeaderL img {
  width: 2.53rem;
  height: 0.7rem;
}
.HeaderR {
  width: 1.56rem;
  height: 0.54rem;
}
.HeaderR a {
  display: block;
  width: 100%;
  height: 100%;
  font-size: 14px;
  text-align: center;
  font-size: 14px;
  color: #000;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;
  line-height: 0.54rem;
  font-weight: bold;
}
.headerMain {
  width: 7.5rem;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
}
.headerMain li {
  width: 100%;
  float: left;
}
.headerMain li a {
  height: 0.76rem;
  display: block;
  text-align: center;
  font-size: 16px;
  line-height: 0.76rem;
  border-bottom: 2px solid #fff;
  color: rgba(0, 0, 0, 0.6);
}
.headerMain li .select {
  color: #31c27c;
  border-bottom: 2px solid #31c27c;
}
</style>