---
layout: wx-default
title: "每周一软之 Hider 2"
date: 2015-05-31 19:14:44 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: mac软件, 每周一软, Hider 2, 1PassWord, CleanMyMac, MacPaw, AES, Vault, Key Chain, GateKeeper, Apimac Secret Folder, Finder, LameSecure, FileVault, Disk Utility, rar, Espionage, Plausible Deniability, sparsebundle, Encrypto
exclude_from_search: true
pc_url: /blog/2015/05/31/mei-zhou-yi-ruan-zhi-hider-2/
wx_url: /wx/2015-05-31-mei-zhou-yi-ruan-zhi-hider-2.html
---

__目录__

* list element with functor item
{:toc}

## 功能介绍

<!-- excerpt start -->

[Hider 2](http://macpaw.com/hider) （曾用名 MacHider）是一款文件夹加密隐藏工具，与 [CleanMyMac](http://macpaw.com/cleanmymac) 来自同一厂商 [MacPaw](http://macpaw.com/)。Hider 的加密隐藏的主要做法可以概括为：

- 用户设置软件访问密码，可以添加文件或文件夹并切换其显示/隐藏，也可以类似 1PassWord 等软件直接添加 Secure Note；
- 系统自动生成密钥，使用 AES-256 进行加解密，密钥和具体加解密流程对用户透明；
- 加密操作保持加密文件夹的目录结构，**分别随机打乱文件名与后缀名中的字符**（比如 photo.jpg 变成 othpo.pjg），**对每个文件进行单独加密**，保存加密结果到用户设置的全局 Vault 中，同时**对源文件进行安全删除**（见下图）； 
- 解密操作还原目录结构，删除（似乎不是安全删除）加密文件；
- 加解密操作过程中，**均有一份完整的原始文件或加密文件保存在磁盘中**，防止加解密失败导致数据丢失。

{% img imgcenter-no-shadow /img/post/2015-5/15.png 65% 安全删除 %}

<!-- excerpt end -->

对于保持目录结构仅打乱命名的作法（目的应该是降低被搜索到的可能性吧，也只是降低而已）我是不太喜欢的，如果他人知晓文件名或后缀名，那么通过简单的枚举搜索就能够发现隐藏文件的存在，**特别是在中文命名的情况下**。虽然不知道密钥密码还是无法解析文件内容，但既然是隐藏为什么不做得更彻底一些呢。

Hider 2 对加密文件大小没有限制，只是在用户添加大文件（夹）时给出警告，如果文件需要经常切换显示、隐藏，自然还是分开处理更好。Hider 2 加解密速度大致相当，在固态硬盘、i5 CPU 条件下实测，100M 文件耗时几秒，1G 耗时 几十秒，3G 耗时约两分钟，单个文件大小几 K 到几 M 不等。

和大多数隐藏加密软件一样，**忘记密码则无法恢复数据**，所以 Hider 2 会建议用户将密码保存到 Key Chain 当中，不过更稳妥的方式自然是死记……

Hider 2 的特性还包括：

- 支持创建 Group，便于文档分类管理；
- 支持识别文件在 Finder 中被指定的 Tag，便于查询；
- 支持外置硬盘，会在该硬盘上创建 Vault 以隐藏文件。
 
当然，也有 Hider 2 无法加密或不便加密的文件，前者比如说 Vault 自身，后者比如软件，因为解密后的软件无法通过 [GateKeeper](https://support.apple.com/en-gb/HT202491) 校验。

## 界面设计

设计美观。

{% img imgcenter /img/post/2015-5/14.png 90% Hider 2 主界面 %}

## 易用性

简单易用。

## 稳定性

稳定性好。

## 跨平台

仅 OS X。

## 类似软件

一般地，文件的加密隐藏主要有三种形式。

- 不加密隐藏
	+ [Apimac Secret Folder](http://www.apimac.com/mac/secretfolder/) 属于此类，前者仅在文件名前加 `.`，使成为系统隐藏文件，不够安全；
- 设置访问密码
	+ **Finder 不支持对文件夹或文件夹设置访问密码**；
	+ LameSecure 是早期 OS X 中的一款支持对文件夹设置密码的第三方应用，不过现在似乎已经不可用，而且也有相应的 [规避手段](https://discussions.apple.com/thread/3208638?tstart=0)，也不够安全；
- 内容加密，**通常只能暴力破解，较安全**
	+ 全盘加密
		* [FileVault](https://support.apple.com/en-us/HT204837)是 OS X 的自带功能，**需要登录密码解密磁盘**，也即无法设置自动登录，如果私密文件仅占磁盘较小容量则不合适；
	+ 指定文件加密
		* Disk Utility 中 [新建磁盘映像](https://support.apple.com/en-us/HT201599) 的功能可以设置密码和加密方式；
		* rar 等压缩文件也可以设置密码，压缩的同时会对文件内容加密，比如 rar 采用 AES 算法加密； 
		* [Espionage](https://www.espionageapp.com/) 是一款与 Hider 2 功能类似的软件，号称可以做到 Plausible Deniability（合理性推诿），不过我觉得有点吹大了，以下作简要讨论。

Espionage 采取的措施主要是：

- 支持用户创建多个 Vault，不同 Vault 有不同密码，如此用户可以创建虚假 Vault 和虚假文件；
- 软件初始化时帮助用户随机创建虚假 Vault 和虚假文件。

软件作者认为，当犯罪分子威胁人质时，人质可以输入密码进入假 Vault，或者还原一套假文件，这就算是合理性推诿了。然而，只要犯罪分子稍微研究一下 Espionage 的机制，人质就得遭殃了。

Vault 中的每个文件夹在数据目录中都以 sparsebundle 格式的文件存在，而不同 Vault 的 sparsebundle 文件是混在一起的。虽然无法知道有多少个 Vault、哪个 sparsebundle 存储的是虚假文件，但只要真实文件混在其中，犯罪分子就可以要求人质逐个解密，只要还有 sparsebundle 无法打开，就说明还有 Vault 密码没有交代出来。更奇葩的事情是，系统生成的虚假 Vault 密码人质是不知道的，对于无法打开的 sparsebundle，可能是人质真的不知道密码，但犯罪分子心里想的却是：你 TM 糊弄鬼呢？

那将 sparsebundle 后缀名去掉可否解决上述问题呢？理论上是不行的，因为该类型文件的二进制表示中有固定编码，还是会被搜索出来。

总的来说，Espionage 宣称的合理性推诿的成立场合是：

- 犯罪分子太菜，眼睁睁的看你在 Espionage 界面输入密码骗他，就是不去了解软件的工作机制；
- 虚假文件创建水平高，在内容、时间戳、大小等各方面都能以假乱真；
- 犯罪分子得到文件后无法验证真伪，或在证伪前就放走了人质。

我不是很了解合理性推诿方面的研究，只能凭感觉想出几点：

- **加密隐藏机制封闭，而不是曝光于大众视野**；
- 加密文件的伪装性要高，可以是分布式存储；
- 结合真实文件有针对性的作假，而不是随机作假；
- 可**设置文件自毁的触发条件**，比如输入某个密码或输错密码多次。

大部分人一辈子也不会负责保存比人命还重要的数据，所以这几点也只是想想而已。对于日常私密数据，用两三种不同的加密软件嵌套加密，注意数据的物理转移和安全删除，已经算得上稳妥了，毕竟大家隐藏小电影的方式也只是嵌套文件夹 + 重命名而已。

最后要提到的是 [Encrypto](http://macpaw.com/encrypto)，它是 MacPaw 推出的与 Hider 2 相配套的软件，功能是使加密文件可分享，类似于加密的压缩文件。Encrypto 兼有 OS X 和 Windows 客户端，界面设计美观，加解密操作简单。

{% img imgcenter /img/post/2015-5/16.png 60% 设置密码 %}

{% img imgcenter /img/post/2015-5/17.png 60% 加密中 %}

Encrypto 加密文件相比压缩文件的好处是文件格式相对小众，修改后缀名能让安全系数更高一些。然而，查看加密文件的二进制表示发现有固定的 4 字节头部，所以还是可能被针对的。

## 闪光点

- 加解密操作简单快捷；
- 对原始数据有安全删除操作；
- 有 Encrypto 作为配套应用，便于加密文件分享。

## 缺点

- 加密文件仍保持目录结构，文件名和后缀名只作字符乱序。
