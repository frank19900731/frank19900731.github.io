---
layout: post
title: "2014年8月份第4周总结"
date: 2014-08-31 10:35:49 +0800
comments: true
categories: [个人总结]
tags: []
---

## 代码展示
``` objc Obj-C 用例 https://github.com/frank19900731/ObjcDemo/blob/master/ObjcDemo/Animal.m Github
#import "Animal.h"

@implementation Animal
@synthesize name, birthday;

- (Animal *)initWithParams:(NSString *)n birthday:(NSDate *)b
{
    [self setName:n];
    [self setBirthday:b];
    return self;
}

+ (void)description
{
    NSLog(@"I'm a cute animal.");
}

- (void)eat
{
    NSLog(@"%@ : eat delicious food", self.name);
}

- (void)sleep
{
    NSLog(@"%@ : sleep for a while", self.name);
}
@end
```

[支持的语言]http://pygments.org/docs/lexers/ [^1]

{% include_code Test.js for download test.js %}

{% gist 4321346 gistfile1.diff %}

{% gist 1059334 svg_bullets.rb %}
{% gist 1059334 usage.scss %}

{% codeblock Coffeescript Tricks %}
# Given an alphabet:
alphabet = 'abcdefghijklmnopqrstuvwxyz'

# Iterate over part of the alphabet:
console.log letter for letter in alphabet[4..8]
{% endcodeblock %}

# 1

## 2

### 3

{% blockquote Bobby Willis http://google.com/search?q=pants the search for bobby's pants %}
Wheeee!
{% endblockquote %}

~~~ haskell
main = putStrLn "Hello world"
-- kramdown's tilde fencing
~~~

* list element with functor item
{:toc}

random variables $$X_1, X_2, X_3$$ from

$$
\begin{align}
\mbox{Union: } & A\cup B = \{x\mid x\in A \mbox{ or } x\in B\} \\
\mbox{Concatenation: } & A\circ B  = \{xy\mid x\in A \mbox{ and } y\in B\} \\
\mbox{Star: } & A^\star  = \{x_1x_2\ldots x_k \mid  k\geq 0 \mbox{ and each } x_i\in A\} \\
\end{align}
$$

[Jekyll](http://www.jekyllrb.com) is a very popular and very powerful static blog generator. Out of the box it's able to generate sophisticated site structures, and has a ton of configurability. One of the areas where I feel that Jekyll lacks some sophistication is around the handling of categories and tags; these are two data-sets that are core to Jekyll, but there isn't a lot of functionality actually built around them. This is in contrast to dynamic blogging platforms like [WordPress](http://www.wordpress.com), or possibly [Drupal](http://www.drupal.org), where these two data points are used to drive a lot of central navigation for the site.

To be fair, Jekyll is really intended to be a framework for expansion into larger degrees of customization and sophistication, and thankfully it has a very powerful plugin model. Higher-level frameworks like [Octopress](http://www.octopress.org) and [Jekyll Bootstrap](http://www.jekyllbootstrap.com) have shown what you can do with a little extra tweaking - as have the long list of [Jekyll plugins](https://github.com/mojombo/jekyll/wiki/Plugins).

When I set out to move my site over to Jekyll, one of my key goals was to still support all of the key navigation my site was capable of with my custom platform code, and Wordpress before it. That pretty much amounts to:

* A date descending paging root for all blog entries ([/index.html](/index.html)).
* A matching Atom feed for the root index.
* Static pages like [About](/about.html) and [Contact](/contact.html).
* Individual blog pages (I suppose this one is obvious).
* Date desceding paging indexes for all categories and tags I use (for example: [/category/article/](/category/article) and [/tag/jruby/](/tag/jruby/)).
* Matching atom feeds for each of the paging indexes above (for example: [/category/article/atom.xml](/category/article/atom.xml) and [/tag/jruby/atom.xml](/tag/jruby/atom.xml)).

{% img left http://placekitten.com/320/250 Place Kitten #2 %}

{% pullquote %}
Surround your paragraph with the pull quote tags. Then when you come to
the text you want to pull, {" surround it like this "} and that's all there is to it.
{% endpullquote %}

<div markdown='1' class='foo'>|-----------------+------------+-----------------+----------------|
| Default aligned |Left aligned| Center aligned  | Right aligned  |
|-----------------|:-----------|:---------------:|---------------:|
| First body part |Second cell | Third cell      | fourth cell    |
| Second line     |foo         | **strong**      | baz            |
| Third line      |quux        | baz             | bar            |
|-----------------+------------+-----------------+----------------|

</div>

<hr>

[^1]:脚注