---
layout: wx-default
title: "每周一软之 XnConvert"
date: 2015-01-11 22:32:29 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords:  mac, 每周一软, XnConvert, 图片处理
exclude_from_search: true
pc_url: /blog/2015/01/11/mei-zhou-yi-ruan-zhi-xnconvert/
wx_url: /wx/2015-01-11-mei-zhou-yi-ruan-zhi-xnconvert.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[XnConvert](http://www.xnview.com/en/xnconvert/) 是一个跨平台的图片批处理工具，提供 resize、crop、rotate、高斯模糊等在内的 80 多种图像操作，支持 [500 余种图像格式](http://www.xnview.com/en/xnconvert/#formats)的读入、70 余种图像格式生成，可以定制输出图片的命名格式。XnConvert 比较适合照片整理（重命名、加水印等）、网页图片素材准备（图片放缩、加图像掩模、模糊等）等批处理任务。

XnConvert 以**工作流**的方式定制图片的处理过程，使用起来非常简单。

首先确定选择输入图片或图片文件夹。

{% img imgcenter /img/post/2015-1/5.png 80% 输入图片 %}

然后在图片上定义操作行为和参数。

{% img imgcenter /img/post/2015-1/6.png 80% 操作行为和参数 %}

上图顺序定义了三种行为，**核大小为 13*13 的高斯模糊**，**垂直翻转**，**长宽减半**。Resize 中还有一些参数可调，比如填充模式（fit 或 fill 或 longest side 或 shortest side 等）和降采样方法（Bilinear、BSpline、Lanczos 等）。

最后定义输出文件夹、输出文件格式和命名方式。

{% img imgcenter /img/post/2015-1/7.png 80% 输出文件夹和命名方式 %}

除输出到文件夹，还可以传给 Email 或 Zip 等。

命名方式支持格式化表达，比如  `{Filename}_{Current Date [m_d_Y]}`。

<!-- excerpt end -->

XnConvert 的工作流有两种保存方式，一种是后缀名为 xbs 的 XML 格式文件，可以被 XnConvert 重新载入。

```xml xbs 文件示例
<?xml version="1.0" encoding="UTF-8"?><XnView_script version="1.0" name="a">
    <Gaussian_blur size="13"/>
    <Mirror method="0"/>
    <Resize mode="4" width="50" height="50" unit="1" ratio="true" orientation="false" enlarge="0" resample="7" gamma_correct="false"/>
    <Output folder="/Users/frank/Desktop/" filename="modified" case="0" format="JPEG">
        <Options overwrite="1" orgDate="false" keepMeta="true" keepICC="false" keepFolder="false" delOrg="false" multipage="false" allPages="false" openExplorer="false" openBrowser="false" clearItems="false"/>
        <JPEG quality="80" progressive="false" optimizeHuffman="false" rebuildThumb="true" orgQuality="false" DCTMethod="0" subSampling="0" smoothFactor="0"/>
    </Output>
</XnView_script>
```

另一种是导出为命令行，可以用 [nconvert](http://www.xnview.com/en/nconvert/) 执行。nconvert 是免费的命令行工具，XnConvert 只是它的可视化壳子。`nconvert -help` 显示支持的 80 种操作和众多图片文件格式。

以之前定义的工作流为例，导出如下命令行。

```bash nconvert 命令示例
nconvert -gauss 13 -yflip -ratio -rtype lanczos -resize 50% 50%  
```

## 界面设计

实用无美感。

## 易用性

简单直接，非常易用。

## 稳定性

稳定，不会因文件数量大而崩溃。

## 跨平台

Windows、Mac、Linux 通用。

## 类似软件

`Photoshop`、`Acorn` 等图片处理软件功能强大，门槛相应也高，消耗资源多。`Photoshop` 支持**动作录制批处理**。

`Image Smith` 也是一款比较全能的图片批处理软件，但经验是使用中容易崩溃；`PhotoResize Pro` 功能较少，主要是图片大小调整和重命名。 

Matlab、Python、R 等编程语言都能找到自己的图片处理工具箱（自带或者开源的），有一定的学习成本，需要可视化界面的话得自己编写。

`Automator` 支持一些图片操作，可以编写工作流。

Mac 自带 `sips` 命令支持一些图片操作，其它图片处理相关的命令行或包应该还有不少，就不继续查找列举了。

## 闪光点

- 提供命令行工具，方便嵌入到程序中使用；
- 工作流操作模式，可保存重用。

## 缺点

- 软件界面简陋；
- 命令行工具不开源。