---
layout: post
title: "每周一软之 SiteSucker"
date: 2015-02-12 01:38:02 +0800
comments: true
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, SiteSucker, Easy Script Copier, Adobe Acrobat, curl, wget, 网页抓取
pc_url: /blog/2015/02/12/mei-zhou-yi-ruan-zhi-sitesucker/
wx_url: /wx/2015-02-12-mei-zhou-yi-ruan-zhi-sitesucker.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 功能介绍

[SiteSucker](http://www.sitesucker.us/mac/mac.html) 是一款站点下载软件，**复制站点结构**，**下载相关资源文件**，包括 HTML、JS、CSS、图片、视频等，以方便离线查看。

离线查看主要有两种原因，一种是觉得很有价值，比如 API 文档，需要随时查看；另一种就是网页反应太慢，不如一次性下载完成，本地快速查看。基于第二种原因，我用 SiteSucker 对 [OpenProject 站点](https://www.openproject.org/) 做了 [镜像](http://frank19900731.github.io/ebook/openproject/)，看起来不错的样子。

作为一款爬虫软件，SiteSucker 的下载设置和 wget、curl 等命令行工具的参数设置是相似的，它的优势主要体现在：

1. 图形化界面操作，免除参数记忆，配置可以保存再利用；
2. 可以方便地暂停、继续、终止、保存抓取过程；
3. 自带详细的日志输出，为参数调整提供有价值的参考。

图形界面设置的精细程度毕竟不如命令行工具，不过对于常见的教程备份、博客备份等需求，我觉得还是绰绰有余的；而更复杂的任务，可能需要**根据抓取结果迭代调整参数设置**来完成。对于一些 **JS 效果复杂**的网页，可能不仅是 SiteSucker，连 wget 都无法胜任了（因为没法模拟一些人为操作去获取链接）。

<!-- excerpt end -->

接下来，我大概从一个用户需求的角度介绍 SiteSucker 的功能。

- **首先指定种子 url 作为起始，从抓取页面中提取新的 url 作为接下来的抓取目标，可想而知这个过程可能无穷尽的进行下去，如何界定范围？**
	- SiteSucker 对 `Path Constraints` 提供 5 种设置，假设种子 url 是 http://frank19900731.github.io/wx/archives/
		- **None**  无限制 ；
		- **Host**  与种子 url 属同一个（子）域，即 http://frank19900731.github.io/*；
		- **Subdomains**   可以是其它子域（也包括父域），比如 http://hello.github.io/*，http://github.io/*，但不可以是国家代码子域，比如（如果有的话）http://frank19900731.github.io.hk；
		- **Directory**  与种子 url 属于统一路径，即 http://frank19900731.github.io/wx/archives/*；
		- **Paths Settings**  当前 url + 自定义 `Paths Settings`。
-  **接上条，如何自定义** `Paths Settings` **?**
	- `Paths to Include` & `Paths to Exclude`，顾名思义定义希望被抓取/不希望被抓取的模式；
	- 可以采用正则表达式定义；
	- 不论 `Path Constraints` 的选择，`Paths Settings` 始终是生效的，引用 [官方教程](http://ricks-apps.com/osx/sitesucker/archive/2.x/2.6.x/2.6/manuals/en/pgs/Overview.html) 的一段话总结 **SiteSucker 如何判定一个 url 是否该被抓取**：

> If this is the **original URL** (that is, the URL specified in the Web URL text box), then SiteSucker downloads the file.
> 
> Otherwise, if the URL begins with one of the strings (or matches one of the regular expressions) in the **Paths to Exclude** text box, then the file is not downloaded.
> 
> Otherwise, if the URL meets the requirements of the current **Path Constraint** setting, then the file is downloaded.
> 
> Otherwise, if the URL begins with one of the strings (or matches one of the regular expressions) in the **Paths to Include** text box, then SiteSucker downloads the file.
> 
> Otherwise, if the **Include Supporting Files** setting is on and the URL references a non-HTML file type, then SiteSucker downloads the file.
> 
> Otherwise, SiteSucker does not download the file.

- **设置了**  `Path Constraints`、`Paths Settings`，**但还是可能有抓取遗漏，如何查看漏抓 url ？**
	- 勾选 `Export External Links`，下载目录中名为 _ExternalLinks.html 的文件记录了漏抓 url，可以将他们填入 `Paths Settings`，重新抓取。
- **一些网站需要登录才能抓取，在 SiteSucker 中如何处理？**
	- 一种登录方式是**弹出框**，比如路由器管理页面，SiteSucker 会首先查询 Keychain 中的密码记录，如果没有则弹出登陆框让用户输入；
	- 另一种登录方式是**页面登录**，比如人人网。菜单栏点击 Control -> Open Browser 弹出浏览框，在浏览框中登录即可下载，如下图所示。

{% img imgcenter /img/post/2015-2/14.png 70% 登录下载 %}

- **不希望抓取某些类型的文件，比如压缩包、视频等，该如何设置？**
	-  `File Types` 中选择 `Disallow Specified File Types`，然后指定相关文件类型。
- **希望同时抓取多个网页，怎样设置连接数？**
	- Preferences 中可以设置连接数，如下图。

{% img imgcenter /img/post/2015-2/13.png 60% 设置连接数 %}

- **一些站点需要隔段时间抓去一次（比如博客），文件覆盖方式如何设置？**
	- `File Replacement` 提供三种选择
		- **Never**  不覆盖；
		- **Always**  总是覆盖；
		- **With Newer**  保留较新的那个。
- **如何将 HTML 中的文件链接（如 JS、CSS）修改为本地引用？**
	- `File Modification` 设置为 **Localize**
- **如何突破 robots.txt 的限制（不建议）？**
	- 勾选 `Ignore Robot Exclusions`。
- **如何查看抓取日志？**
	- `Logs` 中勾选日志级别，log 文件会生成在已设置的下载文件夹中，有如下格式的记录。分析未抓取链接的原因，进行可能的参数调整。

```bash SiteSucker 日志记录
2/12/15, 11:55:35 AM - MEDIA TYPE: "http://frank19900731.github.io/" has a media type of
	text/html
...
2/12/15, 11:55:35 AM - WARNING: Unable to download "http://blog.sina.com/frank19900731",
	referenced from "http://frank19900731.github.io",
	because its path is not allowed
2/12/15, 11:55:35 AM - WARNING: Unable to download "http://weibo.sina.com/frank19900731",
	referenced from "http://frank19900731.github.io",
	because its path is not allowed
...
2/12/15, 11:55:35 AM - WARNING: May not be able to follow all links on "http://frank19900731.github.io"
	because it uses JavaScript
2/12/15, 11:55:35 AM - HISTORY: Downloaded "http://frank19900731.github.io"
2/12/15, 11:55:35 AM - MEDIA TYPE: "http://frank19900731.github.io/favicon.ico" has a media type of
	image/x-icon
2/12/15, 11:55:36 AM - HISTORY: Downloaded "http://frank19900731.github.io/favicon.ico"
2/12/15, 11:55:36 AM - MEDIA TYPE: "http://frank19900731.github.io/javascripts/modernizr.custom.js" has a media type of
	application/javascript
...
```

其它参数诸如最大扩展层数、默认页面编码、超时设置等都是网页抓取的基本设置，不再讨论。更多功能使用详见 [官方教程](http://ricks-apps.com/osx/sitesucker/archive/2.x/2.6.x/2.6/manuals/en/pgs/Overview.html)。

## 界面设计

简单直接。

{% img imgcenter /img/post/2015-2/15.png 75% SiteSucker 界面 %}

## 易用性

如[功能介绍](#section)中所述，不同站点的提取难度不尽相同，摸索**一套行之有效的参数**的过程可能会比较复杂。

## 稳定性

稳定性好。

##  跨平台

支持 [iOS](http://www.sitesucker.us/ios/ios.html)，网页站点可以打包在 iOS 和 OSX 间传输，对应 File -> (Un)Pack Downloads 的功能。

##  类似软件

- 命令行工具 [curl](http://curl.haxx.se/)、 [wget](https://www.gnu.org/software/wget/)
	- **上手简单**，以 wget 为例，抓取一般站点只需 `wget -r -p -np -k url` 一条命令；
	- 深入研究一下，可以进行更精细的设置，也可二次开发；
	- 也有单条 wget 处理不好的情况，比如一些页面代码中可见 `css?v=x.x.x` 的写法，一般是为了 [清除客户端缓存](http://blog.csdn.net/zanychou/article/details/8813076)，但 wget 会将其直接保存为 `css?v=x.x.x`（于是离线站点无法加载这一文件），可见这个 [提问](http://superuser.com/questions/703435/using-wget-to-download-css-with-get-params)，而不是像 SiteSucker 那样识别并保存为 css 文件。
- Adobe Acrobat
	- Adobe Acrobat 支持**从网页创建 PDF**，也可以抓取站点，如下图。

{% img imgcenter /img/post/2015-2/12.png 80% Adobe Acrobat 抓取页面 %}

- [Easy Script Copier](http://www.sentenzadesktop.com/easy-script-copier/)
	- 抓取单个页面及相应的 JS、CSS，**扒取网页格式**很管用。
- 网页抓取框架，如 [Apache Nutch](http://nutch.apache.org/)、[Scrapy](https://github.com/scrapy/scrapy) 等，功能自然更强大，对普通用户有较高的使用门槛。然而，对于大多数日常需求，还是有种**大炮打蚊子**的赶脚。

##  闪光点

- 可视化定制，功能丰富，特别是支持**登录抓取**。

##  缺点

官网上有介绍 SiteSucker 的 [Limitations](http://www.sitesucker.us/mac/limitations.html)。

总的来说是良心之作，硬要说缺点不如说是建议：如果能有一个插件系统，用户可以开发、分享网页处理过程中某个具体处理环节的代码就更好了。