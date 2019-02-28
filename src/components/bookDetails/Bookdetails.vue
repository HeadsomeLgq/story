<template>
   <div class="b_details">
     <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
       <mu-icon @click="closeDetails" class="l_logo" slot="left" size="30" value="keyboard_backspace" color="lightseagreen"></mu-icon>
       <h2 class="bookdetail">书籍详情</h2>
       <mu-icon class="r_logo" slot="right" size="25" value="home" color="lightseagreen"></mu-icon>
     </mu-appbar>
       <div class="book_header">
         <img :src="detailData.book_cover" alt="">
         <div class="b_infor">
           <span class="b_title">{{detailData.bookname}}</span>
           <span class="auther">{{detailData.author_name}}</span>
           <div class="tags">
             <span>{{detailData.class_name}}</span>
             <span>{{detailData.class}}万字</span>
           </div>
           <span class="loading">{{detailData.stat_name}}</span>
         </div>
       </div>
        <div class="btns">
          <span class="btn read">开始阅读</span>
          <span class="btn" @click="downLoad">{{download}}</span>
          <span class="btn" @click="push(detailData)">{{add_shelf}}</span>
        </div>
         <p class="book_info">
           {{detailData.book_info}}
         </p>
          <div class="new">
            <mu-icon size="18" class="new_icon" value="query_builder" color="#999"></mu-icon>
            <span class="latest">最新</span>
            <div class="b_text">{{detailData.topic_first}}</div>
            <mu-icon class="right_icon" value="keyboard_arrow_right" size="20" color="#999"></mu-icon>
          </div>
           <div class="new">
             <mu-icon size="18" class="new_icon" value="format_list_bulleted" color="#999"></mu-icon>
             <span class="latest">目录</span>
             <div class="b_text">13小时前更新</div>
             <mu-icon class="right_icon" value="keyboard_arrow_right" size="20" color="#999"></mu-icon>
           </div>
   </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex'
    export default {
      name: 'Bookdetails',
      data() {
          return {
            show: false,
            add_shelf: '加书架',
            download: '离线下载'
          }
      },
      computed:{
        ...mapState(['detailData'])
      },
      methods:{
        ...mapActions(['showDetails', 'pushShelf']),
          closeDetails() {
              this.showDetails(false)
          },
        downLoad() {
          this.download = '下载成功'
        },
         push(item) {
           this.pushShelf(item)
           this.add_shelf = '已加入书架'
         }
      }
    }

</script>

<style scoped>
   .b_details {
     position: fixed;
     top: 0;
     width: 100%;
     height: 100%;
     background: #fff;
   }
   .bookbar {
     width: 100%;
     height: 43px;
     background: #fff;
     text-align: center;
     border-bottom: 1px solid rgba(7, 17, 27, 0.1);
   }
   .bookbar .bookdetail {
     width: 275px;
     height: 43px;
     font-size: 16px;
     line-height: 43px;
   }

   .book_header {
     width: 350px;
     height: 130px;
     margin: 20px 20px 10px 20px;
   }

   .book_header .b_infor {
     display: inline-block;
     width: 229px;
     height: 130px;
     margin-left: 15px;
     vertical-align: top;
   }
   .book_info {
     width: 343px;
     height: 85px;
     color: #999;
     margin: 10px 15px 0 15px;
     overflow: hidden;
   }
   .new {
     width: 343px;
     height: 54px;
     line-height: 54px;
     margin: 0 auto;
     border-bottom: 1px solid rgba(7, 17, 27, 0.1);
   }
   .new .new_icon {
     vertical-align: middle;
   }
   .new .latest {
     display: inline-block;
     width: 28px;
     height: 14px;
     margin-left: 5px;
     line-height: 14px;
   }
   .new .b_text {
     display: inline-block;
     width: 200px;
     height: 12px;
     color: #999;
     margin-left: 10px;
     font-size: 14px;
     line-height: 12px;
   }
   .new .right_icon {
     vertical-align: middle;
     margin-left: 45px;
   }
   .btns {
     width: 350px;
     height: 41px;
     line-height: 41px;
     margin-left: 10px;
     text-align: center;
   }
   .btn {
     display: inline-block;
     width: 105px;
     height: 41px;
     color: #00c98d;
     border-radius: 6px;
     border: 1px solid #00c98d;
   }
   .read {
     color: #fff;
     background: #00c98d;
   }
   .b_title {
     display: inline-block;
     width: 100%;
     height: 23px;
     color: black;
     font-size: 18px;
   }
   .auther {
     display: inline-block;
     width: 100%;
     height: 21px;
     color: #999;
     margin: 10px auto;
   }
   .tags span {
     color: #999;
   }
   .loading {
     display: inline-block;
     width: 100%;
     height: 20px;
     color: #999;
     margin: 10px auto;
   }
   .book_header img {
     width: 98px;
     height: 130px;
   }
</style>
