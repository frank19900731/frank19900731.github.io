---
layout: wx-default
title: "每周一软之 Proxifier"
date: 2014-12-28 17:19:15 +0800
comments: false
categories: [Mac 使用]
tags: [mac软件, 每周一软]
keywords: VPN, Proxifier, SwitchySharp, Socks5, Socks4, Https, Http, goagent, CCProxy, Shadowsocks, GoAgentX, chnroutes
exclude_from_search: true
pc_url: /blog/2014/12/28/mei-zhou-yi-ruan-zhi-proxifier/
wx_url: /wx/2014-12-28-mei-zhou-yi-ruan-zhi-proxifier.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

周四以来，Mail 里无法查收/发送 Gmail 邮件，为此鼓捣了好一阵子。最后，考虑到好多移动设备也需要查看邮件，索性买一个 VPN 账号。简单对比了一下选择了 [风驰](https://www.fengchinet.com/)，一方面速度、稳定性都很不错，另一方面 270 块能够支持 3 个设备同时登陆且无限时间还真是挺划算的，可谓物美价廉。注意要注册两个账号，一个用另一个的邀请链接购买，可返利 40% 并可提现到支付宝 。

鼓捣的过程里接触到 Proxifier 等一干软件，在此把粗浅的认识记录下来。

##功能介绍

[Proxifier](http://www.proxifier.com/documentation/v3/) 可以针对具体的应用设置网络代理，类似于 SwitchySharp 的 Auto Switch Mode，使得部分软件（网址或ip）使用代理访问网络，而其它软件（网址或ip）正常访问网络。

- 支持 Socks4、Socks5、Https、Http 协议的代理；
- 可配置代理服务器链，均衡流量，支持使用不同协议；
- 路由表形式配置不同应用程序的网络访问行为，可以是直连、禁止访问或代理三种形式；
- 访问行为可具体指明域名、IP和端口，支持通配符；
- 带有日志输出，可以配置级别，提供时时流量统计图示；
- 可配置通过代理服务器进行 DNS 解析。

[What is the Difference Between Proxy Types](http://chris.olstrom.com/privacy/proxy-types/) 这篇文章简要讲解了 http、socks 代理以及 VPN 的优缺点，之前不甚了解。

<!-- excerpt end -->

##界面设计

界面设计普通。

{% img imgcenter /img/post/2014-12/43.png 80% 主界面与 Proxy 列表 %}

{% img imgcenter /img/post/2014-12/44.png 60% 添加 Proxy %}

##易用性

容易使用。

##稳定性

稳定性良好。

##跨平台

支持 Windows、OS X。

##类似软件

确切地说不是类似软件，而是相关软件。

Proxifier 需要填写代理，可以在网上寻找相关服务（收费或免费），也可以自己搭建。

- [goagent](https://github.com/goagent/goagent) 提供 http、https 代理（[似乎支持过 socks5 ？](https://code.google.com/p/goagent/issues/detail?id=5988)），缺点是**可能会隔段时间失效**，**需要更新 ip 列表**。 
- [CCProxy](http://www.ccproxy.com/) 一款知名的国产代理服务器软件，[配合 Proxifier 可以实现局域网共享网络访问](http://www.ccproxy.com/proxifier-tou-ming-dai-li.htm)。
- [Shadowsocks](https://github.com/shadowsocks/shadowsocks) 分服务器端和客户端，服务器端提供 socks 代理，用法可以是
	- 把 VPN 转为代理进而共享；
	- 部署到国外的 VPS 上，身边有同学这么做。
- [GoAgentX](https://github.com/ohdarling/GoAgentX) 集成了 goagent、Shadowsocks、SSH 等工具，提供图形界面配置。

类似的网络工具还有很多，看得头都大了，挂一漏万，有一个好使就行。

还有一个工具是在使用 VPN 时会用到的，就是 [chnroutes](https://github.com/jimmyxu/chnroutes) 。chnroutes 通过 ip 配置实现 VPN 分流，减轻 VPN 负担，提高国内网站的访问速度。具体做法貌似是设置用 VPN 传输所有网络流量，但是会**使用 route 命令将一些 ip 地址路由到非 VPN  线路的网关上**。

##闪光点

- 配置灵活，可以为单个软件提供代理服务，特别是**当该软件不提供代理设置的时候**很有用。

##缺点

其实我很想寻找一款能够**指定某个应用是否使用 VPN 进行联网**的软件，在我并不清楚该应用可能访问的 ip 范围的时候，chnroutes 难以提供帮助，而 Proxifier 显然也没法满足这种需求……

一种做法是，在个人服务器/云主机上配置 VPN 和 chnroutes，在笔记本上使用 Proxifier 连接该 socks 代理，并配置相关应用程序的访问行为。