---
layout: wx-default
title: "每周一软之 Blocs"
date: 2015-01-31 16:19:58 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, 网页编程, 拖拽式, Bootstrap, Webstrom, Sublime, Xpressive, Macaw, Google Web Desinger, Adobe Muse, Cactus, Blogo 
exclude_from_search: true
pc_url: /blog/2015/01/31/mei-zhou-yi-ruan-zhi-blocs/
wx_url:  /wx/2015-01-31-mei-zhou-yi-ruan-zhi-blocs.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[Blocs](http://blocsapp.com/) 是一款拖拽式网页生成器，页面布局基于 Bootstrap，主要帮助用户生成 [此类样式](https://www.meteor.com/) 的页面（Blocs [官方主页](http://blocsapp.com/) 也是这种风格）。这款工具**用户友好度很高**，**不会网页编程**或者**对 Bootstrap 不熟悉**人可以用它快速定制特定风格的主页（可用作产品介绍、个人主页或博客模板），之后可在导出的网页代码基础上进行二次开发，实现**布局调整**或**动态效果**。

软件使用的大致思路是

- 创建一个 **Web Page**，用户可以在上面划分不同的 **Bloc**，页首导航（一个）、中部内容（多个）、页尾信息（多个），分别有**布局模板**供选择；

{% img imgcenter /img/post/2015-1/20.png 90% 添加 Bloc %}

<!-- excerpt end -->

- 在每个 **Bloc** 中可以添加 **Brics**，也就是文本、图片、按钮、链接等内容；

{% img imgcenter /img/post/2015-1/21.png 90% 添加 Bric %}

- 对于 **Page**、**Bloc**、**Brics**，都可以进一步设置属性以调整显示效果。

{% img imgcenter /img/post/2015-1/22.png 90% Image 控件的属性 %}

页面设置完成，可导出包含 HTML、图片、CSS、Javascript 等文件在内的文件夹，上传网页服务器供访问。

在此附上我用 Blocs 制作的 [Demo](/demo/poem/index.html)，配图、配色比较马虎……

## 界面设计

美观精致。

{% img imgcenter /img/post/2015-1/19.png 90% 软件界面 %}

## 易用性

简单易用。

## 稳定性

未发现崩溃。

##  跨平台

无。

##  类似软件

程序员可能会选用 [WebStorm](http://www.jetbrains.com/webstorm/)、[Sublime](http://www.sublimetext.com/) 等软件作为自己网页编程的 IDE，而小白用户则需要借助类似 Blocs 的软件，从而实现少写代码、甚至不写代码制作网页的目的。这些快捷工具在应付简单任务的时候可能比 Webstorm、Sublime 等更高效，所以我自己也会用到。它们大致可以分为四类，✔︎ **表示推荐**。

- 编码式
	-  ✔︎ [Xpressive](http://xpressive.org/)，定制细致，适合网页开发初学者；
	- [Coda](http://www.panic.com/coda/)，较简陋；
- 拖拽式
	-  ✔︎ [Macaw](http://www.macaw.co/)，适合设计师使用；
	-  ✔︎ [Google Web Designer](http://www.google.com/webdesigner/)，翻墙可用，有详细的[帮助文档](https://support.google.com/webdesigner/?hl=zh-Hans#topic=3178270)；
	- [Sparkle](http://sparkle.cx/)，比 Macaw 功能简单，也不错；
	- [Sandvox](http://www.karelia.com/products/sandvox/)，样式老套；
	- [Freeway Pro](http://www.softpress.com/freeway-pro/)，样式老套；
- 混合式
	-  ✔︎ [Adobe Muse](http://muse.adobe.com/)，教程多多，功能强大，**非常推荐**；
	- [Rapid Weaver](http://realmacsoftware.com/rapidweaver)，功能普通；
	- [Lucid](http://www.theescapers.com/lucid/index.html)，非网页设计，官方介绍相当于一个 JavaScript Lego，可视化添加 JS 动态效果，比如 json 文件的异步加载、处理；
	- [Flux](http://www.theescapers.com/flux/index.html)，和 Lucid 属于同一公司，样式老套；
- 模板管理式
	-  ✔︎ [Cactus](http://cactusformac.com/)，使用 Django 模板生成博客、相册、个人信息三种静态网站，样式简单，但**清新耐看**；
	-  ✔︎ [Blogo](http://www.getblogo.com/)，WordPress 站点管理，PC 端查看、编写、发布；
	-  [Desktop Server](http://serverpress.com/products/desktopserver/)，WordPress 部署与管理，小白专属。

##  闪光点

- 较短时间的学习、操作就可以生成**美观**、**实用**的网页，这是它相比类似软件最大的优势。

##  缺点

- 网页元素的属性定制还不够丰富（比如网页标题都无处修改），希望**允许添加 CSS 代码**（像 Xpressive 那样）；
- 用户无法添加模板，只能使用软件自带的，想修改布局，只能去编辑导出的网页；
- 拖拽式编辑器，没有代码查看、编辑的功能，至少可以**增加一个使用其它编辑器打开的按键**，方便二次开发。