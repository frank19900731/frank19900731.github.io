---
layout: post
title: "每周一软之 HoudahSpot"
date: 2015-05-17 20:50:29 +0800
comments: true
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, HoudahSpot, 文件搜索, 查询条件, 过滤条件, Spotlight, AppleScript, Calendar, Reminder, Contacts, Finder, Alfred, QuickSilver, EasyFind, DEVONnote, find, Sublime, SideBarEnhancements
pc_url: /blog/2015/05/17/mei-zhou-yi-ruan-zhi-houdahspot/
wx_url: /wx/2015-05-17-mei-zhou-yi-ruan-zhi-houdahspot.html
---

__目录__

* list element with functor item
{:toc}

## 功能介绍

<!-- excerpt start -->

[HoudahSpot](http://www.houdah.com/houdahSpot/) 是一款文件搜索工具，典型的功能强大界面糙，见过的没见过的功能都浓缩在四列之中。**HoudahSpot 的搜索基于 Spotlight**，**搜索速度快**，但也**受限于索引更新**。

{% img imgcenter-no-shadow /img/post/2015-5/8.png 99% HoudahSpot 软件界面 %}

HoudahSpot 提供了丰富的查询条件和过滤功能。常见的查询条件有文本内容、文件类型、文件大小、最近打开时间等，还包括**近 300 种与特定文件类型相关的属性**，比如图片尺寸。这些查询条件各自可以做精细定制，也可以**以逻辑与或非的关系进行组合**。选中搜索结果中的一项，最右侧列显示了该文件的详细信息、预览和文本预览。详细信息的各项可以作为过滤条件对搜索结果进行筛选，预览显示该文件在默认打开程序中的效果，文本显示文件的文本信息（如果有）、**高亮搜索关键词**。

<!-- excerpt end -->

HoudahSpot 除可以指定搜索路径，还可以跳过某些路径，与一般搜索软件不同的是**路径可以是多个文件夹的组合**。

HoudahSpot 允许我们将上述**查询条件保存为片段**（Snippet）**或模板**（Template），便于今后重复使用或微调。

HoudahSpot 提供的高级搜索功能和便捷操作还包括：

- 支持输入如 `kind:wordProcessing date:thisYear` 的搜索语句，详见 [Advanced Features](http://www.houdah.com/houdahSpot/help/4.0/HoudahSpot%20Help%20EN.pdf) 一节；
- 一次查询以**标签页**形式展现，可同时展示多个标签页；
- 支持拖拽文件到查询条件上以修改查询条件与该文件相符；
- 支持**查询结果格式化拷贝**，可直接粘贴到 Excel中；
- 支持添加全局热键唤起搜索框，和 Spotlight 类似；
- 支持 AppleScript 调用，详见 [AppleScript](http://www.houdah.com/houdahSpot/help/4.0/HoudahSpot%20Help%20EN.pdf) 一节；
- 支持 Calendar、Reminder 和 Contacts 搜索。

## 界面设计

简暴。

## 易用性

简单易用。

## 稳定性

稳定性好。

## 跨平台

仅 OS X。

## 类似软件

Spotlight、Finder 提供了 OS X 基本的文件搜索功能，只有文件名、标签等有限的搜索条件。

[Alfred](http://www.alfredapp.com/)、[QuickSilver](http://qsapp.com/) 也支持简单的文件搜索，可以设置待索引的文件夹和目录深度，全盘索引压力较大也没有必要。

[EasyFind](http://www.devontechnologies.com/products/freeware.html) 是一款免费的轻量级搜索工具，在了解 HoudahSpot 以前常用。题外话，写这篇博客的时候才知道它居然和大名鼎鼎的 [DEVONnote](http://www.devontechnologies.com/products/devonnote.html) 出自同一家公司。EasyFind 的好处是不只依赖于索引，所以可以**实时查询**。

当然，说到文件搜索，[find](http://unixhelp.ed.ac.uk/CGI/man-cgi?find) 命令自然不能不提，用法网上有很多，此处不展开。

如果搜索目标是文本文件的内容，那一些编辑器也是可用的，比如 Sublime 的插件 [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) 提供了 Find Advanced 功能。虽然说到底是封装了命令行，但毕竟也省去了记忆参数的麻烦。

## 闪光点

- 标签式管理；
- 查询条件可以保存为模板；
- 搜索可跳过某些路径，路径可指定多个文件夹；
- 查询结果可以格式化拷贝。

## 缺点

功能实在强大，长得丑点也就忍了。
