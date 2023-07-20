const routes = [
  {
    path: '/',
    title: '首页',
    component: () => import('@/pages/index.vue'),
  },
  {
    path: '/tools/',
    children: [
      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'profile',
        component: () => import('@/pages/tools/DrawApiTool.vue'),
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 将被渲染到 User 的 <router-view> 内部
        path: 'posts',
        component: () => import('@/pages/tools/DrawApiTool.vue'),
      },
    ],
  },
]
export default routes
