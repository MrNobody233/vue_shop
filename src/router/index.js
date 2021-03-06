import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "@/components/Login";
import Home from "@/components/Home"
import Welcome from "@/components/Welcome";
import Users from "@/components/user/users";
import Rights from "@/components/power/Rights";
import Roles from "@/components/power/Roles";

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {
        path: '/home',
        component: Home,
        redirect: '/home/welcome',

        children: [
            {path: '/', component: Welcome},
            {path: 'welcome', component: Welcome},
            {path: '/users', component: Users},
            {path: '/rights', component: Rights},
            {path: '/roles', component: Roles}
        ]
    },

]

const router = new VueRouter({
    routes
})

router.beforeEach((to, form, next) => {
    if (to.path === '/login') return next()
    // 获取token
    const tokenStr = window.sessionStorage.getItem('token')
    // 如果 token 是空值，则返回login页面
    if (!tokenStr) return next('/login')
    next()

})
export default router
