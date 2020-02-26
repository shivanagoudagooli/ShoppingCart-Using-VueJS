import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../components/LoginPage.vue'
import RegisterPage from '../components/RegisterPage.vue'
import ProductsMainPage from '../components/ProductsMainPage.vue'
import Checkout from '../components/Checkout.vue'
import Products from '../components/Products.vue'
import PageNotFound from '../components/PageNotFound.vue'


Vue.use(VueRouter);

const routes = [
    {path:'/',component:LoginPage},
    {path:'/RegisterPage',component:RegisterPage},
    {path:'/ProductsMainPage',component:ProductsMainPage},
    {path:'/Checkout',component:Checkout},
    {path:'/Products',name:Products,component:Products},
    {path:'*',name:PageNotFound,component:PageNotFound}
]

const router = new VueRouter({
    mode:'history',
    base: process.env.BASE_URL,
    routes
})

export default router