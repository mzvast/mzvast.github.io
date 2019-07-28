export default {
  title: `Hugo借助Travis CI实现GitHub Pages自动部署实践`,
  tags: ["hugo", "go", "travis"],
  spoiler: '这两天把博客从hexo转移到了hugo，并实现了自动化构建，借此机会趁热打铁把过程记录一下',
  getContent: () => import('./document.mdx'),
}
