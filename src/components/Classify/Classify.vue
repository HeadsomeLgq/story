<template>
  <div class="classify">
    <div class="mybook">
      <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
        <mu-icon @click="goBack" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
        <h2 class="mylist">分类</h2>
        <mu-icon  class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
      </mu-appbar>
      <div class="girl_title">
        <div class="title">女生分类</div>
      </div>
       <div class="g_bar" @click="showCldetail">
         <img src="../../assets/images/avatar1.jpg" alt="">
         <div class="title_info">
           <span class="c_name">现言</span>
           <span class="c_tags">豪门总裁 | 婚姻 | 都市情感 | 宝宝</span>
         </div>
       </div>
      <h6 class="line"></h6>
      <div class="g_bar">
        <img src="../../assets/images/avatar2.jpg" alt="">
        <div class="title_info">
          <span class="c_name">古言</span>
          <span class="c_tags">穿越 | 架空 | 宫斗宅斗 | 情仇爱恨</span>
        </div>
      </div>
      <h6 class="line"></h6>
      <div class="g_bar">
        <img src="../../assets/images/avatar3.jpg" alt="">
        <div class="title_info">
          <span class="c_name">幻言</span>
          <span class="c_tags">仙侣奇缘 | 江湖奇缘</span>
        </div>
      </div>
      <h6 class="line"></h6>
      <div class="girl_title">
        <div class="title">男生分类</div>
      </div>
      <div class="g_bar">
        <img src="../../assets/images/avatar4.jpg" alt="">
        <div class="title_info">
          <span class="c_name">都市</span>
          <span class="c_tags">生活 | 异能 | 重生 | 热血 | 人生</span>
        </div>
      </div>
      <h6 class="line"></h6>
      <div class="g_bar">
        <img src="../../assets/images/avatar5.jpg" alt="">
        <div class="title_info">
          <span class="c_name">仙侠</span>
          <span class="c_tags">东方玄幻 | 奇幻修真 | 洪荒分神 | 凡人</span>
        </div>
      </div>
      <h6 class="line"></h6>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  export default {
    name: 'Classify',
    methods: {
      ...mapActions(['receviveData', 'showCldetail']),
      goBack() {
        this.$router.go(-1)
      }
    },
  }

</script>

<style scoped>
  .classify{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 300;
    background: #ffffff;
  }
  .bookbar {
    width: 100%;
    height: 45px;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;
  }
  .l_logo {
    width: 54px;
    height: 44px;
    line-height: 44px;
  }
  .r_logo {
    width: 52px;
    height: 44px;
    line-height: 44px;
  }
  .mylist {
    font-size: 16px;
  }
  .girl_title {
    width: 375px;
    height: 35px;
    background: rgba(98, 125, 126, 0.1);
  }
  .girl_title .title {
    display: inline-block;
    width: 350px;
    height: 14px;
    line-height: 14px;
    margin: 10px 0 10px 25px;
  }
  .g_bar {
    display: flex;
    width: 350px;
    height: 36px;
    margin: 10px 0 10px 25px;
  }
  .g_bar img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
  .title_info {
    display: inline-block;
    width: 200px;
    height: 38px;
    margin-left: 10px;
  }
  .title_info .c_name{
    display: inline-block;
    width: 137px;
    height: 14px;
    font-size: 14px;
    line-height: 14px;
    vertical-align: top;
  }
  .title_info .c_tags {
    display: inline-block;
    width: 200px;
    height: 12px;
    color: #999;
    vertical-align: top;
    font-size: 12px;
    line-height: 12px;
  }
  .line {
    width: 100%;
    height: 0;
    border-bottom: 1px solid rgba(98, 125, 126, 0.1);
  }
</style>
