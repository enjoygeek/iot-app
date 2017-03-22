import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'

import DeviceList from './components/DeviceList.vue'
import DeviceDetail from './components/DeviceDetail.vue'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard
  },
  {
    path: '/devices',
    component: DeviceList,
    children: [
      {
        path: '/:id',
        component: DeviceDetail
      }
    ]
  },
  {
    path: '*', 
    redirect: '/'
  }
];