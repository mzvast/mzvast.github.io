export default {
  title: `proxychains-ng ipv6 错误的解决方案`,
  tags: ["proxychains-ng", "ipv6"],
  spoiler: '当用pyenv在代理的情况下安装python的时候可能会报错，说是You must get working getaddrinfo() function. or you can specify "--disable-ipv6". getaddrinfo() ',
  getContent: () => import('./document.mdx'),
}
