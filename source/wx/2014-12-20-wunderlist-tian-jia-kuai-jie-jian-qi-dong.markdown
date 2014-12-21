---
layout: wx-default
title: "Wunderlist 添加快捷键启动"
date: 2014-12-20 19:36:23 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件]
keywords: Wunderlist, Automator, Service, Mac 软件
exclude_from_search: true
pc_url: /blog/2014/12/20/wunderlist-tian-jia-kuai-jie-jian-qi-dong/
wx_url: /wx/2014-12-20-wunderlist-tian-jia-kuai-jie-jian-qi-dong.html
---

<!-- excerpt start -->
Wunderlist 可以设置全局快捷键快速添加新条目。按下快捷键，Wunderlist 软件启动，定位到 Index 组、 Add an item 输入框。

{% img imgcenter /img/post/2014-12/33.png 90%  Wunderlist 添加新条目 %}

这个功能其实一直被我用于 Wunderlist 的快速启动（在Dock里隐藏了…）。然而在 Wunderlist 的最近一次更新中，**全局添加新条目不再能进入软件主体界面，而代之以快速输入框**。

{% img imgcenter /img/post/2014-12/32.png 60%  Wunderlist 添加新条目 %}

考虑到依靠快捷键进入 Wunderlist 主界面的习惯已经根深蒂固，而 Wunderlist 本身又不再提供类似的功能，只能自己想办法。

一种方式是借助 Alfred/Quicksilver 进行快速搜索，不过我还是懒得打字。然后想到了在 `System Preferences -> Keyboard -> Shortcuts` 里添加快捷键，不过支持用户自定义的只能是该程序菜单中已有的命令（但没有对应快捷键），而且还不是全局的。

最后这个小任务是通过使用 Automator 定制了一个 Service 并关联快捷键完成的。

<!-- excerpt end -->

Automator 是 Mac 自带软件中的一个神器，顾名思义是能够将我们从繁重的体力活里解脱出来的，让电脑自动执行既定任务。此前用它做过文件重命名、图片尺寸批量调整的任务。

Automator 可以创制不同种类的文件，但本质上都是工作流，遵循 `Input -> Step-1 -> Step-2 …` 的处理模式。其中，Application 除没有软件界面，与真实软件无二，可以显示于 Launchpad 和 Dock 中，而 Service 是这次任务所需要的。

{% img imgcenter /img/post/2014-12/34.png 60%  Automator 创建新文件 %}

Automator 相当于一个拖拽式应用开发 IDE。在搜索框中输入 launch，将 Launch Application 拖拽到右边。Service 的输入选择 no input，而 Lanuch Application 自然选择 Wunderlist。保存文件，只需要指定文件名，因为保存目录默认是 `~/Library/Services`。

{% img imgcenter /img/post/2014-12/35.png 90%  Automator Service %}

此时在应用菜单的 Services 中就可以看到刚才创建的 Service（launch wunderlist），点击即可打开 Wunderlist 主界面。然而，并不是任意程序都有 Services 这一菜单项的，目前只发现了**爱奇艺、搜狐影音客户端这两朵奇葩**。

{% img imgcenter /img/post/2014-12/36.png 70%  Service %}

接下来的任务就是给这个 Service 关联快捷键，在 `System Preferences -> Keyboard -> Shortcuts -> Services` 中找到 General，其中就有我们刚才创建的 Service，设置快捷键即可。

{% img imgcenter /img/post/2014-12/37.png 70%  为 Service 添加快捷键 %}

如法炮制，我们可以给 Hide All Applications 设置快捷键，相当于显示桌面的功能。然而在使用过程中发现，**唯独在按下快捷键时处于 Focus 状态的窗口无法最小化，所以只能再跟着按一次 Command + M**…

Automator 给我们封装了很多模块功能，但不可能覆盖到所有的用户需求，所以支持用户脚本，脚本种类可以是 Apple Script、JavaScript、Shell Script（**包括 Perl、Python、Ruby**）。

上面我们用到的启动应用程序的模块，相当于运行如下 Apple Script

```applescript 启动应用程序
tell application "Wunderlist" to launch
```

还有很多日常工作可以通过使用 Automator 来简化，比如

- 文件批量重命名；
- 图片批量尺寸调整，生成缩略图；
- [开机自动 SSH 登录](http://luisroman.nl/post/40857635243/automating-ssh-logins-with-autossh-automator-and)；
- 快速打开一系列软件、网页；
- 一键退出所有程序；
- 根据选择的文本创建文件；
- ……

当然，更多复杂功能的实现还有赖于对 Apple Script 等脚本的掌握。

【阅读推荐】

- [Automator Help](https://help.apple.com/automator/mac/10.10/index.html?localePath=en.lproj%23/aut6e8156d85)
- [10 Awesome Uses for Automator Explained](http://computers.tutsplus.com/tutorials/10-awesome-uses-for-automator-explained--mac-15845)
- [15 Automator and AppleScripts You Can’t Live Without](http://www.maclife.com/article/features/15_automator_and_applescripts_you_can%E2%80%99t_live_without)
- [Automating SSH logins with Autossh, Automator and Applescript](http://luisroman.nl/post/40857635243/automating-ssh-logins-with-autossh-automator-and)
- [Automator Actions & Workflows for Downloads](http://mac.softpedia.com/get/Automator-Actions---Workflows/)
- [【Automator】炮筒机器人流程实例](http://bbs.feng.com/read-htm-tid-8045539.html)，内附 Apple Script 教程
- [8 great Automator downloads](http://www.macworld.com/article/1133821/automatordownloads.html)