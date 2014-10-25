---
layout: wx-default
title: "提高效率与情趣的九种程序工具推荐"
date: 2014-10-16 17:28:06 +0800
comments: false
categories: [工作效率]
tags: [代码开发, 文档整理, 数据可视化, 个人展示]
keywords: git, shell, markdown, octopress, knitr, tpp, jmpress.js, shiny, d3, Adobe Muse, mordencv, processing, 效率
exclude_from_search: true
pc_url: /blog/2014/10/16/ti-gao-xiao-lu-yu-qing-qu-de-jiu-chong-cheng-xu-gong-ju-tui-jian/
wx_url: /wx/2014-10-16-ti-gao-xiao-lu-yu-qing-qu-de-jiu-chong-cheng-xu-gong-ju-tui-jian.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->
自己平时爱鼓捣些工程上的小玩意儿，在一次实验室的Paper Reading上给大家分享了自己的一点体会，给大家推荐了几款能够提高工作效率与生活情趣的工具，整理于此。

想了解更多有趣的工具，请持续关注 [工作效率](http://frank19900731.github.io/category/%E5%B7%A5%E4%BD%9C%E6%95%88%E7%8E%87/) 分类。

##选题目的

* 把自己知道的，用过的，感觉有意思或有用的分享给大家，实现自己的知识梳理与输出
* 让大家在遇到类似应用场景的时候知道有某种工具是很适用的
* 督促大家掌握某种工具（比如 git，shell，markdown ），进而提升工作效率，也可以以工具为杠杆撬动更多的资源

##介绍角度
* 类型
* 星级评定（1星-5星）
	* 入门难度
	* 实用性
	* 装X效果
* 描述
* 适用场合
* 实例说明
* 参考资料

<!-- excerpt end -->

##代码开发篇

###引言
摘自[《程序员装逼指南》](http://www.oschina.net/question/817257_112066)

{% blockquote %}
千万不要说自己是做Java或者.Net的，一下子就屌丝了。

PHP也不行，Python稍微有点烂大街，但还是明显要强过前几个。

剩下的可以说自己是做Ruby的，但不要做Rails，说Sinatra。

Go、Erlang、Clojure、Scala能给80分，你要是说会个Lisp就是85分，Haskell直接捅到90分，但是千万注意，一定要说只是精通Haskell，没事喜欢研究Haskell，千万不要说干这个的。

最后再拽出来一个Prolog就成仙了。

如果怕被继续追问就说自己做C++的，就是放了个大烟雾弹，让对面也猜不透究竟有几斤几两。

C是什么？不知道。
{% endblockquote %}

以上顺序列举的编程语言（C、C++除外）学习难度增大，对逻辑思维能力要求提升，代码实现向人的思维靠拢。

TIOBE程序语言排行榜[^1]，2014年5月最新统计（括号内前一数值为排名，后一数值为占比）：

Java（2，16.907%）

.Net（C# 6，3.745%，VB.NET 11，1.264%，F# 13，1.030%）

PHP（7，3.386%） Python（8，3.057%）

Ruby（12，1.242%）

Go（31，0.423%） Erlang（47，0.236%） Clojure（65, -） Scala（35，0.331）

Lisp（16，0.967）

Haskell（40，0.281%）

Prolog（45，0.252%）

C++ （4，5.986%）

C （1，16.926%）

以上结果与《程序员装逼指南》中对编程语言的逼格划定大致接近。

至于C、C++，个人感觉，它们向来是程序员入门语言，使用的人也很多，但真正驾驭它们还是很难的。有兴趣请移步欣赏 [猿泡沫](http://v.youku.com/v_show/id_XNzEyMDU2NDYw.html)

更多有关程序语言的种类与它们之间的程序关联请见 [编程语言关系图](http://exploringdata.github.io/vis/programming-languages-influence-network/)，这是一件优美的数据可视化作品，托管于Github。

{% img imgcenter /img/post/2014-10/1.png 80% 程序语言关系图 %}

扯远了，举例说明与人类语言、思维相近的编程语言：

* Haskell

Haskell号称“证明即程序，命题为类型”。

以下代码中，`[a | a <- xs, a <= x]` 是集合语言，`smallerSorted ++ [x] ++ biggerSorted` 蕴含了递归。

``` haskell Haskell 快速排序
quicksort :: (Ord a) => [a] -> [a]   
quicksort [] = []   
quicksort (x:xs) =   
  let smallerSorted = quicksort [a | a <- xs, a <= x]  
      biggerSorted = quicksort [a | a <- xs, a > x]   
  in smallerSorted ++ [x] ++ biggerSorted
```

* Prolog

人工智能中的演绎推理，谓词逻辑。

``` prolog Prolog 示例
human(kate).
human(bill).
likes(kate,bill).
friend(X,Y):-likes(X,Y),likes(Y,X).
```

**引言讲了这么多，意义何在？**

* 茶余饭后的谈资；
* 程序语言的设计也是一门很深的学问，流行的语言有自身的优势，小众的语言也有不俗的理念，多一些了解有助于我们认清程序语言——我们每天打交道的日常工具——的本质属性；
* 程序语言是开源世界的钥匙。

###Git

**类型**  ——  版本控制

**入门难度**  ——  ★✩✩✩✩

**实用性**  ——  ★★★★★

**装X效果**  ——  ★★✩✩✩

**描述**

* [Git诞生的故事](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/00137402760310626208b4f695940a49e5348b689d095fc000)
* 集中式（SVN为代表） vs 分布式（Git为代表）
* SVN与Git的区别与优劣争论有很多，不予详述，但Github着实具有很强的吸引力
* Github Education
	* Private空间免费使用
	* 教学使用
		* 收发作业的平台
		* 自动测试
	* 申请方式
		* 个人名义：需要学校邮箱，立即审核通过，5个private项目
		* 组织名义：一周审批时间，可能不通过……
* Github 提供免费空间建站，如本站
	* 稳定性强，小网站不太担心流量冲击
* 在自己的linux系统上搭建git服务器（gitosis），并安装Gitweb提供外部访问
	* 适合小团队内部使用，比如实验室，但要注意备份！
	* 项目访问权限可控，网页上项目可见性可控

**适用场合**

* 代码分享
* 合作开发
	* 版本控制
	* 冲突合并
	* 新功能添加
	* Bug查找

详见参考资料中的实用教程。

**实例说明**

Github建站实例：[2048游戏](http://gabrielecirulli.github.io/2048/)

Gitweb实例：[Spark](https://git-wip-us.apache.org/repos/asf?p=spark.git;a=summary)

**参考资料**

[Git实用教程](http://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000)

[Git服务器配置](http://wiki.ubuntu.org.cn/index.php?title=Git%E6%9C%8D%E5%8A%A1%E5%99%A8Gitosis%E5%AE%89%E8%A3%85%E8%AE%BE%E7%BD%AE&variant=zh-hans)

###Shell Script

**类型**  ——  文本处理，系统设置

**入门难度**  ——  ★★✩✩✩

**实用性**  ——  ★★★★★

**装X效果**  ——  ★★★★✩

**描述**

* Shell：操作系统中，提供访问内核所提供之服务的程序，比如终端（Terminal）。
* Bourne Again Shell (bash)
	* bash是GNU计划的一部分，用于基于GNU的系统如Linux。大多数的Linux都以bash作为缺省的shell。
* Shell Scripts 书写与matlab脚本类似，使用变量、逻辑控制、linux命令等完成较为底层的操作
	* 环境变量设置，如在hadoop设置中的运用
	* 文本处理，如网站log分析、天猫大赛数据处理
	* 复杂功能的集成与自动运行，如下文中tunet自动登录脚本
* 文本处理 awk/gawk sed

**适用场合**

* 文本数据（特别是有规范格式的）处理
* 重复性劳动

**实例说明**

tunet登录脚本（摘自网络），实测可用：

``` bash tunet 登录脚本 
#!/bin/bash
# your info's username
uname=your account name
# your info's password's md5sum
pass=md5sum of your password 
####################################################
do_login() {
login_data='username='$uname'&password='$pass'&drop=0&type=1&n=100'
check_data='action=check_online'

# check whether already online
con=`curl -d $check_data -s http://net.tsinghua.edu.cn/cgi-bin/do_login`

if [ -z $con ]; then
# start login
res=`curl -d $login_data -s http://net.tsinghua.edu.cn/cgi-bin/do_login`

#handle result
pe=`echo $res | grep error`
if [ -z $pe ]; then
echo "Login Success!"
else
echo $pe
exit 0
fi

# display flux infomation
flux=`echo $res | awk -F ',' '{print $3}'`
a=$(($flux/1000000000))
b=$((($flux%1000000000)/100000000))
c=$((($flux%100000000)/10000000))
echo "Used Flux: "$a"."$b$c"G."

else
echo "Already Online!"

# display flux information and online time
flux=`echo $con | awk -F ',' '{print $3}'`
time=`echo $con | awk -F ',' '{print $5}'`
a=$(($flux/1000000000))
b=$((($flux%1000000000)/100000000))
c=$((($flux%100000000)/10000000))
h=$(($time/3600))
m=$(($(($time%3600))/60))
s=$(($(($time%3600))%60))
echo "Used Flux: "$a"."$b$c"G, Online Time: "$h":"$m":"$s"."
fi
}

do_logout() {
# start logout
res=`curl -s http://net.tsinghua.edu.cn/cgi-bin/do_logout`

#handle result
if [ "$res" == "logout_ok" ]; then
echo "Logout Success!"
elif [ "$res" == "not_online_error" ]; then
echo "You're not Online!"
else
echo "Operation Failed!"
fi
}

##################################################################################
if [ "$1" == "login" ]; then
do_login
elif [ "$1" == "logout" ]; then
do_logout
else
echo "Usage: "$0" {login|logout}"
fi
```

**参考资料**

任意一本shell入门教程

##文档整理篇

###引言

摘自[《高级程序员装逼指南》](http://www.cnblogs.com/rollenholt/articles/2235713.html)

{% blockquote %}
在CSDN/ITeye/cnblogs这种地方写技术博客确实比在人人上写技术博客好多了

但是你要知道，大牛们都是有自己的个人网站的

而且，一个共同点是，他们的网站都是自己写的html（没有css）并且界面十分难看

整个网站散发着一种“我这的文章都很牛所以界面什么的都不重要”的气质

例如这个 <a href="http://xahlee.org/index.html" target="_blank">http://xahlee.org/index.html</a>
{% endblockquote %}

{% img imgcenter /img/post/2014-10/3.png 70% 李杀网截屏 %}

当然，用优美的外在包裹充实的内在，总还是更加让人赏心悦目的。

**这个引言的目的是……**

* 输出重要，积累重要，有个网站就更好了。

###Markdown

**类型**  ——  微量级文本标记语言

**入门难度**  ——  ★✩✩✩✩

**实用性**  ——  ★★★★★

**装X效果**  ——  ★★✩✩✩

**描述**

* Evernote？有道笔记？XX笔记？
	* 编辑复杂，小word
	* 先天不足，不是给科研人员用的，而是给大众记录用的，文字、图片、音频
	* 部分有偿使用，高级功能要收费
	* 分享方式单一
* 文档编辑类软件的一种趋势让人**更专注于内容，而非格式**，不必频繁在输入区和菜单工具栏之间切换
* 语法简洁，容易学习（5分钟足够）
* 导出格式丰富，latex，html，pdf，ebook，mobi……
* **样式丰富，内容与样式独立**，由css文件及与之类似文件定制样式，称为主题
* 扩展丰富
	* latex公式输入
	* 插入代码块 highlight.js
	* ……
* 较多在线编辑器可供使用，如[作业部落](https://www.zybuluo.com/mdeditor)，Chrome插件 MaDe
* Github、StackOverflow、Google Code都支持

**适用场合**

* 快速写出有公式、有代码的笔记报告
* 能够以较多方式分享自己的报告，特别是放在自己的个人主页上

**实例说明**

本页面

**参考资料**

[markdown语法说明](http://wowubuntu.com/markdown/)

###Octopress

**类型**  ——  博客

**入门难度**  ——  ★★★✩✩

**实用性**  ——  ★★★✩✩

**装X效果**  ——  ★★★★✩

**描述**

* [《[BetterExplained]为什么你应该（从现在开始就）写博客》](http://blog.csdn.net/pongba/article/details/3896311)
* Wordpress？ 摘自 [从wordpress到octopress](http://www.tuicool.com/articles/rA7Bjq)
	* 编辑环境复杂
	* 臃肿，累赘功能多
	* 定制性差
	* 过度依赖数据库，数据安全性低
	* 速度慢，优化门槛高
	* 迁移成本高
* 所需知识
	* ruby基础知识
	* Git基本命令
	* Github用法
* 基于Jekyll
* **纯静态**，响应快
* **版本化管理**，Word及其他笔记软件无法提供
* **不依赖数据库**，Disqus、多说
* **定制容易，开源支持多**
* **支持Markdown**

**适用场合**

* 文章内容以文字图片居多，不需要视频音频或者华丽的动画效果

**实例说明**

本博客

**参考资料**

[Github搭建Octopress博客的方法](http://blog.devtang.com/blog/2012/02/10/setup-blog-based-on-github/)

###knitr

**类型**  ——  自动化报告

**入门难度**  ——  ★★★✩✩

**实用性**  ——  ★★★★★

**装X效果**  ——  ★★✩✩✩

**描述**

* 国人写的R包，出于对功能相近的 Sweave 的不满足
* 代码与文档混编，编译时执行代码输出结果（数据、图片）
	* **数据可伪造，图形可拷贝，只有源代码是最可靠的**
	* 代码可以进行版本管理
* 文学化编程，Knuth
* 支持 latex，markdown 等多种文档类型
* [ggplot2](http://ggplot2.org/) 的诱惑力
	* 入门缓慢，功能强大

**适用场合**

* 收取、检查作业
* 写一份图文码并茂的报告

**实例说明**

[RPubs](http://www.rpubs.com/)

**参考资料**

[knitr官网](http://yihui.name/knitr/) 顺便说一句，这个官网就是用Octopress搭建的

##自我展示篇

###tpp[^2]

**类型**  ——  命令行展示

**入门难度**  ——  ★✩✩✩✩

**实用性**  ——  ★★✩✩✩

**装X效果**  ——  ★★★★✩

**描述**

* 基于ncurses（字符终端处理库），ruby-ncurses，figlet（字符图）
* 名称来源是PPT的逆向
* 语法极易（1分钟？）
* 支持中文
* 支持导出latex、txt格式

**适用场合**

* 纯linux命令行下文档记录、演示

**实例说明**

[展示效果](http://songchengru.eicp.net/tpp/) in Chrome Extension - Secure Shell

**参考资料**

[官网](http://www.ngolde.de/tpp.html)

[实例代码](https://github.com/chinageek/fun/tree/master/tpp)

[字符编码 bug fix](https://bugs.debian.org/cgi-bin/bugreport.cgi?bug=705965)

###jmpress.js

**类型**  ——  浏览器富动态效果展示

**入门难度**  ——  ★★★★✩

**实用性**  ——  ★★★✩✩

**装X效果**  ——  ★★★★★

**描述**

* 非线性展示
	* 一个页面
	* 区域间可跳跃
	* 位移、缩放与旋转
	* 揭示概念、事物间的复杂联系
	* 动态思维导图
* Prezi vs jmpress.js
	* Adobe Flash & Flex vs HTML5
	* 臃肿 vs 轻量级
	* 扩展受限（中文、字体等） vs 开源支持（大量js功能支持）
	* 所见即所得 vs 较复杂设计
* impress.js 受Prezi启发，jmpress.js在其基础上进行了封装，成为jQuery插件
	* 支持新版Chrome、Safari、Firefox，IE 10 poorly supported
* 所需知识
	* 熟悉CSS3、Javascript

**适用场合**

* 有趣的故事、新颖的观点，不仅仅是为了追求酷炫的过渡效果（TED talk）
* 网站上的个性化介绍、流程展示

**实例说明**

[Demo](http://songchengru.eicp.net/jmpress/ex1/)

[巴西世界杯预测](http://andrewyuan.github.io/methodology.html#/init)

**参考资料**

[Github 项目托管地址](https://github.com/jmpressjs/jmpress.js)

##数据展示篇

###Shiny

**类型**  ——  数据动态交互展示

**入门难度**  ——  ★★★✩✩

**实用性**  ——  ★★★★✩

**装X效果**  ——  ★★★★✩

**描述**

* Data visualization or data visualisation is a modern branch of descriptive statistics. It involves the creation and study of the visual representation of data, meaning "information that has been abstracted in some schematic form, including attributes or variables for the units of information".  ——  摘自维基百科
* 数据可视化工具种类繁多，网搜都是“XX种数据可视化工具推荐”
	* Online vs Desktop
	* 代码开发 vs 图形界面操作
* 属于 [RStudio](http://rdata.wicp.net/rstudio/)  这一火热的开源项目
* **动态展示**，以R的丰富资源为支撑
	* [SVD实例](http://rdata.wicp.net/shiny/imgsvd/)
	* 自动生成HTML、CSS、Javascript，只需编写R代码
	* 申请项目空间 [Shiny app 空间](https://www.shinyapps.io/)
* R最大的优势是：它是由统计学家们开发的。R最大的劣势是……它是由统计学家门开发的。—— Bo Cowgill
	* 速度慢
	* 需要对R有了解

**适用场合**

* 简单的数据交互、模型演示

**实例说明**

[Shiny 例程](http://rdata.wicp.net/shiny/)

**参考资料**

[Shiny 官网](http://shiny.rstudio.com/)

###D3

**类型**  ——  数据静态展示

**入门难度**  ——  ★★★★✩

**实用性**  ——  ★★★★✩

**装X效果**  ——  ★★★★★

**描述**

* D3（Data Driven Documents），支持SVG渲染，图表类型丰富
	* 数据绑定网页元素
	* 设置元素可视化属性
	* 元素变换与动态过渡
* 所需知识
	* jQuery
	* CSS
	* SVG
	* 数据可视化知识
* 浏览器兼容性好
* 有多款基于D3开发的适用于不同展示对象的工具
	* Planetary.js 地理信息
	* Ember Charts、 xCharts 图表库
	* Richshaw 绘制时序图
* BSD许可，适用于商业或非商业目的

**适用场合**
* 展示已有数据规律，且数据可以共享

**实例说明**

[官方示例](https://github.com/mbostock/d3/wiki/Gallery)

[巴西世界杯预测](http://andrewyuan.github.io/EDAV-project.html)

**参考资料**

[D3 官网](http://d3js.org/)

[Github托管地址](https://github.com/mbostock/d3)


##其它工具

**ADOBE MUSE - 自我展示类工具**

[官方网站](http://muse.adobe.com/) 教程丰富，讲解细致 

无须编程，实现流行的网页效果

例如 [Scroll Effects](http://songchengru.eicp.net/scroll/)

**LATEX CV - 自我展示类工具**

[mordencv官网](https://launchpad.net/moderncv)

[mordencv代码](http://www.ctan.org/tex-archive/macros/latex/contrib/moderncv)

**PROCESSING - 数据展示类工具**

MIT Media laboratory 创制的编程绘图语言，连接艺术设计与计算机程序

[Processing 官网](http://processing.org/)

[作品展示](https://www.processing.org/exhibition/)

基于Processing的jQuery插件：[processing.js](http://processingjs.org/)

##总结

* 蜻蜓点水，抛砖引玉
* 经验之谈，一家之言
* 如能产生一点启发，激发一点兴趣，也不枉一番准备

[^1]:一种语言的占比等于其在8大网站（Google 30%，Blogger 30%，Wikipedia 15%，YouTube 9%，Baidu 6%，Yahoo! 3%，Bing 3%，Amazon 3%）上被搜索出的结果总数，除以前50名语言的结果总数。
[^2]:展示结束后，又发现了一款名为 [MDP](https://github.com/visit1985/mdp) 的命令行展示工具，大家可以试试，当然，以 Markdown 为书写语言的网页版展示工具就更多了，比如 [WeakPoint](https://github.com/onesuper/weakpoint)。