---
layout: wx-default
title: "我的第一篇 Octopress 博客"
date: 2014-08-24 21:50:56 +0800
comments: false
categories: [网页开发]
tags: [octopress, kramdown syntax]
keywords: octopress, kramdown syntax
exclude_from_search: true
pc_url: /blog/2014/08/24/wo-de-di-yi-pian-octopress-bo-ke/
wx_url: /wx/2014-08-24-wo-de-di-yi-pian-octopress-bo-ke.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

##段落分级
以 # 的个数表示段落层次。

``` objc 段落分级
# 第一级目录
## 第二级目录
### 第三级目录
#### 第四级目录
##### 第五级目录
###### 第六级目录
```
还可以表示为

```
第一级标题
===============

第二级标题
---------------
```

##BlockQuote
* 方法一： 使用 >

``` objc 使用 >
> A sample blockquote.
>
> >Nested blockquotes are
> >also possible.
>
> This is the outer quote again.
```

> A sample blockquote.
>
> >Nested blockquotes are
> >also possible.
>
> This is the outer quote again.

在 blockquote 中添加诸如 header 等的块级元素无妨。

* 方法二：使用 blockquote 作标记

``` objc 使用 blockquote 标签
{% blockquote Bobby Willis http://google.com/search?q=pants the search for bobby's pants %}
Wheeee!
{% endblockquote %}
```

{% blockquote Bobby Willis http://google.com/search?q=pants the search for bobby's pants %}
Wheeee!
{% endblockquote %}

<!-- excerpt end -->

##代码展示
* 方法一：缩进一个 tab

``` objc 使用缩进展示代码
	System.out.println("Hello World!");
```

	System.out.println("Hello World!");

* 方法二：使用波浪线

``` objc 使用波浪线展示代码
~~~~~~
This is also a code block.
~~~
Ending lines must have at least as
many tildes as the starting line.
~~~~~~~~~~~~
```

~~~~~~
This is also a code block.
~~~
Ending lines must have at least as
many tildes as the starting line.
~~~~~~~~~~~~

* 方法三：使用连续 3 个 ` 作标记

``` objc 使用连续3个 ` 展示代码
3` objc Obj-C 用例 https://github.com/frank19900731/ObjcDemo/blob/master/ObjcDemo/Animal.m Github
#import "Animal.h"

@implementation Animal

+ (void)description
{
    NSLog(@"I'm a cute animal.");
}
@end
3`
```

``` objc Obj-C 用例 https://github.com/frank19900731/ObjcDemo/blob/master/ObjcDemo/Animal.m Github
#import "Animal.h"

@implementation Animal

+ (void)description
{
    NSLog(@"I'm a cute animal.");
}
@end
```

[支持的语言](http://pygments.org/docs/lexers/) 

* 方法四：导入文件中的代码

```objc 导入文件中的代码
{% include_code Test.js for download test.js %}
```

{% include_code Test.js for download test.js %}

* 方法五：导入 gist 中的代码

``` objc 导入 gist 中的代码
{% gist 4321346 gistfile1.diff %}
```

{% gist 4321346 gistfile1.diff %}

``` objc 导入 gist 中的代码
{% gist 1059334 svg_bullets.rb %}
{% gist 1059334 usage.scss %}
```

{% gist 1059334 svg_bullets.rb %}
{% gist 1059334 usage.scss %}

* 方法六：使用 codeblock 作标记

``` objc 使用 codeblock 展示代码
{% codeblock Coffeescript Tricks %}

# Given an alphabet:
alphabet = 'abcdefghijklmnopqrstuvwxyz'

# Iterate over part of the alphabet:
console.log letter for letter in alphabet[4..8]
{% endcodeblock %}
```

{% codeblock Coffeescript Tricks %}

# Given an alphabet:
alphabet = 'abcdefghijklmnopqrstuvwxyz'

# Iterate over part of the alphabet:
console.log letter for letter in alphabet[4..8]
{% endcodeblock %}

##使用 Inline Code

``` objc 使用 Inline Code
Use `Kramdown::Document.new(text).to_html`
to convert the `text` in kramdown
syntax to HTML.

Use backticks to markup code,
e.g. `` `code` ``.
```

Use `Kramdown::Document.new(text).to_html`
to convert the `text` in kramdown
syntax to HTML.

Use backticks to markup code,
e.g. `` `code` ``.

##使用脚注

我的脚注[^1]

##使用目录

``` objc 使用目录
* list element with functor item
{:toc}
```

* list element with functor item
{:toc}

##使用数学公式

``` objc 使用数学公式
random variables $$X_1, X_2, X_3$$ from

$$
\begin{align}
\mbox{Union: } & A\cup B = \{x\mid x\in A \mbox{ or } x\in B\} \\
\mbox{Concatenation: } & A\circ B  = \{xy\mid x\in A \mbox{ and } y\in B\} \\
\mbox{Star: } & A^\star  = \{x_1x_2\ldots x_k \mid  k\geq 0 \mbox{ and each } x_i\in A\} \\
\end{align}
$$
```

random variables $$X_1, X_2, X_3$$ from

$$
\begin{align}
\mbox{Union: } & A\cup B = \{x\mid x\in A \mbox{ or } x\in B\} \\
\mbox{Concatenation: } & A\circ B  = \{xy\mid x\in A \mbox{ and } y\in B\} \\
\mbox{Star: } & A^\star  = \{x_1x_2\ldots x_k \mid  k\geq 0 \mbox{ and each } x_i\in A\} \\
\end{align}
$$

``` objc 
The following is a math block:

$$ 5 + 5 $$

But next comes a paragraph with an inline math statement:

\$$ 5 + 5 $$
```

The following is a math block:

$$ 5 + 5 $$

But next comes a paragraph with an inline math statement:

\$$ 5 + 5 $$

##使用链接

``` objc 使用链接
[Jekyll](http://www.jekyllrb.com) is a very popular and very powerful static blog generator. Out of the box it's able to generate sophisticated site structures, and has a ton of configurability. One of the areas where I feel that Jekyll lacks some sophistication is around the handling of categories and tags; these are two data-sets that are core to Jekyll, but there isn't a lot of functionality actually built around them. This is in contrast to dynamic blogging platforms like [WordPress](http://www.wordpress.com), or possibly [Drupal](http://www.drupal.org), where these two data points are used to drive a lot of central navigation for the site.
```

[Jekyll](http://www.jekyllrb.com) is a very popular and very powerful static blog generator. Out of the box it's able to generate sophisticated site structures, and has a ton of configurability. One of the areas where I feel that Jekyll lacks some sophistication is around the handling of categories and tags; these are two data-sets that are core to Jekyll, but there isn't a lot of functionality actually built around them. This is in contrast to dynamic blogging platforms like [WordPress](http://www.wordpress.com), or possibly [Drupal](http://www.drupal.org), where these two data points are used to drive a lot of central navigation for the site.

##使用图片

``` objc 使用图片
{% img imgright http://placekitten.com/320/250 40% Place Kitten #2 %}
```

{% img imgright http://placekitten.com/320/250 40% Place Kitten %}

``` objc 使用图片
{% img imgcenter http://placekitten.com/300/500 40% 'Place Kitten #4' 'An image of a very cute kitten' %}
```

{% img imgcenter http://placekitten.com/300/500 40% 'Place Kitten #4' 'An image of a very cute kitten' %}

``` objc 使用图片
{% img imgleft /img/portrait.jpg 40% My Cartoon Portrait %}
```

{% img imgleft /img/portrait.jpg 40% My Cartoon Portrait %}

##使用 pullquote

``` objc 使用 pullquote
{% pullquote %}
Surround your paragraph with the pull quote tags. Then when you come to
the text you want to pull, {" surround it like this "} and that's all there is to it.
{% endpullquote %}
```

{% pullquote %}
Surround your paragraph with the pull quote tags. Then when you come to
the text you want to pull, {" surround it like this "} and that's all there is to it.
{% endpullquote %}

##使用表格

``` objc 使用表格
<div markdown='1' class='foo'>|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|

</div>
```

<div markdown='1' class='foo'>|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|

</div>

##使用 Horizontal Rules

``` objc 使用 Horizontal Rules
* * *

---

  _  _  _  _

---------------
```

* * *

---

  _  _  _  _

---------------

##使用列表

* 方法一：使用数字

``` objc 使用数字
1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two
```

1. Item one
   1. sub item one
   2. sub item two
   3. sub item three
2. Item two

* 方法二：使用 *

``` objc 使用 */+/-
* Item one
+ Item two
- Item three
```

* Item one
+ Item two
- Item three

##使用定义列表

``` objc 使用定义列表
term
: definition
: another definition

another term
and another term
: and a definition for the term
```

term
: definition
: another definition

another term
and another term
: and a definition for the term

##为块级元素添加 attribute

``` objc 添加一个属性
> A nice blockquote
{: .class1 .class2}
```

> A nice blockquote
{: .class1 .class2}

``` objc 添加多个属性
{:refdef: .c1 #id .c2 title="title"}
paragraph
{: refdef .c3 title="t" #para}
```

{:refdef: .c1 #id .c2 title="title"}
paragraph
{: refdef .c3 title="t" #para}

##为 inline 元素添加 attribute

``` objc 为内嵌元素添加 attribute
This is *red*{: style="color: red"}.
```

This is *red*{: style="color: red"}.

##使用扩展

``` objc 使用扩展
This is a paragraph
{::comment}
This is a comment which is
completely ignored.
{:/comment}
... paragraph continues here.

Extensions can also be used
inline {::nomarkdown}**see**{:/}!
```

This is a paragraph
{::comment}
This is a comment which is
completely ignored.
{:/comment}
... paragraph continues here.

Extensions can also be used
inline {::nomarkdown}**see**{:/}!

**Notes**

* comment
	* Treat the body text as a comment which does not show in the output.

* nomarkdown
	* Don't process the body with kramdown but output it as-is. The attribute type specifies which converters should output the body: if the attribute is missing, all converters should output it. Otherwise the attribute value has to be a space separated list of converter names and these converters should output the body.

* options
	* Should be used without a body since the body is ignored. Is used for setting the global options for the kramdown processor (for example, to disable automatic header ID generation). Note that options that are used by the parser are immediately effective whereas all other options are not! This means, for example, that it is not possible to set converter options only for some part of a kramdown document.

##使用文字修饰

``` objc 使用文字修饰
*Emphasized*
_Emphasized_
**Strong**
__Strong__
```

*Emphasized*

_Emphasized_

**Strong**

__Strong__

##使用 Typographic Symbols

``` objc 使用 Typographic Symbols
--- will become an em-dash (like this —)
-- will become an en-dash (like this –)
... will become an ellipsis (like this …)
<< will become a left guillemet (like this «) – an optional following space will become a non-breakable space
>> will become a right guillemet (like this ») – an optional leading space will become a non-breakable space
```

--- will become an em-dash (like this —)

-- will become an en-dash (like this –)

... will become an ellipsis (like this …)

\<\< will become a left guillemet (like this «) – an optional following space will become a non-breakable space

\>\> will become a right guillemet (like this ») – an optional leading space will become a non-breakable space

<hr>

[^1]:我的脚注