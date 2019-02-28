<template>
   <div>
     <div class="container_g">
       <h3 class="title">女生美文</h3>
       <div class="content" v-for="item in data.girl" :key="item.id">
         <img class="bimg" :src="item.book_cover" alt="">
         <span class="book_name">{{item.bookname}}</span>
         <span class="writer">{{item.author_name}}</span>
       </div>
     </div>
     <div v-if="!data.girl.length">loading</div>
     <div class="bookList" v-else>
       <div class="item" v-for="item in data.girl.slice(0,3)" :key="item.id">
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
       <mu-icon class="icon" value="autorenew"></mu-icon>
     </mu-appbar>
   </div>
</template>

<script>
  import Split from '../widget/Split'
  import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Girl',
      methods: {
        ...mapActions([ 'receviveGirl',])
      },
      computed: {
        ...mapState(['data'])
      },
      created() {
        this.axios('/api/girl')
          .then(res => {
            let girl = res.data.data.girl
            console.log("girl",girl);
            this.receviveGirl(girl)
          })
      }
    }

</script>

<style scoped>
  .container_g{
    display: flex;
    margin-left: 5px;
    justify-content: space-around;
    flex-wrap: wrap;
    box-sizing: border-box;
  }
  .title {
    width: 100%;
    height: 18px;
    margin-left: 5px;
    line-height: 18px;
    font-size: 14px;
  }
  .content {
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
  .change {
    font-size: 14px;
  }
  .icon {
    vertical-align: middle;
    font-size: 18px;
  }
  .item {
    display: inline-block;
    width: 100%;
    height: 44px;
    margin-top: 10px;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
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

</style>
