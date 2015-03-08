---
layout: wx-default
title: "每周一软之 FocusMask"
date: 2015-03-08 20:39:54 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, FocusMask, 效率, Coffitivity, Vitamin-R, SelfControl, 屏蔽
exclude_from_search: true
pc_url: /blog/2015/03/08/mei-zhou-yi-ruan-zhi-focusmask/
wx_url: /wx/2015-03-08-mei-zhou-yi-ruan-zhi-focusmask.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[FocusMask](http://tentrip.net/focusmask/) 是一款效率软件，通过在屏幕上隔离出某一区域（其它区域被遮罩），使用户专注于某项工作，比如隔离出编辑环境以专注写作。

FocusMask 虽然只是一招鲜，但个人觉得它提供的**遮罩功能**在日常工作学习中还是很实用的。类似于截图，FocusMask 的遮罩区域可以是框定的，也可以是当前窗口或视图，均可由快捷键触发。

{% img imgcenter-no-shadow /img/post/2015-3/10.png 80% FocusMask 设置 %}

<!-- excerpt end -->

以 Byword 写作为例，选定工作区域，之外的区域被遮罩。可以**调整遮罩层的透明度**，设定**是否允许在工作区域外点击鼠标**。

{% img imgcenter /img/post/2015-3/11.png 90% 区域框定 %}

{% img imgcenter /img/post/2015-3/12.png 90% 运行效果 %}

如此，菜单栏、Docker 以及通知栏均不可见，可以在编辑区域安心工作了……

## 界面设计

界面设计简陋。

## 易用性

易于使用。

## 稳定性

稳定性好。

## 跨平台

无。

## 类似软件

迫使用户专注的一般做法是`屏蔽`。

`视觉屏蔽`，比如 FocusMask，又比如 [Isolator](http://willmore.eu/software/isolator/)，后者将工作区域设置为处于输入焦点的软件，之外的区域同样是遮罩。Isolator 相比 FocusMask 为遮罩提供了更多选项，可以设置颜色，也可以设置滤镜，不过滤镜功能在 OS X 10.8 及以上的系统中已无法使用。

`听觉屏蔽`，推荐 [Coffitivity](https://coffitivity.com/)，播放咖啡馆白噪音，网页版、PC 客户端、移动版均有提供。

比`视觉屏蔽`、`听觉屏蔽`更彻底的是`接触屏蔽`，比如禁止浏览器对某些网址的访问，禁止某时段某些软件的开启。

- 命令行工具
	- [Focus](https://github.com/amoffat/focus)，Python 编写，可屏蔽网址；
	- [Focus](https://github.com/xtrementl/focus)，Python 编写，是一款强大的**任务管理工具**，除了可以屏蔽网址、软件，还可以给任务关联需要开启的软件、需要运行的脚本，也可以记录工作时间，生成简单的报告，称得上是极客工具；
- 图形界面工具
	- [SelfControl](http://selfcontrolapp.com/) ，[开源软件](https://github.com/SelfControlApp/selfcontrol)，可屏蔽网址；
	- [Vitamin-R](http://www.publicspace.net/Vitamin-R/)，大体是一款番茄工作法工具，可记录工作历史并生成图表，可于工作时段屏蔽指定软件，也可播放咖啡馆白噪音；
	- [Focus](https://heyfocus.com/) ，屏蔽指定网址、软件，也可以在命令行操作，曾是 [开源软件](https://github.com/bradjasper/Focus)。

## 闪光点

- 工作区域选择方式多样；
- 可以屏蔽工作区域外的鼠标点击。

## 缺点

遮罩区域样式单一，应允许自定义背景。