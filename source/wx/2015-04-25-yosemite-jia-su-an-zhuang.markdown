---
layout: wx-default
title: "Yosemite 加速安装"
date: 2015-04-25 16:06:29 +0800
comments: false
categories: [Mac 使用]
tags: [Yosemite]
keywords: Yosemite, /user/local, Gray screen, prohibitary sign, OS X 重装系统
exclude_from_search: true
pc_url: /blog/2015/04/25/yosemite-jia-su-an-zhuang/
wx_url: /wx/2015-04-25-yosemite-jia-su-an-zhuang.html
---

<!-- excerpt start -->

有些人或物是不禁夸的，稍不留神就整一出幺蛾子，OS X 就是如此。昨日重启电脑后只显示禁止图标，无法进入系统。

{% img imgcenter /img/post/2015-4/6.png 30% 禁止图标 %}

Shift + Command + V 尝试进入恢复模式，日志输出倒数第二行显示 `pci pause: SDXC `，之后仍会跳出禁止图标，且与日志交叠，导致最后一行日志看不清……按照官方给出的 [解决方案](https://support.apple.com/en-us/HT204325) 修复磁盘（权限）、重建 NVRAM 等无效。

重启之前，我大概做了如下几项操作：

- CleanMyMac 清理系统垃圾；
- AppStore 安装系统更新，主要是更新 iMovie 和一个名为 Pro Video Formats 的更新，让我纳闷的是后者已经在我的系统更新中出现了三次，每次的更新版本号、更新说明、更新文件大小都是一模一样的；
- Time Machine 备份。

{% img imgcenter /img/post/2015-4/7.png 90% 一模一样的更新 %}

清理完垃圾，在没有完成 AppStore 更新和 Time Machine 备份的情况下，我通过正常途径关闭了电脑，就再没起来。

苹果客服（我又无耻的打了客服，虽然帮助还是有限）向我表示曾遇到过**用户使用类似 CleanMyMac 的第三方工具清理后重启无法进入系统**的案例。也是，谁让 AppStore、Time Machine 都是苹果亲儿子。之前使用 CleanMyMac 清理系统都是直接输入密码、给予权限，确实没关心具体删除了哪些内容，以后不用就是了。

<!-- excerpt end -->

**对于目前系统和恢复模式都无法进入的情况，客服又祭出重装系统的方法，我可耻地从了**。大概有三种解决方案： 

1. 开机 Command + R，选择 Reinstall 系统，**用户文件、系统设置等都不会丢失**，但也存在无法修复当前错误的可能（我很纳闷既然是 CleanMyMac 误删，那重装系统后为何仍旧可能无法进入系统，客服没有给出解答，只是说遇到过此类情况）；
2. 使用 Time Machine 还原，问题在于**最近一次备份的系统可能就是错的**，可能需要还原更早的时间节点，而该时间节点后的新文件难于找回，未备份的则更找不回了；
3. 使用另外一块硬盘安装系统，类似于 WinPE，读取原系统盘中的文件进行备份，或者干脆把原系统盘拆出来用硬盘读取器备份，然后使用第二种方法。

显然第一种方法最简便。虽然当初安装 OS X 的时候没有分区操作，但重装系统还是可以做到不影响用户文件的。跟 AppStore 进行系统版本升级一样，都是先从苹果的服务器下载系统安装文件，安装末尾遇到了与之前博文 [《Yosemite 升级及后续 》](http://frank19900731.github.io/blog/2014/10/18/yosemite-sheng-ji-ji-hou-xu/) 里提到的相同的问题：最后一分钟无比漫长。

这次深入查询的结果是：**系统更新过程中会将 /user/local 文件夹移出，然后在系统安装末尾再一点点拷贝回来**。**当时我就蒙逼了**，Homebrew、TexLive 都在里面，而且 TexLive 还是 2011、2014 两个版本，这不闹呢么。打开日志（Comand  + L），发现确实在进行拷贝，1s 大概输出 10个文件名吧。虽说找到了 [加速建议](https://jimlindley.com/blog/yosemite-upgrade-homebrew-tips/)，但安装过程中是妥妥儿用不了了。我的 /usr/local 文件夹大小 20 G（很多是历史遗留物），20G 的零七八碎的文件拷贝也就花了六七个小时吧 ==

{% img imgcenter-no-shadow /img/post/2015-4/9.png 100% local 文件夹大小 %}

加速的方法很简单，就是把 /usr/local 文件夹在更新前移出 /usr 文件夹，在更新后再移动回来，但此时系统会有一个新的 /usr/local 文件夹，所以不是简单地移动，而是 merge。按 [加速建议](https://jimlindley.com/blog/yosemite-upgrade-homebrew-tips/) 的做法，merge 也很耗时，我不清楚是否可以将新的 /usr/local merge 到老的上然后直接做替换，这种快速做法如果只是造成某些日志的断档，似乎就是可行的，以后再重装的话可以试下。

一觉醒来，系统可以进入，用户文件没有变化，Tex、Homebrew 运行正常，截至目前只发现三处有改动：

1. 系统设置中隐私设置的软件来源变成默认设置，即来自 AppStore 和通过验证的开发者；
2. Server 中 Apache 的设置被重置，幸好有备份；
3. JDK 1.6 被清除（因为默认装在 /System/Library 下，其它版本都无影响），[下载](https://support.apple.com/kb/DL1572?viewlocale=en_US&locale=en_US) 重装即可。