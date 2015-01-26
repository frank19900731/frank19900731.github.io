---
layout: post
title: "Mac 下安装 WeCenter 并添加代码高亮功能"
date: 2015-01-26 02:02:10 +0800
comments: true
categories: [工作效率]
tags: [问答系统, 知识管理, WeCenter]
keywords: 问答系统, 知识管理, Mac, PHP, Server, WeCenter, 代码高亮, FreeType
pc_url: /blog/2015/01/26/mac-xia-an-zhuang-wecenter-bing-tian-jia-dai-ma-gao-liang-gong-neng/
wx_url: /wx/2015-01-26-mac-xia-an-zhuang-wecenter-bing-tian-jia-dai-ma-gao-liang-gong-neng.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 为什么选择 WeCenter

最近考虑将部分笔记任务从 Ulysses 中分离出来，于是想到给自己建一个类似知乎的问答系统。我会将对一些**技术问题的解决和概念理解**录入问答系统，可视化界面和搜索功能方便自己日后查看、查询。

一圈 [选下来](http://www.oschina.net/project/tag/299/qa)，觉得 WeCenter 不错，主要考虑到

- 界面更美观，也有 [模板](http://www.wecenter.com/category/templates/)，无须太多定制；
- PHP + mysql + Bootstrap，对我而言二次开发上手容易些；
- 功能、界面与知乎类似，满足我的全部需求。

## WeCenter 安装

接下来就是 [下载](http://www.wecenter.com/downloads/) 安装。WeCenter 要求 PHP 支持 FreeType 以显示验证码，而 Mac 自带的 PHP 无此支持，所以需要重新编译 PHP。

采用 homebrew 安装方式，方便今后管理 PHP 的其它扩展支持，具体安装方式如下。

<!-- excerpt end -->

```bash 使用 brew 编译安装 PHP
brew update
brew tap homebrew/dupes
brew tap josegonzalez/homebrew-php
brew install php55 --with-gmp --with-imap --with-tidy --with-debug --with-mysql=/usr/local/mysql --without-snmp
```

mysql 是我从 [官网](http://dev.mysql.com/downloads/mysql/) 下载安装包安装的，默认路径是 `/usr/local/mysql`；`--without-snmp` 选项的加入可以消除 **Error 139 - make: *** [ext/phar/phar.php]** 的编译问题，不影响后续使用。关于这个编译问题，网上有说可以通过 `brew uninstall openssl` 解决，不过尝试无效，还有说清空 brew 所有安装，感觉代价太大了……

`brew options php55` 查看其它编译选项。brew 会自动下载安装 FreeType、jpeg 等模块，然后编译 PHP 5.5。 

编译成功后，在 `/usr/local/Cellar/php55/5.5.20/libexec/apache2` 目录下会存在一个名为 `libphp5.so` 的模块，可用于在 apache 的配置文件中替换系统 PHP。

我所使用的 apache 是 [Server](http://www.apple.com/osx/server/)  自带的，考虑到它提供很多应用支持，比如 VPN、Wiki 等。配置文件不是通常的 httpd.conf，而是 `/Library/Server/Web/Config/apache2/httpd_server_app.conf`，修改如下。

```bash 修改 apache 配置文件
# LoadModule php5_module libexec/apache2/libphp5.so
LoadModule php5_module /usr/local/Cellar/php55/5.5.20/libexec/apache2/libphp5.so
```

当然，要注意配置文件修改前后 apache 的关闭与重启。

## 代码高亮定制

WeCenter 基本设置容易上手，[社区](http://wenda.wecenter.com/) 里有不少介绍，只是在代码高亮定制方面，官方未提供，社区讨论也少，缺乏适用于新版本 WeCenter 的方法。在这个 [问题](http://wenda.wecenter.com/question/22147) 的启发下，自己初步实现了**对 WeCenter 3.0.2 的代码高亮支持**。

[问题](http://wenda.wecenter.com/question/22147) 中的做法是使用 [GeSHi](http://qbnz.com/highlighter/) 进行代码渲染，MediaWiki 选用的也是这个。将 [问题](http://wenda.wecenter.com/question/22147) 提供的 [代码](http://wenda.wecenter.com/file/download/file_name-U2VydmljZXMuemlw__url-aHR0cDovL3dlbmRhLndlY2VudGVyLmNvbS91cGxvYWRzL3F1ZXN0aW9ucy8yMDE1MDEyNC9jMzIxNzNkZWY5MzA2N2IwMjFhYjIzMDUyYmNiYTZmYQ==) 解压缩到 `wecenter-root/system/Services` 中，**注意不要覆盖 Markdown.php**，我们要自己修改，操作步骤如下，文末附有参考代码压缩包。


- 在 Markdown.php 头部引入 GeSHi Parser。

```php 引入GeSHi Parser
include(dirname(dirname(__FILE__)) . '/Services/geshi/geshi.php');

// Load umodified Michel Fortin's PHP Markdown Extra: http://michelf.com/projects/php-markdown/
define('MARKDOWN_PARSER_CLASS',  'MarkdownExtraGeshi_Parser');
include(dirname(dirname(__FILE__)) . '/Services/markdown_extra/markdown.php');
```

- 原样添加 [问题](http://wenda.wecenter.com/question/22147) 代码中调用 GeSHi Parser 进行代码解析的函数 syntaxHighlight 。

```php 调用 GeSHi Parser 进行代码解析
protected function syntaxHighlight($matches)
{
	$geshi = new GeSHi($matches[3], empty($matches[2]) ? "txt" : $matches[2]);
	return $geshi->parse_code();
}
```

- 修改 _doCodeBlocks_callback 函数。

```php _doCodeBlocks_callback
protected function _doCodeBlocks_callback($matches) {
	$codeblock = $matches[1];

	# outdent 会去掉行首tab/多空格，不采用，直接按照输入代码样式来，建议代码缩进为2空格
	// $codeblock = $this->outdent($codeblock);
	// $codeblock = htmlspecialchars($codeblock, ENT_NOQUOTES);

	# trim leading newlines and trailing newlines
	$codeblock = preg_replace('/\A\n+|\n+\z/', '', $codeblock);
	
	# 替换特殊字符，可能不完善
	$codeblock = str_replace(array(
		'&lt;',
		'&quot;',
		'&amp;'
	), array(
		'<',
		'"',
		'&'
	), $codeblock);

	## call geshi to render the code
	$codeblock = preg_replace_callback(
		'/^(\{\{lang:([\w]+)\}\}\n|)(.*?)$/s', // {{lang:...}}greedy_code
		array($this, 'syntaxHighlight'),
		$codeblock
	);

	// 将代码每一行包裹入 <p>
	$codeblock = preg_replace('/^(.+?)$/m', '<p>${1}</p>', $codeblock);
	$codeblock = str_replace(array( # 特殊处理第一行和最后一行
		'style="font-family:monospace;">',
		'</pre>'
	), array(
		'style="font-family:monospace;"><p>',
		'</p></pre>'
	), substr($codeblock, 3, strlen($codeblock) - 7));

	# GeSHi 已添加 <pre> 标签
	// $codeblock = "<pre class=\"prettyprint\">$codeblock\n</pre>";

	# 输出测试
	// $fp = fopen("/Library/Server/Web/Data/Sites/Default/qa/test.txt", 'w');
	// fwrite($fp, $codeblock);
	// fclose($fp);

	return $this->hashBlock($codeblock);
}
```

- 修改样式代码 `wecenter-root/static/css/default/common.css`，使超过显示区域长度的代码可横向滚动查看。

```css 修改 common.css
/* 注释掉下面这一行，两个选择器分开写，.wmd-preview pre 不变，.markitup-box pre 的 overflow 属性为 scroll */
/*.wmd-preview pre, .markitup-box pre {padding: 16px;line-height: 20px;overflow: hidden; border: none; border-radius: 3px; background-color: #f7f7f7;font-size: 14px;}*/
.wmd-preview pre {padding: 16px;line-height: 20px;overflow: hidden; border: none; border-radius: 3px; background-color: #f7f7f7;font-size: 14px;}
.markitup-box pre {padding: 16px;line-height: 20px;overflow: scroll; border: none; border-radius: 3px; background-color: #f7f7f7;font-size: 14px;}

...


/* 末尾添加自定义属性  */
.markitup-box pre > p {
	display: inline-block;
	padding: 0 !important;
}
```

- 在 \{\{\{ 与 \}\}\} 间先输入 \{\{lang:php\}\}，表示以下为 PHP 代码（其它格式可参见 [GeSHi 官网](http://qbnz.com/highlighter/) 左边栏），然后正常输入代码并显示。

```robotframework 输入代码评论
protected function _doImages_inline_callback($matches) {
  $whole_match = $matches[1];
  $alt_text = $matches[2];
  $url = $matches[3] == '' ? $matches[4] : $matches[3];
  $title = &$matches[7];



  $alt_text = $this->encodeAttribute($alt_text);
  $url = $this->encodeAttribute($url);
  $result = "<img src=\"$url\" alt=\"$alt_text\"";
  if (isset($title)) {
    $title = $this->encodeAttribute($title);
    $result .= " title=\"$title\""; # $title already quoted
  }
  $result .= $this->empty_element_suffix;



  return $this->hashPart($result);
}
```

显示效果如下。

{% img imgcenter /img/post/2015-1/15.png 90% 代码显示效果 %}

注意到我们的代码输入采用两空格缩进，显示起来较美观；想设置 n 空行，在代码输入中应有 n+2 空行。

至此，初步实现了 WeCenter 3.0.2 中的代码高亮功能，剩余工作就是在实践中微调，比如 **Shell 脚本行注释的 # 可能会被 Markdown 解析成标题**，可以自定义转义进行处理，诸如此类。

## 参考代码

附 [参考代码](/downloads/file/Services.rar)。