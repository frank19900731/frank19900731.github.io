---
layout: post
title: "每周一软之 Today Scripts"
date: 2015-05-24 20:45:37 +0800
comments: true
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Today Scripts, GeekTool, MonthlyCal, Git, iStat Mini, Yosemite, Stat, 通知中心, Blotter, TextBar, Shellwrangler, Shellwatcher, quickcommand
pc_url: /blog/2015/05/24/mei-zhou-yi-ruan-zhi-today-scripts/
wx_url: /wx/2015-05-24-mei-zhou-yi-ruan-zhi-today-scripts.html
---

__目录__

* list element with functor item
{:toc}

## 功能介绍

<!-- excerpt start -->

[Today Scripts](https://github.com/SamRothCA/Today-Scripts) 是一款开源的通知栏插件，顾名思义是可以编写脚本并将结果显示于通知栏的 Today 面板。功能用法上它和此前我们介绍的 [GeekTool](http://http://frank19900731.github.io/blog/2015/03/30/mei-zhou-yi-ruan-zhi-geektool/) 类似，只不过前者占据桌面，而后者顺应 Yosemite 的潮流以通知栏插件形式出现。

从自身使用习惯的来看，通知中心出场率很低，偶尔访问一般是为了叉掉已有通知。我的第三方插件主要来自社交、效率、文摘类软件，它们的作用是提醒、展示，也是快速访问入口，但我第一想到的还是通过 Alfred 这种快速启动工具打开软件查看。个人比较喜欢的两款第三方插件是 [MonthlyCal](http://doublerew.net/en/app/os-x/monthlycal/) 和 [iStat Mini](http://bjango.com/mac/istatmini/)，前者是一款待办事项日历，数据来自 Calendar，后者是系统状态监控。还有一款名为 [Stat](https://itunes.apple.com/us/app/stat/id931063335?mt=12) 的软件，可以指定 Git 管理的文件夹，在 Finder 中显示文件状态（新增、修改等），并在通知栏里显示状态变化文件的数量信息，不过当前软件版本对新建文件数的统计总是 0……

{% img imgcenter /img/post/2015-5/11.png 50% iStat Mini %}

{% img imgcenter /img/post/2015-5/10.png 50% MonthlyCal %}

{% img imgcenter /img/post/2015-5/12.png 50% Stat %}

<!-- excerpt end -->

Today Scripts 的用法很简单，启动一次软件，就能够在通知栏中插件列表中找到它，将其添加到 Today 面板。系统更新后可能发现找不到该插件，启动一次软件可再次添加进插件列表。点击右上角 info 标记可以添加、删除脚本，点击脚本旁的齿轮标记可以修改脚本设置。

{% img imgcenter /img/post/2015-5/13.png 50% 新建脚本 %}

脚本设置有三项：

- 标签，插件会在脚本输出结果的上方显示该标签，**点击标签即可手动触发脚本的执行**；
- 执行环境，比如 `/bin/bash`、`/usr/bin/python`；
- 脚本代码。

当然，也可以**在执行环境中填入可执行文件路径**，而将脚本代码留空。

具体设置方法与代码示例可见 [官方 wiki](https://github.com/SamRothCA/Today-Scripts/wiki) 或其它网络资源，比如 [Today Scripts：打造个性化 Yosemite 通知栏插件](http://www.waerfa.com/today-scripts-for-yosemite-today-view)、[用终端命令定制你的 OS X 通知中心：Today Scripts 体验详解](http://sspai.com/27662)（系统信息里的代码似乎有问题，可以将两处 `awk -F''` 修改为 `awk -F'<configCode>'` 和 `awk -F'</configCode>'`）。

常见的脚本无外乎获取日期、天气、股票、系统状态（CPU、内存、温度、风扇、电量等）等信息，虽然可以暂时带来某种心理愉悦，但**通知栏好不容易打开了，就让我看这个**？对于程序员来说，将 Today Scripts 用作工作面板（GeekTool 当然也能做到，只是 [Blotter](http://frank19900731.github.io/blog/2015/02/08/mei-zhou-yi-ruan-zhi-blotter/) 已经占据了我整个桌面……）才是正道，可以是 Git 信息，可以是后台程序的运行进度，可以是数据库信息，也可以是网站监控…… Today Scripts 相比终端减少重复劳动、节省时间，而这才是我们打开通知中心的动力。

此外，不同于绝大多数通知栏插件，Today Scripts 的**显示结果支持复制、拖拽**。

## 界面设计

{% img imgcenter /img/post/2015-5/9.png 50% Today Scripts %}

## 易用性

定制要求不高则简单，进阶一点需要掌握某种脚本语言（AppleScript、Shell、Python、Ruby 等），再进一步需要熟悉 Today Scripts 的源代码，诸如修改字体字号、设置刷新时间等功能应该就可以实现吧。

## 稳定性

稳定性好，不过脚本多了感觉每个都会很慢。

## 跨平台

仅 OS X。

## 类似软件

放眼 OS X 界面，允许我们编写脚本显示自定制信息的也就是桌面、菜单栏、通知栏再加上仪表板（Dashboard）了。

桌面显示的代表软件自然是 [GeekTool](http://projects.tynsoe.org/en/geektool/)，空间够大，若能细心设计，美观程度也是妥妥儿的。

菜单栏寸土寸金，限于尺寸无法完整显示长文本，代表性的软件有 [TextBar](http://www.richsomerfield.com/apps/)、[Shellwrangler](http://www.shellwrangler.com/?inclick)，前者在功能、可定制性、美观程度上远优于免费的后者，可参见 [脚本实例](https://github.com/richie5um/TextBar-Recipes)。

通知栏的尺寸特点能够让信息完整、紧凑的显示出来，双指滑动调用也比较流畅，不过尚未发现与 Today Scripts 类似的软件。

Dashboard 空间虽大，但估计不太有用户会经常光顾这里。Dashboard 插件少，开发也不活跃，目前仅能找到 [Shellwatcher](http://www.apple.com/downloads/dashboard/networking_security/shellwatcher.html) 可以执行脚本并显示结果，效果很土的说，还有一款名为 Quickcommand 的插件已经下架了。

## 闪光点

- 开源；
- 可定制性强，功能实用。

## 缺点

- 插件本身的定制成本高，需要学习源代码。
