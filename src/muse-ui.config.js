/**
 * Created by newuser on 2018/11/19.
 */
import 'muse-ui/lib/styles/base.less'
import {AppBar, Avatar, Icon, Grid, Button, List, SubHeader, Tabs,Progress, Carousel} from 'muse-ui'
const  components = [AppBar, Avatar, Icon, Grid, Button, List, SubHeader, Tabs,Progress, Carousel]
export default {
  install(Vue) {
    components.forEach(c => Vue.use(c))
  }
}
