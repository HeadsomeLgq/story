<template>
    <div class="details">
      <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
        <mu-icon size="25" @click="closeCldetail" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
        <h2 class="title">现言</h2>
        <mu-icon size="25" class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
      </mu-appbar>
      <div class="filters">
        <ul class="tags">
          <li class="all">全部</li>
          <li>唯美童话</li>
          <li>虐文</li>
          <li>网游</li>
          <li>总裁</li>
          <li>宝宝</li>
          <li>爽文</li>
          <li>宠文</li>
          <li>腹黑</li>
          <li>情感</li>
          <li>现代</li>
        </ul>
        <ul class="words">
          <li class="all">全部</li>
          <li>20万字</li>
          <li>20-100万字</li>
          <li>100万字以上</li>
        </ul>
        <ul class="states">
          <li class="hot">最热</li>
          <li>最新</li>
          <li>完结</li>
        </ul>
      </div>
      <Split class="line"></Split>

      <div class="container">
        <div class="content" v-for="item in data.bookshelf" :key="item.id" @click="CDetail(item)">
          <div class="bimg">
            <img :src="item.book_cover" alt="">
          </div>
          <div class="book_info">
            <span class="book_name">{{item.bookname}}</span>
            <span class="writer">{{item.author_name}}</span>
            <div class="descript">{{item.book_info}}</div>
            <div class="book-tag">
              <span class="lz">{{item.stat_name}}</span>
              <span>47万字</span>
              <span>{{item.tag[0]}}</span>
              <span>{{item.tag[1]}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    import Split from '../widget/Split'
    export default {
        name: 'Detail',
      methods: {
        ...mapActions(['closeCldetail', 'receviBookshelf', 'showCCdetail', 'cDetails']),
        CDetail(item) {
          this.showCCdetail(true)
          this.cDetails(item)
        }
      },
      computed:{
        ...mapState(['data'])
      },
      components: {
            Split
      },
      created() {
        this.axios('/api/bookshelf')
          .then(res => {
            let bookshelf = res.data.data.bookshelf
//            console.log('bookshelf',bookshelf);
            this.receviBookshelf(bookshelf)
          })
      }
    }
</script>
<style scoped>
  .details {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 400;
    overflow: auto;
    background: #fff;
  }
  .details .bookbar {
    position: fixed;
    top: 0;
    height: 43px;
    text-align: center;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .bookbar .title {
    display: inline-block;
    width: 275px;
    height: 43px;
    font-size: 16px;
  }
  .bookbar .l_logo {
    margin-left: 10px;
  }
  .bookbar .r_logo {
    margin-right: 10px;
  }

  .filters {
    width: 350px;
    height: 142px;
    margin-top: 40px;
    margin-left: 25px;
  }
  .filters .tags {
    width: 359px;
    height: 55px;
    padding-top: 10px;
  }
  .tags li {
    display: inline-block;
    margin-left: 20px;
  }
  .tags .all {
    margin: 0;
    color: lightseagreen;
  }

  .filters .words {
    width: 375px;
    height: 29px;
    margin-top: 10px;
  }
  .words li {
    margin-left: 20px;
    display: inline-block;
  }
  .words .all {
    margin: 0;
    color: lightseagreen;
  }

  .filters .states {
    width: 375px;
    height: 29px;
    margin-top: 10px;
  }
  .states li {
    margin-left: 20px;
    display: inline-block;
  }
  .states .hot {
    margin: 0;
    color: lightseagreen;
  }
  .line {
    height: 5px;
  }

  .container{
    width: 100%;
    margin-top: 20px;
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
    /*margin-top: 10px;*/
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
