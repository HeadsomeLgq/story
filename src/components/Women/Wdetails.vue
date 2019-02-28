<template>
   <div class="details">
     <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
       <mu-icon @click="closeWdetail" class="l_logo" slot="left" size="25" value="keyboard_backspace" color="lightseagreen"></mu-icon>
       <h2 class="title">书籍详情</h2>
       <mu-icon class="r_logo" slot="right" size="25" value="home" color="lightseagreen"></mu-icon>
     </mu-appbar>
     <div class="book_header">
       <img :src="Wdetails.book_cover" alt="">
       <div class="b_infor">
         <span class="b_title">{{Wdetails.bookname}}</span>
         <span class="auther">{{Wdetails.author_name}}</span>
         <div class="tags">
           <span>{{Wdetails.class_name}}</span>
           <span>{{Wdetails.class}}万字</span>
         </div>
         <span class="loading">{{Wdetails.stat_name}}</span>
       </div>
     </div>
     <div class="btn">
       <span class="s_read">开始阅读</span>
       <span class="download">离线下载</span>
       <span class="add_shelf">加书架</span>
     </div>
      <p class="book_info">
        {{Wdetails.book_info}}
      </p>
     <div class="new">
       <mu-icon size="18" class="new_icon" value="query_builder" color="#999"></mu-icon>
       <span class="latest">最新</span>
       <div class="b_text">{{Wdetails.topic_first}}</div>
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
      name: 'Wdetails',
      computed: {
        ...mapState(['Wdetails'])
      },
      methods: {
        ...mapActions(['showWdetail']),
        closeWdetail() {
            this.showWdetail(false)
        }
      },
    }
</script>
<style scoped>
  .details {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 300;
    background: #fff;
  }
  .details .bookbar {
    background: #fff;
    text-align: center;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
  }
  .bookbar .title {
    font-size: 16px;
  }
  .bookbar .l_logo {
    margin-left: 10px;
  }
  .bookbar .r_logo {
    margin-right: 10px;
  }

  .book_header {
    display: inline-block;
    width: 350px;
    height: 130px;
    margin: 20px 20px 10px 20px;
  }
   .book_info {
    width: 343px;
    height: 85px;
    color: #999;
    margin: 10px 15px 0 15px;
    overflow: hidden;
  }
  .book_header img {
    width: 98px;
    height: 130px;
  }
  .book_header .b_infor {
    display: inline-block;
    width: 229px;
    height: 130px;
    float: right;
    margin-left: 10px;
  }

  .b_infor .b_title {
    display: inline-block;
    width: 229px;
    height: 23px;
    margin-top: 10px;
    font-size: 16px;
  }
  .b_infor .auther {
    display: inline-block;
    width: 229px;
    height: 20px;
    color: #999;
    margin-top: 10px;
    font-size: 14px;
  }
  .b_infor .loading {
    display: inline-block;
    color: #999;
    font-size: 14px;
    margin-top: 10px;
  }
  .tags{
    width: 243px;
    height: 22px;
    color: #999;
    margin: 5px 0 0 0;
  }
  .tags span {
    color: #999;
    font-size: 14px;
    border-radius: 3px;
  }

  .btn {
    width: 350px;
    height: 41px;
    line-height: 41px;
    margin-left: 10px;
    text-align: center;
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
</style>
