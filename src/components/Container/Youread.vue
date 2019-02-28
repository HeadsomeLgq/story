<template>
   <div>
     <div class="container">
       <h3 class="title">根据你的阅读兴趣为你推荐</h3>
       <div class="content" v-for="item in data.newbook" :key="item.id">
       <div class="bimg">
         <img :src="item.book_cover" alt="">
       </div>
       <div class="book_info">
         <span class="book_name">{{item.bookname}}</span>
         <span class="writer">{{item.author_name}}</span>
         <div class="descript">{{item.book_info}}</div>
         <div class="book-tag">
           <span class="lz">{{item.stat_name}}</span>
           <span>47万字</span>
           <span>{{item.tag[0]}}</span>
           <span>{{item.tag[1]}}</span>
         </div>
       </div>
     </div>
     </div>
   </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'
    export default {
      name: 'Youread',
      methods: {
        ...mapActions(['receviveNewbook',])
      },
      computed: {
        ...mapState(['data'])
      },
      created() {
        this.axios('/api/newbook')
          .then(res => {
            let newbook = res.data.data.newbook
            console.log("newbook", newbook);
            this.receviveNewbook(newbook)
          })
      }
    }

</script>

<style scoped>
  .container{
    width: 100%;
  }
  .title {
    width: 100%;
    height: 18px;
    margin-left: 5px;
    line-height: 18px;
    font-size: 14px;
  }
  .content {
    width: 89px;
    height: 140px;
    margin-top: 10px;
    margin-left: 5px;
    display: flex;
  }
  .bimg img {
    width: 84px;
    height: 112px;
  }
  .book_info {
    flex: 0 0 200px;
    width: 243px;
    height: 113px;
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
    font-size: 12px;
    width: 74px;
    height: 16px;
  }
  .descript {
    display: inline-block;
    width: 243px;
    height: 36px;
    color: #999;
    overflow: hidden;
    font-size: 12px;
    margin-top: 10px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .book-tag {
    width: 243px;
    height: 19px;
  }
  .book-tag span {
    margin-left: 3px;
    margin-top: 10px;
    font-size: 12px;
    border-radius: 3px;
    border: 1px solid rgba(153,153,153,.3);
  }
  .lz {
    display: inline-block;
    font-size: 12px;
    border-radius: 3px;
    color: lightseagreen;
    border: 1px solid rgba(153,153,153,.3);
  }
</style>
