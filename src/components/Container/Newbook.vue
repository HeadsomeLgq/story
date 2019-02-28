<template>
  <div>
    <div class="container">
      <h3 class="title">新书专区</h3>
      <div class="content">
        <div class="bimg"><img  src="../../assets/didu.jpg" alt=""></div>
        <div class="book_info">
          <span class="book_name">重生之都市帝尊</span>
          <span class="writer">一碗牛肉面</span>
          <div class="descript">沈小婉病死后穿成了古代寒门寡妇，上有极品亲戚要斗，下有三岁小包子要养活，
            那能怎么办？撒泼打滚连撕带咬分了家，带着小包子在村子里默默扎了根致了富.
          </div>
          <div class="book-tag">
            <span class="lz">连载</span>
            <span>47万字</span>
            <span>爽文</span>
            <span>冷酷</span>
          </div>
        </div>
      </div>
    </div>
    <div class="bookList">
      <div class="item">
        <h3 class="bname">重生之都市帝尊</h3>
        <div class="tags">
          <span class="finsi">连载</span>
          <span class="tag">东方玄幻</span>
        </div>
      </div>
      <div class="item">
        <h3 class="bname">暗夜销婚：轻抚她，宠坏她</h3>
        <div class="tags">
          <span class="finsi">连载</span>
          <span class="tag">言情小说</span>
        </div>
      </div>
      <div class="item">
        <h3 class="bname">万古邪帝</h3>
        <div class="tags">
          <span class="finsi">完结</span>
          <span class="tag">东方玄幻</span>
        </div>
      </div>
    </div>
    <mu-appbar style="width: 100%;"  class="refreshbar"  z-depth="0">
      <span class="b_more">查看更多</span>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Newbook',
      methods: {
        ...mapActions(['receviveNewbook',])
      },
      computed: {
        ...mapState(['data'])
      },
      created() {
        this.axios('/api/newbook')
          .then(res => {
            let newbook = res.data.data.newbook
            console.log("newbook", newbook);
            this.receviveNewbook(newbook)
          })
      }
    }

</script>

<style scoped>
  .container{
    width: 100%;
  }
  .title {
    width: 100%;
    height: 18px;
    margin-left: 5px;
    line-height: 18px;
    font-size: 14px;
  }
  .content {
    /*display: inline-block;*/
    width: 89px;
    height: 140px;
    margin-top: 10px;
    margin-left: 5px;
    display: flex;
  }
  .bimg img {
    width: 84px;
    height: 112px;
  }
  .book_info {
    flex: 0 0 200px;
    width: 243px;
    height: 113px;
    margin-left: 20px;
  }
  .book_name {
    display: inline-block;
    width: 243px;
    height: 18px;
    line-height: 18px;
    overflow: hidden;
    font-size: 16px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .writer {
    display: inline-block;
    font-size: 12px;
    width: 74px;
    height: 16px;
  }
  .refreshbar {
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: 10px;
    background: rgba(235, 255, 218, 0.1);
    text-align: center;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .item {
    display: inline-block;
    width: 100%;
    height: 44px;
    line-height: 44px;
    margin-top: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .bname {
    display: inline-block;
    width: 236px;
    height: 20px;
    font-size: 16px;
    line-height: 20px;
    margin-left: 15px;
  }
  .tags {
    display: inline-block;
    width: 106px;
    height: 20px;
    line-height: 20px;
    text-align: center;
  }
  .finsi {
    display: inline-block;
    width: 37px;
    height: 20px;
    color: #a2ff59;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid rgba(153,153,153,.3);
    background: rgba(235, 255, 218, 0.1);
  }
  .tag {
    display: inline-block;
    width: 61px;
    height: 20px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid #ccc;
    background: rgba(235, 255, 218, 0.1);
  }
  .b_more {
    font-size: 14px;
  }
  .descript {
    display: inline-block;
    width: 243px;
    height: 36px;
    color: #999;
    overflow: hidden;
    font-size: 12px;
    margin-top: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .book-tag {
    width: 243px;
    height: 19px;
  }
  .book-tag span {
    margin-left: 3px;
    margin-top: 10px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid rgba(153,153,153,.3);
  }
  .lz {
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    color: lightseagreen;
    border: 1px solid rgba(153,153,153,.3);
  }
</style>
