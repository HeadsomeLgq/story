<template>
  <div class="read">
    <div class="goback">
      <mu-icon class="btn" slot="left" size="20" value="keyboard_backspace" color="#fff" @click="back"></mu-icon>
    </div>
     <!--进度条-->
    <mu-circular-progress v-if="loadingFlag" class="demo-circular-progress loading" :size="36" color="green">
    </mu-circular-progress>
    <div class="contentWra" v-if="!loadingFlag" ref="contentWra">
      <div class="content">
        <h1 class="bookName" v-if="!loadingFlag && !clickFlag" >{{bookName}}</h1>
        <h3 class="author" v-if="!loadingFlag && !clickFlag">{{author}}</h3>
        <mu-circular-progress v-if="clickFlag && !contentFlag" class="demo-circular-progress loading" :size="36" color="green"></mu-circular-progress>
        <div v-if="contentFlag">
          <h1 class="title">{{title}}</h1>
          <article v-html="content"></article>
        </div>

        <mu-container class="button-wrapper">
          <mu-flex justify-content="center" align-items="center">
            <mu-button class="Prev" round color="green" textColor="#fff" @click="getPrevChapter" v-if="beginFlag">上一章
            </mu-button>
            <mu-button class="Next" round color="green" textColor="#fff" @click="getNextChapter" v-if="beginFlag">下一章
            </mu-button>
            <mu-button round color="green" textColor="#fff" @click="getRead" v-if="!beginFlag">
              开始阅读
            </mu-button>
          </mu-flex>
        </mu-container>
        <a class="bottom"></a>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
      name: 'currentBook',
      beforeRouteEnter(to, from, next) {  //          在路由跳转完成之前进行网络请求
        next(vm => {
          vm.getBook()
        })
      },
      beforRouterLeave(to, from, next) {  //初始化当前页面的章节索引
        this.index = 0
        next()
      },
      data() {
        return {
          chapters: [],         // 存放请求的章节
          title: '',            // 存放请求的小说章节名
          bookName: '',
          content: '',          // 存放请求的小说内容
          author: '',
          contentFlag: false,  // 限制显示
          loadingFlag: true,   // 加载条
          clickFlag: false,
          beginFlag: false,
          bookInfo: {},        // 存放当前小说的阅读信息
          index: 0             // 小说阅读的章节索引
        }
      },
      methods: {
          getBook() {    //通过上级路由传来的bookInfo发起数据请求
            if(this.$route.params.bookInfo) {   //对小说信息进行储存
              this.bookInfo = this.$route.params.bookInfo
              console.log(this.bookInfo)
              this.bookName = this.bookInfo.title
              this.author = this.bookInfo.author
              console.log(this.bookInfo)
              this.$store.commit('SET_BOOK_INFO',this.$route.params.bookInfo)
              this.getReadbookId(this.$route.params.bookInfo._id)  //获取小说的id
            }
          },
        getReadbookId(id) {  //通过小说的bookInfo -> 获取小说的id
          this.axios.get('/api/btoc?view=summary&book=' + id)
            .then(res =>{
//                console.log(res)
                if(res.status === 200) {
                  res = res.data[0]
//                  console.log(res)
                  this.getBookChapter(res)  // 通过源id发起请求获取小说章节信息
                }
            })
        },
        getBookChapter(bookInfo) {   //通过小说的Id -> 获取小说的章节信息
          this.axios.get('/api/atoc/' + bookInfo._id + '?view=chapters')
            .then(res =>{
                if(res.status === 200) {
                  res = res.data
//                  console.log(res)
                  this.chapters = res.chapters   //章节存放（50章）
                  this.loadingFlag = false
//                  console.log(this.chapters)
                }
            })
        },
        getPrevChapter() {   //上一章
          this.index--
          this.scroll.destroy()
          this.getBookContent()
          this.scroll.scrollTo(0, 0)

        },
        getNextChapter() {   //下一章
          this.index++
          this.scroll.destroy()
          this.getBookContent()
          this.scroll.scrollTo(0, 0)
        },

        getRead(){
          this.$store.state.bookshelf.forEach(val =>{
            let flag = false
            if(val._id === this.$route.params.bookInfo._id) {
                flag = true    //书架有此书
            }
            if(flag) {
                this.index = this.$store.state.bookInfo.readedLastChapter
            }
          })
          this.beginFlag = true
          this.getBookContent()
        },
        getBookContent() {        //   通过index -> 获取小说内容
          this.contentFlag = false
          this.clickFlag = true
          this.axios.get('/chapterapi/' + this.chapters[this.index].link)
            .then(res => {
               console.log(res)
              if (res.status === 200) {
                res = res.data.chapter
//              console.log(res)
                this.content = res.cpContent.replace(/\n/g, '<br>')
                this.title = res.title
                this.contentFlag = true
              }
            })
          Object.assign(this.bookInfo, { // 将当前的小说阅读章节数存放在小说具体信息里，用于返回时候存放到总的数组里
            readedLastChapter: this.index
          })
          this.scroll = new BScroll(this.$refs.contentWra, {
            click: true
          })
          this.scroll.refresh()
        },
        // 返回上一页，并保存当前阅读的章节数
        back() {
          this.$store.state.bookshelf.forEach((val) => {
            if (val._id === this.bookInfo._id) {
              this.$store.commit('SET_INDEX', this.bookInfo)
            }
          })
          this.content = ''
          this.title = ''
          this.loadingFlag = true
          this.beginFlag = false
          this.$router.go(-3)
        }
      }
    }
</script>
<style scoped>
  .read {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index:50;
    background: #fff;
  }
  .loading {
    margin: 200px 180px;
  }
  .goback {
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: limegreen;
  }
  .btn {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 10px;
  }
  .bookName {
    display: inline-block;
    width: 100%;
    min-height: 40px;
    line-height: 40px;
    text-align: center;
  }
  .author {
    display: inline-block;
    width: 100%;
    min-height: 260px;
    color: rgba(7, 17, 27, 0.6);
    font-size: 20px;
    line-height: 30px;
    text-align: center;
  }
  .title {
    text-align: center;
  }
  .contentWra {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .Prev {
    position: absolute;
    left: 10px;
  }
  .Next {
    position: absolute;
    right: 10px;
  }
  article{
    text-indent: 25px;
    font-size: 14px;
    line-height: 1.7rem;
    padding: 20px 20px;
    word-break: break-all;
  }
  .button-wrapper {
    height: 100px;
  }
  .bottom {
    width: 100%;
    height: 50px;
  }
</style>
