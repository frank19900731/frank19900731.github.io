---
layout: wx-default
title: "《Open Workshop — Scala 从零到入门》课堂笔记"
date: 2014-11-23 09:56:19 +0800
comments: false
categories: [编程学习]
tags: [Open Workshop, Scala]
keywords: Akka, Spark, Scala, ThoughtWorks, 培训
exclude_from_search: true
pc_url: /blog/2014/11/23/open-workshop-scalacong-ling-dao-ru-men-ke-tang-bi-ji/
wx_url: /wx/2014-11-23-open-workshop-scalacong-ling-dao-ru-men-ke-tang-bi-ji.html
---


__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

##关于 ThoughtWorks

从 [活动行](http://www.huodongxing.com/event/1256701125300) 上了解到有这么一门关于 Scala 的入门培训，周六闲来无事也就去了。一来因为 Scala 语言有 Spark 这样的杀手级应用，自己正要了解学习，二来想体验一些业界培训的氛围。

东直门地铁站 D 口一出就能望见国华投资大厦，活动主办方 ThoughtWorks 在 1105 室。进了公司感觉规模不小，于是在培训开始前查了一下 [ThoughtWorks](http://baike.baidu.com/item/thoughtworks?fr=aladdin) 是干啥的，顿时感觉自己孤陋寡闻了。本次活动的讲师是 ThoughtWorks 的员工吴雪峰，他是 Scala 的大牛，在 github 上有分享一些 [培训材料](https://github.com/XuefengWu/ScalaTraining)。

培训从早上九点开始，晚上六点结束，**包学包问包午饭**。培训中间穿插了一些 Social 环节，比如自我介绍，闲话讨论，让人感受到码农大家庭的温暖。有小二十个同学参与了此次活动，都是对 Scala 感兴趣或工作当中要用到，除了我和另外一个叫张淞的同学（[《Haskell函数式编程入门》](http://book.douban.com/subject/25843224/)的作者）还没工作，其他都是有业界开发经验的人员。有些人已经用了一阵子 Scala，有些人刚配置好环境，比如俺，不过幸好之前看过 [《Haskell 趣学指南》](http://book.douban.com/subject/25803388/)，能够跟上老师节奏。

在 Scala 培训进行的同时，还有一个 [Open Party](http://www.beijing-open-party.org/event/32) 在公司里举行，加之自己所经历的这次周到细致的培训，我对 ThoughtWorks 这家公司越发好奇。进一步查询获知，ThoughtWorks 举办的分享、报告非常频繁，质量、反响也很好，这其中的推动力是什么呢？

也许公司自有或长期或短期的利益因素考量，但除此之外，我作为一个小白用户，在他们的活动中学到了知识，认识了同路人，还写了这篇文章分享、宣传，这样的效果应该也是 ThoughWorks 所乐见的吧。知乎上有人提问 [在 ThoughtWorks 工作是怎样一种体验？](http://www.zhihu.com/question/24738030)，从回答的字里行间我也看到了对“推动力”问题的解答。

总而言之，对 ThoughtWorks 举办的这次活动表示感谢~

<!-- excerpt end -->

##培训记录

老师讲的东西到自己的耳朵脑子里，从脑子到笔记，从笔记再到需要字斟句酌的博客文章，这中间会有很多损耗，另限于表达能力和理解能力，仅能保证记录下随堂练习、一些知识要点和学习资料，**建议大家有机会还是亲自报名体验**。

吴雪峰老师大致是按照如下的思维导图来讲述的，分四节课，前三节各一小时，第四节两个多小时……

{% img imgcenter /img/post/2014-11/1.bmp 80% Scala 介绍思维导图 %}

###第一小节

Scala 允许面向对象编程和函数式编程结合起来，使用后者代码更加简练优美。代码编写效率上，Scala 优于 Java，但都会被编译成 JVM 字节码运行。因为有**杀手级应用 Spark 和 Akka**，所以 Scala 近来越来越受重视。ThoughtWorks 北京接手的 Scala 项目基本都是为了满足客户的数据处理需求。

基本数据类型和语法知识简单讲了一下，val 和 var 的区别需要注意，前者声明常量而后者声明变量。出于效率考虑，尽量避免在 Scala 程序中使用 var，记住**不可变的可以共享，可变的不共享**。

接下来是函数式编程的一些概念。

函数是独立存在的值，是**类型为 ParamsType=>ResultType 的变量**，可以作为另一个函数的参数传入，而方法则是类中的行为，一般用 def 关键字声明，**编译器某些场景下会自动把方法封装为一个函数对象来传递**。

如下 add 即为一个函数。

``` scala add 函数
scala> val add: Int => Int =>Int = x => y => x + y
add: Int => (Int => Int) = <function1>
```

一个函数接受另外一个函数作为参数，前者称为高阶函数。**严格地说，在本例中，auto 并不是一个函数，而是方法，第三小节会作解释**。

``` scala 高阶函数
scala> def auto(x:Int, f:Int => Int) = f(x)
auto: (x: Int, f: Int => Int)Int

scala> val add1:Int => Int = x => x + 1
add1: Int => Int = <function1>

scala> add1(2)
res6: Int = 3

scala> auto(3, add1)
res7: Int = 4
```

其中 auto 的返回值类型虽然没有在定义时给出，但 **Scala 可以自动推断出返回值类型**是 Int。auto 函数接收两个参数，x 是 Int 类型的值，f 是将 Int 映射为 Int 的函数，本例中 add1 就是一个满足条件的函数，它将输入参数加一返回。

Scala 中有很多语法糖，比如流式调用，

``` scala Scala 语法糖一
scala> 0.to(10)
res9: scala.collection.immutable.Range.Inclusive = Range(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

scala> 0 to 10
res10: scala.collection.immutable.Range.Inclusive = Range(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

scala> 1+2
res11: Int = 3

scala> 1.+(2)
res12: Int = 3

scala> object o {def add1(x: Int): Int = { x + 1 } }
defined object o

scala> o add1 0
res18: Int = 1
```

再比如 () 操作符默认调用对象的 apply 函数。

```scala Scala 语法糖二
scala> object o {
     | def apply(name: String) = println(s"hi,$name")
     | }
defined object o

scala> o("abc")
hi,abc
```

更多语法糖介绍可以看之前提到的吴老师的培训材料。上例定义的 object 是 Scala 中的单例表达形式，类还是 class。

下面的例子是高阶函数进行判断。

```scala 高阶函数判断
scala> def cond(x:Int, f: Int => Boolean):Boolean = { f(x) }
cond: (x: Int, f: Int => Boolean)Boolean

scala> cond(9, x => x > 8)
res3: Boolean = true

scala> cond(9, _ < 9)
res4: Boolean = false
```

但我们不希望把其中 x 的类型 Int 写死，要求具有泛化能力，可以写成模板形式如下。

```scala 类型泛化
scala> def cond[T](x:T, f:T => Boolean): Boolean = f(x)
cond: [T](x: T, f: T => Boolean)Boolean

scala> cond(10, _ < 9)
<console>:9: error: missing parameter type for expanded function ((x$1) => x$1.$less(9))
              cond(10, _ < 9)
                       ^

scala> cond(10, (_:Int) < 9)
res7: Boolean = false
```

其中 T 可以表示任意合理的类型。因为无法推断出数据类型，所以中间的运行结果出错，指定后运行正确。

接下来讲到 [柯里化](http://baike.baidu.com/view/2804134.htm?fr=aladdin)，也就是

{% blockquote %}
把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，并且返回接受余下的参数且返回结果的新函数的技术。
{% endblockquote %}

上面的高阶函数的柯里化形式为

```scala 函数柯里化
scala> def cond[T](x:T)(f:T => Boolean): Boolean = f(x)
cond: [T](x: T)(f: T => Boolean)Boolean
```

也就是将两个参数分别用括号括起来。函数柯里化有助于我们用函数生成函数，如下例。

```scala 用函数生成函数
scala> val add: Int => Int => Int = x => y => x + y
add: Int => (Int => Int) = <function1>

scala> val add1 = add(1)
add1: Int => Int = <function1>

scala> add1(9)
res0: Int = 10
```

我们用加法函数生成了一个自增一的函数。

关于 callbyname，老师讲解的不详细，不过有一个好的 [参考资料](http://www.cnblogs.com/nixil/archive/2012/05/31/2528068.html) 。与之相对应的概念就是 callbyvalue，区别在于 callbyname 传入的是产生相应结果的过程的入口，而 callbyvalue 传入的是产生好的结果。

**【随堂练习一】**

补全函数，使得判断条件符合时打印 welcome，不符合则什么也不做。

```scala 随堂练习一
scala> def cond[T,U](x:T)(p:T => Boolean)(f: () => U): Unit = ???
```

**解答：**

```scala 随堂练习一解答
scala> def cond[T,U](x:T)(p:T => Boolean)(f: () => U): Unit = { if (p(x)) f() }
cond: [T, U](x: T)(p: T => Boolean)(f: () => U)Unit

scala> cond("Hello World")(x => { x.contains("Hello") })(() => { println("Welcome")} )
Welcome
```

###第二小节

列表和元组介绍

```scala 列表和元组
scala> List(1,2,3, "f")
res33: List[Any] = List(1, 2, 3, f)

scala> (1,2,3, "f")
res35: (Int, Int, Int, String) = (1,2,3,f)

scala> res35._2
res36: Int = 2

scala> Tuple3(1,2, "a")
res37: (Int, Int, String) = (1,2,a)
```

**【随堂练习二】**

打印函数的运行时间。

```scala 随堂练习二
def recordTime[T](msg: String)(body: => T):T = ???
```

**解答：**

```scala 随堂练习二解答
import scala.compat.Platform

def recordTime[T](msg: String)(body: => T):T = {
	var t1 = Platform.currentTime
	var result = body
	var t2 = Platform.currentTime
	// println(msg + " spend time " + (t2 - t1).toString + " ms")
	println(s"$msg spend time ${t2 - t1} ms")
	result
}

def body() {
	(0 to 3000000).map(_.toLong).reduce(_ + _)
}

recordTime("List")(body)
```

思路是调用待测函数，记录运行结果作为返回值，过程中记录运行时间并输出。

定义一个函数变量，并查看其类型

```scala 函数变量定义，查看类型
scala> val add: Int => Int => Int = x => y => x + y
add: Int => (Int => Int) = <function1>

scala> :type add
Int => (Int => Int)
```

然而方法本身并不是一个值，也是没有类型的，需要加 _ 变成函数才能查看相应函数的类型。

```scala 方法转变为函数，查看类型
scala> def add(x:Int)(y:Int) = x + y
add: (x: Int)(y: Int)Int

scala> :type add
<console>:9: error: missing arguments for method add;
follow this method with `_' if you want to treat it as a partially applied function
              add
              ^

scala> :type add _
Int => (Int => Int)
```

接下来吴老师讲了一个租借的实例，大概想法是打开文件流，内容供你使用，但关闭是由程序自身负责的。

```scala Scala 租借
scala> import java.io.InputStream
import java.io.InputStream

scala> def lend[T](in: InputStream)(f: InputStream => T):T = {
     | val res = f(in)
     | in.close()
     | res
     | }
lend: [T](in: java.io.InputStream)(f: java.io.InputStream => T)T
```

由此引申出，Scala 中 对 Java的调用是很容易的，反之则比较难，因为前者特性更加丰富。

**【随堂练习三】**

分级别打印 log，要求代码尽量精简。

**解答：**

```scala 随堂练习三解答
def log(level: String)(content: => String):Unit = {
	println(s"[$level]$content")
}

def debug(msg: => String) = log("Debug")(msg)
def info(msg: => String) = log("Info")(msg)
def warning(msg: => String) = log("Warning")(msg)
def error(msg: => String) = log("Error")(msg)
```

这里 log 可以被称为偏函数，运用了用函数生成函数的思路。

###第三小节

吴老师简要讲解了一下 Future，给出了一个示例，当然，关于多线程、高并发的处理还得自己深入去研究啦。

```scala Future 示例
scala> import scala.concurrent.Future
import scala.concurrent.Future

scala> import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.ExecutionContext.Implicits.global

scala> val f = Future{ Thread.sleep(1000); println("Hello"); "hi" }
f: scala.concurrent.Future[String] = scala.concurrent.impl.Promise$DefaultPromise@464daa7d

scala> Hello


scala> f.value
res0: Option[scala.util.Try[String]] = Some(Success(hi))
```

Scala 中也可以使用闭包，示例如下。

```scala Scala 中的闭包
scala> def makeIncreaser(start: Int, step: Int): () => () => Int = {
     | var count = start
     | () => {
     | count += step
     | () => count
     | }
     | }
makeIncreaser: (start: Int, step: Int)() => () => Int

scala> makeIncreaser(0, 3)
res47: () => () => Int = <function0>

scala> res47()
res48: () => Int = <function0>

scala> res47()()
res49: Int = 6
```

上一小节最后的 log 函数是一个偏函数，还有一种函数形式是函数组合。所谓函数组合就是把多个函数联结在一起，共同完成一项任务。示例见随堂练习四。

**【随堂练习四】**

将字符串转为整数类型，并加一，函数声明如下。

```scala 随堂练习四
def str2Int(s:String): Int = s.toInt
def add1(x: Int): Int = x + 1
def addThen(f: String => Int)(g: Int => Int): String => Int = ???
```

**解答：**

```scala 随堂练习四解答
def str2Int(s:String): Int = s.toInt
def add1(x: Int): Int = x + 1
def addThen(f: String => Int)(g: Int => Int): String => Int = {
	x: String => add1(f(x))
}

val f = addThen(str2Int)(add1)
println(f("12"))
```

为了提高泛化能力，函数组合 andThen 的更一般形式如下

```scala andThen 泛化
scala> def add1(x: Int) = x + 1
add1: (x: Int)Int

scala> def addThen[A,B,C](f: A => B)(g: B => C): A => C = { x => g(f(x)) }
addThen: [A, B, C](f: A => B)(g: B => C)A => C

scala> var f = addThen(add1)(add1)
f: Int => Int = <function1>

scala> f(1)
res55: Int = 3
```

接下来讲解的是 pattern match，因为用过 Haskell，这里我再熟悉不过了。

用 pattern match 实现斐波那契数列

```scala 斐波那契数列
def fib(n: Int): Int = n match {
	case 0 => 0
	case 1 => 1
	case _ => fib(n-2) + fib(n-1)
}

println(fib(5))
```

用 pattern match 实现过滤器

```scala 实现 Filter
def filter[A](l: List[A], p: A => Boolean): List[A] = l match {
	case Nil => Nil
	case x :: xs => {
		if (p(x))
			x :: filter(xs, p)
		else
			filter(xs, p)
	}
}

def fil(x: Int): Boolean = { x < 5 }

val result = filter((0 to 9).toList, fil)
result.foreach(println)
```

用 pattern match 实现快速排序

```scala 快速排序
def quicksort(xs: List[Int]): List[Int] = {
	xs match {
		case Nil => Nil
		case x :: Nil => xs
		case pivot :: tail => 
			val (low, high) = tail.partition(_ < pivot)
			quicksort(low) ::: pivot :: quicksort(high)
	}
}

val randoms = (0 to 20).map(_ => scala.util.Random.nextInt(100)).toList
val sorted = quicksort(randoms)
randoms.foreach(n => (print(n), print(" ")))
println()
sorted.foreach(n => (print(n), print(" ")))
```

###第四小节

最后一小节讲得比较杂，吴老师用到了很多他自己培训材料上的内容。**因为对 Scala 了解尚浅，所以很多内容由于理解不深也不方便复述，比如 case class、Monads、Scalaz、Akka 相关**。

本节简要举例讲解了一下 Scala 中的面向对象。引入了 Trait（特质），类似于 Java 中的接口，不过可以定义方法。Scala 有自己的判别机制识别多重继承中的方法冲突。

```scala Scala 面向对象
scala> trait Fly {def fly() = println("fly...") }
defined trait Fly

scala> trait Eat {def eat() = println("eat...") }
defined trait Eat

scala> class Duck extends Fly with Eat
defined class Duck

scala> new Duck
res1: Duck = Duck@5511e6b9

scala> res1.eat
eat...

scala> res1.fly
fly...

scala> trait Fly2 {def fly() = println("fly2...") }
defined trait Fly2

scala> class Bird extends Fly with Fly2
<console>:11: error: class Bird inherits conflicting members:
  method fly in trait Fly of type ()Unit  and
  method fly in trait Fly2 of type ()Unit
(Note: this can be resolved by declaring an override in class Bird.)
       class Bird extends Fly with Fly2
             ^

scala> class Bird extends Fly2
defined class Bird

scala> class Duck extends Bird with Fly {
     | override def fly() = super.fly()
     | }
defined class Duck

scala> new Duck
res4: Duck = Duck@8a10ea2

scala> res4.fly
fly...
```

**【随堂练习五】**

实现 Some 泛型的乘法计算，一种方法是，

```scala 随堂练习五
scala> for {
     | v1 <- opt1
     | v2 <- opt2
     | } yield v1 * v2
```

现请用 flatMap 实现乘法计算。

**解答：**

```scala 随堂练习五解答
opt1.flatMap(v1 => opt2.map(v2 => v1 * v2))
```

###学习材料

这次培训里了解的很多概念只能算是听了个热闹，之后还得通过阅读大量的学习资料来加深理解。**特别是着手写这篇博客的时候，真的是边查资料边写，有些内容一时半会儿搞不懂就暂时不写了**……

除[官方文档](http://docs.scala-lang.org/)，从大家的交流中可以整理出如下资料

- [《Programming in Scala : A Comprehensive Step-by-step Guide, 2nd Edition》](http://book.douban.com/subject/6050104/)
- [《Scala for the Impatient》](http://book.douban.com/subject/7070564/)，中译本为[《快学 Scala》](http://www.douban.com/link2/?url=http%3A%2F%2Fbook.douban.com%2Fsubject%2F19971952%2F&query=%E5%BF%AB%E5%AD%A6scala&cat_id=1001&type=search&pos=0)
- [Learning Scalaz](http://eed3si9n.com/learning-scalaz/index.html)
- [Effective Scala](http://twitter.github.io/effectivescala/)
- [Scala School](http://twitter.github.io/scala_school/index.html)
- [Scala 函数式编程原理公开课](https://www.coursera.org/course/progfun)

##写在最后

晚上六点钟从国华大厦走出来，筋疲力竭，大脑既充实又麻木。一群码农在一个小屋子里一起学习了九个小时，码农的工作很辛苦，码农大多单身，码农经常熬夜加班、长黑眼圈，码农一般秃顶、蓬头垢面，码农善于自嘲（但请外人不要嘲笑某个个人是码农），那么问题来了，怎么还有这么多人要做码农？

我自己的回答是两个词，`热爱` 与 `分享`。**热爱让你心笃定，分享让你不孤单**。不能代表码农整体，但我相信一起学了九个小时的小伙伴们应该会同意我的看法。

唉，一个培训能引发自己这样的感想也是够够儿了，再写就矫情了。