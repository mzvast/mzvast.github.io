export default {
  title: `win10 移除通知中心列表中已卸载的app图标`,
  tags: ["win10", "windows"],
  spoiler: 'windows10的通知中心中的app列表会随着时间的推移而越来越长，windows并不会自动去检测这些项目是否已经卸载了。有些黑漆漆的图标看着真的很不爽，尤其是具有强迫症的人，更是如此，今天就让我研究了半天，终于找到的解决方案',
  getContent: () => import('./document.mdx'),
}
