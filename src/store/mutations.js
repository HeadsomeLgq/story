/**
 * Created by newuser on 2018/11/19.
 */
import * as types  from './mutation-types'
export default {  //修改state
  [types.RECEVIVE_DATA] (state, data) {
    state.data.recom = data
  },
  [types.RECEVIVE_GIRL] (state, girl) {
    state.data.girl = girl
  },
  [types.RECEVIVE_BOY] (state, boy) {
    state.data.boy = boy
  },
  [types.RECEVIVE_NEWBOOK] (state, newbook) {
    state.data.newbook = newbook
  },
  [types.RECEVIVE_AUTHER] (state, auther) {
    state.data.auther = auther
  },
  [types.RECEVIVE_BOOKSHELF] (state, bookshelf) {
    state.data.bookshelf = bookshelf
  },

  [types.RECEVIVE_UPDATA](state, data) {
    state.detailData = data
  },
  [types.RECEVIVE_BOOKDATE](state, bookshelf) {
    state.booklistData = bookshelf
  },
  [types.RECEVIVE_BOOKLISTDATA](state, item) {
    state.booklistData = item
  },
  [types.WDETAILS](state, auther) {
    state.Wdetails = auther
  },
  [types.MDETAILS](state, bookshelf) {
    state.Mdetails = bookshelf
  },
   [types.CDETAILS](state, bookshelf) {
    state.Cdetails = bookshelf
   },
  [types.RECEVIVE_CLASSIFY](state, classify) {
    state.classify = classify
  },

  [types.SHOW_BOOKSHELF](state, val) {
    state.show = val
  },
  [types.SHOW_SEARCH](state, val) {
    state.show = val
  },
  [types.SHOW_PERSONAL](state, val) {
    state.show = val
  },
  [types.SHOW_CLASSIFY](state, val) {
    state.show = val
  },
  [types.SHOW_CDETAIL](state, val) {
    state.showCldetail = val
  },

  [types.SHOW_PANK](state, val) {
    state.show = val
  },
  [types.SHOW_DVIEW](state, val) {
    state.showDview = val
  },

  [types.SHOW_WOMEN](state, val) {
    state.show = val
  },
  [types.SHOW_WDETAIL](state, val) {
    state.showWdetail = val
  },

  [types.SHOW_MAN](state, val) {
    state.show = val
  },
  [types.SHOW_MDETAIL](state, val) {
    state.showMdetail = val
  },

  [types.SHOW_BOOKLIST](state, val) {
    state.show = val
  },

  [types.SHOW_BLIST](state, blist) {
    // console.log(blist);
    state.showBlist = blist
  },
  [types.SHOW_DETAILS](state, item) {
    state.showDetail = item
  },
  [types.SHOW_CCDETAIL](state, item) {
    state.showCCldetail = item
  },
  [types.PUSHSHELF](state, item) {
    state.shelfdetails.push(item)
  },
  [types.DELETE_SHELF](state, data) {
    let index = state.shelfdetails.indexOf(data)
    state.shelfdetails.splice(index,1)
  },

  [types.SET_INDEX] (state, bookInfo) {
    let flag = false
    state.bookshelf.forEach((val) => {
      if (val._id === bookInfo._id) {
        flag = true
      }
    })
    if (flag) {
      let index = state.bookshelf.findIndex(m => {
        return m._id === bookInfo._id
      })
      Vue.set(state.bookshelf[index], 'readedLastChapter', bookInfo.readedLastChapter)
    }
  },
  [types.SET_BOOK_INFO] (state, bookInfo) {
    state.bookInfo = bookInfo
  },

}
