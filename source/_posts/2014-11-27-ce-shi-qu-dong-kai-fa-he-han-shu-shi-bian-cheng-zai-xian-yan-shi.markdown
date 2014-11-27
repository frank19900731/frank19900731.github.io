---
layout: post
title: "《测试驱动开发和函数式编程》在线演示"
date: 2014-11-27 16:08:27 +0800
comments: true
categories: [编程学习]
tags: [TDD, Scala]
keywords: TDD, Scala, 测试驱动开发, 函数式编程, KataAnagram
pc_url: /blog/2014/11/27/ce-shi-qu-dong-kai-fa-he-han-shu-shi-bian-cheng-zai-xian-yan-shi/
wx_url: /wx/2014-11-27-ce-shi-qu-dong-kai-fa-he-han-shu-shi-bian-cheng-zai-xian-yan-shi.html
---

<!-- excerpt start -->

在 Scala 微信群里了解到了 [《万花筒活动: 测试驱动开发和函数式编程 —— 在线代码演示如何对函数式语言 (Scala) 进行测试驱动开发》](http://together.iagile.me/activities/28) 这么一个活动，以在线视频会议的形式举行。跟着讲解抄代码，对 [TDD](http://baike.baidu.com/subview/76310/8243857.htm#viewPageContent)（Test-Driven Development）有了点粗浅的了解。

讲解围绕一道叫 [KataAnagram](http://codingdojo.org/) 的题目展开，用《哈利·波特》里面的例子很好解释。

> Tom Marvolo Riddle => I am Lord Voldemort

上面是一个字母重排的过程。给定一个单词 S 和一个单词列表 L，要求从 L 中找到两个词（可以重复），用这两个词的全体字母重排出 S。

讲者主要是用这道题讲解测试驱动开发的思路流程，顺便讲解一下如何在代码重构时从 Java 转换到函数式编程的思维，而不是从算法角度考虑最优。

讲者开始提到测试驱动开发的大致思路是

1. 写一个失败的测试；
2. 写最简单的代码使得测试通过；
3. 重构代码和测试。

2、3 步骤应该是迭代进行的。从以下测试代码的撰写思路上，可以看到想法的逐层深入。

<!-- excerpt end -->

```scala 测试代码
import org.junit.Assert.assertEquals
import org.junit.Test
import org.scalatest.junit.JUnitSuite

class TestAnagram extends JUnitSuite {

	def assertAnagramEqual(expectedAnagram: List[String], input: String, wordList: List[String]) = {
		val generator = new Anagram(wordList)
		assertEquals(expectedAnagram, generator.generate(input))
	}	
	
	// 处理空单词列表输入
	@Test def empty_word_list_and_input_is_any_word {
		val generator = new Anagram(List())
		assertAnagramEqual(List(), "anyWord", List())
	}
	
	// 处理只含一个元素的单词列表，double 出单词 S
	@Test def one_character_word_list_and_input_is_double_of_this_word {
		assertAnagramEqual(List("a a"), "aa", List("a"))
	}
	
	// 处理只含一个元素的单词列表，不存在符合条件的两单词
	@Test def one_word_list_and_input_has_no_anagram {
		assertAnagramEqual(List(), "bb", List("a"))
	}
	
	// 处理只含一个元素的单词列表，double 时有字母序的变化
	@Test def one_word_list_and_input_has_anagram_with_different_character_order {
		assertAnagramEqual(List("an an"), "anna", List("an"))
	}
	
	// 处理含有两个元素的单词列表，最后一个单词 double 出单词 S
	@Test def two_word_list_and_input_has_anagram_of_second_word {
		assertAnagramEqual(List("a a"), "aa", List("b", "a"))
	}
	
	// 处理含有三个元素的单词列表，最后一个单词 double 出单词 S
	@Test def three_word_list_and_input_has_anagram_of_third_word {
		assertAnagramEqual(List("a a"), "aa", List("c", "b", "a"))
	}
	
	// 处理含有多个元素的单词列表，其中某个单词 double 出单词 S
	@Test def more_than_one_word_list_and_input_has_anagram_of_single_word {
		assertAnagramEqual(List("b b"), "bb", List("c", "b", "a", "d"))
	}
	
	// 处理含有多个元素的单词列表，其中两个单词重排出单词 S
	@Test def two_word_list_and_input_has_anagram_of_both_word {
		assertAnagramEqual(List("a b"), "ab", List("a", "b"))
		assertAnagramEqual(List("a b"), "ab", List("c", "a", "b"))
	}
	
	// 处理含有多个元素的单词列表，其中多对单词重排出单词 S
	@Test def input_has_two_anagrams {
		assertAnagramEqual(List("a bc", "ab c"), "abc", List("a", "bc", "ab", "c"))
		assertAnagramEqual(List("ab ab", "ba ba", "ab ba", "abb a"), "abba", List("ab", "ba", "abb", "d", "a"))
	}
	
}
```

在功能代码的实现方面，经过了多次函数化重构，最后一种比较简单的方式如下。

```scala 功能代码
class Anagram(wordList: List[String]) {

	def generate(input: String): List[String] = {			
			
		def isAnagram(candidates: List[String]) = (candidates.mkString).sorted == input.sorted
		
		def output(anagrams: List[String]) = anagrams.mkString(" ")

		def candidates = List(wordList, wordList).transpose ++ wordList.combinations(2)
		
		return candidates.filter(isAnagram).map(output)
		
	}
}
```

历次重构的过程写起来就比较啰嗦了，不在这里列出。不过从测试代码一点点完善的过程里，能够看出一个大致的思路。

对于一个小问题，如果技艺熟练，完全有可能直接写出功能代码的最简形式，不过对于一个较大规模的项目来说，这种做法确实有优势，学习了。