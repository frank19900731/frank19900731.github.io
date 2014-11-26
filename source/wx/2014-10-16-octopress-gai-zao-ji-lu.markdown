---
layout: wx-default
title: "Octopress 改造记录"
date: 2014-10-16 20:45:34 +0800
comments: false
categories: [网页开发]
tags: [octopress, 中文搜索]
keywords: octopress, 中文搜索, json, 分页, 中文字体
exclude_from_search: true
pc_url: /blog/2014/10/16/octopress-gai-zao-ji-lu/
wx_url: /wx/2014-10-16-octopress-gai-zao-ji-lu.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

Octopress 安装不是难事，后期定制可真是慢功夫。以下分两部分介绍自己的定制过程，前一部分是网上资源，后一部分是自己的一点特色工作。

##网上资源
- [安装方法、lunr.js 搜索、社交分享](http://wangmuy.github.io/blog/2013/09-01-octopress-setup.html)
- [页面主题选择](https://github.com/imathis/octopress/wiki/3rd-Party-Octopress-Themes)
- [中英文加空格](http://xoyo.name/2012/04/auto-spacing-for-octopress/)
- [链接在新标签页中打开](http://www.blogjava.net/lishunli/archive/2013/01/20/394478.html)
- [公益404页面](http://www.qq.com/404/)
- [豆瓣收藏秀](http://www.douban.com/service/badgemakerjs)
- [添加标签云](http://codemacro.com/2012/07/18/add-tag-to-octopress/)
- [插入代码块](http://octopress.org/docs/blogging/code/)
- [启用 MathJax、Kramdown 替换、嵌入多说评论](http://cn.soulmachine.me/blog/20130402/)
- [加入文章版权](http://codemacro.com/2012/07/26/post-footer-plugin-for-octopress/)
- [SEO 优化](http://blog.csdn.net/lcliliil/article/details/13727927)
- [Archive分页、Category分页、Tag分页等插件](https://github.com/frank19900731/frank19900731.github.io/tree/source/plugins)

<!-- excerpt end -->

##特色工作

###支持中文搜索

lunr.js 功能强大，但不支持中文搜索。其实原因在于没有使用中文分词器，只要对生成的 search.json 文件进行分词即可。用 Java 写了一个 [小工具](https://github.com/frank19900731/lunr-Chinese)，主要做法是

- 读取 search.json
- 对中文内容进行分词
- 内容写回到 search.json

用法参见这个 [脚本](https://github.com/frank19900731/frank19900731.github.io/blob/source/lunr-parse.sh)，大家可以右上角搜索一下试试。这种方式的问题在于分词分不出就搜索不出来。比如“蛋疼”，也许就查不到，不过这个小工具支持字典扩展。

###移动版阅读优化
想要推广博客，SEO 是一方面，利用社交媒体的分享能力也很关键，但尴尬的是很多主题对移动端支持不够好，需要重新定制 layout。本博客的移动访问入口 [在此](http://frank19900731.github.io/wx/archives/)，供参考。另，CNZZ 的跟踪实时性更好，我的博客是 Google Analytics 和 CNZZ 并用的。 

###其它

- 使用 [FancyBox](http://fancyapps.com/fancybox/) 优化图片显示
- [改造 img 标签](https://github.com/frank19900731/frank19900731.github.io/blob/source/plugins/image_tag.rb)，使可以使用相对宽度（这样一来PC端和移动端的图片设置就一样了）
- [定制多说评论显示](http://www.shejidaren.com/use-css3-to-create-a-beautiful-comment-ui.html)
- 窗口右侧添加临时目录

{% img imgcenter /img/post/2014-10/10.jpg 80% 临时目录 %}

- 使用 dlmenu 整合访问入口

{% img imgcenter /img/post/2014-10/11.jpg 35% dlmenu %}


