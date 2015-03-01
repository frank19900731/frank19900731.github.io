---
layout: wx-default
title: "每周一软之 Smart Scroll"
date: 2015-03-01 12:32:51 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Smart Scroll, Jitouch, Better Touch Tool, 鼠标, 触摸板, Magic  Mouse
exclude_from_search: true
pc_url: /blog/2015/03/01/mei-zhou-yi-ruan-zhi-smart-scroll/
wx_url: /wx/2015-03-01-mei-zhou-yi-ruan-zhi-smart-scroll.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[Smart Scroll](http://www.marcmoini.com/sx_en.html) 一款**鼠标/触摸板辅助软件**，为滚轮或面板的滚动操作添加智能因素，显示于 System Preferences 面板中。

Smart Scroll 主要有六大功能，与其界面设计相对应。

- Scroll Wheel（鼠标设备） 设置
	- 调节滚动的速度、方向（Reverse）、距离（Range for a single tick）与惯性（Inertia+）；
	- 测试表明，**在不同速度设置下**，**均可以实现平滑滚动**；
	- Multi-Touch（触摸设备）中的功能设置同 Scroll Wheel。

{% img imgcenter-no-shadow /img/post/2015-3/1.png 80% Scroll Wheel+ %}

<!-- excerpt end -->

- Hover Scroll
	- 可以设置窗口上下各一定区域，使得鼠标指针在该区域悬停时，窗口自动向上或向下滚动，速度可调整；
	- 鼠标指针越接近窗口上/下部，窗口向上/下滚动的速度越快（**可能引发视觉抖动**）；
	- 测试表明，鼠标指针需要**以慢速进入设定区域**，过快则无法触发 Hover Scroll。

{% img imgcenter-no-shadow /img/post/2015-3/3.png 80% Hover Scroll %}

- Auto Scroll
	- 基于 Hover Scroll，以快捷键触发，鼠标指针被自动移到窗口下部，触发向下滚动操作。

{% img imgcenter-no-shadow /img/post/2015-3/4.png 80% Auto Scroll %}

- Grab Scroll
	- 仅支持鼠标，拖拽页面滚动，类似于 **PDF 阅读器中的手形图标拖动效果**；
	- 同样可以调节速度、方向与惯性；
	- Grab Scroll 可以采用快捷键+鼠标键的方式触发，以下图 `Option + Command + Secondary Button` 这一组合为例，需要先按下 Option 并**保持**，然后点击 Command（**需抬起**），之后按下鼠标右键方可拖动……

{% img imgcenter-no-shadow /img/post/2015-3/5.png 80% Grab Scroll %}

- Scroll Keys
	- 滚动的快捷键操作，上下左右类似于箭头方向键；
	- 测试表明，快捷键滚动比箭头方向键滚动**步长更细**，**也更平滑**；

{% img imgcenter-no-shadow /img/post/2015-3/6.png 80% Scroll Keys %}

- Vector Scroll
	- 仅支持鼠标，鼠标键的点击释放构成向量，向量方向确定滚动方向，向量的模确定滚动速度；
	- 如果设置 Secondary Button 触发，则右键菜单无法弹出，只能通过 Ctrl + Primary Button（鼠标左键） 查看。

{% img imgcenter-no-shadow /img/post/2015-3/7.png 80% Vector Scroll %}

## 界面设计

界面设计较美观。

## 易用性

用法简单，只是初始需要设置适合自己使用习惯的参数。

## 稳定性

稳定性好。

##  跨平台

无。

##  类似软件

作为鼠标/触摸板辅助软件中的一款，Smart Scroll 专注于**滚动的定制优化**，而实际上这些设备有待发掘的远不止于此，以下两款软件可以提供更加丰富实用的定制功能。

- [Jitouch](http://www.jitouch.com/) 也是安装后位于 System Preferences 中的一款软件，支持鼠标/触摸板手势、字符笔画识别，并可**关联动作/快捷键**。

{% img imgcenter-no-shadow /img/post/2015-3/8.png 80% Jitouch %}

- [Better Touch Tool](http://www.boastr.de/) 是一款功能更加强大的辅助工具，几乎涵盖了 Smart Scroll、Jitouch 的所有功能，可定制项很多，有一种**视觉压迫感**，一看就是给 Geek 用的……
	- 支持鼠标、触摸板、键盘快捷键、Apple Remote、Better Touch Tool 移动端（iOS）等的辅助功能定制；
	- 手势、动作远较 Jitouch 丰富，也正因为多，**一些手势的识别准确性会降低**，**定制项目多也更容易引发误操作**。

{% img imgcenter-no-shadow /img/post/2015-3/9.png 80% Better Touch Tool %}

##  闪光点

- 滚动速度可调，且效果平滑，Hover Scroll 与 Scroll Keys 也能做到平滑滚动。

##  缺点

- Grab Scroll、Vector Scroll 只能配合鼠标使用，对于只用触摸板的用户就鸡肋了，但这些功能完全可以配合触摸板使用（严格说 Vector Scroll 已经可以配合触摸板使用，但只能使用 Secondary Button 触发，而之前我们提到这会影响右键菜单的查看）；
- Hover Scroll 速度快时有轻微抖动（当然，**也很可能是我显卡差**）。