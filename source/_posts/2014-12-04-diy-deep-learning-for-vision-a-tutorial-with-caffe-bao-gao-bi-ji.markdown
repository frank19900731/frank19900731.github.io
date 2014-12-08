---
layout: post
title: "DIY Deep Learning for Vision: A Tutorial with Caffe 报告笔记"
date: 2014-12-04 09:56:21 +0800
comments: true
categories: [机器学习]
tags: [Caffe, 深度学习]
keywords: Caffe, 深度学习, GPU, 损失函数, 共享权重, 参数调优 
pc_url: /blog/2014/12/04/diy-deep-learning-for-vision-a-tutorial-with-caffe-bao-gao-bi-ji/
wx_url: /wx/2014-12-04-diy-deep-learning-for-vision-a-tutorial-with-caffe-bao-gao-bi-ji.html
---

__目录__

* list element with functor item
{:toc}

<!-- excerpt start -->

## 简介

报告时间是北京时间 12月14日 凌晨一点到两点，主讲人是 Caffe 团队的核心之一 Evan Shelhamer。第一次用 [GoToMeeting](http://www.gotomeeting.com/online/entry) 参加视频会议，效果真是不错。

报告后分享出了 [视频](http://on-demand-gtc.gputechconf.com/gtcnew/on-demand-gtc.php?searchByKeyword=shelhamer&searchItems=&sessionTopic=&sessionEvent=4&sessionYear=2014&sessionFormat=&submit=&select=+) 和 [展示文件](http://on-demand.gputechconf.com/gtc/2014/webinar/gtc-express-deep-learning-caffee-evan-shelhamer.pdf)。另一讲座，cuDNN: Accelerating Convolutional Neural Networks using GPUs，[视频](http://on-demand-gtc.gputechconf.com/gtcnew/on-demand-gtc.php?searchByKeyword=cuDNN&searchItems=&sessionTopic=&sessionEvent=4&sessionYear=2014&sessionFormat=&submit=&select=+) 和 [展示文件](http://on-demand.gputechconf.com/gtc/2014/webinar/gtc-express-sharan-chetlur-cudnn-webinar.pdf) 也已放出。

Caffe 此前听过没用过，所以报告前自己试运行了一下，参照 [官方教程](http://caffe.berkeleyvision.org/installation.html)。Caffe 安装、上手都很快，Protobuf 式的层定义很直观，模型修改或算法调整变得很容易，相当于只需要改配置文件。还找到了他们放在 Google Docs 上一个教程 PPT，[DIY Deep Learning for Vision: a Hands-On Tutorial with Caffe](https://docs.google.com/presentation/d/1UeKXVgRvvxg9OUdh_UiC5G71UMscNPlvArsWER41PsU/edit#slide=id.p) （已搬到 [墙里](/downloads/file/Caffe.pptx)），后来发现这次报告的 PPT 就是在这个基础上修改的。

本次报告主要内容是

- 对机器学习、深度学习的一些介绍，包括若干深度学习的经典模型；
- Caffe 的**优势**（模块化、速度、社区支持等）、**基本结构**（网络定义、层定义、Blob等）和**用法**（模型中损失函数、优化方法、共享权重等的配置、应用举例、参数调优的技巧），以及**未来方向**（CPU/GPU 并行化、Pythonification、Fully Convolutional Networks等）。

以下是报告中的截图配上自己的一点笔记，一手资料请参见上面给出的会后分享链接。

<!-- excerpt end -->

##要点记录

PPT 的首页取自该项目的一个在线 [demo](http://demo.caffe.berkeleyvision.org)，输入图片 url，识别物体类别。

{% img imgcenter /img/post/2014-12/3.png 80% DIY Deep Learning for Vision: the Caffe framework %}

左边是浅层特征，各类别物体杂乱无章；右边是深度特征，一些类别有较为明显的分别。特别地，**dog、bird、invertebrate** 这三类动物类别离得较近，而 **building、vehicle、commodity** 这类无生命类别离得较近，可见深度特征的强大。

{% img imgcenter /img/post/2014-12/4.png 80% Why Deep Learning? - 1 %}

此外，在深层结构当中，**隐层神经元的激活可能与特定的物体类别有关**，比如有的神经元对人像敏感，而有的对数字或建筑物敏感，最下面一层是闪光灯（或与之类似，比如反光的脑门……）效果。

{% img imgcenter /img/post/2014-12/5.png 80% Why Deep Learning? - 2 %}

{% img imgcenter /img/post/2014-12/6.png 80% What is Deep Learning? %}

Caffe 的优势，网络结构的模块化和易表达是显然的，社区资源也同样强大，比如下两页内容。

{% img imgcenter /img/post/2014-12/7.png 80% Why Caffe? In one sip... %}

Caffe 的 Reference Models 可供学术使用，比如 AlexNet、R-CNN、CaffeNet，包括模型定义、优化方法和预训练权重。

{% img imgcenter /img/post/2014-12/8.png 80% Reference Models %}

[Model Zoo](http://caffe.berkeleyvision.org/model_zoo.html) 中有用户贡献的模型可供参考使用，比如 VGG、Network-in-Network。

{% img imgcenter /img/post/2014-12/9.png 80% Open Model Collection %}

Caffe 支持丰富的模型表达形式，包括 DAGs、Weight Sharing 以及 Siamese Network。

{% img imgcenter /img/post/2014-12/10.png 80% Architectures %}

{% img imgcenter /img/post/2014-12/11.png 80% Brewing by the Numbers... %}

网络和层定义采用 protobuf 的样式。

{% img imgcenter /img/post/2014-12/12.png 80% Net %}

Layer 指的是权重和偏置，可以定义连接数、权重初始化方法等。

{% img imgcenter /img/post/2014-12/13.png 80% Layer %}

Blob 是四维数据结构，保存节点上的数值以及模型参数，可以通过编程在 CPU 和 GPU 间传输。

{% img imgcenter /img/post/2014-12/14.png 80% Blob %}

模型定义之外，还需要一个指定优化策略的配置文件，用以训练模型。

{% img imgcenter /img/post/2014-12/15.png 80% Solving: Training a Net %}

使用 Caffe 训练的一般步骤就是

- 数据预处理；
- 模型定义；
- 求解策略定义；
- 运行。

此处给出了两个例子，[Logistic Regression](http://nbviewer.ipython.org/github/BVLC/caffe/blob/dev/examples/hdf5_classification.ipynb)，[Learn LeNet on MNIST](http://nbviewer.ipython.org/github/BVLC/caffe/blob/dev/examples/hdf5_classification.ipynb)，都很好 follow。

{% img imgcenter /img/post/2014-12/16.png 80% Step-by-Step Recipe%}

调参中重点讲了一个 [模型迁移的实例]([Fine-tuning from ImageNet to Style](http://nbviewer.ipython.org/github/BVLC/caffe/blob/dev/examples/hdf5_classification.ipynb))，用某项任务已有模型的参数作为新任务模型的参数初始值，然后进行模型训练。

{% img imgcenter /img/post/2014-12/17.png 80% Fine-tuning Transferring learned weights to kick-start models %}

模型训练一般由浅入深，逐步降低学习速率，以保持预训练参数的某些性质。

{% img imgcenter /img/post/2014-12/18.png 80% Fine-tuning Tricks %}

接下来具体讲述了 Loss、Solver、DAG、Weight Sharing 的概念和配置。

对同一模型，不同 Solver 的表现有差。

{% img imgcenter /img/post/2014-12/19.png 80% Solver Showdown: MNIST Autoencoder %}

一般深度学习模型是线性形式的，比如 LeNet，而 Caffe 支持 DAG 形式的模型。

{% img imgcenter /img/post/2014-12/20.png 80% Nets are DAGs %}

Caffe 的近期动向，CPU/GPU 并行化、Pythonification、Fully Convolutional Networks等。

{% img imgcenter /img/post/2014-12/21.png 80% NOW ROASTING%}

Caffe 的团队，拜 Yangqing Jia 师兄……

{% img imgcenter /img/post/2014-12/22.png 80% Thanks to the Caffe crew %}

文献参考。

{% img imgcenter /img/post/2014-12/23.png 80% References %}

##提问

语音回答中，Evan 提到 UCB 的一个团队正在开发 Scala 接口，不过尚属实验性质；Caffe 团队在考虑 和 UCB 的 AMP 团队合作，扩展到 Spark 这一计算平台上；除了已支持的 CPU/GPU 计算，也考虑扩展支持 OpenCl；对于 Theano、Torch，鼓励大家尝试、比较……

文字问答如下，由 Yangqing Jia 回复。

**Q: Is the pre-trained model avaialbe for download to accelerate our work on other kinds of images?**

**A:** FYI - for pretrained models that we release, please refer to the model zoo page here: http://caffe.berkeleyvision.org/model_zoo.html

----

**Q: Android platform ?**

**A:** People have asked about android/ios platforms. In principle this is possible since the code is purely in C, but of course some engineering efforts are needed to write makefiles like Android.mk for this. Our bandwidth is limited and we are focusing on the research part, but we welcome pull requests on github if you write one (and we thank you in advance)! Also, kindly check out the blog post by my colleague Pete Warden about our efforts on running with Jetson TK1: http://petewarden.com/2014/10/25/how-to-run-the-caffe-deep-learning-vision-library-on-nvidias-jetson-mobile-gpu-board/

----

**Q: Can you discuss status and/or considerations for adding opencl support (and so be vendor neutral, as opposed to NVIDIA CUDA)?**

**A:** In terms of using OpenCL - it has been under discussion for a while, but we are kind of shortstaffed so we focus more on the research side - we welcome contributions from open-source communities of course, please join us at github :)

----

**Q: do you have an online examples of unsupervised losses**

**A:** For unsupevised losses and training there is a bundled example of an MNIST autoencoder.

更多的问答（60+）请参见主办方提供的 [Q&A Transcript](/downloads/file/Q&A_Transcript.docx)。

##总结

“盗取”一页 PPT 作为本文总结。

{% img imgcenter /img/post/2014-12/24.png 80% LAST SIP %}