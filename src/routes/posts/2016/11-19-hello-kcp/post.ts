export default {
  title: `树莓派遇上kcptun`,
  tags: ["kcp", "kcptun", "shadowsocks", "raspberrypi", "systemd"],
  spoiler: '电信和校园网出国线路经常会炸，慢的让人抓狂。Kcptun用来做P2P隧道加速效果显著，尤其适合看视频。本文以centos6和rasbian为例做一个过程梳理。',
  getContent: () => import('./document.mdx'),
}
