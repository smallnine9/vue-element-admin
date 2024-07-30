import { createRouter, createWebHistory } from 'vue-router'

const routeFiles = import.meta.glob('@/pages/**/index.vue')

console.log(routeFiles)

function buildFileTree(paths) {
  // 文件树结点 的属性有两个： 1、component  2、children
  const root = {};

  paths.forEach(filePath => {
    console.log(filePath)
    const parts = filePath.split('/').filter(Boolean).slice(2); // 以 '/' 分割路径，并去掉空部分
    parts[0] = `/${parts[0]}`;
    const module = routeFiles[filePath];
    let current = root;

    parts.forEach((part, index) => {
      if (index === parts.length - 1 && part === 'index.vue') {
        return;
      }
      // index === parts.length - 1 时，说明是文件
      current[part] = current[part] || {};
      if (index === parts.length - 2) {
        current[part]._component = module.default || module;
      }
      current = current[part];
    });
  });

  return root;
}

const fileTree = buildFileTree(Object.keys(routeFiles));
console.log(fileTree)

/**
 * 根据文件树生成 Vue Router 路由配置
 * @param {object} tree 文件树
 * @param {string} parentPath 父路径
 * @returns {Array} Vue Router 路由配置
 */
function generateRoutesFromTree(treeNode, parentPath = '') {
  const routes = [];
  // 遍历文件树
  // 遍历方式：深度优先
  // 如果当前结点拥有_component属性，说明就要生成一个路由, 继续遍历余下的属性，生成子路由
  if(!treeNode) {
    return routes;
  }
  if(treeNode._component) {
    let { _component, ...children } = treeNode;
    routes.push({
      path: `${parentPath}`,
      component: _component,
      children: generateRoutesFromTree(children, '')
    })
  } else {
    Object.keys(treeNode).forEach(key => {
      routes.push(...generateRoutesFromTree(treeNode[key], `${key}`))
    })
  }
  return routes;
}

const routes = generateRoutesFromTree(fileTree, '');
console.log(routes)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
