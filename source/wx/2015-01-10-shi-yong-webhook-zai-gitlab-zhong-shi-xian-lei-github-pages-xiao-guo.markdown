---
layout: wx-default
title: "用 Webhook 在 Gitlab 中实现类 Github Pages 效果"
date: 2015-01-10 21:35:56 +0800
comments: false
categories: [网页开发]
tags: [Gitlab, Webhook]
keywords: [Gitlab, Webhook, Github Pages, Apache 权限, www-data, json, PHP, ruby, octopress]
exclude_from_search: true
pc_url: /blog/2015/01/10/shi-yong-webhook-zai-gitlab-zhong-shi-xian-lei-github-pages-xiao-guo/
wx_url: /wx/2015-01-10-shi-yong-webhook-zai-gitlab-zhong-shi-xian-lei-github-pages-xiao-guo.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## Gitlab

[Gitlab](https://gitlab.com/gitlab-org/gitlab-ce/tree/master) 是一个与 Github 极为相似的可视化版本管理系统，它基于 Git、Ruby on Rails、Redis 等工具框架，目前支持 Ubuntu、Debian、CentOS 在内的部分 *inx 操作系统，**不考虑支持 Windows**，详见 [Requirements](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/install/requirements.md)。Gitlab 既有收费企业版，也有免费开源社区版本，被超过十万家机构广泛应用，安装方法及相关文档可以在 [这里](http://doc.gitlab.com/ce/) 找到。

最简单的安装方式是下载 Omnibus 安装包进行安装，在 [这里](https://about.gitlab.com/downloads/) 根据系统下载安装包，安装方法是

```bash Gitlab Omnibus Package 安装
# Ubuntu/Debian:
sudo dpkg -i gitlab_x.x.x-omnibus.xxx.deb

# CentOS:
sudo rpm -Uvh gitlab-x.x.x_xxx.rpm
```

系统初始登录账号是 `root`，密码是 `5iveL!fe`，登录后修改密码，为自己创建用户（组）。

Gitlab 的基本使用体验和 Github 是无差的，不过并不提供 [Github Pages](https://pages.github.com/) 的功能：

> Hosted directly from your GitHub repository. Just edit, push, and your changes are live.

其实 Github Pages 的最大吸引力是**免费的空间**和**免除服务器设置**，如果单纯要实现 `Just edit, push, and your changes are live` 这一功能，可以借助 Web hooks。

<!-- excerpt end -->

## Web hooks

Gitlab 中 Web hooks 的概念当然也和 Github 没差，给予的解释是

> Project web hooks allow you to trigger an URL if new code is pushed or a new issue is created.
>
> You can configure web hooks to listen for specific events like pushes, issues or merge requests. GitLab will send a POST request with data to the web hook URL.
>
> Web hooks can be used to update an external issue tracker, trigger CI builds, update a backup mirror, or even deploy to your production server.

我们想要实现的是让 push events 触发 production server 上的内容更新，更具体的说，是让我 **Octopress 博客的 master 分支的 push 操作**，触发**网页服务器的内容更新**。

push 操作发送的 post 请求内容示例如下。

```json push 操作的 post 请求示例
{
  "before": "95790bf891e76fee5e1747ab589903a6a1f80f22",
  "after": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
  "ref": "refs/heads/master",
  "user_id": 4,
  "user_name": "John Smith",
  "project_id": 15,
  "repository": {
    "name": "Diaspora",
    "url": "git@example.com:diaspora.git",
    "description": "",
    "homepage": "http://example.com/diaspora"
  },
  "commits": [
    {
      "id": "b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
      "message": "Update Catalan translation to e38cb41.",
      "timestamp": "2011-12-12T14:27:31+02:00",
      "url": "http://example.com/diaspora/commits/b6568db1bc1dcd7f8b4d5a946b0b91f9dacd7327",
      "author": {
        "name": "Jordi Mallach",
        "email": "jordi@softcatala.org"
      }
    },
    {
      "id": "da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
      "message": "fixed readme",
      "timestamp": "2012-01-03T23:36:29+02:00",
      "url": "http://example.com/diaspora/commits/da1560886d4f094c3e6c9ef40349f7d38b5d27d7",
      "author": {
        "name": "GitLab dev user",
        "email": "gitlabdev@dv6700.(none)"
      }
    }
  ],
  "total_commits_count": 4
}
```

我们只需要关注 `ref: refs/heads/master`，保证是 **master** 分支的 push 操作，而非其它分支（比如 source）。

官方提供了一个 ruby 版本的 webhook 接收逻辑。

```ruby print_http_body.rb
require 'webrick'

server = WEBrick::HTTPServer.new(:Port => ARGV.first)
server.mount_proc '/' do |req, res|
  puts req.body
end

trap 'INT' do 
  server.shutdown 
end
server.start
```

运行 `ruby print_http_body.rb 8000` 即可监听 push 事件。

我的打算是在自己现有的 Apache 服务器上，用 PHP 写这个简单逻辑。

## 操作步骤

将 Github 上的 Octorpess 博客迁移到 Gitlab 上的步骤如下。

### 创建 Project，提交代码

在 Gitlab 中创建 Project，在本地 Octopress Repository 文件夹下执行

```bash 添加 Gitlab 远端版本库
git remote add gitlab http://example.com/username/octopress.git
git push -u gitlab source:source

cd _deploy
git remote add gitlab http://example.com/username/octopress.git
git push -u gitlab master:master
```

gitlab 是自定义远端版本库的名称，以后可以向 Github 和自己搭建的 Gitlab 分别提交 master、source 分支的更改。

```bash 向 Github、Gitlab 提交更改
# github
rake deploy 
git push origin source

# gitlab
cd _deploy
git push gitlab master
cd ..
git push gitlab source
```

我们希望 `git push gitlab master` 触发服务器内容更新。

### 关联 Web hooks

如下图进入 Settings -> Webhooks 创建一个钩子

{% img imgcenter /img/post/2015-1/4.png 90% 钩子创建 %}

点击 `Test Hook` 发送模拟消息到你指定的 URL。

### Web hooks 逻辑

编写 PHP 脚本如下

```php Web hooks 逻辑
<?php

    $de_json =  json_decode($GLOBALS['HTTP_RAW_POST_DATA'], TRUE);
    if ($de_json['ref'] == "refs/heads/master") // pull only when master branch updated
        shell_exec("cd /path/to/your/webcontent;/usr/bin/git pull http://example.com/username/octopress.git");

?>
```

识别是 master 分支的更新提交，就到网页目录下更新内容。

测试中发现 PHP 里嵌入的 shell 命令无法执行，而在命令行中可以执行。网上查询可能是 safe_mode 设置的问题或者 `shell_exec` 在设置中被 disable 掉，又或者是 shell 执行环境的问题，不过最后确认的原因还是**权限问题**。

我把 Octopress 的内容放在 lighttpd 中，而 PHP 的运行环境是 Apache，后者的实际运行用户是 `www-data`（在 PHP 代码中执行 `whoami` 可知），而非登录用户或者 `root`，所以要改变 `www-data` 对于目录或文件的权限。

```bash 权限变更
chmod o+rwx /usr/bin/git
chmod -R o+rwx /path/to/your/webcontent
```

让 `www-data` 有权限执行 git 命令，并操作网页内容文件夹。

到这里，已经将 Octopress 迁移到 Gitlab 上，并完成 修改 -> 提交 -> 自动更新的功能。