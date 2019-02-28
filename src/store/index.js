/**
 * Created by newuser on 2018/11/19.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import mutations from './mutations'
import actions from './actions'


Vue.use(Vuex)
 const state = {
   show: false,
   showDetail: false,
   showBlist: false,
   showCldetail: false,
   showCCldetail: false,
   showDview: false,
   showWdetail: false,
   showMdetail: false,
   showCdetail: false,
   data: {
     recom: {},
     girl: {},
     boy: {},
     newbook: {},
     auther: {},
     bookshelf:{},
     classify:{}
   },
   detailData: [],
   Wdetails: [],
   Mdetails: [],
   Cdetails: [],
   booklistData: [],
   shelfdetails: [],
   bookshelf: [],
   bookRealId: '', // 保存书的源Id
   bookInfo: {}, // 存书的信息
   bookId: '', // 保存书的id
 }
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
