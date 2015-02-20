---
layout: post
title: "每周一软之 VideoGIF"
date: 2015-02-20 19:46:58 +0800
comments: true
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, gif, VideoGIF, ffmpeg, PicGIF, GIF Brewery, Photoshop, gifsicle, LICEcap
pc_url: /blog/2015/02/20/mei-zhou-yi-ruan-zhi-videogif/
wx_url: /wx/2015-02-20-mei-zhou-yi-ruan-zhi-videogif.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[VideoGIF](http://www.pearlmountainsoft.com/videogif/) 是一款截取视频内容生成 GIF (Graphics Interchange Format) 格式图片的工具。

VideoGIF 支持

- 摄像头视频采集；
- 拖拽选择待转换内容的起止时间点；
- 区域裁剪，自定义图像尺寸；
- **添加文字、图像元素**，并设定出现的起止时间；
- 调整图片色彩指标，包括亮度、对比度等；
- 导出 GIF 时设定帧率/帧数+延迟，可自动优化文件体积。

<!-- excerpt end -->

**功能界面**：

{% img imgcenter /img/post/2015-2/16.png 90% 功能界面 %}

**导出界面**：

{% img imgcenter /img/post/2015-2/17.png 90% 导出界面 %}

VideoGIF 可以帮助我们方便地从影视作品中导出**精（dou）彩（bi）**片段，或从录屏中导出一段演示。

{% img imgcenter /img/post/2015-2/2.gif 80% 逗比片段 %}

除视频外，我们可能还需要将多幅图片拼成 GIF，VideoGIF 的制作方相应提供了 [PicGIF](http://www.pearlmountainsoft.com/picgif/)，会在 [类似软件](#section-5) 中提到。

## 界面设计

简洁美观。

{% img imgcenter /img/post/2015-2/18.png 80% VideoGIF 界面 %}

## 易用性

使用方便，会拖拽起止范围、会设置总帧数/帧率即可。

## 稳定性

稳定性好。

##  跨平台

无。

##  类似软件

- [PicGIF](http://www.pearlmountainsoft.com/picgif/)，根据多幅图片生成 GIF，基本功能如裁剪、调色等同 VideoGIF，也**支持视频输入**，会首先根据用户的起止时间和帧率/帧数设置从视频中提取相应数量的图片，之后处理同多幅图片；
- [GIF Brewery](http://www.helloresolven.com/portfolio/gifbrewery/)，除界面（略丑），功能与 VideoGIF 完全一致……
- [LICEcap](http://www.cockos.com/licecap/)，**录屏 + 转 GIF**，损失一些定制灵活性，但操作快捷；
- **Photoshop** 可将多幅图片转 GIF，网上有相关 [教程](http://jingyan.baidu.com/article/9158e0006047daa2541228f3.html)；
- 威锋网上有一篇 [Mac 下 GIF 制作软件](http://bbs.feng.com/read-htm-tid-6980293.html) 的讨论，其中的软件在功能、界面上都不超过 VideoGIF、PicGIF；
- **命令行工具**，[ffmpeg](https://www.ffmpeg.org/)（根据视频生成 GIF 动画）、[gifsicle](http://www.lcdf.org/~eddietwo/gifsicle/)（GIF 的创建、拆解、编辑、优化等）
  - 一个使用案例可见 [OS X 屏幕录制视频转 GIF 动画](http://www.ideawu.net/blog/archives/856.html)。

##  闪光点

- 功能完善，操作简便。

##  缺点

- 不明白为什么要和 PicGIF 分为两个软件，就为了多挣一分钱么……