---
layout: wx-default
title: "Gollum 开机启动配置"
date: 2015-01-02 09:31:32 +0800
comments: false
categories: [工作效率]
tags: [Gollum, Ruby]
keywords: Gollum, Ruby, 开机启动, Rvm, launchctl, Mac
exclude_from_search: true
pc_url: /blog/2015/01/02/gollum-kai-ji-qi-dong-pei-zhi/
wx_url: /wx/2015-01-02-gollum-kai-ji-qi-dong-pei-zhi.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

##Gollum 介绍

[Gollum](https://github.com/gollum/gollum) 是一个轻量级的 Wiki 框架，可以管理以 Git Repository 形式存在的文件夹。相比于 Mediawiki，文档迁移性更灵活，界面也清新美观。支持多种文档格式，包括 Markdown、MediaWiki、Org-mode、Plain Text、reStructuredText、RDoc、Textile 等。

{% img imgcenter /img/post/2015-1/1.png 90% Gollum 界面 %}

Gollum 自带公式输入支持，可自定义 MathJax 的配置；**支持图片拖拽插入**（并自动上传），这是让我觉得很方便的一点。美中不足的是，Gollum 不支持中文命名的文件，所以

- 如果 Git Repository 中包含中文命名文档，则无法正确显示；
- 对于中文名称链接，Gollum 会将该名称**转为拼音形式作为文件名**，相应链接、文档标题也都是拼音；
- 如果上传图片是中文命名的，也无法正确显示。

##安装

按照 [说明](https://github.com/gollum/gollum#installation) 安装即可。

Gollum 安装过程可能会比较慢，或者报 TIME_OUT 错误，可切换至 [淘宝镜像](http://ruby.taobao.org/)。

<!-- excerpt end -->

##配置

###编码错误

编辑文档过程中，特别是使用非 Gollum 网页编辑器编辑文档**并提交**，可能会出现 `incompatible character encodings: UTF-8 and ASCII-8BIT` 编码错误，需要 [修改 gitlab-grit 中的 index.rb 代码的第 176 行](https://github.com/gollum/gollum/issues/843) 如下

```ruby Gollum Encoding Fix
tree_contents[k] = "%s %s\0%s" % [tmode, obj.name.force_encoding('ASCII-8BIT'), sha]
```

也就是加入了强制编码。

gitlab-grit 的路径，如果使用 rvm 的 ruby 安装，是 

`/Users/frank/.rvm/rubies/ruby-X.X.X/lib/ruby/gems/X.X.X/gems/gitlab-grit/lib/grit/index.rb`

如果使用系统 ruby 安装，则是

 `/Library/Ruby/Gems/X.X.X/gems/gitlab-grit/lib/grit/index.rb` 。

###配置本地 MathJax

因为可能离线查看文档，所以最好将 MathJax 的请求引到本地，下载 [MathJax](https://github.com/mathjax/MathJax) 到本地服务器即可，然后修改 Gollum 模板定义。

同上述，文件路径是

`/Users/frank/.rvm/rubies/ruby-X.X.X/lib/ruby/gems/X.X.X/gems/gollum/lib/gollum/templates/layout.mustache`

或

`/Library/Ruby/Gems/X.X.X/gems/gollum/lib/gollum/templates/layout.mustache` 。

第 54 行修改为

```javascript MathJax 请求修改
j.src = '//localhost/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
```

###微调界面

Gollum 的界面定制起来很方便，修改 gollum.css 或者 -\\-css 参数指定都可以。

gollum.css 的路径是

`/Users/frank/.rvm/rubies/ruby-X.X.X/lib/ruby/gems/X.X.X/gems/gollum/lib/gollum/public/gollum/css/gollum.css`

或

`/Library/Ruby/Gems/X.X.X/gems/gollum/lib/gollum/public/gollum/css/gollum.css` 。

标题是 h1 、左浮动，菜单是 ul、右浮动。当标题较长时，二者配合搭配不好看，修改为

```css 标题样式修改
#head h1 {
  font-size: 1.5em;
  /* float: left; */
  line-height: normal;
  /* margin: 0; */
  margin-bottom: 20px;
  padding: 0 0 0 0.667em;
}
```

现在我们改用 custom.css 做两处定制

- 二级列表与一级列表项目上下边缘的长度太大，因为默认样式只定义了 `ul`，没有考虑二级列表的情况，我们希望**多级列表的行是等间距的**；
- 表格内容（`tbody`）没有扩展到整个表格（`table`）区域，视觉效果是表格偏向页面左侧，我们希望**表格居中、内容充满**。

在 Git Repository 的根目录下创建 custom.css，编辑内容为

```css 二级列表与表格居中定制
li > ul {
  margin: 0 !important;
}

.center90 {
	margin: 0 auto !important;
	width: 90%;
	display: table !important;
}

.center80 {
	margin: 0 auto !important;
	width: 80%;
	display: table !important;
}
``` 

`center90` 表示表格宽度占父元素 90% 且居中显示，表格内容充满此区域。

保存 custom.css，此时还看不到正确显示，需要 `git commit` 后查看。

关于表格还要多说一句，如果想实现单元格的**多列/行合并**（columnspan/rowspan），Markdown 是做不到的，可以写 Html 代码，或者改用 MediaWiki 格式的文档。推荐一个 [在线表格生成器](http://www.tablesgenerator.com/)（貌似在墙外），支持 Latex、HTML、Plain Text、Markdown、MediaWiki 格式的表格生成，也可参考 [MediaWiki 的语法](http://pub.lcair.com/index.php?title=MediaWiki%E8%AF%AD%E6%B3%95)。

那么问题来了，如何将表格的类定义为 `center90` 、`center80` ？

MediaWiki 支持直接设置，而 Gollum 使用的 Markdown 编译器则不支持类的设定（本博客使用的 kramdown 是可以的）。一个简单的想法是使用内嵌 JS 代码进行设置，然而由于 Gollum 使用了 [Sanitization Rules](https://github.com/gollum/gollum/blob/master/docs/sanitization.md)（相关代码在 [gollum-lib](https://github.com/gollum/gollum-lib) 中），所以还是需要一番设置的，见下节介绍。

### 嵌入 JS 代码

还是在根目录下，创建 config.rb，编辑内容为

```ruby 让 Gollum 支持 script 标签和 src 属性
sanitizer = Gollum::Sanitization.new
sanitizer.elements.concat ['script'] # Tags
sanitizer.attributes[:all].push 'src' # Attributes
Precious::App.set(:wiki_options, {:sanitization => sanitizer})
```

上段代码的作用是将 script 标签加入白名单，并支持 script 的 src 属性。为什么需要 src 呢，直接在 script 标签里写 JS 代码不行么？

貌似这么直接整确实不行，script 标签里的内容在解析后会被套上一层 `CDATA` 标记，导致 JS 代码无法执行，不过我没有具体研究 CDATA 是什么时候被加进来的。**改用 src 引入 JS 文件的方式是验证通过的**，这样也能让 MD 文档显得比较干净。

重启 Gollum，用 -\\-config 指定 config.rb 的路径即可。

##开机启动

通常步骤就是把在命令行启动的命令写成脚本，[按照一定方式加入开机启动](http://www.tanhao.me/talk/1287.html) 就可以了。然而实际当中被**坑惨了**，主要因为我除了 Octopress 就没怎么用过 ruby。问题有二

- Mac 自带的 ruby 是 2.0.0 的，也就是 `/usr/bin/ruby` 指定的那个，rvm 的版本与之并存，可以通过 `rvm system` 或者 `rvm use X.X.X` 来切换，按照我的 bash 环境变量配置，Gollum 被安装到 rvm 下的 ruby 中；
- launchctl 的运行环境与 bash 不同，即便 `source ~/.bash_profile`，或者 `rvm use X.X.X`，**环境变量里仍然只有系统自带的 ruby**，想用 rvm 的 ruby 就得自己 export PATH。

最后，成功配置开机启动的流程如下。

* `rvm system`，将 Gollum 安装在系统自带 ruby 里；
* 编写 plist 文件

```xml 开机启动 plist 文件
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.frank.loginscript</string>
    <key>ProgramArguments</key>
    <array>
        <string>/Users/frank/Documents/Startup/startup.sh</string>
    </array>
    <key>RunAtLoad</key>
    <true/>
</dict>
</plist>
```

* 创建 /usr/bin/gollum，根据 ruby 的配置加载 Gollum。

```bash /usr/bin/gollum
#!/usr/bin/env ruby_executable_hooks
#
# This file was generated by RubyGems.
#
# The application 'gollum' is installed as part of a gem, and
# this file is here to facilitate running it.
#

require 'rubygems'

version = ">= 0"

if ARGV.first
  str = ARGV.first
  str = str.dup.force_encoding("BINARY") if str.respond_to? :force_encoding
  if str =~ /\A_(.*)_\z/ and Gem::Version.correct?($1) then
    version = $1
    ARGV.shift
  end
end

gem 'gollum', version
load Gem.bin_path('gollum', 'gollum', version)
```

* 编写启动脚本，其中 `export PATH` 是为了指定 `ruby_executable_hooks` 的路径。查了一下，系统自带的 ruby 没这个可执行文件，虽然这里用的是 rvm ruby 里的，但没问题……如果不加，则会返回错误代码 127，找不到命令。

```bash 启动脚本
export PATH=$PATH:/Users/frank/.rvm/rubies/ruby-X.X.X/lib/ruby/gems/X.X.X/bin
/usr/bin/gollum --allow-upload dir --mathjax --show-all --config /Users/frank/gitlab/wiki-of-taijiru/config.rb --gollum-path /Users/frank/gitlab/wiki-of-taijiru
```

`/usr/bin/gollum` 是为了方便以后全局使用而添加的，能根据我对 ruby 的切换调用相应的 Gollum。其实大可以把启动脚本直接写成

```bash 启动脚本（2）
/Library/Ruby/Gems/X.X.X/gems/gollum/bin/gollum --allow-upload dir --mathjax --show-all --config /Users/frank/gitlab/wiki-of-taijiru/config.rb --gollum-path /Users/frank/gitlab/wiki-of-taijiru
``` 

##总结

本以为很简单的启动配置花了我好长时间，主要是对 ruby 开发环境配置的不熟悉和对 Launch Daemon 的环境变量不了解造成的。这让我想起大一时第一次配置 Apache 的情境，无论怎么修改 index.html，浏览器显示都没有变化。最后终于发现，我修改的是自己通过源码安装的 apache，而每次开关的是系统自带 apache……

不过也正是在查这种傻逼错误的过程里，自己才会去搜索大量资料反复调试，对相关工具的了解也更深。**菜逼的提升，大抵如此吧 ^-^**。