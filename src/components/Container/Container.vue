<template>
  <div>
  <div class="container">
    <h3 class="title">精品推荐</h3>
    <div class="content" v-for="item in data.recom" :key="item.id" @click="upData1(item)">
        <img class="bimg" :src="item.book_cover" alt="">
        <span class="book_name">{{item.bookname}}</span>
        <span class="writer">{{item.author_name}}</span>
    </div>
  </div>
    <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
      <span class="change">换一换</span>
      <mu-icon class="icon" value="autorenew"></mu-icon>
    </mu-appbar>
    <Split class="line"></Split>
    <Girl></Girl>
    <Split class="line"></Split>
    <Boy></Boy>
    <Split class="line"></Split>
    <Newbook></Newbook>
    <Split class="line"></Split>
    <Youread></Youread>
  </div>
</template>
<script>
  import Girl from './Girl'
  import Boy from './Boy'
  import Youread from './Youread'
  import Split from '../widget/Split'
  import Newbook from './Newbook'
  import {mapActions, mapState} from 'vuex'
    export default {
      name: 'container',
      components: {
        Split,
        Girl,
        Boy,
        Newbook,
        Youread
      },
      methods: {
        ...mapActions([ 'receviveData', 'upData', 'showDetails']),
        upData1(item) {
            this.showDetails(true)
            this.upData(item)
        }
      },
      computed: {
          ...mapState(['data'])
      },
      created() {
        this.axios('/api/data')
          .then(res => {
            let recom = res.data.data.recom
            this.receviveData(recom)
          })
      },
    }

</script>

<style scoped>

  .container{
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
   .title {
     box-sizing: border-box;
     width: 100%;
     height: 18px;
     margin-left: 5px;
     line-height: 18px;
     font-size: 14px;
     margin-top: 5px;
   }
   .content {
     box-sizing: border-box;
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
    box-sizing: border-box;
    display: inline-block;
    width: 74px;
    height: 16px;
    line-height: 16px;
    overflow: hidden;
    font-size: 12px;
    margin-left: 5px;
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
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    line-height: 48px;
    margin-top: 10px;
    background: rgba(235, 255, 218, 0.1);
    text-align: center;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
  }
  .change {
    font-size: 14px;
  }
  .icon {
     vertical-align: middle;
    font-size: 18px;
  }
  .line {
    width: 100%;
  }
</style>
