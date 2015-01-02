---
layout: wx-default
title: "微博卡片 — 微博收藏的可视化"
date: 2014-12-09 15:23:26 +0800
comments: false
categories: [网页开发]
tags: [Python, Mongodb, 数据可视化, 瀑布流布局]
keywords: Python, Mongodb, 数据可视化, 瀑布流布局
exclude_from_search: true
pc_url: /blog/2014/12/09/wei-bo-qia-pian-wei-bo-shou-cang-de-ke-shi-hua/
wx_url: /wx/2014-12-09-wei-bo-qia-pian-wei-bo-shou-cang-de-ke-shi-hua.html
---

<!-- excerpt start -->

平时自己会有一些新浪微博的收藏，主要是跟自己专业、兴趣相关的资讯、资料，随着积累的增多，如何有效回顾这些收藏成为了一个问题。

使用新浪微博自带的收藏页面，感觉翻页浏览不便；后来会在收藏的同时，把微博内容、图片分门别类拷贝到笔记中，但又不便于可视化。于是萌生了自己做一个微博可视化页面的想法，采用较为流行的瀑布流布局，每一条微博以卡片的形式展示。给出 [项目地址](https://github.com/frank19900731/weibocard)  和 [Demo](http://frank19900731.github.io/weibocard-demo/)。

{% img imgcenter /img/post/2014-12/25.png 80% 微博卡片 Demo %}

项目使用新浪微博 Python SDK 抓取已收藏的微博，mongodb 做存储，根据查询条件生成 json 文件供前端可视化，前端瀑布流是从 [这门课](http://www.imooc.com/learn/101) 中学到的。多说一句，慕课网里关于前端的教学内容非常丰富，很适合我这种半瓶醋选手……

我只简单地实现了时间区间的提取，不过有了微博数据和可视化骨架在，定制精细化的整理、阅读方式应该不难。

<!-- excerpt end -->