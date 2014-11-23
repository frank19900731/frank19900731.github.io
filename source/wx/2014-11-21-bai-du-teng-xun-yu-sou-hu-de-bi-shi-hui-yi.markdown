---
layout: wx-default
title: "2014 年百度、腾讯与搜狐的校招笔试回忆"
date: 2014-11-21 21:38:54 +0800
comments: false
categories: [面试求职]
tags: [百度, 腾讯, 搜狐, 校招, 笔试, 题目回忆]
keywords: 百度, 腾讯, 搜狐, 校招, 笔试, 题目回忆
exclude_from_search: true
pc_url: /blog/2014/11/21/bai-du-teng-xun-yu-sou-hu-de-bi-shi-hui-yi/
wx_url: /wx/2014-11-21-bai-du-teng-xun-yu-sou-hu-de-bi-shi-hui-yi.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

##写在前面

- 这三家公司大家的关注度应该都比较高，我所申请的其他公司，要么是自己走了其他渠道没参加笔试（比如阿里、360），要么是有签订保密协议（比如 FreeWheel 和 世坤）；
- 腾讯、搜狐笔试题中有很多选择题，无法一一记清，考场上没有刻意记录，只能考后回忆，很多题只能说考了哪个知识点；
- 百度申请的是数据挖掘工程师岗位，腾讯申请的是基础研究职位（后来发现给我安排的是深圳腾讯游戏的数据挖掘岗，由此得出的经验教训是，选定期望工作城市后，慎选服从城市调剂，不然都给你拉到深圳去），搜狐申请的是数据挖掘工程师岗位，题目自然与职位有关；
- 我不记得是不是有 A、B 卷之分，但以下内容都被考察过无疑。

接下来，记忆的闸门开始缓缓打开……

<!-- excerpt end -->

##百度笔试

在面试的时候，百度会把已判分的试卷发给你，想不回忆清楚都难。当然，俺还没猥琐到拍照的程度……

1. 举例说 C++ 中继承、多态和组合的应用。
2. 进程间通信方法，列举至少三种。
3. 写贝叶斯公式，描述朴素贝叶斯的分类方法。
4. X、Y 是向量，每一维上的元素都服从 N(0, 1)，计算他们的相关系数 Z
	- 求 Z 的期望和标准差（求职季笔试里见过的最有趣的一问，解答见我的博文[《面试经验分享之智力题》](http://frank19900731.github.io/wx/2014-11-07-mian-shi-jing-yan-fen-xiang-zhi-zhi-li-ti.html) 中的题目五）；
	- 编程用蒙特卡洛方法计算期望和标准差。
5.  豆瓣音乐，评分不同，但是想要随机播放概率和评分成正比，设计随机算法并代码实现。
6. 给出一次函数、二次函数…… n 次函数回归的损失函数，推导随机梯度下降公式，简述模型/参数选择标准和选择机制。

##腾讯笔试

25 道选择题只回忆了两道，因为与之相关的知识点掌握得不熟，其他题目大都是 C++ 面向对象编程的常见题。

1. 关于虚基类构造函数的调用顺序。
2. 预编译指令 [#pragma pack](http://baike.baidu.com/view/2317161.htm?fr=aladdin) 的考察，给出一个结构体，问占用多大空间。

笔答题有三道

1. 求三阶矩阵行列式。
2. 根据用户的满足感、荣誉感、挫折感及失望感建模用户口碑。
3. 预测即将流失的用户，一种方法是使用 SQL 在数据库中查询，提取近三个月登陆次数递减的用户，交给客服处理
	- 可否这么做；
	- 不然要怎么做。

##搜狐笔试

笔试题目范围非常广泛，涉及机器学习、网络编程、hadoop、C++、多线程和智力题。

1. [小白鼠喝毒水问题](http://blog.csdn.net/mengtnt/article/details/8477747)
2. [hadoop 在 HDFS 上文件存储的默认冗余参数是3](http://f.dataguru.cn/forum.php?mod=viewthread&tid=34799&highlight=)。
3. 两个线程同时累加一个全局变量，比如利用 for 循环进行 50 次自增操作，问该该全局变量的最终结果范围。
4. [TCP 的三次握手，四次挥手](http://www.cnblogs.com/hnrainll/archive/2011/10/14/2212415.html)。
5. 关于 TCP 双方关闭连接，涉及到 [TIME_WAIT](http://blog.csdn.net/samulelin/article/details/3957118) 的概念。
6. SVM、条件随机场、隐马尔科夫模型、最大熵模型中，哪个是生成式模型？应该是隐马尔科夫模型[^1]。
7. 还是以上四个模型，哪个模型不符合凸模型+有全局最优解的条件？应该还是隐马尔科夫模型。
8. 贝叶斯网络是有向无环图。
9. 分词中最大正向匹配，最大逆向匹配的概念。
10. linux 平台下有一个三列文件，列之间用逗号分隔，请编程对第二列数字求和。
11. 左值不能赋值。
12. hadoop 默认 block 大小是 64M，JobTracker 和 NameNode在同一台机器上。
13. hadoop 采用 Combiner、采用压缩率高的文件格式以及在 map 过程中去掉无效数据都是为了减少数据传输量，与这些优化方法不同的是优化 Partitioner，因为它是为了均衡数据量，而非减少数据量。
14. 熵的计算公式和熵最大的条件。
15. [复杂链表的复制](http://www.cnblogs.com/daniagger/archive/2012/06/19/2555321.html)，所谓复杂是指一个节点除了指向后继，还随机指向链表中的一个节点或 NULL。
16. 问如下代码的输出，其实就是统计二进制表示中 1 的个数。

``` cpp 题目
int a = 9999;
int count = 0;
while(a) {
	count++;
	a = a & (a-1);		
}
cout<<count<<endl;
```

[^1]:参考资料为：[Discriminative model](http://en.wikipedia.org/wiki/Discriminative_model)，[判别式模型与生成式模型](http://blog.csdn.net/wolenski/article/details/7985426#0-tsina-1-17355-397232819ff9a47a7b7e80a40613cfe1)。