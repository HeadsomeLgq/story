<template>
    <div class="detailview">
        <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
          <mu-icon size="25" @click="closeDview" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
          <h2 class="title">精品畅销</h2>
          <mu-icon size="25" class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
        </mu-appbar>

        <mu-tabs class="tabs" :value.sync="active2" color="#fff" indicator-color="blue" full-width>
          <mu-tab class="tab_name">男生</mu-tab>
          <mu-tab class="tab_name">女生</mu-tab>
        </mu-tabs>
        <div class="list" v-if="active2 === 0">
           <div v-if="!data.bookshelf.length">loading</div>
           <div v-else class="wrap"  v-for="item in data.bookshelf.slice(3,16)" :key="item.id">
               <div class="bimg">
                 <img :src="item.book_cover" alt="">
               </div>
               <div class="book_info">
                 <span class="book_name">{{item.bookname}}</span>
                 <span class="writer">{{item.author_name}}</span>
                 <div class="book-tag">
                   <span class="lz">{{item.stat_name}}</span>
                   <span>{{item.class}}万字</span>
                   <span>{{item.tag[0]}}</span>
                 </div>
               </div>
           </div>
        </div>
        <div class="list" v-if="active2 === 1">
          <div v-if="!data.bookshelf.length">loading</div>
          <div v-else class="wrap"  v-for="item in data.bookshelf.slice(5,16)" :key="item.id">
            <div class="bimg">
              <img :src="item.book_cover" alt="">
            </div>
            <div class="book_info">
              <span class="book_name">{{item.bookname}}</span>
              <span class="writer">{{item.author_name}}</span>
              <div class="book-tag">
                <span class="lz">{{item.stat_name}}</span>
                <span>{{item.class}}万字</span>
                <span>{{item.tag[0]}}</span>
              </div>
            </div>
            <div class="line"></div>
          </div>
        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex' // 引入辅助函数
    export default {
        name: 'Detailview',
      data () {
        return {
          active2: 0
        }
      },
      computed: {
        ...mapState(['data'])
      },
        methods: {
          ...mapActions (['closeDview', 'receviBookshelf'])
        },
      created() {
        this.axios('/api/bookshelf')
          .then(res => {
            let bookshelf = res.data.data.bookshelf
            this.receviBookshelf(bookshelf)
          })
      }
    }
</script>
<style scoped>
  .detailview {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 400;
    overflow: auto;
    background: #fff;
  }
  .bookbar {
    text-align: center;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    height: 43px;
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
  .detailview .tabs {
    height: 43px;
    border-bottom: 1px solid #ccc;
  }
  .tabs .tab_name {
    color: black;
  }
  .list .wrap {
    display: flex;
    width: 340px;
    height: 76px;
    margin: 20px 20px 10px 20px;
  }
  .wrap .bimg img{
    display: inline-block;
    width: 56px;
    height: 74px;
  }

  .book_info {
    width: 271px;
    height: 74px;
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
    width: 74px;
    height: 16px;
    color: #999;
    font-size: 12px;
    margin-top: 5px;
  }
  .book-tag {
    width: 243px;
    height: 19px;
    margin-top: 5px;
  }
  .book-tag span {
    margin: 5px 0 0 5px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid rgba(153,153,153,.3);
  }
  .lz {
    margin: 0;
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    color: lightseagreen;
    border: 1px solid rgba(153,153,153,.3);
  }
</style>
