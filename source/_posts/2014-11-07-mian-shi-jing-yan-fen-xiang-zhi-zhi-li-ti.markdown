---
layout: post
title: "面试经验分享之智力题"
date: 2014-11-07 14:56:13 +0800
comments: true
categories: [面试求职]
tags: [求职经验, 面试, 智力题, 概率]
keywords: 求职经验, 面试, 智力题
pc_url: /blog/2014/11/07/mian-shi-jing-yan-fen-xiang-zhi-zhi-li-ti/
wx_url: /wx/2014-11-07-mian-shi-jing-yan-fen-xiang-zhi-zhi-li-ti.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

##前言
我在算法工程师面试中遇到的智力题主要是指涉及到一些数学计算、证明的题目，基本是中小学奥数题。喜欢问这类问题的主要有互联网创业公司或外企，招收数值策划的游戏公司，当然，更多的是金融、投资相关的企业。从题目类型上分，有排列组合题、概率题等。

##题目介绍

**题目一：给定天平，问要称重1-N N种不同质量，最少需要多少种砝码？**

**1）砝码只允许放在天平的一端；**

**2）砝码可以放在天平的两端。**

**解答：** 
	
- 只允许放在一边的情况，开始自己以为是斐波那契数列，不过显然数列生成方式里存在冗余（1+2=3）。1、2 肯定是最基本的数字，**新添加的砝码质量应该是原砝码集合所能称量的最大质量加一**，如此生成的数列就是2的幂次，1，2，4，……想到正整数二进制表达的唯一性，应该是不存在冗余的。可表示性是有了，对于1-N N种不同的质量，最少需要 $$\left\lceil \log _{ 2 }{ (N+1) }  \right\rceil $$ 种不同的砝码，那是不是最少的呢？这种做法没有冗余，且表示范围是砝码的排列组合（每一个砝码可用可不用），应该就是最少了的，不过这不是严格证明。
- 允许放在两边的情况，1、3是最基本的，因为 2 可以用 3-1 表达，**新添加砝码的质量应该满足的条件是原砝码集合所能称量的最大质量加上这个最大质量的下一个质量**。这种构造方法同样没有冗余，且表示范围是砝码的排列组合（每一砝码可加、可减、可不用，再排除掉和非正数的情况），所以应该也是最少的。按照这个思路生成的数列就是3的幂次，1，3，9，27……可以用数学归纳法证明如下。

<!-- excerpt end -->

**证明：数列 $$1，3，…，3^{n-1}$$，任取其中若干进行加减组合可以表示 $$1$$ 到 $$\frac{3^n - 1}{2}$$ （允许减法的排列组合所能表示的最大范围）间的不同数值。**

1）$$k=1$$ 时，显然满足；

2）$$k=n$$ 时，有 $$1，3，……，3^{n-1}$$ 可以表出 $$1$$ 到 $$\frac{3^n - 1}{2}$$；

3）$$k=n+1$$ 时，要证明 $$1，3，……，3^n$$ 可以表出 $$1$$ 到 $$\frac{3^{n+1} - 1}{2}$$ 

3-1）$$1$$ 到 $$\frac{3^n - 1}{2}$$ 显然可由 $$1，3，……，3^{n-1}$$ 表出； 

3-2）$$\frac{3^n + 1}{2}$$ 到 $$3^n - 1$$ 可以由 $$3^n$$ 减去 $$\frac{3^n - 1}{2}$$  到 $$1$$ 表出；

3-3）$$3^n$$ 是新加入的数，可以单独表出；

3-4）$$3^n + 1$$ 到 $$\frac{3^{n+1} - 1}{2}$$ 可以由 $$3^n$$ 加上 $$1$$ 到 $$\frac{3^n - 1}{2}$$ 表出。

综上，有原命题成立。

有关本题的更多讨论参见果壳网的 [这篇文章](http://www.guokr.com/article/3742/)。
		
**题目二：如下图所示概率密度分布，左边平缓，右边陡峭，指定中位数的位置，问均值在中位数的左侧还是右侧？**

{% img imgcenter /img/post/2014-11/1.png 40% 概率分布，中位数和均值的位置关系 %}

**解答：** 
	
我的感觉是均值在中位数的左侧，不过我希望用严格的数学推导证明出来，后来发现很有难度，因为没有给出概率密度分布的具体形式。面试官及时“制止”了我，让我想一点直观的解释。

我觉得可以用收入分布来类比，左边高收入人群少，右边是低收入群体，占很大的比重。统计局公布的人居年收入是均值，网友纷纷表示自己拉低了平均收入，不上网的人收入水平可能更低一些。综上，姑且认为超过一半的人收入不及均值（只是为回答问题而做的推测，超过平均水平的一般不会自己说出来，所以可能统计有偏差），也即中位数在均值的右侧。
	  
面试官给出的解释比我的好很多。类比一把斧头的质量密度，中位数左右的半边斧头质量相等，而均值则是斧头的支撑平衡点（假设均值为0，这个支撑平衡点就是原点），根据力矩平衡原理，支撑点要比中位数更偏向斧头的木把儿一边。
	   
**题目三：玩家打怪，通关一次掉落 A 装备的概率是 0.1，掉落 B 装备的概率是0.2，该玩家要获得 A、B 两件装备的期望通关次数是多少？**

**解答：** 
	
画图表示 A 和 B 的关系

{% img imgcenter /img/post/2014-11/2.png 70% A 和 B 的三种关系 %}

- 如果 A 和 B 是互斥事件，首先考虑第一次拿到一件装备的期望通关次数，这件装备有 $$\frac{1}{3}$$ 的可能性是 A，$$\frac{2}{3}$$ 的可能性是 B，接下来根据几何分布的无后效性进行计算，期望次数为 

$$\frac{1}{0.1 + 0.2} + \frac{1}{3}  \times  \frac{1}{0.2} + \frac{2}{3} \times \frac{1}{0.1} = \frac{35}{3}$$

- 如果 B 事件 包含 A 事件，则期望次数为 

$$\frac{1}{0.1} = 10$$

- 其他情况，期望次数在 $$10$$ 和 $$\frac{35}{3}$$ 之间。
	
**变式：玩家一打掉落 A 装备的怪，玩家二打掉落 B 装备的怪，相互独立，他们协作收集 A、B 两件装备，则期望多少轮集齐？**
	
- 思路一：有三种可能性，先拿到 A 再拿到 B，概率是 $$\frac{4}{14}$$，先拿到 B 再拿到 A，概率是 $$\frac { 9 }{ 14 } $$； A、B同时拿到，概率是 $$\frac { 1 }{ 14 }$$ 。这些概率可以通过列写等比数列求和公式得到，本文不赘述，因为思路二提供了更简单的计算方法。计算期望得 

	$$\frac{4}{14} \times  \frac{1}{0.2} + \frac{9}{14}  \times  \frac{1}{0.1} + \frac{1}{14} \times \frac{1}{0.1 \times 0.2} = \frac{80}{7}$$

	关于最后一项 $$\frac{1}{14} \times \frac{1}{0.1 \times 0.2}$$ 的解释是，玩家一、二一定是在某一轮同时分别获得 A 和 B，那么可以认为是**一个人在玩，而该关卡要么同时掉落 A 和 B，要么什么也不掉落**。由这样一种解释也就自然想到了思路二。

- 思路二：玩家一、玩家二可以统一为一个人，只不过这个人在通关后获得 A、B 的概率是相互独立的，$$P\left( AB \right) =P\left( A \right) \cdot P\left( B \right) $$。由此前的计算思路可得期望为 

	$$\frac{1}{0.28} + \frac{0.08}{0.28} \times  \frac{1}{0.2} + \frac{0.18}{0.28}  \times  \frac{1}{0.1} + \frac{0.02}{0.28} \times 0 = \frac{80}{7}$$
	
**题目四：一群人每人说一到一百间的整数，接近平均数的三分之二的人会获奖，该说什么数字才能使获奖机率最大？**

**解答：** 
	
假设每个人都是理性的，那么没有人会选择 67-100，再次分析可知没有人会选择 45-66，以此类推，最终只有选择 1。**不过实际当中并不是所有人都这么聪明理性，做适当的假设可以得到更接近真实情况的结果**。

{% blockquote %}	
1987年，《金融时报》刊登了一个很诡异的广告，说你可以随便写一个0~100（与本题略有不同）之间的整数	寄回编辑部，然后如果你写的这个数最接近所有寄来的数的平均数的2/3，你就可以获得一张伦敦到纽约的头等舱往返机票。最后得到的结果是……平均数为18.9。也就是写13的人赢了。
{% endblockquote %}

更多分析见果壳网的 [这篇文章](http://www.guokr.com/question/292144/)。

**题目五：考虑 n 维向量 X、Y，其中每个元素独立同分布，分布为 N(0，1)，请计算 X、Y 相关系数的均值和标准差。**
	
**解答：**

本题其实是百度笔试的一道题，只有5分，但还是颇有难度的，实际上本题无需进行任何复杂的积分计算。相关系数的均值表达式如下

$$
\begin{align}
E\left( r \right)  &= \iint { \frac { \left( X-EX \right) \cdot \left( Y-EY \right)  }{ \left\| X-EX \right\| \left\| Y-EY \right\|  } \cdot p\left( X \right) \cdot p\left( Y \right) dXdY }  \\
&= \iint { \frac { X\cdot Y }{ \left\| X \right\| \left\| Y \right\|  } \cdot p\left( X \right) \cdot p\left( Y \right) dXdY } 
\end{align}
$$

考察 X （或Y）**关于原点的对称抵消特性**，知期望值为 0。

相关系数的方差表达式为：

$$
\begin{align}
Var\left( r \right)  &= E{ \left( r-E\left( r \right)  \right)  }^{ 2 } \\
&= E{ r }^{ 2 } \\
&= \iint { \frac { \left( \left( X-EX \right) \cdot \left( Y-EY \right)  \right) ^{ 2 } }{ { \left\| X-EX \right\|  }^{ 2 }{ \left\| Y-EY \right\|  }^{ 2 } } \cdot p\left( X \right) \cdot p\left( Y \right) dXdY }   \\
&= \iint { \frac { \left( X\cdot Y \right) ^{ 2 } }{ { \left\| X \right\|  }^{ 2 }{ \left\| Y \right\|  }^{ 2 } } \cdot p\left( X \right) \cdot p\left( Y \right) dXdY } \\
&= \iint { { \left( \frac { X }{ \left\| X \right\|  } \cdot \frac { Y }{ \left\| Y \right\|  }  \right)  }^{ 2 }\cdot p\left( X \right) \cdot p\left( Y \right) dXdY } 
\end{align}
$$

最后一个式子中，X、Y 的关系是对称的，几何含义是**单位球面上两个随机向量的内积平方的期望**。与其让 X、Y 都随机，我们可以固定其中一个，只计算**随机向量和固定向量的内积平方的期望**，**如果任取固定向量都有这个期望值相同，那么这个期望就是本题的待求期望**。

我们先取固定向量为 $${ \left( 0,\quad 0,\quad \dots \quad 1 \right)  }^{ T }$$，则积分式子转化为

$$\int { \frac { { Y }_{ n }^{ 2 } }{ \sum _{ i=1 }^{ n }{ { Y }_{ i }^{ 2 } }  } \cdot p\left( Y \right) dY } $$

乍一看分子分母都是卡方分布，不过二者不是相互独立的，也就不构成 F 分布，怎么求解呢？要用到 $${ Y }_{ i }$$ 的轮换对称性。

$$\int { \frac { { Y }_{ 1 }^{ 2 } }{ \sum _{ i=1 }^{ n }{ { Y }_{ i }^{ 2 } }  } \cdot p\left( Y \right) dY } =\dots =\int { \frac { { Y }_{ n }^{ 2 } }{ \sum _{ i=1 }^{ n }{ { Y }_{ i }^{ 2 } }  } \cdot p\left( Y \right) dY } $$

又

$$\sum _{ k=1 }^{ n }{ \int { \frac { { Y }_{ k }^{ 2 } }{ \sum _{ i=1 }^{ n }{ { Y }_{ i }^{ 2 } }  } \cdot p\left( Y \right) dY }  } =1$$

所以

$$\int { \frac { { Y }_{ k }^{ 2 } }{ \sum _{ i=1 }^{ n }{ { Y }_{ i }^{ 2 } }  } \cdot p\left( Y \right) dY } =\frac { 1 }{ n } ,\quad k=1,2,\dots ,n $$

也就是说标准差为 $$\frac { 1 }{ \sqrt { n }  } $$ 咯？

如果随机向量在球面上是均匀分布的那我们的讨论也就停止了，不过事实并非如此。二维情况，考察单位圆周上的随机向量，斜率的分布（两个正态分布的均值为0时，它们的 [商是柯西分布](http://mathworld.wolfram.com/NormalRatioDistribution.html) ）是不均匀的。在这种不均匀的情况下，想要得到积分值不变的结论好像没有那么直观。受 $${ \left( 0,\quad 0,\quad \dots \quad 1 \right)  }^{ T }$$ 的启发，我想到一个笨办法，还是用到轮换对称性。我们只要**找到值相等的一些表达式，让他们相加等于一个常数即可**。

<span style="color: red;">更正：“不均匀”的说法是有问题的，这个不均匀是相对于斜率的不均匀，对于角度而言是均匀的，可以将柯西分布里的比值变量 $$u$$ 替换为角度 $$\theta $$，由下面的表达式知是均匀分布。</span>

$$\int _{ -\infty  }^{ +\infty  }{ \frac { 1 }{ \pi \left( 1+{ u }^{ 2 } \right)  } du } =\int _{ -\frac { \pi  }{ 2 }  }^{ \frac { \pi  }{ 2 }  }{ \frac { 1 }{ \pi \left( 1+\tan ^{ 2 }{ \theta  }  \right)  } \frac { d\theta  }{ \cos ^{ 2 }{ \theta  }  }  } =\int _{ -\frac { \pi  }{ 2 }  }^{ \frac { \pi  }{ 2 }  }{ \frac { d\theta  }{ \pi  }  } $$

<span style="color: red;">高维情况如下式所示，某向量的概率密度只与向量长度有关，而与角度无关，所以放缩到单位球面上关于角度是均匀的，所以只需要计算 $${ \left( 0,\quad 0,\quad \dots \quad 1 \right)  }^{ T }$$ 一种情况就可以。</span>

$$\frac { 1 }{ { \left( \sqrt { 2\pi  }  \right)  }^{ n } } { e }^{ -\frac { \sum _{ i=1 }^{ n }{ { x }_{ i }^{ 2 } }  }{ 2 }  }=\frac { 1 }{ { \left( \sqrt { 2\pi  }  \right)  }^{ n } } { e }^{ -\frac { { r }^{ 2 } }{ 2 }  }$$

轮换对称性分两步，首先是**系数轮换**，其次是**符号轮换**，以 4 维情况为例，假设固定向量为

$${ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }$$

系数轮换是指以下四个固定向量计算得到的积分结果是相同的

$$
{ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  } ,\quad \frac { 1 }{ \sqrt { 24 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  } ,\quad \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 2 }  } ,\quad \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  }  \right)  }^{ T }
$$

符号对称性是指以下八个固定向量计算得到的积分结果是相同的

$$
{ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( -\frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad -\frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad -\frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( \frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad -\frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( -\frac { 1 }{ \sqrt { 24 }  } ,\quad -\frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( -\frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad -\frac { 1 }{ \sqrt { 3 }  } ,\quad \frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$

$$
{ \left( -\frac { 1 }{ \sqrt { 24 }  } ,\quad \frac { 1 }{ \sqrt { 8 }  } ,\quad \frac { 1 }{ \sqrt { 3 }  } ,\quad -\frac { 1 }{ \sqrt { 2 }  }  \right)  }^{ T }
$$	 

**系数轮换是为了保证加和结果中各平方项系数相等，可约去分母，符号轮换是为了保证加和结果中的交叉项系数为 0**。对于 4 维向量，我们经过系数轮换和符号轮换获得了 32（$$= 4 \times 8$$） 个等值的积分表达式，累加和等于 8，每个积分表达式的值是 $${ \frac { 1 }{ 4 }  }$$，也即 $${ \frac { 1 }{ n }  }$$。

简单总结一下，系数轮换我们采用循环移位的策略，也就是 n 组系数；每组系数对应 $${ { 2 }^{ n-1 } }$$ 种（因为是平方，所以一半和另一半是等价的）符号选择。**对于任给的固定向量，总可以通过这样的构造辅助等价固定向量的方式求解，而求得的积分结果总是 $${ \frac { 1 }{ n }  }$$**。

综上，**相关系数的均值是 0，标准差是 $${ \frac { 1 }{ \sqrt { n }  }  }$$**。

以下是 Matlab 仿真结果：

``` matlab 相关系数的均值、方差仿真
array = [];
n = 5;
iter = 100000;
for i = 1:iter
x = normrnd(0,1,n,1);
y = normrnd(0,1,n,1);
array = [array, sum(x.*y)/(norm(x)*norm(y))];
end
avg = mean(array);
avar = var(array);
```

10 万个相关系数样本，括号内为 $$\frac{1}{n}$$ 的值

5 维，单次运行均值为 -0.0023，方差为 0.1999（0.2）；

11 维，单次运行均值为 -0.0011，方差为 0.0908（0.0909）；

23 维，单次运行均值为 0.0003，方差为 0.0433（0.0435）。

##其它经典题目

1. [卡特兰数](http://baike.baidu.com/view/2499752.htm?fr=aladdin) 相关问题
	- 括号化
	- 出栈次序
	- [找钱问题](http://blog.csdn.net/jtlyuan/article/details/7440591)
2. [帽子问题](http://blog.sina.com.cn/s/blog_519169510101bljn.html)
3. [海盗分金](http://blog.csdn.net/wangshihui512/article/details/8860193)
4. [宝石升级](http://www.zhihu.com/question/25420139)
5. ……

##总结

- 简要复习概率、期望、常见概率分布、排列组合等知识；
- 金融、投资领域的面试参加的不多，过段时间再补充几道有关概率、博弈论的题目;
- 多关注 [Matrix67](http://www.matrix67.com/blog/) 上的题目分享。
	- [分享一些有趣的面试智力题（上）](http://www.matrix67.com/blog/archives/501)
	- [分享一些有趣的面试智力题（下）](http://www.matrix67.com/blog/archives/502)
	- [10个精彩的智力问题](http://www.matrix67.com/blog/archives/2671)
	- ……

继 `机器学习、大数据问题`、`智力题`，接下来的博文还会陆续分享 `编程语言题` 和 `数据结构与算法题`，敬请期待。

访问入口：

- [机器学习、大数据问题](/blog/2014/11/06/mian-shi-jing-yan-zhi-ji-qi-xue-xi-da-shu-ju-wen-ti/)
- [智力题](/blog/2014/11/07/mian-shi-jing-yan-fen-xiang-zhi-zhi-li-ti/)
- 数据结构与算法题
- 编程语言题