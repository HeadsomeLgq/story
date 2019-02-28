<template>
  <div class="man">
    <div class="mybook">
      <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
        <mu-icon @click="goBack" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
        <h2 class="mylist">男生频道</h2>
        <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
      </mu-appbar>
    </div>
    <div class="container">
      <h3 class="title">主编力荐</h3>
      <div class="content" v-for="item in data.boy" :key="item.id" @click="MDetail(item) ">
        <img class="bimg" :src="item.book_cover" alt="">
        <span class="book_name">{{item.bookname}}</span>
        <span class="writer">{{item.author_name}}</span>
      </div>
    </div>
    <div v-if="!data.boy.length">loading</div>
    <div v-else class="item" v-for="item in data.boy.slice(0,3)" :key="item.id">
      <h3 class="bname">{{item.bookname}}</h3>
      <div class="tags">
        <span class="finsi">{{item.stat_name}}</span>
        <span class="tag">{{item.class_name}}</span>
      </div>
      <div class="descript">{{item.book_info}}</div>
    </div>
    <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
    <span class="change">换一换</span>
    <mu-icon size="16" class="icon" value="autorenew"></mu-icon>
    </mu-appbar>
    <Split></Split>

    <div class="containerl">
      <h3 class="title">热门男生分类</h3>
      <div class="hot_title">
        <p class="line"></p>
        <span class="title_h">灵异精选</span>
        <p class="line2"></p>
      </div>
      <div v-if="!data.bookshelf.length">loading</div>
      <div v-else class="content" v-for="item in data.bookshelf.slice(0,4)" :key="item.id">
        <img class="bimg" :src="item.book_cover" alt="">
        <span class="book_name">{{item.bookname}}</span>
        <span class="writer">{{item.author_name}}</span>
      </div>
      <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
        <span class="change">查看更多</span>
      </mu-appbar>
       <Split></Split>

      <div class="container_new">
        <h3 class="title">男频新书</h3>
        <div v-if="!data.bookshelf.length">loading</div>
        <div v-else class="content" v-for="item in data.bookshelf.slice(5,9)" :key="item.id">
          <img class="bimg" :src="item.book_cover" alt="">
          <span class="book_name">{{item.bookname}}</span>
          <span class="writer">{{item.author_name}}</span>
        </div>
      </div>
      <div v-if="!data.bookshelf.length">loading</div>
      <div v-else class="item" v-for="item in data.bookshelf.slice(0,5)" :key="item.id">
        <h3 class="bname">{{item.bookname}}</h3>
        <div class="tags">
          <span class="finsi">{{item.stat_name}}</span>
          <span class="tag">{{item.class_name}}</span>
        </div>
        <div class="descript">{{item.book_info}}</div>
      </div>
    </div>
    <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
      <span class="change">换一换</span>
      <mu-icon size="16" class="icon" value="autorenew"></mu-icon>
    </mu-appbar>
    <Split></Split>
  </div>
</template>

<script>
     import Split from '../widget/Split'
    import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Man',
      methods: {
        ...mapActions([ 'receviveBoy', 'receviBookshelf', 'showMdetail', 'mDetails']),
        MDetail(item) {
          this.showMdetail(true)
          this.mDetails(item)
        },
        goBack() {
          this.$router.go(-1)
        }
      },
      computed: {
        ...mapState(['data'])
      },
      created() {
        this.axios('/api/boy')
          .then(res => {
            let boy = res.data.data.boy
            this.receviveBoy(boy)
          }),
          this.axios('/api/bookshelf')
            .then(res => {
              let bookshelf = res.data.data.bookshelf
              this.receviBookshelf(bookshelf)
            })
      },
      components:{
          Split
      }
    }

</script>

<style scoped>
  .man {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 300;
    overflow: auto;
    background: #ffffff;
  }
  .bookbar {
    position: fixed;
    top: 0;
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
  .container{
    width: 100%;
    display: flex;
    margin: 55px 0 10px 0;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .containerl{
    width: 100%;
    display: flex;
    margin: 10px 0 10px 0;
    margin-left: 10px;
    /*justify-content: space-around;*/
    flex-wrap: wrap;
  }
  .hot_title {
    width: 375px;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    /*text-align: center;*/
  }
  .line {
    display: inline-block;
    width: 150px;
    height: 0;
    margin-left: 5px;
    border: 1px solid rgba(7, 17, 27, 0.1);
  }
  .line2 {
    display: inline-block;
    width: 150px;
    height: 0;
    border: 1px solid rgba(7, 17, 27, 0.1);
  }
  .title_h {
    font-size: 12px;
    color: #86e6b8;
  }
  .item {
    display: inline-block;
    width: 100%;
    height: 44px;
    margin-top: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .refreshbar {
    height: 48px;
    background: #fff;
    margin-top: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;
  }
  .refreshbar .change {
     font-size: 14px;
  }
  .refreshbar .icon {
    color: rgba(7, 17, 27, 0.5);
    vertical-align: middle;
  }
  .bname {
    display: inline-block;
    width: 236px;
    height: 20px;
    margin-left: 15px;
  }
  .tags {
    display: inline-block;
    width: 106px;
    height: 20px;
    margin-top: 5px;
    text-align: center;
  }
  .finsi {
    display: inline-block;
    width: 37px;
    height: 20px;
    color: #b1daff;
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
  .descript {
    display: inline-block;
    width: 343px;
    height: 16px;
    overflow: hidden;
    font-size: 12px;
    margin-left: 15px;
    margin-top: 5px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    color: #999;
  }
  .title {
    width: 100%;
    height: 18px;
    margin-left: 5px;
    line-height: 18px;
    font-size: 14px;
  }
  .content {
    width: 89px;
    height: 140px;
    float: left;
    margin-top: 10px;
    text-align: center;
  }
  .bimg {
    display: inline-block;
    width: 74px;
    height: 98px;
  }
  .book_name {
    display: inline-block;
    width: 74px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    font-size: 12px;
    margin-left: 5px;

  }
  .writer {
    display: inline-block;
    font-size: 12px;
    width: 74px;
    height: 16px;
  }
</style>
