<template>
  <div class="search">
    <mu-appbar class="bookbar" style="width: 100%;"  z-depth="0">
      <mu-icon class="l_logo" slot="left" value="keyboard_backspace" color="lightseagreen" @click="closeSearch"></mu-icon>
      <h2 class="search_center">搜索中心</h2>
      <mu-icon class="r_logo" slot="right" value="home" color="lightseagreen" @click="closeSearch"></mu-icon>
    </mu-appbar>
    <div class="search_bar">
      <div class="inp_bar">
       <mu-icon class="search_logo" size="18" value="search" @click="search"></mu-icon>
       <input v-model="value" class="inp" type="search" placeholder="书名/作者/关键字" @input="fuzzySearch"></input>
        <mu-icon @click="deleteValue" v-show="keywords.length" class="delete" value="cancel" :size="20" color="#b6b6b6" ></mu-icon>
      </div>
    </div>
    <div class="fuzzyListWrapper" v-if="flag">
      <div class="fuzzyList" v-for="(item, index) in keywords" :key="index" @click="setKeywords(item)">
        <div>{{item}}</div>
      </div>
    </div>
    <mu-appbar style="width: 100%;" class="refreshbar"  z-depth="0">
      <span class="change">换一换</span>
      <mu-icon class="icon" value="autorenew" size="16"></mu-icon>
    </mu-appbar>
  </div>
</template>

<script>
  import {mapActions} from 'vuex' // 引入辅助函数
  export default {
    name: 'Searchcenter',
    data() {
        return {
            value: '',
            keywords: [],
            flag: false  //是否显示搜索结果
        }
    },
    methods: {
       ...mapActions(['closeSearch']),
      fuzzySearch(){  //模糊搜索
        this.flag = false
        this.axios.get('/api/book/auto-complete?query=' + this.value).then(res =>{
//          console.log(res)
            if(res.status === 200) {   //设置状态码
                res = res.data
                console.log(res)
                this.keywords = res.keywords.slice(0,6)  //只显示6本书籍
                this.flag = true  //显示搜索结果
            }
        })

      },
      setKeywords(val) {
        this.value = val
      },
      search(){
          this.$router.push({name: 'searchresult',params: {value: this.value}})
      },
      deleteValue() {
          this.value = ''   // 清空输入框
      }
     }
    }

</script>

<style scoped>
  .search{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 30;
    background: #ffffff;
  }
  .bookbar {
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
    width: 54px;
    height: 44px;
    line-height: 44px;
  }
  .search_bar {
    width: 375px;
    height: 60px;
    padding: 10px 15px 10px 15px;
    background: #F0F0F2;
  }
  .refreshbar {
    text-align: center;
    background: #fff;
  }
  .refreshbar .change {
    font-size: 14px;
  }
  .refreshbar .icon {
     vertical-align: middle;
  }
  .wrap .recom_world {
    flex: 0 0 90px;
    height: 31px;
    margin-left: 10px;
    line-height: 31px;
    border: 1px solid #e6e6e6;
    border-radius: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .search_logo{
    width: 14px;
    height: 14px;
    margin-left: 10px;
    vertical-align: middle;
  }
  .inp_bar {
    position: relative;
    display: inline-block;
    width: 343px;
    height: 40px;
    line-height: 40px;
    background: #fff;
  }
  .delete {
    line-height: 40px;
    position: absolute;
    right: 0;
  }
  .inp {
    border: 0;
    width: 294px;
    height: 20px;
    outline: none;
  }
  .search_center {
    font-size: 18px;
  }
  .fuzzyListWrapper{
    width: 100%;
    margin-top: 10px
  }
  .fuzzyList{
    padding: 0 10px;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid rgba(7, 17, 27, 0.4);
  }
</style>
