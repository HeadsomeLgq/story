<template>
  <div class="mybook">
    <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
      <mu-icon @click="closeBook" class="l_logo" slot="left" value="home" color="lightseagreen"></mu-icon>
       <h2 class="mylist">我的书架</h2>
      <!--<mu-icon v-show="clear === false" class="clear-icon" value="clear" slot="right" size="30" color="lightseagreen"></mu-icon>-->
      <mu-icon @click="showClear" class="r_logo" slot="right" value="edit" color="lightseagreen"></mu-icon>
    </mu-appbar>
     <div class="content">
       <div class="bg" v-show="bgShow">
         <img class="bgimg" src="../../assets/images/bookshelf-empty_0f8e62c.png">
         <div class="btn">
           <span class="gohome" @click="closeBook">去书城</span>
         </div>
       </div>
       <div class="book" v-for="item in shelfdetails" :key="item.id">
         <mu-icon @click="deleteShelf(item)"  v-show="clear" class="b_clear" value="highlight_off" color="#fff"></mu-icon>
         <div class="book_img">
           <img class="bookimg" :src="item.book_cover">
         </div>
         <span class="title">{{item.bookname}}</span>
       </div>
     </div>
  </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Mybookshelf',
      data() {
          return {
            bgShow: true,
            clear: false,
            penShow: false
          }
      },
      methods: {
        ...mapActions(['closeBook', 'deleteShelf']),

        showClear() {
            if(this.clear === false) {
              this.clear = true
            }else {
              this.clear = false
            }
        },
      },
      computed: {
        ...mapState(['shelfdetails'])
      },
      updated() {
        if(this.shelfdetails.length>0) {
          this.bgShow = false
        } else {
          this.bgShow = true
        }
      }
    }


</script>

<style scoped>
   .mybook{
     position: fixed;
     width: 100%;
     height: 100%;
     z-index: 300;
     background: #fff;
   }
   .content {
     width: 350px;
     height: 100%;
     margin: 10px 0 10px 20px;
     background: #fff;
   }
   .content .book {
     position: relative;
     width: 100px;
     height: 150px;
     float: left;
     margin: 10px 10px 10px 0;
   }
   .book .b_clear {
     position: absolute;
     top: -11px;
     right: -4px;
     border-radius: 50%;
     background: red;
   }
   .content .book_img{
     width: 92px;
     height: 123px;
   }
   .book_img .bookimg {
     width: 100%;
     height: 100%;
   }
   .content .title {
     display: inline-block;
     width: 92px;
     height: 28px;
     line-height: 28px;
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
   }
   .bg {
     width: 100%;
     height: 306px;
     margin: 40px 0 40px 0;
     text-align: center;
   }
   .bg .bgimg {
     width: 167px;
     height: 92px;
   }
   .bg .btn {
     width: 137px;
     height: 42px;
     background: rgba(7, 17, 27, 0.1);
     border-radius: 5px;
     margin: 0 auto;
     margin-top: 40px;
     line-height: 42px;
   }

  .bookbar {
    position: relative;
    width: 100%;
    height: 45px;
    background: #fff;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    text-align: center;
  }
  /*.clear-icon {*/
    /*position: relative;*/
    /*left: 38px;*/
    /*z-index: -23;*/
  /*}*/
  .l_logo {
    width: 54px;
    height: 44px;
    line-height: 44px;
  }
  .r_logo {
    position: relative;
    width: 52px;
    height: 44px;
    line-height: 44px;
  }
  .clear {
    position: absolute;
    top: 10px;
    right: 15px;
  }
  .mylist {
    font-size: 16px;
  }

</style>
