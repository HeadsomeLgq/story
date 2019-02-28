<template>
  <div id="app">
    <Header></Header>  <!--头部-->
    <navview></navview>  <!--导航-->
    <Carousel></Carousel>   <!--轮播图-->
    <Personallogin v-show="show === 15"></Personallogin>   <!--登录页-->
    <Mybookshelf class="booklist" v-show="show === 1"></Mybookshelf>  <!--我的书架-->
    <Searchcenter class="search" v-show="show === 3"></Searchcenter>   <!--搜索中心-->
    <Container></Container>  <!--中部-->
    <Bookdetails v-show="showDetail"></Bookdetails>   <!--详情页-->
    <Blistdetails v-show="showBlist"></Blistdetails>  <!--列表页-->
    <Detail v-show="showCldetail === 1"></Detail>      <!--分类-->
    <Bdetails v-show="showCCldetail"></Bdetails>       <!--分类的详情页-->

    <Detailview v-show="showDview ===1"></Detailview>

    <Wdetails v-show="showWdetail"></Wdetails>   <!--女生-->

    <Mdetails v-show="showMdetail"></Mdetails>    <!--男生-->

  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from './components/Header'
  import Mybookshelf from './components/Mybookshelf/Mybookshelf'
  import Searchcenter from './components/Searchcenter/Searchcenter'
  import Container from './components/Container/Container'
  import Wdetails from './components/Women/Wdetails'
  import Mdetails from './components/Man/Mdetails'
  import Personallogin from './components/Personallogin/Personallogin'
  import Bookdetails from './components/bookDetails/Bookdetails'
  import Blistdetails from './components/Booklist/Blistdetails'
  import Detail from './components/Classify/Detail'
  import Bdetails from './components/Classify/Bdetails'
  import Detailview  from './components/Pank/Detailview'
  import navview from './components/Nav/navview'
  import Carousel from './components/Carousel/Carousel'
export default {
  name: 'App',
  computed:{
    ...mapState(['show', 'showDetail', 'showBlist', 'showCldetail', 'showDview', 'showWdetail', 'showMdetail', 'showCCldetail'])
  } ,
  components: {
    Header,
    Mybookshelf,
    Searchcenter,
    Container,
    Bdetails,
    Wdetails,
    Mdetails,
    Personallogin,
    Bookdetails,
    Blistdetails,
    Detail,
    Detailview,
    navview,
    Carousel
  }
}
</script>

<style scoped>
  .booklist {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
