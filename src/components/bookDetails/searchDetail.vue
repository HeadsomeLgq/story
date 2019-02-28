<template>
  <div class="serch_book">
    <div class="header">
      <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
        <mu-icon class="l_logo" slot="left" size="30" value="keyboard_backspace" color="lightseagreen" @click="goback"></mu-icon>
        <h2 class="bookdetail">书籍详情</h2>
        <mu-icon class="r_logo" slot="right" size="25" value="home" color="lightseagreen"></mu-icon>
      </mu-appbar>
    </div>
    <div class="content">
      <div class="book_header">
        <img :src="decodeUrl(bookInfo.cover)" alt="">
        <div class="b_infor">
          <span class="b_title">{{bookInfo.title}}</span>
          <span class="auther">{{bookInfo.author}}</span>
          <div class="tags">
            <span>{{bookInfo.class_name}}</span>
            <span>{{(bookInfo.wordCount / 10000).toFixed(2)}}万字</span>
          </div>
          <span class="loading">{{bookInfo.stat_name}}</span>
        </div>
      </div>
      <div class="btns">
        <span class="btn read" @click="go(item)">开始阅读</span>
        <span class="btn" @click="downLoad">{{download}}</span>
        <span class="btn" @click="add">{{add_shelf}}</span>
      </div>
      <p class="book_info">
        {{bookInfo.longIntro}}
      </p>
      <div class="new">
        <mu-icon size="18" class="new_icon" value="query_builder" color="#999"></mu-icon>
        <span class="latest">最新</span>
        <div class="b_text">{{bookInfo.topic_first}}</div>
        <mu-icon class="right_icon" value="keyboard_arrow_right" size="20" color="#999"></mu-icon>
      </div>
      <div class="new">
        <mu-icon size="18" class="new_icon" value="format_list_bulleted" color="#999"></mu-icon>
        <span class="latest">目录</span>
        <div class="b_text">13小时前更新</div>
        <mu-icon class="right_icon" value="keyboard_arrow_right" size="20" color="#999"></mu-icon>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      //      在路由进入前发起请求获取数据
      beforeRouteEnter(to, from, next) {
        next(vm => {
          vm.getBookDetail()
        })
      },
      name: 'searchdetails',
      data(){
        return {
          item:this.$route.params.bookId,
          add_shelf: '加书架',
          download: '离线下载',
          bookInfo:{}
        }
      },
      methods: {
        // 获取书本详情
        getBookDetail() {
          if (this.$route.params.bookId) {
            this.axios.get('/api/book/' + this.$route.params.bookId)
              .then(res => {
//               console.log(res)
                // 网络请求完成时候res.status为200
                if (res.status === 200) {
                  res = res.data
//                  console.log(res)
                  // 获取小说信息
                  this.bookInfo = res
                }
              })
          }
        },
        goback(){
          this.$router.go(-2)  //返回
        },
        decodeUrl(url){//      解析图片路径
          return decodeURIComponent(url).substring(7)
        },

        go(index){
          this.$router.push({name:'currentBook',params:{bookInfo:this.bookInfo}})
        },
        add() {
            this.add_shelf = '已加入书架'
        },
        downLoad() {
            this.download = '下载成功'
        }

      },
    }
</script>
<style scoped>
  .serch_book {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 50;
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
  .b_title {
    display: inline-block;
    width: 100%;
    height: 23px;
    color: black;
    font-size: 16px;
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
  .read {
    color: #fff;
    background: #00c98d;
  }
</style>
