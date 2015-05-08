---
layout: post
title: "每周一软之 Sublime"
date: 2015-05-03 11:50:44 +0800
comments: true
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Sublime, 插件, Emacs, Vim, Eclipse, Jet Brains, IntelliJ IDEA, RubyMine, Python, josn, 多点编辑, Markdown, SSHFS, PlainTasks, orgmode, CodeRunner, Foobar, CodePad, TextMate, Visual Studio Code, Ulysses, Storyist
pc_url: /blog/2015/05/08/mei-zhou-yi-ruan-zhi-sublime/
wx_url: /wx/2015-05-08-mei-zhou-yi-ruan-zhi-sublime.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

论文肿算写完鸟，会一点点把落下的每周一软补回来。

## 功能介绍

每周一软不打算介绍开发工具，只是觉得 Sublime 对普通人的工作学习也有很大帮助，所以将它选入主题。

[Sublime Text](http://www.sublimetext.com/) 是一款轻量级的编辑器，最初多用于前端开发（现在也是这样吧），堪比瑞士军刀，现在也逐渐受到非前端程序员的喜爱。一些人会拿它与 Emacs、Vim、Eclipse、Jet Brains 系列作比较，我觉得还是看使用目的和个人习惯吧。Sublime 精简美观，上手比 Emacs、Vim 简单，功能上是它们的子集，取而代之也是无稽之谈；相比 IntelliJ IDEA、RubyMine 等 IDE，Sublime 在项目的支持上更弱，但做小规模开发还是绰绰有余的。

对有情怀的程序员来说，Emacs 或 Vim 是世界上雷打不动的最佳编辑器，这是无法撼动的**人生哲学**，但对于俺这种功利主义普通程序员来说，还是啥得劲儿用啥，Vim 还在慢慢学（对使用 Vim 如飞的人只能羡慕嫉妒恨），远程开发优先版本控制和目录挂载。

事先声明，以下介绍的**大部分功能在别的软件中也有**……

<!-- excerpt end -->

Sublime 上手简单、易用性强主要体现在：

- **功能查找方便**
	+ 快捷键要常用才记得牢，所以 Vim 中我只能记住一小部分。Sublime 的菜单栏提供了较丰富的编辑功能，比如行排序、随机打乱行、分屏等，方便调用。
	+ Sublime 提供了 Command Palette （Mac 下快捷键为 Shift + Command + P）进行命令搜索，支持模糊匹配，方便查询、调用自带功能和插件功能。
- **插件系统强大**
	+ 插件是软件功能的扩展，能在满足用户需求的同时减少软件本身的系统占用，之后我们会介绍一些普通用户也能用得到的插件。
	+ 主题也是一种插件，一个赏心悦目的编辑界面无疑能够提高用户的写作效率。
- **可定制性强**
	+ Sublime 的插件功能使用 Python 实现，辅之以 json 文件作配置，编写者有基本的 Python 开发知识就足够。
	+ Sublime 的配置都是 json 文件，区分用户配置和系统配置，前者覆盖后者。这样做能够防止用户定义设置被软件或插件更新覆盖，也方便配置的移植。

系统自带功能中，个人脚着最实用的是 Goto Anything。一个常见场景是，打开某个目录，需要不断点击子文件夹找到某个文件进行编辑，之后又要到另外一个子文件夹打开别的文件，这时有一个**支持路径模糊匹配的文件搜索**就会方便很多。Mac 下 Command + P 调用 Goto Anything，可以跳转到文件、跳转到行或跳转到符号。再者就是**多点编辑**功能，可自行查询学习。

随便搜一下“Sublime 插件推荐”就有很多结果，这里只介绍一些**普通用户适用的插件**。

- Markdown 系列，详见[《在 Sublime 中配置 Markdown 环境》](/blog/2015/04/13/zai-sublime-zhong-pei-zhi-markdown-huan-jing/)，插件安装方式也见该文；
- **ConvertToUTF8**，对 Sublime 现有文件编码支持的扩展，如支持 GBK；
- **Advanced New File**，新建文件时指定路径，而不必先找到文件夹再右键 New File；
- **SideBarEnhancements**，必装插件，扩展侧边栏功能，如 Open With、Find Advanced 等，其中 Find in Folder 功能用起来很带劲；
- **SyncdSideBar**，在侧边栏目录结构中同步定位到当前打开的文件，配合 Goto Anything 使用；
- **FileHistory/LocalHistory**，文件备份；
- **Trimmer**，删除行末空白字符，无论是编程还是撰写文档都会用到；
- **SFTP**，通过 FTP 映射本地目录和远程目录，使得编辑同步，但实际用起来并不方便，不如使用 [SSHFS](http://fuse.sourceforge.net/sshfs.html) 进行目录挂载来得方便，前提是网速够快；
- **Sublimall**，在不同的 Sublime 安装间同步配置；
- **Evernote**，操作 Evernote 文档； 
- **DictionaryAutoComplete**，英文单词自动补全；
- **PlainTasks**，一个 todo list 工具，待办事项记录在后缀名为 todo 的文档中，提供了一个简单效率软件所应具有的全部功能，包括新建条目、完成、取消、截止日期、开始时间、暂停时间、结束时间、归档等，还可以链接文件与网址。

对最后一个插件 PlainTasks 要多说两句，现在我习惯于在写作或代码项目下建立一个 todo 文件，把以前写在 Readme 文件里的进度和待添加特性挪到这里。todo 文件其实就是文本文件，在没有 Sublime 的情况下也是可以查看、编辑的。当然，这只是一个简便的选择，没法跟 Emacs 下的 orgmode 比啦。

## 界面设计

简洁美观，会让一些人觉得是**编辑器中的花瓶**，其实是有货滴。

{% img imgcenter-no-shadow /img/post/2015-5/1.png 100% Sublime 界面展示 %}

## 易用性

对普通用户有一定上手难度，但带来的效率提升远大于付出的努力，学习性价比高。

## 稳定性

总的来说是稳定的，但有过几次需要重启电脑才能正常工作的情况，原因未知。

## 跨平台

Windows、Linux、OS X 均可，只有图形界面。

## 类似软件

CodeRunner，Foobar，CodePad，TextMate 等都是代码编辑器，总体以 TextMate 名气大、功能全面，但它**绚烂绽放的菊花图标**让我颇为羞涩，Mac 下 CodeRunner 也很知名。Visual Studio Code 也是近期不能不提的代码编辑器，微软粉的最爱吧。

文本编辑器推荐可见[《每周一软之 Markdown 笔记软件 Ulysses III》](http://frank19900731.github.io/blog/2014/12/21/mei-zhou-ruan-zhi-markdown-bi-ji-ruan-jian-ulysses-iii/)，Ulysses III 最近更名为 Ulysses，改版之后运行效率优化不少，但界面美观性大不如前，特别是蝴蝶图标吓到不少对虫子有阴影的用户。还发现一款名为 Storyist 的软件，本来是用于小说、剧本写作的，但用来成体系地写一份学习笔记也是很不错的，类似 Gitbook。

## 闪光点

学习性价比高。

## 缺点

可以提很多，但想了想这不就是个编辑器嘛。如果觉得不适用，说明应该找找插件或换用更强大的工具了，比如 Vim、Emacs，排名不分先后……
