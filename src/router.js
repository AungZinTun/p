import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/admin/Index'),
      children: [
        // Dashboard
        {
          name: 'home',
          path: '',
          component: () => import('@/views/Home'),
        },
        // Pages
        {
          name: 'User Profile',
          path: 'user',
          component: () => import('@/views/admin/pages/UserProfile'),
        },
        // {
        //   name: 'Notifications',
        //   path: 'notifications',
        //   component: () => import('@/views/admin/component/Notifications'),
        // },
        {
          name: 'Services',
          path: 'services',
          component: () => import('@/views/Services'),
        },
        {
          name: 'Doctors',
          path: 'Doctors',
          component: () => import('@/views/Doctors'),
        },
        // {
        //   name: 'Typography',
        //   path: 'components/typography',
        //   component: () => import('@/views/admin/component/Typography'),
        // },
        // // Tables
        // {
        //   name: 'Regular Tables',
        //   path: 'tables/regular-tables',
        //   component: () => import('@/views/admin/tables/RegularTables'),
        // },
        // Maps
        // {
        //   name: 'Google Maps',
        //   path: 'maps/google-maps',
        //   component: () => import('@/views/admin/maps/GoogleMaps'),
        // },
        // Upgrade
        // {
        //   name: 'Upgrade',
        //   path: 'upgrade',
        //   component: () => import('@/views/admin/Upgrade'),
        // },
      ],
    },
  ],
})
