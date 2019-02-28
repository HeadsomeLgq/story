<template>
    <div class="sea_result">
      <div class="header">
        <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
          <mu-icon class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"  size="30" @click="goback"></mu-icon>
          <h2 class="title">搜索结果</h2>
          <mu-icon class="r_logo" slot="right" value="home" size="30" color="lightseagreen"></mu-icon>
        </mu-appbar>
      </div>
      <!--书籍列表-->
      <div class="List" ref="ListWrapper">
        <div class="resultList_Box">
          <div class="result_list" v-for="(item,index) in Resultlist" :key="index" @click="go(item._id)">
            <img :src="decodeUrl(item.cover)" alt="">  <!--书本图片-->
            <div class="b_info">
              <span class="title">{{item.title}}</span>  <!--书本名称-->
              <span class="author">{{item.author}}</span>  <!--作者-->
              <span class="lastChapter">{{item.lastChapter}}</span>  <!--章节-->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll' // 引入better-scroll实现滑动
    export default {
      name: 'searchResult',
      data(){
          return {
              Resultlist:[]
          }
      },
      beforeRouteEnter(to,from,next){ //进入路由之前执行的函数
        next(vm=>{
          vm.search()
        })
      },

      methods: {
          goback() {
              this.$router.go(-1)
          },
            search() {
              if(this.$route.params.value) {
                  this.axios.get('./api/book/fuzzy-search?query=' + this.$route.params.value).then(res =>{
                      if(res.status === 200) {   //网络请求成功
                          res = res.data
//                        console.log(res)
                        this.Resultlist = res.books.slice(0,20)  //获取前20个搜索结果
                        this.scroll.refresh()  //下拉刷新
                        this.scroll.scrollTo(0,0)
                      }
                  })
              }
          },
        go(id) {
          this.$router.push({name: 'searchDetail',params: {bookId:id}})  //输出bookId
          //        $router 传数据   $route：接收数据    params:  路由参数是一个动态路由匹配 包含键值对的对象  ,传送item数据
        },
        decodeUrl(url) {
              return decodeURIComponent(url).substring(7)   //将字符串转化为图片
        }
      },
      mounted(){     // 渲染完成后
        console.log(this.$route.params.value)//获取搜索的关键词
        this.$nextTick(()=>{    // 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
          this.scroll=new BScroll(this.$refs.ListWrapper,{
            click:true
          })
        })
      }
    }
</script>
<style scoped>
   .sea_result {
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     z-index: 50;
     background: #ffffff;
   }
   .header {
     border-bottom: 1px solid rgba(7, 17, 27 ,0.1);
   }
  .header .bookbar {
    height: 44px;
    background: #fff;
  }
  .header .title {
    height: 44px;
    font-size: 16px;
    line-height: 44px;
    text-align: center;
  }
   .List {
     width: 100%;
     height: 100%;
     top: 44px;
     bottom: 0;
     left: 0;
     overflow: hidden;
   }
   .result_list {
     width: 100%;
     display: flex;
     padding: 10px 10px 0 10px;
   }
   img{
     display: inline-block;
     width: 84px;
     height: 112px;
   }
   .b_info {
     display: inline-block;
     width: 260px;
     height: 112px;
     padding: 0 0 0 10px;
     flex: 1;
   }
  .b_info .title{
    display: inline-block;
    width: 100%;
    font-size: 14px;
  }
  .b_info .author{
    display: inline-block;
    width: 100%;
    font-size: 12px;
  }
   .resultList_Box {
     width: 100%;
     height: auto;
   }
</style>
