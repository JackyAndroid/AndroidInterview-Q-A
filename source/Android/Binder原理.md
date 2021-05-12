#### Binder 原理

::: danger 面试官：

1. Android为什么使用Binder？用 Linux原有的IPC不行吗？
2. 为什么需要Binder驱动？放在用户空间行不行？
3. 匿名共享内存是什么？怎么提高效率的？

:::

**入门：**

- [为什么 Android 要采用 Binder 作为 IPC 机制？](https://www.zhihu.com/question/39440766)

- [说说你对 binder 驱动的了解？](https://zhuanlan.zhihu.com/p/152237289)
- [写给-Android-应用工程师的-Binder-原理剖析](https://baronzhang.com/blog/Android/%E5%86%99%E7%BB%99-Android-%E5%BA%94%E7%94%A8%E5%B7%A5%E7%A8%8B%E5%B8%88%E7%9A%84-Binder-%E5%8E%9F%E7%90%86%E8%A7%A3%E6%9E%90/)

**推荐**

- [理解Android Binder机制(1/3)：驱动篇](https://paul.pub/android-binder-driver/)
- [理解Android Binder机制(2/3)：C++层](https://paul.pub/android-binder-cpp/)
- [理解Android Binder机制(3/3)：Java层](https://paul.pub/android-binder-java/)

**gityuan：**

- [Binder系列—开篇](http://gityuan.com/2015/10/31/binder-prepare/)
- [Binder系列1—Binder Driver初探](http://gityuan.com/2015/11/01/binder-driver/)
- [Binder系列2—Binder Driver再探](http://gityuan.com/2015/11/02/binder-driver-2/)
- [Binder系列3—启动ServiceManager](http://gityuan.com/2015/11/07/binder-start-sm/)

**老罗系列：**

- [Android进程间通信（IPC）机制Binder简要介绍和学习计划](https://blog.csdn.net/luoshengyang/article/details/6618363)
- [浅谈Service Manager成为Android进程间通信（IPC）机制Binder守护进程之路](https://blog.csdn.net/luoshengyang/article/details/6621566)
- [浅谈Android系统进程间通信（IPC）机制Binder中的Server和Client获得Service Manager接口之路](https://blog.csdn.net/luoshengyang/article/details/6627260)
- [Android系统进程间通信（IPC）机制Binder中的Server启动过程源代码分析](https://blog.csdn.net/luoshengyang/article/details/6629298)
- [Android系统进程间通信（IPC）机制Binder中的Client获得Server远程接口过程源代码分析](https://blog.csdn.net/luoshengyang/article/details/6633311)
- [Android系统进程间通信Binder机制在应用程序框架层的Java接口源代码分析](https://blog.csdn.net/luoshengyang/article/details/6642463)

**Binder匿名共享内存原理**

- [认真分析mmap：是什么 为什么 怎么用](https://www.cnblogs.com/huxiao-tee/p/4660352.html)
- 回写时机：内存不足、进程crash、调用msync munmap、不设置 MAP_NOSYNC 情况下 30s-60s(仅限FreeBSD)

