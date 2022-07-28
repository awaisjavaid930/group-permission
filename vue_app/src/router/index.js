import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/register',
    name: 'about',
    component: () => import('../views/RegisterView.vue')
  },
  {
    path: '/dashboard', // all permissions
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/permission/:id', // specfic permissions
    name: 'permission:id',
    component: () => import('../views/EditPermissionView.vue')
  },
  {
    path: '/permission/create', // add permissions
    name: 'AddNewPermission',
    component: () => import('../views/AddPermissionView.vue')
  },
  {
    path: '/roles', // all role
    name: 'roles',
    component: () => import('../views/RolesView.vue')
  },
  {
    path: '/role/:id', // all specfic role
    name: 'role',
    component: () => import('../views/EditRoleView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
