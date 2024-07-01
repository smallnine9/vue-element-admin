## 实现功能
导航守卫重定向至登录页

```sh
router.beforeEach(async (to, from) => {
  if (
    // 检查用户是否已登录
    true &&
    // ❗️ 避免无限重定向
    to.name !== 'login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'login' }
  }
})
``` 