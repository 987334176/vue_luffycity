import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Course from '@/components/Course'
import News from '@/components/News'
import Login from '@/components/Login'
import CourseDetail from '@/components/CourseDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '首页',
      component: HelloWorld
    },
    {
      path: '/course',
      name: '课程',
      component: Course
    },
    {
      path: '/news',
      name: '深科技',
      component: News
    },
    {
      path: '/login',
      name: '登录',
      component: Login
    },
    {
      path: '/course/1/',
      name: '课程详情',
      component: CourseDetail
    },

  ]
})
