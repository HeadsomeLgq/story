import Vue from 'vue'
import Router from 'vue-router'
import Booklist from '../components/Booklist/Booklist'
import Classify from '../components/Classify/Classify'
import Man from '../components/Man/Man'
import Women from '../components/Women/Women'
import Pank from '../components/Pank/Pank'
import Searchcenter from '../components/Searchcenter/Searchcenter'
import searchresult  from '../components/Searchcenter/searchResult'
import searchDetail from '../components/bookDetails/searchDetail'
import currentBook from '../components/bookDetails/currentBook'
import Mybookshelf from '../components/Mybookshelf/Mybookshelf'
import Personallogin from '../components/Personallogin/Personallogin'

Vue.use(Router)

export default new Router({
  routes:[
    {path: '/classify',  name: 'Classify', component: Classify},
    {path: '/pank',  name: 'Pank', component: Pank},
    {path: '/women',  name: 'Women', component: Women},
    {path: '/man',  name: 'Man', component: Man },
    {path: '/booklist',  name: 'Booklist', component: Booklist},
    {path:'/searchresult',name:'searchresult',component:searchresult},
    {path:'/searchDetail',name:'searchDetail',component:searchDetail},
    {path:'/currentBook',name:'currentBook',component:currentBook},
    {path:'/Searchcenter',name:'Searchcenter',component:Searchcenter},
    {path:'/Mybookshelf',name:'Mybookshelf',component:Mybookshelf},
    {path:'/Personallogin',name:'Personallogin',component:Personallogin}
  ]
})
