---
layout: wx-default
title: "解决 Mac 下 zip 压缩文件在 Windows 中显示乱码的问题"
date: 2015-02-11 21:14:26 +0800
comments: false
categories: [Mac 使用]
tags: [压缩文件, 乱码, 7z]
keywords: 压缩文件, 乱码, 7z, Keka, The Unarchiver, 编码格式, Zip, Automator, 右键菜单
exclude_from_search: true
pc_url: /blog/2015/02/11/jie-jue-mac-xia-zip-ya-suo-wen-jian-zai-windows-xia-xian-shi-luan-ma-de-wen-ti/
wx_url: /wx/2015-02-11-jie-jue-mac-xia-zip-ya-suo-wen-jian-zai-windows-xia-xian-shi-luan-ma-de-wen-ti.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 问题描述

Mac 下通过**右键菜单中的 Compress** 生成的压缩包，在 Windows 下解压缩可能出现乱码，如下图所示。

{% img imgcenter /img/post/2015-2/5.png 80% Windows 上解压缩乱码 %}

知乎上关于这个问题的 [解答](http://www.zhihu.com/question/19646289) 是

> Mac OS X 系统自带的压缩程序对 zip 文件名用 UTF-8 编码，但 zip 文件头中没有声明 PKZIP 高版本增加的 Unicode 位。Windows 会认为文件名是 ANSI 编码，结果显示乱码。

经过简单的资料阅读和测试，我大概验证了下这种解释。

<!-- excerpt end -->

用 `locale` 命令查看我的 MBP 系统编码，确实是 UTF-8。

```bash 系统编码
$> locale
LANG="zh_CN.UTF-8"
LC_COLLATE="zh_CN.UTF-8"
LC_CTYPE="zh_CN.UTF-8"
LC_MESSAGES="zh_CN.UTF-8"
LC_MONETARY="zh_CN.UTF-8"
LC_NUMERIC="zh_CN.UTF-8"
LC_TIME="zh_CN.UTF-8"
LC_ALL=
```

关于 [ANSI 编码](http://baike.baidu.com/subview/185282/6215666.htm) ，在中文 Windows 系统中可能是 GBK 编码，而在其他语言的 Windows 系统又可能是别的。可以想见，Mac 下打出的压缩包在不同语言的 Windows 下会**乱得各具特色**。

当然，并不是所有解压缩软件都会一股脑地用 ANSI 编码进行解压。有的解压软件能够**自动识别（文件名）编码**并不确定的时候请使用者选择，比如 Mac 下的 [The Unarchiver](http://unarchiver.c3.cx/unarchiver)。根据我在中文 Win7 下的测试，不同的解压缩软件对压缩文件的默认“理解”也是不同的，快压会解出乱码，而 7zip、Winrar 则可以正确解码。

一种直观的想法是，可以**对文件名给出统一编码格式**或者**将编码写进压缩文件供解压缩程序读取**。然而，[Zip files and Encoding – I hate you.](http://marcosc.com/2008/12/zip-files-and-encoding-i-hate-you/) 中提到

> The Zip spec does not seem to know that there are normalization models for UTF-8, when there are actually 4 (or more, because there is some non-standard ones too!). The Zip file gives no guidance as to how file names inside zip files are to be normalized.
>
> ...
>
> The Zip spec says that the only supported encodings are CP437 and UTF-8, but everyone has ignored that. Implementers just encode file names however they want (usually byte for byte as they are in the OS… 

很遗憾，**Mac 自带的 zip 命令**就属于最后一句中 Implementers。虽然我不是很清楚“**文件头中没有声明 PKZIP 高版本增加的 Unicode 位**”中的细节，不过后来通过比较发现，无乱码和有乱码的 zip 文件，以 16进制方式查看时，文件名中**中文字符的编码是一样的**，**不同之处确实在 zip 文件头**。

## 解决方案

### Keka

知乎 [解答](http://www.zhihu.com/question/19646289) 中顺带给出了解决方案

> 解决方法：用第三方软件。我推荐 Keka，支持格式多，加密、分卷、压缩比调节等功能都有，还支持中文菜单和界面。最重要的：免费。详细介绍在 [http://t.cn/hGy98k](http://t.cn/hGy98k)

链接里给出的是 [Keka](http://www.kekaosx.com/en/) 这个软件，下图是软件运行界面。

{% img imgcenter /img/post/2015-2/6.png 45% Keka 运行界面 %}

将需要打入压缩包的文件拖拽到软件界面里即可执行压缩。Keka 可以勾选 `Exclude Mac resource forks` 选项，这样压缩包中就不会出现 **__MACOSX** 或  **.DS_Store** 文件。经测试，快压的乱码问题也随之消失。

然而，由于此软件图标过于丑陋**甚至会引发不适**，使得一些用户不得不舍弃之。其实把 `/Applications/Keka.app/Contents/Resources` 下的 icns 图标文件替换下就好了。

{% img imgcenter /img/post/2015-2/7.png 40% Keka Logo %}

以上为第一种方法。

1. [Keka](http://www.kekaosx.com/en/)，可行。不过每次**打开软件并拖拽文件**的操作会略显繁琐。
2. 上传到百度文库然后下载，无效。
3. 使用 YemuZip 等号称与 Windows 兼容的软件，无效，仅能删除 .DS_Store 一类的文件。
4. 修改后缀 zip 为 rar，无效。
5. 使用 p7zip 命令行，可行。

2 - 4 分别是网上给出的“可行”方案，由于没有触及**文件名编码格式**这个核心问题，所以都不可行。

第 5 种方案 7z 命令行是可行的，且可以集成到右键菜单中，使用方便，下一段中会介绍。其实 **Keka 也是基于 7z 压缩的**，一方面可见 `/Applications/Keka.app/Contents/Resources` 目录下的可执行文件，另一方面，我对比了 Keka 和 7z 对同一个文本文件的压缩结果，**二进制表示完全一致**。

### 右键菜单添加 p7zip 压缩

首先通过 `brew install p7zip` 安装 p7zip，其它安装方式可见 [官网](http://www.7-zip.org/download.html)。

7z 命令的使用方法是

```bash 7z help
$> 7z
Usage: 7z <command> [<switches>...] <archive_name> [<file_names>...]
       [<@listfiles...>]

<Commands>
  a: Add files to archive
  b: Benchmark
  d: Delete files from archive
  e: Extract files from archive (without using directory names)
  l: List contents of archive
  t: Test integrity of archive
  u: Update files to archive
  x: eXtract files with full paths
<Switches>
  -ai[r[-|0]]{@listfile|!wildcard}: Include archives
  -ax[r[-|0]]{@listfile|!wildcard}: eXclude archives
  -bd: Disable percentage indicator
  -i[r[-|0]]{@listfile|!wildcard}: Include filenames
  -m{Parameters}: set compression Method
  -o{Directory}: set Output directory
  -p{Password}: set Password
  -r[-|0]: Recurse subdirectories
  -scs{UTF-8 | WIN | DOS}: set charset for list files
  -sfx[{name}]: Create SFX archive
  -si[{name}]: read data from stdin
  -slt: show technical information for l (List) command
  -so: write data to stdout
  -ssc[-]: set sensitive case mode
  -t{Type}: Set type of archive
  -u[-][p#][q#][r#][x#][y#][z#][!newArchiveName]: Update options
  -v{Size}[b|k|m|g]: Create volumes
  -w[{path}]: assign Work directory. Empty path means a temporary directory
  -x[r[-|0]]]{@listfile|!wildcard}: eXclude filenames
  -y: assume Yes on all queries
``` 

我们将要用到的参数是

- a 添加文件到压缩包；
- -t 压缩文件格式；
- -r 递归调用；
- -xr@ 列表文件，记录不希望被打入压缩包的文件/文件夹的名称。

我们希望在 Automator 中创建一个服务，接收文件名或文件夹名作为输入参数，编写脚本调用 7z 命令对输入文件进行压缩并输出到源文件夹；添加这个服务到右键菜单中，用法与系统自带的 Compress 相同，我们将其命名为 `Compress with 7z`。

一个动态效果是

{% img imgcenter /img/post/2015-2/1.gif 60% 运行效果 %}

以下是具体操作步骤。

- 打开 Automator，新建服务（Service）；
- Service receives selected **files or folders**, in **any application**；
- 搜索框输入 shell，拖拽 Run Shell Script 到右侧；
- 输入压缩脚本（之后详述）；
- 保存，将这个系统服务命名为 `Compress with 7z`；
- 进入 系统设置（System Preferences），选择 Keyboard -> Shortcuts -> Services，在 Files and Folders 列表中找到 `Compress with 7z`，勾选，设置快捷键（可选，如果无效则可能是冲突，换个试试）。

操作完成后，Automator 的显示为

{% img imgcenter /img/post/2015-2/8.png 90% Automator Compress with 7z %}

系统设置（System Preferences）显示为

{% img imgcenter /img/post/2015-2/10.png 70% 系统设置 %}

右键菜单显示为

{% img imgcenter /img/post/2015-2/9.png 40% 右键菜单 %}

关于**添加右键菜单项**可以参考 [Create Customize Shortcut In Mac’s Right Click Menu [Guide]](http://www.hongkiat.com/blog/customize-mac-right-click-menu/)。要注意的是，如果当前操作关联 5 个以上 Service，则这些 Service 会以二级菜单的形式显示，所以尽量在系统设置（System Preferences）-> Keyboard 中把没用的勾选掉。

{% img imgcenter /img/post/2015-2/11.png 60% 右键菜单，Service 较多 %}

最后介绍脚本编写，参考自 [How to set Mac OS X's Default Compression Format?](http://superuser.com/questions/91147/how-to-set-mac-os-xs-default-compression-format)，给出代码和注释版代码。

代码

```bash  压缩脚本
set -e
compress_method="7z"
[[ $# = 1 ]] && name=${1##*/} || name=archive
base=${1%/*}
cd "$base"

i=2
[[ -e "$name.$compress_method" ]] && name="$name-$i"
while [[ -e "$name.$compress_method" ]]; do name="${name%??}-$((++i))"; done

echo ".DS_Store" >> .exclude_file_list
/usr/local/bin/7z a -r -t"$compress_method" ./"$name.$compress_method" "${@#"$base"/}" -xr@.exclude_file_list
rm .exclude_file_list
open -R ./"$name.$compress_method"
```

注释版代码

```bash  压缩脚本 注释版
set -e
# 设置压缩文件格式，可以修改为 zip、rar 等
compress_method="7z"
# 如果只有一个文件，则将压缩包命名为 文件名.7z；
# 如果有多个文件，则将压缩包命名为 archive.7z。
# ${1##*/} 的写法是路径模式匹配，参见 http://blog.sina.com.cn/s/blog_ac9fdc0b0101ls9n.html
[[ $# = 1 ]] && name=${1##*/} || name=archive
# ${1%/*} 仍是路径模式匹配，获得待压缩文件、文件夹所在的文件夹
base=${1%/*}
cd "$base"

# 新压缩包编号递增，防止重名
i=2
[[ -e "$name.$compress_method" ]] && name="$name-$i"
# ${name%??} 仍是路径模式匹配，删除最后两个字符，可以想见，编号是两位数及以上就不对了，不过 0-9 共 10 个也是够了
while [[ -e "$name.$compress_method" ]]; do name="${name%??}-$((++i))"; done

# 创建列表文件，该文件记录不希望被打入压缩包的文件/文件夹的名称，可以使用正则表达式
echo ".DS_Store" >> .exclude_file_list
# 调用 7z 进行压缩
# ${@#"$base"/} 是路径匹配，去除输入的文件列表的路径前缀
# -xr@.exclude_file_list 指定列表文件
/usr/local/bin/7z a -r -t"$compress_method" ./"$name.$compress_method" "${@#"$base"/}" -xr@.exclude_file_list
# 删除列表文件
rm .exclude_file_list
# 打开 Finder，显示压缩结果
open -R ./"$name.$compress_method"
```

## 总结

本文总结、探讨了网上关于 **Mac 下的 Zip 压缩包在 Windows 中显示乱码**这一问题的成因与解决方案，并提出了一个**右键菜单添加 p7zip 压缩**的解决方案。

最后，要推荐 [The Unarchiver Cmd Tools](http://unarchiver.c3.cx/commandline)，支持不同平台、支持文件名编码的自动识别或指定编码，相信会对常在 Linux、Windows 间转运压缩包的同学有所帮助。

## 附录

### The Unarchiver Cmd Tools 支持的编码格式

```bash 支持的编码格式
$> unar -encoding list
Available encodings are:
  * macintosh: Western (Mac OS Roman)
  * x-mac-japanese: Japanese (Mac OS)
  * x-mac-trad-chinese: Traditional Chinese (Mac OS)
  * x-mac-korean: Korean (Mac OS)
  * x-mac-arabic: Arabic (Mac OS)
  * x-mac-hebrew: Hebrew (Mac OS)
  * x-mac-greek: Greek (Mac OS)
  * x-mac-cyrillic: Cyrillic (Mac OS)
  * x-mac-devanagari: Devanagari (Mac OS)
  * x-mac-gurmukhi: Gurmukhi (Mac OS)
  * x-mac-gujarati: Gujarati (Mac OS)
  * x-mac-thai: Thai (Mac OS)
  * x-mac-simp-chinese: Simplified Chinese (Mac OS)
  * x-mac-tibetan: Tibetan (Mac OS)
  * x-mac-centraleurroman: Central European (Mac OS)
  * x-mac-symbol: Symbol (Mac OS)
  * x-mac-dingbats: Dingbats (Mac OS)
  * x-mac-turkish: Turkish (Mac OS)
  * x-mac-croatian: Croatian (Mac OS)
  * x-mac-icelandic: Icelandic (Mac OS)
  * x-mac-romanian: Romanian (Mac OS)
  * x-mac-celtic: Celtic (Mac OS)
  * x-mac-gaelic: Gaelic (Mac OS)
  * x-mac-farsi: Farsi (Mac OS)
  * x-mac-ukrainian: Cyrillic (Mac OS Ukrainian)
  * x-mac-inuit: Inuit (Mac OS)
  * utf-16: Unicode (UTF-16)
  * utf-7: Unicode (UTF-7)
  * utf-8: Unicode (UTF-8)
  * utf-32: Unicode (UTF-32)
  * utf-16be: Unicode (UTF-16BE)
  * utf-16le: Unicode (UTF-16LE)
  * utf-32be: Unicode (UTF-32BE)
  * utf-32le: Unicode (UTF-32LE)
  * iso-8859-1: Western (ISO Latin 1)
  * iso-8859-2: Central European (ISO Latin 2)
  * iso-8859-3: Western (ISO Latin 3)
  * iso-8859-4: Central European (ISO Latin 4)
  * iso-8859-5: Cyrillic (ISO 8859-5)
  * iso-8859-6: Arabic (ISO 8859-6)
  * iso-8859-7: Greek (ISO 8859-7)
  * iso-8859-8: Hebrew (ISO 8859-8)
  * iso-8859-9: Turkish (ISO Latin 5)
  * iso-8859-10: Nordic (ISO Latin 6)
  * iso-8859-11: Thai (ISO 8859-11)
  * iso-8859-13: Baltic (ISO Latin 7)
  * iso-8859-14: Celtic (ISO Latin 8)
  * iso-8859-15: Western (ISO Latin 9)
  * iso-8859-16: Romanian (ISO Latin 10)
  * cp437: Latin-US (DOS)
  * cp737: Greek (DOS)
  * cp775: Baltic (DOS)
  * cp850: Western (DOS Latin 1)
  * cp851: Greek (DOS Greek 1)
  * cp852: Central European (DOS Latin 2)
  * cp855: Cyrillic (DOS)
  * cp857: Turkish (DOS)
  * cp860: Portuguese (DOS)
  * cp861: Icelandic (DOS)
  * cp862: Hebrew (DOS)
  * cp863: Canadian French (DOS)
  * cp864: Arabic (DOS)
  * cp865: Nordic (DOS)
  * cp866: Russian (DOS)
  * cp869: Greek (DOS Greek 2)
  * cp874: Thai (Windows, DOS)
  * cp932: Japanese (Windows, DOS)
  * cp936: Simplified Chinese (Windows, DOS)
  * cp949: Korean (Windows, DOS)
  * cp950: Traditional Chinese (Windows, DOS)
  * windows-1252: Western (Windows Latin 1)
  * windows-1250: Central European (Windows Latin 2)
  * windows-1251: Cyrillic (Windows)
  * windows-1253: Greek (Windows)
  * windows-1254: Turkish (Windows Latin 5)
  * windows-1255: Hebrew (Windows)
  * windows-1256: Arabic (Windows)
  * windows-1257: Baltic (Windows)
  * windows-1258: Vietnamese (Windows)
  * us-ascii: Western (ASCII)
  * Shift_JIS: Japanese (Shift JIS X0213)
  * GBK: Chinese (GBK)
  * gb18030: Chinese (GB 18030)
  * iso-2022-jp: Japanese (ISO 2022-JP)
  * iso-2022-jp-2: Japanese (ISO 2022-JP-2)
  * iso-2022-jp-1: Japanese (ISO 2022-JP-1)
  * iso-2022-cn: Chinese (ISO 2022-CN)
  * iso-2022-kr: Korean (ISO 2022-KR)
  * euc-jp: Japanese (EUC)
  * gb2312: Simplified Chinese (GB 2312)
  * euc-tw: Traditional Chinese (EUC)
  * euc-kr: Korean (EUC)
  * shift_jis: Japanese (Shift JIS)
  * koi8-r: Cyrillic (KOI8-R)
  * big5: Traditional Chinese (Big 5)
  * x-mac-roman-latin1: Western (Mac Mail)
  * hz-gb-2312: Simplified Chinese (HZ GB 2312)
  * big5-hkscs: Traditional Chinese (Big 5 HKSCS)
  * koi8-u: Ukrainian (KOI8-U)
  * x-nextstep: Western (NextStep)
  * ibm037: Western (EBCDIC Latin 1)
```