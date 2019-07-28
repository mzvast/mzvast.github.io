export default {
  title: `cmder设置当前活动页utf8编码，完美解决进度条乱码`,
  tags: ["cmder", "terminal", "windows", "yarn"],
  spoiler: '众所周知windows的终端有各种各样的问题，其中默认的字符编码在中文系统中是GBK，因此一些进度条会显示不正常。包括yarn，ssh等都会受到影响',
  getContent: () => import('./document.mdx'),
}
