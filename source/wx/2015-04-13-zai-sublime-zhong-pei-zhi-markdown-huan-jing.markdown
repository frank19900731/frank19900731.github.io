---
layout: wx-default
title: "在 Sublime 中配置 Markdown 环境"
date: 2015-04-13 12:11:53 +0800
comments: false
categories: [工作效率]
tags: [Sublime, Markdown]
keywords: Sublime, Markdown, 效率, Sublime plugins, Package Contorl, Monokai Extended, Markdown Extended, MarkdownEditing, MarkdownTOC, Table Editor, Markdown Preview, AcademicMarkdown, Citer, Pandoc
exclude_from_search: true
pc_url: /blog/2015/04/13/zai-sublime-zhong-pei-zhi-markdown-huan-jing/
wx_url: /wx/2015-04-13-zai-sublime-zhong-pei-zhi-markdown-huan-jing.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

最近在编写项目 Readme.md 文件的时候，发现 Sublime 默认对 Markdown 几乎没有支持，需要通过安装、配置插件（算上 Package Control 共 10 个）来完成。在此记录下完整过程（其实就是整合了网上资料，自己配置来用而已），非 OS X 系统快捷键有不同。

## Package Control

通过包管理器 [Package Control](https://packagecontrol.io/) 安装插件的好处就是便于自动更新。

在 Sublime 中使用 Ctrl + ` 快捷键调出控制台，输入如下代码、回车，等待安装完成。

```python Package Contorl 安装
import urllib.request,os,hashlib; h = 'eb2297e1a458f27d836c04bb0cbaf282' + 'd0e7a3098092775ccb37ca9d6b2e4b7d'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

<!-- excerpt end -->

## Monokai Extended & Markdown Extended

Markdown 格式在 Sublime 中默认无高亮，很多主题也不支持 Markdown 的高亮（包括 Markdown 代码块内的代码），[Monokai Extended](https://github.com/jonschlinkert/sublime-monokai-extended) 和 [Markdown Extended](https://github.com/jonschlinkert/sublime-markdown-extended) 是一套解决方案。

插件的安装方式是 Shift + Command + P 调出 Command Palette，输入 **pci**（模糊匹配），找到 `Package Control: Install Package`、回车，输入插件名称、回车，等待安装。

注意需要将 Markdown 的文件格式与 Markdown Extended 这种语法关联起来，做法是点击 Sublime 右下角文档格式，在列表最上方名为 `Open all with current extension as` 二级列表中选择 Markdown Extended。一种临时设置方式可以是 Shift + Command + P 调出 Command Palette，输入 **ssm**，选择 `Set Syntax: Markdown Extended`。

输入点内容看看，是舒服了不少。

{% img imgcenter /img/post/2015-4/3.png 95% Markdown 语法高亮 %}

## MarkdownEditing

在 Sublime 中编写 Markdown 还有一个直观的不适就是**缺少辅助提示**，比如输入 *，编辑器应当自动补上一个 *，并使光标保持在两 * 之间，又比如应当支持选中一段文字快捷键添加链接。

[Markdown Editing](https://github.com/SublimeText-Markdown/MarkdownEditing) 提供了这些支持，它也提供配色方案（略丑）。

个人常用的三个快捷键是：

- Option + Command + K - 插入链接；
- Option + Command + V - 粘贴为链接格式；
- Shift + Command + K - 插入图片。

## MarkdownTOC

编写 heading 较多的长文档，希望能够自动生成目录方便跳转，[MarkdownTOC](https://github.com/naokazuterada/MarkdownTOC) 可以帮助我们实现。

安装完成需要对其做一定配置，方法是打开 Preferences -> Package Settings -> MarkdownTOC -> Setting - User，键入以下配置：

```json MarkdownTOC 配置
{
  "default_autolink": true,
  "default_bracket": "round",
  "default_depth": 0
}
```

User Setting 覆盖 Default Setting，修改 User Setting 而非 Default Setting 是为了将来插件升级用户配置不被覆盖。配置文件都是 json 格式，上面的三个配置作用分别是：

- 目录以链接形式呈现；
- 链接以圆括号包裹；
- 无限目录深度。

将光标置于文档首部，点击 Tools -> MarkdownTOC -> Insert TOC，会自动在文首生成目录，效果如下图。这个目录会随文档内容改变自动更新（可能需要保存来触发）。

{% img imgcenter /img/post/2015-4/2.png 95% Markdown 目录 %}

## Table Editor

键入表格是个体力活，[Table Editor](https://github.com/vkocubinsky/SublimeTableEditor) 可以帮助我们减轻工作量。

## Markdown Preview

现在，**代码、公式、表格、图片、链接、目录**都齐活儿了，最后一步就是将 Markdown 文档渲染成我们想要的文档格式，[Markdown Preview](https://github.com/revolunet/sublimetext-markdown-preview) 责无旁贷。

安装后也需要进行一定配置：

```json Markdown Preview 配置
{
    "parser": "github",
    "build_action": "browser",
    "enable_mathjax": true,
    "enable_uml": true,
    "enable_highlight": true,
    "enable_pygments": true,
    "enabled_extensions": "github",
    "enabled_parsers": ["github"],
    "github_mode": "markdown",
    "github_inject_header_ids": true,
    "enable_autoreload": false
}
```

在以上配置中我们设定渲染样式为 github，渲染结束后用浏览器打开，开启 uml、mathjax、pygments 等支持，最重要的一个配置项是 `"github_inject_header_ids": true`，**保证 heading 的 id 与 heading 内容一致**，**也就与 MarkdownTOC 生成的一致**，**也就恰好能够锚点定位**。最后我们关闭了 autoreload，否则每当保存 Markdown 文件，后台都会进行一次渲染操作，你就会看到一颗彩虹糖在打转。

使用快捷键 Shift + Command + B，选择 Build with Markdown，一会儿就能在弹出的浏览器框里看到渲染结果了。

{% img imgcenter /img/post/2015-4/1.png 95% Markdown 渲染结果 %}

## AcademicMarkdown

在查找资料的过程中发现可以用 Sublime + Markdown 写论文，就跟着学了一把。

[AcademicMarkdown](https://packagecontrol.io/packages/AcademicMarkdown) 通过在 Markdown 文档中添加一定的信息，具体说是文件头，来帮助我们将 Markdown 文档渲染为符合指定论文格式的文章。以下文件头摘自插件作者给出的 [样例](/downloads/file/sample-paper.zip)。

```text 文件头
title: A sample paper  
author: Donald Duck
date: October 1, 2014
csl: /Users/frank/Documents/My Markdown/sample-paper/chicago.csl
abstract: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

csl 是论文模板格式，更多格式可在 [Zotero Style Repository](https://www.zotero.org/styles) 寻找。

Academic 还允许指定 bib 文件，在 Markdown 文档内添加引用，格式是 `@citation_key`，下面介绍的 Citer 可以帮助我们管理引用。

## Citer

具体说，[Citer](https://github.com/mangecoeur/Citer) 帮助我们搜索、插入引用。

安装后需要进行一定配置：

```json Citer 配置
{
    //REQUIRED:
    "bibtex_file_path": "/Users/frank/Documents/Mendeley/reference.bib",

    //OPTIONAL:

    //By default Citer Search looks for your keyword in the 
    //author, title, year, and Citekey (id) feilds
    "search_fields": ["author", "title", "year", "id"] ,
    //Default format is @Citekey
    "citation_format": "@%s",
    //list of scopes. Could be top level "text" or "source", or limit to
    // e.g "text.html.markdown"
    "completions_scopes": ["text"],
    "enable_completions": true
}
```

只要修改 `bibtex_file_path` 即可，其它都是默认配置项，我的 bib 文件是由 [Mendeley](https://www.mendeley.com/) 维护的。值得一提的是，AcademicMarkdown 支持在文件头指定其它 bib 文件，Citer 中的 bib 是全局的。

Shift + Command + P 调出 Command Palette，输入 Citer，Show All 会列举全局 bib 文件中的所有项（如果是刚配置好可能结果为空，请稍作等待或重启 Sublime），Search 则显然用于搜索。

## Pandoc

最终由神器 [Pandoc](https://github.com/tbfisher/sublimetext-Pandoc) 将 AcademicMarkdown 文档编译成论文。

这个插件只是 Pandoc 的使用配置接口，需要在系统中手动安装 [Pandoc](http://johnmacfarlane.net/pandoc/)，OS X 下我使用 `brew install pandoc` 安装。我们要用到的两个命令是 `pandoc` 和 `pandoc-citeproc`。除了 Pandoc，我们还需要配置 Latex 编译环境，我使用的是 [TeX Live](http://tug.org/texlive/)。

接下来配置 Pandoc 插件：

```json Pandoc 配置
{
  "default": {
    **"pandoc-path": "/usr/local/bin/pandoc"**,
    
    "transformations": {
    
    ...
    
      "PDF": {
        "scope": {
          "text.html": "html",
          "text.html.markdown": "markdown"
        },
        "pandoc-arguments": [
          "-t", "pdf", **"--latex-engine=/usr/texbin/pdflatex"**, 
          **"--filter=/usr/local/bin/pandoc-citeproc"**,
          **"--bibliography=/Users/frank/Documents/Mendeley/reference.bib"**
        ]
      },

      "Microsoft Word": {
        "scope": {
          "text.html": "html",
          "text.html.markdown": "markdown"
        },
        "pandoc-arguments": [
          "-t", "docx",
          **"--filter=/usr/local/bin/pandoc-citeproc"**,
          **"--bibliography=/Users/frank/Documents/Mendeley/reference.bib"**
        ]
      }
    },
    
    "pandoc-format-file": ["docx", "epub", "pdf", "odt"]
  }
}
```

修改内容以 ** 标出，主要是指定相关命令、文件的路径作为 pandoc 命令的参数。

Shift + Command + P 调出 Command Palette，输入 Pandoc、选择 PDF 作为输出格式即可，这是一个[示例](/downloads/file/sample-paper.pdf)。

## 参考文档

- [Writing academic papers in Markdown using Pandoc](http://blog.cigrainger.com/2014/07/pandoc-markdown.html)
- [Writing academic papers in Markdown using Sublime Text and Pandoc](http://nikolasander.com/writing-in-markdown/)
- [How to Set Up Sublime Text for a Vastly Better Markdown Writing Experience](https://blog.mariusschulz.com/2014/12/16/how-to-set-up-sublime-text-for-a-vastly-better-markdown-writing-experience)