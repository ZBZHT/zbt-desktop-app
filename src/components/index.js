/**
 * Created by Administrator on 2018/11/27.
 */
import FootFooter from './component/footFooter.vue'
import Login from './component/Login.vue'
import NavgationHead from './component/navgationHead.vue'
import HomePage from './component/homePage.vue'

export default (Vue) => {
  Vue.component('FootFooter', FootFooter)
  Vue.component('Login', Login)
  Vue.component('NavgationHead', NavgationHead)
  Vue.component('HomePage', HomePage)
}
