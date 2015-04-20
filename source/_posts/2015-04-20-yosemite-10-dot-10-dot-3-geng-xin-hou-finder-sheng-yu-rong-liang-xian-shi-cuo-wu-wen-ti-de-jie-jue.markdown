---
layout: post
title: "Yosemite 10.10.3 更新后 Finder 剩余容量显示错误问题的解决"
date: 2015-04-20 19:38:24 +0800
comments: true
categories: [Mac 使用]
tags: [Yosemite, Finder]
keywords: Yosemite, Finder, NVRAM, SMC
pc_url: /blog/2015/04/20/yosemite-10-dot-10-dot-3-geng-xin-hou-finder-sheng-yu-rong-liang-xian-shi-cuo-wu-wen-ti-de-jie-jue/
wx_url: /wx/2015-04-20-yosemite-10-dot-10-dot-3-geng-xin-hou-finder-sheng-yu-rong-liang-xian-shi-cuo-wu-wen-ti-de-jie-jue.html
---

<!-- excerpt start -->

最近刚升级过 Yosemite 10.10.3，使用中发现 Finder 状态栏的剩余容量信息信息显示错误：

{% img imgcenter /img/post/2015-4/4.png 90% 剩余容量错误 %}

查看关于本机、Disk Utility 以及 `df -h` 命令输出的剩余容量是正常的，重启电脑、关闭 TotalFinder 插件、使用 Disk Utility 修复磁盘（权限）都无法修正错误。求助苹果热线，**一如既往的毫无帮助**。

后来在苹果的技术支持社区发现了相关帖子 [10.10.3 Finder Status Bar information is wrong, TB not GB](https://discussions.apple.com/thread/6983320?start=0&tstart=0)，给出的建议是重新设置 NVRAM 和 SMC。

<!-- excerpt end -->

按照技术支持里的说法，NVRAM（非易失随机访问内存）存储了一些系统经常访问的数据与设置，比如屏幕分辨率、启动盘等。既然重设 NVRAM 可以修正状态栏的信息错误，那可以推测，剩余空间信息可能被写在其中（？）。NVRAM 的重新设置方法如下，一两秒的时间就可以完成重置。

> Resetting NVRAM
> 
> - Shut down your Mac.
> - Locate the following keys on the keyboard: Command (⌘), Option, P, and R. 
> - Turn on your Mac.
> - Press and hold the Command-Option-P-R keys immediately after you hear the startup sound.
> - Hold these keys until the computer restarts and you hear the startup sound for a second time.
> - Release the keys.

再来看 [SMC 的功能](https://support.apple.com/en-us/HT201295)，我并不很理解这与 Finder 状态栏信息有什么关系，不过读了重设 SMC 的步骤后也就照做了，因为我们平时无意中会经常重新设置它，就是插拔电源这么简单。

> On Mac Pro, iMac, Mac mini, and Xserve
> 
> To reset the SMC on Intel-based Mac Pro, iMac, and Mac mini computers, as well as Xserve:
> 
> - Shut down the computer.
> - Unplug the power cord.
> - Wait fifteen seconds.
> - Attach the power cord.
> - Wait five seconds, then press the power button to turn on the computer.

备份系统，第一次修复尝试失败。考虑到 [帖子](https://discussions.apple.com/thread/6983320?start=0&tstart=0) 里提到可能是 Time Machine 带来的影响，所以**禁用了 Time Machine 后进行第二次尝试**，状态栏恢复正确显示。此后开启 Time Machine、重启机器等操作后，错误未复现。

最后想说的是，通过若干次笔记本相关的技术咨询，对苹果公司客服团队中**基础客服的专业性**实在不敢恭维（高级客服接触不多，不敢妄下结论）。他们解决问题的思路是用解决方案套问题，而不是根据问题表现分析原因进而解决，实在不行就建议**重装系统**。撇开解决方案不提，对于每打一次咨询热线都要报一次产品序列号、姓名和手机的做法我也是很不理解，想来对于顺丰客服能够快速调取我历史下单记录询问我是否和之前下单地点相同的做法，我真应该点 32 个赞了。

{% img imgcenter /img/post/2015-4/1.jpg 70% 点32个赞 %}