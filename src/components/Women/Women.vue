<template>
   <div class="women">
     <div class="mybook">
       <mu-appbar class="bookbar" z-depth="0">
         <mu-icon @click="goBack" class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen"></mu-icon>
         <h2 class="title_g">女生专区</h2>
         <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen"></mu-icon>
       </mu-appbar>
     </div>

     <div class="container">
       <h3 class="title">主编力荐</h3>
       <div class="content" v-for="item in data.auther" :key="item.id" @click="WDetails(item)">
         <img class="bimg" :src="item.book_cover" alt="">
         <span class="book_name">{{item.bookname}}</span>
         <span class="writer">{{item.author_name}}</span>
       </div>
       <div v-if="!data.auther.length">loading</div>
       <div  v-else class="item" v-for="item in data.auther.slice(0,3)" :key="item.id">
         <h3 class="bname">{{item.bookname}}</h3>
         <div class="tags">
           <span class="finsi">{{item.stat_name}}</span>
           <span class="tag">{{item.class_name}}</span>
         </div>
         <div class="descript">{{item.book_info}}</div>
       </div>
       <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
         <span class="change">换一换</span>
         <mu-icon size="16" class="icon" value="autorenew"></mu-icon>
       </mu-appbar>
       <Split></Split>
       <div class="container_l">
         <h3 class="title">热门女生分类</h3>
         <div class="content" v-for="item in data.recom" :key="item.id">
           <img class="bimg" :src="item.book_cover" alt="">
           <span class="book_name">{{item.bookname}}</span>
           <span class="writer">{{item.author_name}}</span>
         </div>
       </div>
       <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
         <span class="change">查看更多</span>
       </mu-appbar>
       <Split></Split>
       <Girl></Girl>
       <Split></Split>
     </div>
   </div>
</template>

<script>
    import Split from '../widget/Split'
    import {mapState, mapActions} from 'vuex'
    import Girl from '../Container/Girl'
    export default {
      name: 'Women',
        methods: {
        ...mapActions(['receviveAuther', 'receviveData', 'wDetails', 'showWdetail']),
          WDetails(item) {
            this.showWdetail(true)
            this.wDetails(item)
          },
          goBack() {     // 返回按钮
            this.$router.go(-1)
          },
      },
      computed: {
        ...mapState(['data'])
      },
      created() {
         this.axios('/api/auther')
           .then(res => {
             let auther = res.data.data.auther
             console.log("auther:",auther);
             this.receviveAuther(auther)
           }),
           this.axios('/api/data')
             .then(res => {
               let recom = res.data.data.recom
               console.log("recom",recom);
               this.receviveData(recom)
             })
      },
      components: {
        Split,
        Girl
      }
    }

</script>

<style scoped>
  .women {
    display: flex;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    z-index: 300;
    overflow: auto;
    background: #fff;
  }
  .l_logo {
    margin-left: 5px;
  }
  .r_logo {
    margin-right: 5px;
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
  .bookbar .title_g {
    font-size: 16px;
  }
  .container{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .title {
    width: 100%;
    height: 18px;
    margin-left: 5px;
    margin-top: 5px;
    line-height: 18px;
    font-size: 14px;
  }
  .content {
    width: 89px;
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
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
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
    margin-top: 5px;
  }
  .tags {
    display: inline-block;
    width: 106px;
    height: 20px;
    float: right;
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
