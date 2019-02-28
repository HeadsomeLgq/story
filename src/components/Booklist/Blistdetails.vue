<template>
    <div class="b_details">
      <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
        <mu-icon @click="closeBlist" class="l_logo" slot="left" size="30" value="keyboard_backspace" color="lightseagreen"></mu-icon>
        <h2 class="bookdetail">书籍详情</h2>
        <mu-icon class="r_logo" slot="right" size="25" value="home" color="lightseagreen"></mu-icon>
      </mu-appbar>

      <div class="book_header">
        <img :src="booklistData.book_cover" alt="">
        <div class="b_infor">
          <span class="b_title">{{booklistData.bookname}}</span>
          <span class="auther">{{booklistData.author_name}}</span>
          <div class="tags">
            <span>{{booklistData.class_name}}</span>
            <span>{{booklistData.class}}万字</span>
          </div>
          <span class="loading">{{booklistData.stat_name}}</span>
        </div>
      </div>
      <div class="btn">
        <span class="s_read">开始阅读</span>
        <span class="download">离线下载</span>
        <span class="add_shelf">加书架</span>
      </div>
      <p class="book_info">
        {{booklistData.book_info}}
      </p>
      <div class="new">
        <mu-icon size="18" class="new_icon" value="query_builder" color="#999"></mu-icon>
        <span class="latest">最新</span>
        <div class="b_text">{{booklistData.topic_first}}</div>
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
    import {mapActions, mapState} from 'vuex'
    export default {
        name: 'Blistdetails',
        computed: {
          ...mapState(['booklistData'])
        },
      methods:{
        ...mapActions(['showBlist']),
        closeBlist() {
          this.showBlist(false)
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
     z-index: 300;
   }
   .bookbar {
     width: 100%;
     height: 43px;
     background: #fff;
     text-align: center;
     border-bottom: 1px solid rgba(7, 17, 27, 0.1);
   }
   .bookbar .l_logo {
     margin-left: 10px;
   }
   .bookbar .r_logo {
     margin-right: 10px;
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
   .btn {
     width: 350px;
     height: 41px;
     line-height: 41px;
     margin-left: 10px;
     text-align: center;
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
   .btn .s_read {
     display: inline-block;
     width: 105px;
     height: 41px;
     color: #fff;
     border-radius: 6px;
     background: #00c98d;
   }
   .btn .download {
     display: inline-block;
     width: 105px;
     height: 41px;
     color: #00c98d;
     margin-left: 5px;
     border-radius: 6px;
     border: 1px solid #00c98d;
   }
   .btn .add_shelf {
     display: inline-block;
     width: 105px;
     height: 41px;
     color: #00c98d;
     margin-left: 5px;
     border-radius: 6px;
     border: 1px solid #00c98d;
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
