<template>
  <div class="header">
    <mu-appbar class="bar" style="width: 100%;" z-depth="0">
      <mu-icon @click="showPersonal" class="login" slot="right" value="perm_identity" color="lightseagreen"></mu-icon>
      <div class="logo">
        <span class="logo_img"><img src="../assets/images/logo1.png"></span>
        <span class="logo_name"><img src="../assets/images/name.png"></span>
      </div>
      <mu-button class="booklist" flat slot="right" @click="showBook"><img src="../assets/images/bookshelf_606cf21.png">
      </mu-button>
      <mu-button class="search" flat slot="right" @click="showSearch"><img src="../assets/images/search_d5e5264.png">
      </mu-button>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'  // 引入辅助函数
  export default {
    name: 'Header',
    methods: {
      ...mapActions(['showBook', 'showSearch', 'showPersonal']),
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bar {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }

  .login {
    margin-right: 5px;
  }

  .logo {
    display: inline-block;
    width: 100%;
    height: 25px;
    line-height: 25px;
  }

  .logo_img {
    display: inline-block;
    width: 25px;
    height: 25px;
  }

  .logo_img img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .logo_name {
    display: inline-block;
    width: 72px;
    height: 16px;
    margin-left: 4px;
  }

  .logo_name img {
    width: 100%;
    height: 100%;
    vertical-align: middle;
  }

  .booklist {
    display: inline-block;
    width: 26px;
    height: 24px;
    margin-right: 10px;
  }

  .search {
    display: inline-block;
    width: 26px;
    height: 24px;
    margin-right: 10px;
  }

  .booklist img {
    width: 26px;
    height: 24px;
  }

  .search img {
    width: 26px;
    height: 24px;
  }

  .middle_content {
    display: inline-block;
    width: 335px;
    height: 67px;
    text-align: center;
    margin: 10px 20px 10px 20px;
  }

  .top_line {
    border: 1px solid rgba(7, 17, 27, 0.1);
  }

  .middle_content .item {
    width: 44px;
    height: 67px;
    float: left;
    margin-left: 20px;
  }

  .middle_content .item img {
    width: 44px;
    height: 44px;
  }

  .middle_content .item .title {
    height: 12px;
    color: #999;
    line-height: 12px;
    font-size: 12px;
  }
</style>
