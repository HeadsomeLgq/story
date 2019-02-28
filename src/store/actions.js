/**
 * Created by newuser on 2018/11/20.
 */
import * as types from './mutation-types'
export default {  //提交mutation
  showBook({commit}) {  //打开书架
    commit(types.SHOW_BOOKSHELF, 1)
  },
  closeBook({commit}) {   // 关闭书架
    commit(types.SHOW_BOOKSHELF, 2)
  },
  showSearch({commit}) {
    commit(types.SHOW_SEARCH, 3)
  },
  closeSearch({commit}) {
    commit(types.SHOW_SEARCH, 4)
  },

  showClassify({commit}) {
    commit(types.SHOW_CLASSIFY, 5)
  },
  closeClassify({commit}) {
    commit(types.SHOW_CLASSIFY, 6)
  },
  showCldetail({commit}) {
    commit(types.SHOW_CDETAIL, 1)
  },
  closeCldetail({commit}) {
    commit(types.SHOW_CDETAIL, 2)
  },

  showPank({commit}) {
    commit(types.SHOW_PANK, 7)
  },
  closePank({commit}) {
    commit(types.SHOW_PANK, 8)
  },
  showDview({commit}) {
    commit(types.SHOW_DVIEW, 1)
  },
  closeDview({commit}) {
    commit(types.SHOW_DVIEW, 2)
  },

  showWomen({commit}) {
    commit(types.SHOW_WOMEN, 9)
  },
  closeWomen({commit}) {
    commit(types.SHOW_WOMEN, 10)
  },
  showWdetail({commit}, item) {
    commit(types.SHOW_WDETAIL, item)
  },

  showMan({commit}) {
    commit(types.SHOW_MAN, 11)
  },
  closeMan({commit}) {
    commit(types.SHOW_MAN, 12)
  },
  showMdetail({commit}, item) {
    commit(types.SHOW_MDETAIL, item)
  },

  showBooklist({commit}) {
    commit(types.SHOW_BOOKLIST, 13)
  },
  closeBooklist({commit}) {
    commit(types.SHOW_BOOKLIST, 14)
  },

  showPersonal({commit}) {
    commit(types.SHOW_PERSONAL, 15)
  },
  closePersonal({commit}) {
    commit(types.SHOW_PERSONAL, 16)
  },


 receviveData({commit},data) {
   commit(types.RECEVIVE_DATA,data)
 },
  receviveGirl({commit}, girl) {
    // console.log("actionGirl",girl)
    commit(types.RECEVIVE_GIRL, girl)
  },
  receviveBoy({commit}, boy) {
    commit(types.RECEVIVE_BOY, boy)
  },
  receviveNewbook({commit}, newbook) {
    commit(types.RECEVIVE_NEWBOOK, newbook)
  },
  receviveAuther({commit}, auther) {
    commit(types.RECEVIVE_AUTHER, auther)
  },
  receviBookshelf({commit}, bookshelf) {
    commit(types.RECEVIVE_BOOKSHELF, bookshelf)
  },
  recevClassify({commit}, classify) {
    commit(types.RECEVIVE_CLASSIFY, classify)
  },
  upData({commit}, detailData) {
    commit(types.RECEVIVE_UPDATA, detailData)
  },
  pushShelf({commit}, book) {  // 添加书架
    commit(types.PUSHSHELF, book)
  },
  // 删除书架的书本
  deleteShelf({commit}, data) {
    commit(types.DELETE_SHELF,data)
  },
  bookData({commit}, data) {
    // console.log(data);
    commit(types.RECEVIVE_BOOKDATE, data)
  },
  wDetails({commit} ,auther) {
    commit(types.WDETAILS, auther)
  },
  mDetails({commit} ,bookshelf) {
    commit(types.MDETAILS, bookshelf)
  },
  cDetails({commit} ,bookshelf) {
    commit(types.CDETAILS, bookshelf)
  },
  showDetails({commit}, showdetail) {
    commit(types.SHOW_DETAILS, showdetail)
  },
  showBlist({commit}, index) {
    commit(types.SHOW_BLIST, index)
  },
  showCdetail({commit}, val) {
    commit(types.SHOW_CDETAIL, val)
  },
  showCCdetail({commit}, val) {
    commit(types.SHOW_CCDETAIL, val)
  }

}
