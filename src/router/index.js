import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

const routeFiles = import.meta.glob('@/modules/**/*.vue')

console.log(routeFiles)

for (const path in routeFiles) {
  const regex = /^\/src\/modules\/(.+)\.vue$/;
  const name = path.match(regex)[1];
  const module = routeFiles[path]
  const component = module.default || module
  console.log(name)
  router.addRoute({
    path: `/${name}`,
    component: component
  })
}
// router.beforeEach(async (to, from) => {
//   if (
//     // 检查用户是否已登录
//     localStorage.token &&
//     // ❗️ 避免无限重定向
//     to.name !== 'login'
//   ) {
//     // 将用户重定向到登录页面
//     return { name: 'login' }
//   }
// })

export default router
