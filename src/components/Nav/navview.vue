<template>
  <div>
    <div class="middle_content">
      <router-link to="/classify">
        <div class="item">
          <img src="../../assets/images/classify.png">
          <h2 class="title">分类</h2>
        </div>
      </router-link>
      <router-link to="/pank">
        <div class="item">
          <img src="../../assets/images/pank.png">
          <h2 class="title">排行</h2>
        </div>
      </router-link>
      <router-link to="/women">
        <div class="item">
          <img src="../../assets/images/women.png">
          <h2 class="title">女频</h2>
        </div>
      </router-link>
      <router-link to="/man">
        <div class="item">
          <img src="../../assets/images/man.png">
          <h2 class="title">男频</h2>
        </div>
      </router-link>
      <router-link to="/booklist">
        <div class="item">
          <img src="../../assets/images/booklist.png">
          <h2 class="title">书单</h2>
        </div>
      </router-link>
    </div>
    <div class="top_line"></div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
      name:"navview",
    }
</script>
<style scoped>
  .middle_content {
    width: 100%;
    height: 67px;
    text-align: center;
    margin: 10px 20px 5px 0;
  }
  img {
    width: 100%;
    height: 64px;
  }

  .middle_content .item {
    width: 44px;
    height: 67px;
    float: left;
    margin-left: 25px;
  }
  .middle_content .item img {
    width: 44px;
    height: 44px;
  }
  .middle_content .item .title {
    color: #999;
  }
</style>
