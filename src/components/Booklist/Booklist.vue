<template>
   <div class="bookshelf">
     <div class="mybook">
       <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
         <mu-icon @click="goBack" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
         <h2 class="mylist">精品书单</h2>
         <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
       </mu-appbar>
     </div>
       <div class="wrap" v-for="item in data.bookshelf" :key="item.id" ref="booklist" @click="BookData(item)">
         <div class="info">
           <h3>{{item.bookname}}</h3>
           <p>{{item.book_info}}</p>
           <div class="tags">
             <span>{{item.tag[0]}}</span>
             <span>{{item.tag[1]}}</span>
             <span>{{item.tag[2]}}</span>
             <span>{{item.tag[3]}}</span>

           </div>
         </div>
         <img class="r_img" :src="item.book_cover" alt="">
       </div>
   </div>
</template>

<script>
//  import BScroll from 'better-scroll'
    import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Booklist',
       methods:{
         ...mapActions(['receviBookshelf', 'closeBooklist', 'bookData', 'showBlist']),
         BookData(item) {
             this.showBlist(true)
             this.bookData(item)
         },
         goBack() {
           this.$router.go(-1)
         }
       },
      computed: {
        ...mapState(['data'])
      },
      created() {
        this.axios('/api/bookshelf')
          .then(res => {
            let bookshelf = res.data.data.bookshelf
            console.log('bookshelf',bookshelf);
            this.receviBookshelf(bookshelf)
          })
      }

    }

</script>

<style scoped>
  .bookshelf{
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
  .wrap {
    width: 359px;
    height: 80px;
    padding: 40px 0 0 0;
    margin: 20px 10px 20px 15px;
  }
  .wrap .r_img {
    display: inline-block;
    width: 60px;
    height: 80px;
    float: right;
    margin: 0 10px 0 0;
  }
  .info {
    display: inline-block;
  }
  .info h3 {
    width: 243px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }
  .info p {
    width: 243px;
    height: 36px;
    color: #999;
    font-size: 12px;
    margin: 5px 0 0 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2 ;
    -webkit-box-orient: vertical;
  }
  .tags{
    width: 243px;
    height: 22px;
    margin: 5px 0 0 0;
  }
  .tags span {
    color: #999;
    font-size: 10px;
    border-radius: 3px;
    border: 1px solid rgba(153,153,153,.3);
  }
</style>
