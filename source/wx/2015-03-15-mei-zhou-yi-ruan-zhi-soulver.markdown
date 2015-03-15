---
layout: wx-default
title: "每周一软之 Soulver"
date: 2015-03-15 18:21:49 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Soulver, 汇率, 股价, 单位换算, Numeric, Addism, Numi, Rstudio Server, knitr, iPython notebook
exclude_from_search: true
pc_url: /blog/2015/03/15/mei-zhou-yi-ruan-zhi-soulver/
wx_url: /wx/2015-03-15-mei-zhou-yi-ruan-zhi-soulver.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[Soulver](http://www.acqualia.com/soulver/) 是一款智能计算器，允许**计算公式与文档混排**，提供汇率与股价的查询计算、变量定义、结果引用、版本保存、简单统计等功能。

下面先以软件自带样例文件具体介绍其功能。

Soulver 使用文档保存计算过程，文档格式为 XML，可导出 PDF 文件。

这幅图显示了文档块定义（比如 Simple Math 粗体）、简单计算、以语义表示的计算、注释以及汇率转换、单位转换的用法。

{% img imgcenter-no-shadow /img/post/2015-3/13.png 100% Soulver 使用样例一 %}

<!-- excerpt end -->

这幅图显示了结果引用、变量、股票价格、函数的用法。

{% img imgcenter-no-shadow /img/post/2015-3/14.png 100% Soulver 使用样例二 %}

结果引用、汇率、股票价格都是**依赖某一个数值**，当依赖值改变，使用此依赖值的计算结果也会随之变化。我们需要做的仅是列写公式，更新依赖值。

{% img imgcenter-no-shadow /img/post/2015-3/15.png 90% 汇率值、股票价格更新 %}

上图 Variables 窗格中可以定义**全局变量**，对每个计算文档生效。

可以在设置中修改支持中文输入，如下图所示。计算时可以切换弧度制、角度制，设置小数点保留精度。点击 Answer Palette 可以看到结果的其它表示形式，角度、分数、十进制、二进制、十六进制等。

{% img imgcenter-no-shadow /img/post/2015-3/16.png 100%  Soulver 使用样例三 %}

Soulver 所支持的函数列表、逻辑计算、单位换算表等详见 Reference。

## 界面设计

界面设计美观，自定义方便。

## 易用性

容易使用，参考 Reference 即可。

## 稳定性

稳定性好，有一个瑕疵见 [缺点](#section-8) 第三条。

## 跨平台

提供 iOS 版本。

## 类似软件

### 普通计算器

- Mac 自带计算器，可放置于边栏；
	
{% img imgcenter /img/post/2015-3/19.png 40% Mac 自带计算器 %}

- [Numeric](https://itunes.apple.com/cn/app/numeric/id564960788?mt=12) 特点是将输入区域映射到触摸板上，不必移动鼠标点击；

- [Addism](https://itunes.apple.com/us/app/addism-the-calculator/id943947757?mt=12) 可进行简单的科学计算，可以保存、分享结果；

{% img imgcenter-no-shadow /img/post/2015-3/18.png 80%  Addism 界面 %}

- [Numi](http://getnumi.info/) 运行于菜单栏，和 Soulver 类似，也支持以语义定义简单计算。

{% img imgcenter-no-shadow /img/post/2015-3/17.png 70%  Numi 界面 %}

### 交互式编程环境

对于理工科同学来说，以上计算功能还是不够的，一般会采用专门软件或编程语言，比如 Matlab、Mathematica、R、C、Python 等。**联系 Soulver 文档与计算混排的特点**，在相似软件中我推荐 [knitr](http://yihui.name/knitr/) 和 [iPython notebook](http://ipython.org/notebook.html)，可分别配合 R 与 Python 使用，**用于生成图文数据详实的报告**。此外，RStudio 提供了 [RStudio Server](http://www.rstudio.com/products/rstudio/download-server/)，可以架设在个人服务器上提供网络访问，应付普通计算任务绰绰有余。

## 闪光点

- 计算公式与文档混排，方便阅读、理解；
- 单位转换、汇率、股价等功能实用。

## 缺点

- 函数库仍需扩展，min、max 函数竟都没有；
- 无法进行条件判断，功能受限；
- 文档中有大数字计算时，输入会异常卡顿，推测软件隔段时间计算文档每一行的结果，即便该行及该行的依赖未改变，应当予以优化。