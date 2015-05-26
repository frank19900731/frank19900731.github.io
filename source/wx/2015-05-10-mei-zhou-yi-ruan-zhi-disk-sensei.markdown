---
layout: wx-default
title: "每周一软之 Disk Sensei"
date: 2015-05-10 20:49:48 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Disk Sensei, Trim Enabler, 磁盘管理, 垃圾清理, 磁盘优化, benchmark, 磁盘可视化, 读写监控, MainMenu, xScan, DaisyDisk, Disk Inspector, Disk Utility, Activity Monitor
exclude_from_search: true
pc_url: /blog/2015/05/10/mei-zhou-yi-ruan-zhi-disk-sensei/
wx_url: /wx/2015-05-10-mei-zhou-yi-ruan-zhi-disk-sensei.html
---

__目录__

* list element with functor item
{:toc}

## 功能介绍

<!-- excerpt start -->

[Disk Sensei](https://www.cindori.org/software/disksensei/) 是一款磁盘工具软件，与知名软件 [Trim Enabler](https://www.cindori.org/software/trimenabler/) 来自同一软件厂商。前者除包含后者功能外，还提供了磁盘信息检测、健康度评估、垃圾清理、优化设置、基准检测、可视化分析和读写监控等功能。这些功能（除优化设置、Trim 设置）普遍存在于其它磁盘管理或系统优化软件中，Disk Sensei 算是功能全面的一个，界面设计也很美观，如下图，显示的是磁盘信息。

{% img imgcenter-no-shadow /img/post/2015-5/2.png 80% 磁盘信息 %}

[Trim](http://en.wikipedia.org/wiki/Trim_%28computing%29) 指令的主要功能是**标记文件删除并通知固态硬盘相应的磁盘存储空间可回收**，使得固态硬盘可以早做垃圾回收和磁盘优化，从而**提高固态硬盘的读写速度并减少读写请求数**。这一指令在 OS X 中默认关闭，**每次系统更新后也都是关闭**，可以通过 Trim Enabler 等工具激活。

<!-- excerpt end -->

优化设置是我觉得做的比较贴心的一项功能，包括四点：

- 瞬间移动下的磁盘保护，关闭可以省电；
- 本地 Time Machine，关闭可以省空间，减少磁盘读写，延长磁盘使用寿命；
- 深度睡眠状态下内存数据会被写入磁盘，关闭可以省空间；
- 文件访问记录，关闭可以减少磁盘读写，延长磁盘使用寿命。

{% img imgcenter-no-shadow /img/post/2015-5/4.png 80% 优化设置 %}

我们完全可以通过手工设置（可能是终端中输入命令行）来控制这些功能，只是 Disk Sensei 把它们简化为开关就更方便一些。

磁盘可视化显示是很有用的功能，比如便于在磁盘空间有异常变化时分析原因，[OS X Server](https://www.apple.com/osx/server/features/) 的日志就曾吞噬过我几百 G 的空间。可视化不但能帮我们寻找大文件，也能寻找大文件夹。

{% img imgcenter-no-shadow  /img/post/2015-5/5.png 80% 磁盘可视化 %}

最后要说的磁盘读写监控，比 Activity Monitor 更精细一些，可以点击进程查看其详细的读写操作。

{% img imgcenter-no-shadow  /img/post/2015-5/6.png 80% 各进程磁盘读写 %}

{% img imgcenter-no-shadow  /img/post/2015-5/7.png 80% 磁盘读写实时统计 %}

## 界面设计

界面设计清新美观。

## 易用性

简单易用。

## 稳定性

普通功能稳定，磁盘基准测试和可视化扫描时会占用大量资源，可能崩溃。特别是可视化扫描，多次出现耗尽 16G 系统内存的情况，后来发现在扫描前先选择 clear results 就会好很多。

## 跨平台

仅在 OS X 下。

## 类似软件

[MainMenu](http://mainmenuapp.com/)、[xScan](https://apps.adnx.com/en) 等都是老牌系统维护、监控软件，包含了一定的磁盘监控功能。

[DaisyDisk](http://daisydiskapp.com/)、[Disk Inspector](https://nektony.com/disk-inspector) 均为磁盘可视化工具，功能大同小异，只是前者可以 **Scan as Administrator**，且具有预览功能。

Disk Utility 是系统小工具，可以实现磁盘权限修复、错误修复等功能；Activity Monitor 也是系统小工具，可以简单观察磁盘读写。

## 闪光点

- 功能全面，且集成四项优化功能；
- 界面清新美观。

## 缺点

- 可视化扫描时没有进度条，容易崩溃。