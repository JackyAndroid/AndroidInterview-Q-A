###欢迎在GitHub或者掘金上关注我

GitHub: https://github.com/JackyAndroid

掘金: https://gold.xitu.io/user/562dc7cc60b20fc9817962a2

---

# 国内一线互联网公司内部面试题库
以下面试题来自于百度、小米、乐视、美团、58、猎豹、360、新浪、搜狐内部题库

熟悉本文中列出的知识点会大大增加通过前两轮技术面试的几率。

欢迎一线公司员工提交内部面试题库，欢迎star。
##目录
* [java基础](#java)
	* [接口的意义-百度](#接口的意义-百度)
	* [抽象类的意义-乐视](#抽象类的意义-乐视)
	* [内部类的作用-乐视](#内部类的作用-乐视)
	* [父类的静态方法能否被子类重写-猎豹](#父类的静态方法能否被子类重写-猎豹)
	* [java排序算法-美团](#java排序算法-美团)
	* [列举java的集合和继承关系-百度-美团](#列举java的集合和继承关系-百度-美团)
	* [java虚拟机的特性-百度-乐视](#java虚拟机的特性-百度-乐视)
	* [哪些情况下的对象会被垃圾回收机制处理掉-美团-小米](#哪些情况下的对象会被垃圾回收机制处理掉-美团-小米)
	* [进程和线程的区别-猎豹-美团](#进程和线程的区别-猎豹-美团)
	* [==和equals和hashCode的区别-乐视](#java中==和equals和hashCode的区别-乐视)
	* [常见的排序算法时间复杂度-小米](#常见的排序算法时间复杂度-小米)
	* [HashMap的实现原理-美团](#HashMap的实现原理-美团)
	* [java状态机](#java状态机)
	* [int-char-long各占多少字节数](#int-char-long各占多少字节数)
	* [int与integer的区别](#int与integer的区别)
	* [string-stringbuffer-stringbuilder区别-小米-乐视-百度](#string-stringbuffer-stringbuilder区别-小米-乐视-百度)
	* [java多态-乐视](#java多态-乐视)
	* [什么导致线程阻塞-58-美团](#什么导致线程阻塞-58-美团)
	* [抽象类接口区别-360](#抽象类接口区别-360)
	* [容器类之间的区别-乐视-美团](#容器类之间的区别-乐视-美团)
	* [内部类](#内部类)
	* [hashmap和hashtable的区别-乐视-小米](#hashmap和hashtable的区别-乐视-小米)
	* [ArrayMap对比HashMap](#arraymap对比hashmap)
* [安卓](#android)
	* [如何导入外部数据库](#如何导入外部数据库)
	* [本地广播和全局广播有什么差别](#本地广播和全局广播有什么差别)
	* [intentService作用是什么，AIDL解决了什么问题？-小米](#intentService作用是什么,AIDL解决了什么问题-小米)
	* [Activity,Window,View三者的差别，fragment的特点？-360](#Activity,Window,View三者的差别,fragment的特点-360)
	* [描述一次网络请求的流程-新浪](#描述一次网络请求的流程-新浪)
	* [Handler、Thread和HandlerThread的差别-小米](#Handler,Thread和HandlerThread的差别-小米)
	* [低版本SDK实现高版本api-小米](#低版本SDK实现高版本api-小米)
	* [Ubuntu编译安卓系统-百度](#Ubuntu编译安卓系统-百度)
	* [launch mode应用场景-百度-小米-乐视](#LaunchMode应用场景-百度-小米-乐视)
	* [Touch事件传递流程-小米](#Touch事件传递流程-小米)
	* [view绘制流程-百度](#View绘制流程-百度)
	* [多线程-360](#多线程-360)
	* [线程同步-百度](#线程同步-百度)
	* [什么情况导致内存泄漏-美团](#什么情况导致内存泄漏-美团)
	* [ANR定位和修正](#ANR定位和修正)
	* [什么情况导致oom-乐视-美团](#什么情况导致oom-乐视-美团)
	* [Android Service与Activity之间通信的几种方式](#Service与Activity之间通信的几种方式)
	* [Android各个版本API的区别](#Android各个版本API的区别)
	* [Android代码中实现WAP方式联网-360](#Android代码中实现WAP方式联网-360)
	* [如何保证service在后台不被kill](#如何保证service在后台不被Kill)
	* [Requestlayout，onlayout，onDraw，DrawChild区别与联系-猎豹](#Requestlayout,onlayout,onDraw,DrawChild区别与联系-猎豹)
	* [invalidate()和postInvalidate() 的区别及使用-百度](#invalidate()和postInvalidate()的区别及使用-百度)
	* [Android动画框架实现原理](#Android动画框架实现原理)
	* [Android为每个应用程序分配的内存大小是多少？-美团](#Android为每个应用程序分配的内存大小是多少？-美团)
	* [Android View刷新机制-百度-美团](#View刷新机制-百度-美团)
	* [LinearLayout对比RelativeLayout-百度](#LinearLayout和RelativeLayout性能对比-百度)
	* [优化自定义view百度-乐视-小米](#优化自定义view百度-乐视-小米)
	* [ContentProvider-乐视](#ContentProvider-乐视)
	* [fragment生命周期](#Fragment生命周期)
	* [volley解析-美团-乐视](#volley解析-美团-乐视)
	* [Android Glide源码解析](Glide源码解析)
	* [Android 设计模式](#Android设计模式)
	* [架构设计-搜狐](#架构设计-搜狐)
	* [Android属性动画特性-乐视-小米](#Android属性动画特性-乐视-小米)

* [专题](#专题)
	* [性能优化](#性能优化)
	* [架构分析](#架构分析)
	* [阿里巴巴](#阿里面试题)
	* [腾讯](#腾讯)


###java

####接口的意义-百度

规范、扩展、回调

####抽象类的意义-乐视

为其子类提供一个公共的类型
封装子类中得重复内容
定义抽象方法，子类虽然有不同的实现 但是定义是一致的

####内部类的作用-乐视

1. 内部类可以用多个实例，每个实例都有自己的状态信息，并且与其他外围对象的信息相互独立。
2. 在单个外围类中，可以让多个内部类以不同的方式实现同一个接口，或者继承同一个类。
3. 创建内部类对象的时刻并不依赖于外围类对象的创建。
4. 内部类并没有令人迷惑的“is-a”关系，他就是一个独立的实体。
5. 内部类提供了更好的封装，除了该外围类，其他类都不能访问

####父类的静态方法能否被子类重写-猎豹

不能

子类继承父类后，用相同的静态方法和非静态方法，这时非静态方法覆盖父类中的方法（即方法重写），父类的该静态方法被隐藏（如果对象是父类则调用该隐藏的方法），另外子类可继承父类的静态与非静态方法，至于方法重载我觉得它其中一要素就是在同一类中，不能说父类中的什么方法与子类里的什么方法是方法重载的体现

####java排序算法-美团

http://blog.csdn.net/qy1387/article/details/7752973

####列举java的集合和继承关系-百度-美团

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/collection.png)

####java虚拟机的特性-百度-乐视

Java语言的一个非常重要的特点就是与平台的无关性。而使用Java虚拟机是实现这一特点的关键。一般的高级语言如果要在不同的平台上运行，至少需要编译成不同的目标代码。而引入Java语言虚拟机后，Java语言在不同平台上运行时不需要重新编译。Java语言使用模式Java虚拟机屏蔽了与具体平台相关的信息，使得Java语言编译程序只需生成在Java虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。Java虚拟机在执行字节码时，把字节码解释成具体平台上的机器指令执行。

####哪些情况下的对象会被垃圾回收机制处理掉-美团-小米

Java 垃圾回收机制最基本的做法是分代回收。内存中的区域被划分成不同的世代，对象根据其存活的时间被保存在对应世代的区域中。一般的实现是划分成3个世代：年轻、年老和永久。内存的分配是发生在年轻世代中的。当一个对象存活时间足够长的时候，它就会被复制到年老世代中。对于不同的世代可以使用不同的垃圾回收算法。进行世代划分的出发点是对应用中对象存活时间进行研究之后得出的统计规律。一般来说，一个应用中的大部分对象的存活时间都很短。比如局部变量的存活时间就只在方法的执行过程中。基于这一点，对于年轻世代的垃圾回收算法就可以很有针对性。

####进程和线程的区别-猎豹-美团

简而言之,一个程序至少有一个进程,一个进程至少有一个线程。

线程的划分尺度小于进程，使得多线程程序的并发性高。

另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。

线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。

从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。

进程是具有一定独立功能的程序关于某个数据集合上的一次运行活动,进程是系统进行资源分配和调度的一个独立单位.

线程是进程的一个实体,是CPU调度和分派的基本单位,它是比进程更小的能独立运行的基本单位.线程自己基本上不拥有系统资源,只拥有一点在运行中必不可少的资源(如程序计数器,一组寄存器和栈),但是它可与同属一个进程的其他的线程共享进程所拥有的全部资源.

一个线程可以创建和撤销另一个线程;同一个进程中的多个线程之间可以并发执行.

进程和线程的主要差别在于它们是不同的操作系统资源管理方式。进程有独立的地址空间，一个进程崩溃后，在保护模式下不会对其它进程产生影响，而线程只是一个进程中的不同执行路径。线程有自己的堆栈和局部变量，但线程之间没有单独的地址空间，一个线程死掉就等于整个进程死掉，所以多进程的程序要比多线程的程序健壮，但在进程切换时，耗费资源较大，效率要差一些。但对于一些要求同时进行并且又要共享某些变量的并发操作，只能用线程，不能用进程。如果有兴趣深入的话，我建议你们看看《现代操作系统》或者《操作系统的设计与实现》。对就个问题说得比较清楚。

####java中==和equals和hashCode的区别-乐视

http://blog.csdn.net/tiantiandjava/article/details/46988461

####常见的排序算法时间复杂度-小米

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/algorithm.png)

####HashMap的实现原理-美团

1. HashMap概述：
   HashMap是基于哈希表的Map接口的非同步实现。此实现提供所有可选的映射操作，并允许使用null值和null键。此类不保证映射的顺序，特别是它不保证该顺序恒久不变。 
2. HashMap的数据结构：
	在java编程语言中，最基本的结构就是两种，一个是数组，另外一个是模拟指针（引用），所有的数据结构都可以用这两个基本结构来构造的，HashMap也不例外。HashMap实际上是一个“链表散列”的数据结构，即数组和链表的结合体。

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/hashmap.jpg)
	
从上图中可以看出，HashMap底层就是一个数组结构，数组中的每一项又是一个链表。当新建一个HashMap的时候，就会初始化一个数组。

####状态机

http://www.jdon.com/designpatterns/designpattern_State.htm

####int-char-long各占多少字节数

byte 位数 8 字节数 1

short 16 2

int 32 4

long 64 8

float 32 4

double 64 8

char 16 2

####int与integer的区别

http://www.cnblogs.com/shenliang123/archive/2011/10/27/2226903.html

####string-stringbuffer-stringbuilder区别-小米-乐视-百度

String 字符串常量

StringBuffer 字符串变量（线程安全）

StringBuilder 字符串变量（非线程安全）

简要的说， String 类型和 StringBuffer 类型的主要性能区别其实在于 String 是不可变的对象, 因此在每次对 String 类型进行改变的时候其实都等同于生成了一个新的 String 对象，然后将指针指向新的 String 对象，所以经常改变内容的字符串最好不要用String ，因为每次生成对象都会对系统性能产生影响，特别当内存中无引用对象多了以后,JVM 的 GC 就会开始工作，那速度是一定会相当慢的。

而如果是使用 StringBuffer 类则结果就不一样了，每次结果都会对 StringBuffer 对象本身进行操作，而不是生成新的对象，再改变对象引用。所以在一般情况下我们推荐使用 StringBuffer ，特别是字符串对象经常改变的情况下。而在某些特别情况下， String 对象的字符串拼接其实是被 JVM 解释成了 StringBuffer 对象的拼接，所以这些时候 String 对象的速度并不会比 StringBuffer 对象慢，而特别是以下的字符串对象生成中， String 效率是远要比 StringBuffer 快的：

```java
String S1 = "This is only a" + "simple" + " test";
StringBuffer Sb = new StringBuffer("This is only a").append("simple").append("test");
```

你会很惊讶的发现，生成 String S1 对象的速度简直太快了，而这个时候 StringBuffer 居然速度上根本一点都不占优势。其实这是 JVM 的一个把戏，在 JVM 眼里，这个
 String S1 = “This is only a” + “ simple” + “test”; 其实就是：
 String S1 = “This is only a simple test”; 所以当然不需要太多的时间了。但大家这里要注意的是，如果你的字符串是来自另外的 String 对象的话，速度就没那么快了，譬如：
 String S2 = “This is only a”;
String S3 = “ simple”;
String S4 = “ test”;
String S1 = S2 +S3 + S4;
这时候 JVM 会规规矩矩的按照原来的方式去做

在大部分情况下 StringBuffer > String

StringBuffer

Java.lang.StringBuffer线程安全的可变字符序列。一个类似于 String 的字符串缓冲区，但不能修改。虽然在任意时间点上它都包含某种特定的字符序列，但通过某些方法调用可以改变该序列的长度和内容。

可将字符串缓冲区安全地用于多个线程。可以在必要时对这些方法进行同步，因此任意特定实例上的所有操作就好像是以串行顺序发生的，该顺序与所涉及的每个线程进行的方法调用顺序一致。

StringBuffer 上的主要操作是 append 和 insert 方法，可重载这些方法，以接受任意类型的数据。每个方法都能有效地将给定的数据转换成字符串，然后将该字符串的字符追加或插入到字符串缓冲区中。append 方法始终将这些字符添加到缓冲区的末端；而 insert 方法则在指定的点添加字符。

例如，如果 z 引用一个当前内容是“start”的字符串缓冲区对象，则此方法调用 z.append("le") 会使字符串缓冲区包含“startle”，而 z.insert(4, "le") 将更改字符串缓冲区，使之包含“starlet”。

在大部分情况下 StringBuilder > StringBuffer

java.lang.StringBuilder

java.lang.StringBuilder一个可变的字符序列是5.0新增的。此类提供一个与 StringBuffer 兼容的 API，但不保证同步。该类被设计用作 StringBuffer 的一个简易替换，用在字符串缓冲区被单个线程使用的时候（这种情况很普遍）。如果可能，建议优先采用该类，因为在大多数实现中，它比 StringBuffer 要快。两者的方法基本相同

####java多态-乐视

Java多态性理解

Java中多态性的实现

什么是多态

面向对象的三大特性：封装、继承、多态。从一定角度来看，封装和继承几乎都是为多态而准备的。这是我们最后一个概念，也是最重要的知识点。

多态的定义：指允许不同类的对象对同一消息做出响应。即同一消息可以根据发送对象的不同而采用多种不同的行为方式。（发送消息就是函数调用）

实现多态的技术称为：动态绑定（dynamic binding），是指在执行期间判断所引用对象的实
际类型，根据其实际的类型调用其相应的方法。

多态的作用：消除类型之间的耦合关系。

现实中，关于多态的例子不胜枚举。比方说按下 F1 键这个动作，如果当前在 Flash 界面下弹出的就是 AS 3 的帮助文档；如果当前在 Word 下弹出的就是 Word 帮助；在 Windows 下弹出的就是 Windows 帮助和支持。同一个事件发生在不同的对象上会产生不同的结果。
下面是多态存在的三个必要条件，要求大家做梦时都能背出来！

多态存在的三个必要条件
一、要有继承；
二、要有重写；
三、父类引用指向子类对象。

 多态的好处：

1.可替换性（substitutability）。多态对已存在代码具有可替换性。例如，多态对圆Circle类工作，对其他任何圆形几何体，如圆环，也同样工作。

2.可扩充性（extensibility）。多态对代码具有可扩充性。增加新的子类不影响已存在类的多态性、继承性，以及其他特性的运行和操作。实际上新加子类更容易获得多态功能。例如，在实现了圆锥、半圆锥以及半球体的多态基础上，很容易增添球体类的多态性。

3.接口性（interface-ability）。多态是超类通过方法签名，向子类提供了一个共同接口，由子类来完善或者覆盖它而实现的。如图8.3 所示。图中超类Shape规定了两个实现多态的接口方法，computeArea()以及computeVolume()。子类，如Circle和Sphere为了实现多态，完善或者覆盖这两个接口方法。

4.灵活性（flexibility）。它在应用中体现了灵活多样的操作，提高了使用效率。

5.简化性（simplicity）。多态简化对应用软件的代码编写和修改过程，尤其在处理大量对象的运算和操作时，这个特点尤为突出和重要。

Java中多态的实现方式：接口实现，继承父类进行方法重写，同一个类中进行方法重载。

####什么导致线程阻塞-58-美团

线程的阻塞

为了解决对共享存储区的访问冲突，Java 引入了同步机制，现在让我们来考察多个线程对共享资源的访问，显然同步机制已经不够了，因为在任意时刻所要求的资源不一定已经准备好了被访问，反过来，同一时刻准备好了的资源也可能不止一个。为了解决这种情况下的访问控制问题，Java 引入了对阻塞机制的支持.

阻塞指的是暂停一个线程的执行以等待某个条件发生（如某资源就绪），学过操作系统的同学对它一定已经很熟悉了。Java 提供了大量方法来支持阻塞，下面让我们逐一分析。

1. sleep() 方法：sleep() 允许 指定以毫秒为单位的一段时间作为参数，它使得线程在指定的时间内进入阻塞状态，不能得到CPU 时间，指定的时间一过，线程重新进入可执行状态。
典型地，sleep() 被用在等待某个资源就绪的情形：测试发现条件不满足后，让线程阻塞一段时间后重新测试，直到条件满足为止。
2. suspend() 和 resume() 方法：两个方法配套使用，suspend()使得线程进入阻塞状态，并且不会自动恢复，必须其对应的resume() 被调用，才能使得线程重新进入可执行状态。典型地，suspend() 和 resume() 被用在等待另一个线程产生的结果的情形：测试发现结果还没有产生后，让线程阻塞，另一个线程产生了结果后，调用 resume() 使其恢复。
3. yield() 方法：yield() 使得线程放弃当前分得的 CPU 时间，但是不使线程阻塞，即线程仍处于可执行状态，随时可能再次分得 CPU 时间。调用 yield() 的效果等价于调度程序认为该线程已执行了足够的时间从而转到另一个线程.
4. wait() 和 notify() 方法：两个方法配套使用，wait() 使得线程进入阻塞状态，它有两种形式，一种允许 指定以毫秒为单位的一段时间作为参数，另一种没有参数，前者当对应的 notify() 被调用或者超出指定时间时线程重新进入可执行状态，后者则必须对应的 notify() 被调用.

初看起来它们与 suspend() 和 resume() 方法对没有什么分别，但是事实上它们是截然不同的。区别的核心在于，前面叙述的所有方法，阻塞时都不会释放占用的锁（如果占用了的话），而这一对方法则相反。

上述的核心区别导致了一系列的细节上的区别。

首先，前面叙述的所有方法都隶属于 Thread 类，但是这一对却直接隶属于 Object 类，也就是说，所有对象都拥有这一对方法。初看起来这十分不可思议，但是实际上却是很自然的，因为这一对方法阻塞时要释放占用的锁，而锁是任何对象都具有的，调用任意对象的 wait() 方法导致线程阻塞，并且该对象上的锁被释放。而调用 任意对象的notify()方法则导致因调用该对象的 wait() 方法而阻塞的线程中随机选择的一个解除阻塞（但要等到获得锁后才真正可执行）。

其次，前面叙述的所有方法都可在任何位置调用，但是这一对方法却必须在 synchronized 方法或块中调用，理由也很简单，只有在synchronized 方法或块中当前线程才占有锁，才有锁可以释放。同样的道理，调用这一对方法的对象上的锁必须为当前线程所拥有，这样才有锁可以释放。因此，这一对方法调用必须放置在这样的 synchronized 方法或块中，该方法或块的上锁对象就是调用这一对方法的对象。若不满足这一条件，则程序虽然仍能编译，但在运行时会出现IllegalMonitorStateException 异常。

wait() 和 notify() 方法的上述特性决定了它们经常和synchronized 方法或块一起使用，将它们和操作系统的进程间通信机制作一个比较就会发现它们的相似性：synchronized方法或块提供了类似于操作系统原语的功能，它们的执行不会受到多线程机制的干扰，而这一对方法则相当于 block 和wakeup 原语（这一对方法均声明为 synchronized）。它们的结合使得我们可以实现操作系统上一系列精妙的进程间通信的算法（如信号量算法），并用于解决各种复杂的线程间通信问题。

关于 wait() 和 notify() 方法最后再说明两点：

第一：调用 notify() 方法导致解除阻塞的线程是从因调用该对象的 wait() 方法而阻塞的线程中随机选取的，我们无法预料哪一个线程将会被选择，所以编程时要特别小心，避免因这种不确定性而产生问题。

第二：除了 notify()，还有一个方法 notifyAll() 也可起到类似作用，唯一的区别在于，调用 notifyAll() 方法将把因调用该对象的 wait() 方法而阻塞的所有线程一次性全部解除阻塞。当然，只有获得锁的那一个线程才能进入可执行状态。

谈到阻塞，就不能不谈一谈死锁，略一分析就能发现，suspend() 方法和不指定超时期限的 wait() 方法的调用都可能产生死锁。遗憾的是，Java 并不在语言级别上支持死锁的避免，我们在编程中必须小心地避免死锁。

以上我们对 Java 中实现线程阻塞的各种方法作了一番分析，我们重点分析了 wait() 和 notify() 方法，因为它们的功能最强大，使用也最灵活，但是这也导致了它们的效率较低，较容易出错。实际使用中我们应该灵活使用各种方法，以便更好地达到我们的目的。

####抽象类接口区别-360

1. 默认的方法实现
抽象类可以有默认的方法实现完全是抽象的。接口根本不存在方法的实现

2. 实现
子类使用extends关键字来继承抽象类。如果子类不是抽象类的话，它需要提供抽象类中所有声明的方法的实现。	
子类使用关键字implements来实现接口。它需要提供接口中所有声明的方法的实现

3. 构造器	
抽象类可以有构造器	
接口不能有构造器

4. 与正常Java类的区别	
除了你不能实例化抽象类之外，它和普通Java类没有任何区
接口是完全不同的类型

5. 访问修饰符	
抽象方法可以有public、protected和default这些修饰符
接口方法默认修饰符是public。你不可以使用其它修饰符。

6. main方法	
抽象方法可以有main方法并且我们可以运行它	
接口没有main方法，因此我们不能运行它。

7. 多继承	
抽象类在java语言中所表示的是一种继承关系，一个子类只能存在一个父类，但是可以存在多个接口。

8. 速度	
它比接口速度要快	
接口是稍微有点慢的，因为它需要时间去寻找在类中实现的方法。

9. 添加新方法	
如果你往抽象类中添加新的方法，你可以给它提供默认的实现。因此你不需要改变你现在的代码。	
如果你往接口中添加方法，那么你必须改变实现该接口的类。

####容器类之间的区别-乐视-美团

http://www.cnblogs.com/yuanermen/archive/2009/08/05/1539917.html
http://alexyyek.github.io/2015/04/06/Collection/
http://tianmaying.com/tutorial/java_collection

####内部类

http://www.cnblogs.com/chenssy/p/3388487.html

####hashmap和hashtable的区别-乐视-小米

http://www.233.com/ncre2/JAVA/jichu/20100717/084230917.html

####ArrayMap对比HashMap

http://lvable.com/?p=217

###Android

####如何导入外部数据库

把原数据库包括在项目源码的 res/raw 

android系统下数据库应该存放在 /data/data/com.*.*（package name）/ 目录下，所以我们需要做的是把已有的数据库传入那个目录下.操作方法是用FileInputStream读取原数据库，再用FileOutputStream把读取到的东西写入到那个目录.

####本地广播和全局广播有什么差别

因广播数据在本应用范围内传播，不用担心隐私数据泄露的问题。
不用担心别的应用伪造广播，造成安全隐患。
相比在系统内发送全局广播，它更高效。

####intentService作用是什么,AIDL解决了什么问题-小米

生成一个默认的且与主线程互相独立的工作者线程来执行所有传送至onStartCommand() 方法的Intetnt。

生成一个工作队列来传送Intent对象给你的onHandleIntent()方法，同一时刻只传送一个Intent对象，这样一来，你就不必担心多线程的问题。在所有的请求(Intent)都被执行完以后会自动停止服务，所以，你不需要自己去调用stopSelf()方法来停止。

该服务提供了一个onBind()方法的默认实现，它返回null

提供了一个onStartCommand()方法的默认实现，它将Intent先传送至工作队列，然后从工作队列中每次取出一个传送至onHandleIntent()方法，在该方法中对Intent对相应的处理。

AIDL (Android Interface Definition Language) 是一种IDL 语言，用于生成可以在Android设备上两个进程之间进行进程间通信(interprocess communication, IPC)的代码。如果在一个进程中（例如Activity）要调用另一个进程中（例如Service）对象的操作，就可以使用AIDL生成可序列化的参数。
AIDL IPC机制是面向接口的，像COM或Corba一样，但是更加轻量级。它是使用代理类在客户端和实现端传递数据。

####Activity/Window/View三者的差别,fragment的特点-360

Activity像一个工匠（控制单元），Window像窗户（承载模型），View像窗花（显示视图）
LayoutInflater像剪刀，Xml配置像窗花图纸。

1. 在Activity中调用attach，创建了一个Window
2. 创建的window是其子类PhoneWindow，在attach中创建PhoneWindow
3. 在Activity中调用setContentView(R.layout.xxx)
4. 其中实际上是调用的getWindow().setContentView()
5. 调用PhoneWindow中的setContentView方法
6. 创建ParentView： 作为ViewGroup的子类，实际是创建的DecorView(作为FramLayout的子类）
7. 将指定的R.layout.xxx进行填充 通过布局填充器进行填充【其中的parent指的就是DecorView】
8. 调用到ViewGroup
9. 调用ViewGroup的removeAllView()，先将所有的view移除掉
10. 添加新的view：addView()

fragment 特点

* Fragment可以作为Activity界面的一部分组成出现；
* 可以在一个Activity中同时出现多个Fragment，并且一个Fragment也可以在多个Activity中使用；
* 在Activity运行过程中，可以添加、移除或者替换Fragment；
* Fragment可以响应自己的输入事件，并且有自己的生命周期，它们的生命周期会受宿主Activity的生命周期影响。

####描述一次网络请求的流程-新浪

￼![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/http.png)

####Handler,Thread和HandlerThread的差别-小米

http://blog.csdn.net/guolin_blog/article/details/9991569

http://droidyue.com/blog/2015/11/08/make-use-of-handlerthread/

从Android中Thread（java.lang.Thread -> java.lang.Object）描述可以看出，Android的Thread没有对Java的Thread做任何封装，但是Android提供了一个继承自Thread的类HandlerThread（android.os.HandlerThread -> java.lang.Thread），这个类对Java的Thread做了很多便利Android系统的封装。

android.os.Handler可以通过Looper对象实例化，并运行于另外的线程中，Android提供了让Handler运行于其它线程的线程实现，也是就HandlerThread。HandlerThread对象start后可以获得其Looper对象，并且使用这个Looper对象实例Handler。

####低版本SDK实现高版本api-小米

自己实现或@TargetApi annotation

####Ubuntu编译安卓系统-百度

1. 进入源码根目录
2. . build/envsetup.sh
3. lunch
4. full(编译全部)
5. userdebug(选择编译版本)
6. make -j8(开启8个线程编译)

####LaunchMode应用场景-百度-小米-乐视

standard，创建一个新的Activity。

singleTop，栈顶不是该类型的Activity，创建一个新的Activity。否则，onNewIntent。

singleTask，回退栈中没有该类型的Activity，创建Activity，否则，onNewIntent+ClearTop。

注意:

 1. 设置了"singleTask"启动模式的Activity，它在启动的时候，会先在系统中查找属性值affinity等于它的属性值taskAffinity的Task存在； 如果存在这样的Task，它就会在这个Task中启动，否则就会在新的任务栈中启动。因此， 如果我们想要设置了"singleTask"启动模式的Activity在新的任务中启动，就要为它设置一个独立的taskAffinity属性值。
 2. 如果设置了"singleTask"启动模式的Activity不是在新的任务中启动时，它会在已有的任务中查看是否已经存在相应的Activity实例， 如果存在，就会把位于这个Activity实例上面的Activity全部结束掉，即最终这个Activity 实例会位于任务的Stack顶端中。
 3. 在一个任务栈中只有一个”singleTask”启动模式的Activity存在。他的上面可以有其他的Activity。这点与singleInstance是有区别的。

singleInstance，回退栈中，只有这一个Activity，没有其他Activity。

singleTop适合接收通知启动的内容显示页面。

例如，某个新闻客户端的新闻内容页面，如果收到10个新闻推送，每次都打开一个新闻内容页面是很烦人的。

singleTask适合作为程序入口点。

例如浏览器的主界面。不管从多少个应用启动浏览器，只会启动主界面一次，其余情况都会走onNewIntent，并且会清空主界面上面的其他页面。

singleInstance应用场景：

闹铃的响铃界面。 你以前设置了一个闹铃：上午6点。在上午5点58分，你启动了闹铃设置界面，并按 Home 键回桌面；在上午5点59分时，你在微信和朋友聊天；在6点时，闹铃响了，并且弹出了一个对话框形式的 Activity(名为 AlarmAlertActivity) 提示你到6点了(这个 Activity 就是以 SingleInstance 加载模式打开的)，你按返回键，回到的是微信的聊天界面，这是因为 AlarmAlertActivity 所在的 Task 的栈只有他一个元素， 因此退出之后这个 Task 的栈空了。如果是以 SingleTask 打开 AlarmAlertActivity，那么当闹铃响了的时候，按返回键应该进入闹铃设置界面。

####Touch事件传递流程-小米

http://hanhailong.com/2015/09/24/Android-%E4%B8%89%E5%BC%A0%E5%9B%BE%E6%90%9E%E5%AE%9ATouch%E4%BA%8B%E4%BB%B6%E4%BC%A0%E9%80%92%E6%9C%BA%E5%88%B6/

####View绘制流程-百度

http://www.codekk.com/blogs/detail/54cfab086c4761e5001b253f

####多线程-360

* Activity.runOnUiThread(Runnable)
* View.post(Runnable),View.postDelay(Runnable,long)
* Handler
* AsyncTask

####线程同步-百度

http://www.itzhai.com/java-based-notebook-thread-synchronization-problem-solving-synchronization-problems-synchronized-block-synchronized-methods.html#read-more

http://www.juwends.com/tech/android/android-inter-thread-comm.html

单例

```java
public class Singleton{
private volatile static Singleton mSingleton;
private Singleton(){
}
public static Singleton getInstance(){
  if(mSingleton == null){\\A
    synchronized(Singleton.class){\\C
     if(mSingleton == null)
      mSingleton = new Singleton();\\B
      }
    }
    return mSingleton;
  }
}
```

####什么情况导致内存泄漏-美团

1.资源对象没关闭造成的内存泄漏

描述：
资源性对象比如(Cursor，File文件等)往往都用了一些缓冲，我们在不使用的时候，应该及时关闭它们，以便它们的缓冲及时回收内存。它们的缓冲不仅存在于 java虚拟机内，还存在于java虚拟机外。如果我们仅仅是把它的引用设置为null,而不关闭它们，往往会造成内存泄漏。因为有些资源性对象，比如 SQLiteCursor(在析构函数finalize(),如果我们没有关闭它，它自己会调close()关闭)，如果我们没有关闭它，系统在回收它时也会关闭它，但是这样的效率太低了。因此对于资源性对象在不使用的时候，应该调用它的close()函数，将其关闭掉，然后才置为null.在我们的程序退出时一定要确保我们的资源性对象已经关闭。
程序中经常会进行查询数据库的操作，但是经常会有使用完毕Cursor后没有关闭的情况。如果我们的查询结果集比较小，对内存的消耗不容易被发现，只有在常时间大量操作的情况下才会复现内存问题，这样就会给以后的测试和问题排查带来困难和风险。

2.构造Adapter时，没有使用缓存的convertView

描述：
以构造ListView的BaseAdapter为例，在BaseAdapter中提供了方法：
public View getView(int position, ViewconvertView, ViewGroup parent)
来向ListView提供每一个item所需要的view对象。初始时ListView会从BaseAdapter中根据当前的屏幕布局实例化一定数量的 view对象，同时ListView会将这些view对象缓存起来。当向上滚动ListView时，原先位于最上面的list item的view对象会被回收，然后被用来构造新出现的最下面的list item。这个构造过程就是由getView()方法完成的，getView()的第二个形参View convertView就是被缓存起来的list item的view对象(初始化时缓存中没有view对象则convertView是null)。由此可以看出，如果我们不去使用 convertView，而是每次都在getView()中重新实例化一个View对象的话，即浪费资源也浪费时间，也会使得内存占用越来越大。 ListView回收list item的view对象的过程可以查看:
android.widget.AbsListView.java --> voidaddScrapView(View scrap) 方法。
示例代码：

```
public View getView(int position, ViewconvertView, ViewGroup parent) {
View view = new Xxx(...); 
... ... 
return view; 
} 
```

修正示例代码：

```
public View getView(int position, ViewconvertView, ViewGroup parent) {
View view = null; 
if (convertView != null) { 
view = convertView; 
populate(view, getItem(position)); 
... 
} else { 
view = new Xxx(...); 
... 
} 
return view; 
} 
```

3.Bitmap对象不在使用时调用recycle()释放内存

描述：
有时我们会手工的操作Bitmap对象，如果一个Bitmap对象比较占内存，当它不在被使用的时候，可以调用Bitmap.recycle()方法回收此对象的像素所占用的内存，但这不是必须的，视情况而定。可以看一下代码中的注释：

/** 
•Free up the memory associated with thisbitmap's pixels, and mark the 
•bitmap as "dead", meaning itwill throw an exception if getPixels() or 
•setPixels() is called, and will drawnothing. This operation cannot be 
•reversed, so it should only be called ifyou are sure there are no 
•further uses for the bitmap. This is anadvanced call, and normally need 
•not be called, since the normal GCprocess will free up this memory when 
•there are no more references to thisbitmap. 
*/ 

4.试着使用关于application的context来替代和activity相关的context

这是一个很隐晦的内存泄漏的情况。有一种简单的方法来避免context相关的内存泄漏。最显著地一个是避免context逃出他自己的范围之外。使用Application context。这个context的生存周期和你的应用的生存周期一样长，而不是取决于activity的生存周期。如果你想保持一个长期生存的对象，并且这个对象需要一个context,记得使用application对象。你可以通过调用 Context.getApplicationContext() or Activity.getApplication()来获得。更多的请看这篇文章如何避免
Android内存泄漏。

5.注册没取消造成的内存泄漏

一些Android程序可能引用我们的Anroid程序的对象(比如注册机制)。即使我们的Android程序已经结束了，但是别的引用程序仍然还有对我们的Android程序的某个对象的引用，泄漏的内存依然不能被垃圾回收。调用registerReceiver后未调用unregisterReceiver。
比如:假设我们希望在锁屏界面(LockScreen)中，监听系统中的电话服务以获取一些信息(如信号强度等)，则可以在LockScreen中定义一个 PhoneStateListener的对象，同时将它注册到TelephonyManager服务中。对于LockScreen对象，当需要显示锁屏界面的时候就会创建一个LockScreen对象，而当锁屏界面消失的时候LockScreen对象就会被释放掉。
但是如果在释放 LockScreen对象的时候忘记取消我们之前注册的PhoneStateListener对象，则会导致LockScreen无法被垃圾回收。如果不断的使锁屏界面显示和消失，则最终会由于大量的LockScreen对象没有办法被回收而引起OutOfMemory,使得system_process 进程挂掉。
虽然有些系统程序，它本身好像是可以自动取消注册的(当然不及时)，但是我们还是应该在我们的程序中明确的取消注册，程序结束时应该把所有的注册都取消掉。

6.集合中对象没清理造成的内存泄漏

我们通常把一些对象的引用加入到了集合中，当我们不需要该对象时，并没有把它的引用从集合中清理掉，这样这个集合就会越来越大。如果这个集合是static的话，那情况就更严重了。

####ANR定位和修正

如果开发机器上出现问题，我们可以通过查看/data/anr/traces.txt即可，最新的ANR信息在最开始部分。

* 主线程被IO操作（从4.0之后网络IO不允许在主线程中）阻塞。
* 主线程中存在耗时的计算
* 主线程中错误的操作，比如Thread.wait或者Thread.sleep等
Android系统会监控程序的响应状况，一旦出现下面两种情况，则弹出ANR对话框
* 应用在5秒内未响应用户的输入事件（如按键或者触摸）
* BroadcastReceiver未在10秒内完成相关的处理
* Service在特定的时间内无法处理完成 20秒

* 使用AsyncTask处理耗时IO操作。
* 使用Thread或者HandlerThread时，调用Process.setThreadPriority(Process.THREAD_PRIORITY_BACKGROUND)设置优先级，否则仍然会降低程序响应，因为默认Thread的优先级和主线程相同。
* 使用Handler处理工作线程结果，而不是使用Thread.wait()或者Thread.sleep()来阻塞主线程。
* Activity的onCreate和onResume回调中尽量避免耗时的代码
* BroadcastReceiver中onReceive代码也要尽量减少耗时，建议使用IntentService处理。


####什么情况导致oom-乐视-美团

http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/0920/3478.html

1）使用更加轻量的数据结构
2）Android里面使用Enum
3）Bitmap对象的内存占用
4）更大的图片
5）onDraw方法里面执行对象的创建
6）StringBuilder

####Service与Activity之间通信的几种方式

* 通过Binder对象
* 通过broadcast(广播)的形式

####Android各个版本API的区别

http://blog.csdn.net/lijun952048910/article/details/7980562

####Android代码中实现WAP方式联网-360

http://blog.csdn.net/asce1885/article/details/7844159

####如何保证service在后台不被Kill

一、onStartCommand方法，返回START_STICKY

1. START_STICKY
在运行onStartCommand后service进程被kill后，那将保留在开始状态，但是不保留那些传入的intent。不久后service就会再次尝试重新创建，因为保留在开始状态，在创建     service后将保证调用onstartCommand。如果没有传递任何开始命令给service，那将获取到null的intent。

2. START_NOT_STICKY
在运行onStartCommand后service进程被kill后，并且没有新的intent传递给它。Service将移出开始状态，并且直到新的明显的方法（startService）调用才重新创建。因为如果没有传递任何未决定的intent那么service是不会启动，也就是期间onstartCommand不会接收到任何null的intent。

3. START_REDELIVER_INTENT
在运行onStartCommand后service进程被kill后，系统将会再次启动service，并传入最后一个intent给onstartCommand。直到调用stopSelf(int)才停止传递intent。如果在被kill后还有未处理好的intent，那被kill后服务还是会自动启动。因此onstartCommand不会接收到任何null的intent。

二、提升service优先级

在AndroidManifest.xml文件中对于intent-filter可以通过android:priority = "1000"这个属性设置最高优先级，1000是最高值，如果数字越小则优先级越低，同时适用于广播。

三、提升service进程优先级

Android中的进程是托管的，当系统进程空间紧张的时候，会依照优先级自动进行进程的回收。Android将进程分为6个等级,它们按优先级顺序由高到低依次是:

1. 前台进程( FOREGROUND_APP)
2. 可视进程(VISIBLE_APP )
3. 次要服务进程(SECONDARY_SERVER )
4. 后台进程 (HIDDEN_APP)
5. 内容供应节点(CONTENT_PROVIDER)
6. 空进程(EMPTY_APP)

当service运行在低内存的环境时，将会kill掉一些存在的进程。因此进程的优先级将会很重要，可以使用startForeground 将service放到前台状态。这样在低内存时被kill的几率会低一些。

四、onDestroy方法里重启service

service +broadcast  方式，就是当service走ondestory的时候，发送一个自定义的广播，当收到广播的时候，重新启动service；

五、Application加上Persistent属性

六、监听系统广播判断Service状态

通过系统的一些广播，比如：手机重启、界面唤醒、应用状态改变等等监听并捕获到，然后判断我们的Service是否还存活，别忘记加权限啊。

####Requestlayout,onlayout,onDraw,DrawChild区别与联系-猎豹

requestLayout()方法 ：会导致调用measure()过程 和 layout()过程 。
将会根据标志位判断是否需要ondraw

onLayout()方法(如果该View是ViewGroup对象，需要实现该方法，对每个子视图进行布局)

调用onDraw()方法绘制视图本身   (每个View都需要重载该方法，ViewGroup不需要实现该方法)

drawChild()去重新回调每个子视图的draw()方法

####invalidate()和postInvalidate()的区别及使用-百度

http://blog.csdn.net/mars2639/article/details/6650876

####Android动画框架实现原理

Animation框架定义了透明度，旋转，缩放和位移几种常见的动画，而且控制的是整个View，实现原理是每次绘制视图时View所在的ViewGroup中的drawChild函数获取该View的Animation的Transformation值，然后调用canvas.concat(transformToApply.getMatrix())，通过矩阵运算完成动画帧，如果动画没有完成，继续调用invalidate()函数，启动下次绘制来驱动动画，动画过程中的帧之间间隙时间是绘制函数所消耗的时间，可能会导致动画消耗比较多的CPU资源，最重要的是，动画改变的只是显示，并不能相应事件。

####Android为每个应用程序分配的内存大小是多少-美团

android程序内存一般限制在16M，也有的是24M

####View刷新机制-百度-美团

由ViewRoot对象的performTraversals()方法调用draw()方法发起绘制该View树，值得注意的是每次发起绘图时，并不会重新绘制每个View树的视图，而只会重新绘制那些“需要重绘”的视图，View类内部变量包含了一个标志位DRAWN，当该视图需要重绘时，就会为该View添加该标志位。

调用流程 ：

mView.draw()开始绘制，draw()方法实现的功能如下：

1. 绘制该View的背景
2. 为显示渐变框做一些准备操作(见5，大多数情况下，不需要改渐变框)          
3. 调用onDraw()方法绘制视图本身   (每个View都需要重载该方法，ViewGroup不需要实现该方法)
4. 调用dispatchDraw ()方法绘制子视图(如果该View类型不为ViewGroup，即不包含子视图，不需要重载该方法)值得说明的是，ViewGroup类已经为我们重写了dispatchDraw ()的功能实现，应用程序一般不需要重写该方法，但可以重载父类函数实现具体的功能。

####LinearLayout和RelativeLayout性能对比-百度

1. RelativeLayout会让子View调用2次onMeasure，LinearLayout 在有weight时，也会调用子View2次onMeasure
2. RelativeLayout的子View如果高度和RelativeLayout不同，则会引发效率问题，当子View很复杂时，这个问题会更加严重。如果可以，尽量使用padding代替margin。
3. 在不影响层级深度的情况下,使用LinearLayout和FrameLayout而不是RelativeLayout。

最后再思考一下文章开头那个矛盾的问题，为什么Google给开发者默认新建了个RelativeLayout，而自己却在DecorView中用了个LinearLayout。因为DecorView的层级深度是已知而且固定的，上面一个标题栏，下面一个内容栏。采用RelativeLayout并不会降低层级深度，所以此时在根节点上用LinearLayout是效率最高的。而之所以给开发者默认新建了个RelativeLayout是希望开发者能采用尽量少的View层级来表达布局以实现性能最优，因为复杂的View嵌套对性能的影响会更大一些。

####优化自定义view百度-乐视-小米

为了加速你的view，对于频繁调用的方法，需要尽量减少不必要的代码。先从onDraw开始，需要特别注意不应该在这里做内存分配的事情，因为它会导致GC，从而导致卡顿。在初始化或者动画间隙期间做分配内存的动作。不要在动画正在执行的时候做内存分配的事情。

你还需要尽可能的减少onDraw被调用的次数，大多数时候导致onDraw都是因为调用了invalidate().因此请尽量减少调用invaildate()的次数。如果可能的话，尽量调用含有4个参数的invalidate()方法而不是没有参数的invalidate()。没有参数的invalidate会强制重绘整个view。

另外一个非常耗时的操作是请求layout。任何时候执行requestLayout()，会使得Android UI系统去遍历整个View的层级来计算出每一个view的大小。如果找到有冲突的值，它会需要重新计算好几次。另外需要尽量保持View的层级是扁平化的，这样对提高效率很有帮助。

如果你有一个复杂的UI，你应该考虑写一个自定义的ViewGroup来执行他的layout操作。与内置的view不同，自定义的view可以使得程序仅仅测量这一部分，这避免了遍历整个view的层级结构来计算大小。这个PieChart 例子展示了如何继承ViewGroup作为自定义view的一部分。PieChart 有子views，但是它从来不测量它们。而是根据他自身的layout法则，直接设置它们的大小。

####ContentProvider-乐视

http://blog.csdn.net/coder_pig/article/details/47858489

####Fragment生命周期

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/fragment-life.png)

####volley解析-美团-乐视

http://a.codekk.com/detail/Android/grumoon/Volley%20%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90

####Glide源码解析

http://www.lightskystreet.com/2015/10/12/glide_source_analysis/
http://frodoking.github.io/2015/10/10/android-glide/

####Android设计模式

http://blog.csdn.net/bboyfeiyu/article/details/44563871

####架构设计-搜狐

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/architucture.png)

http://www.tianmaying.com/tutorial/AndroidMVC

####Android属性动画特性-乐视-小米

如果你的需求中只需要对View进行移动、缩放、旋转和淡入淡出操作，那么补间动画确实已经足够健全了。但是很显然，这些功能是不足以覆盖所有的场景的，一旦我们的需求超出了移动、缩放、旋转和淡入淡出这四种对View的操作，那么补间动画就不能再帮我们忙了，也就是说它在功能和可扩展方面都有相当大的局限性，那么下面我们就来看看补间动画所不能胜任的场景。

注意上面我在介绍补间动画的时候都有使用“对View进行操作”这样的描述，没错，补间动画是只能够作用在View上的。也就是说，我们可以对一个Button、TextView、甚至是LinearLayout、或者其它任何继承自View的组件进行动画操作，但是如果我们想要对一个非View的对象进行动画操作，抱歉，补间动画就帮不上忙了。可能有的朋友会感到不能理解，我怎么会需要对一个非View的对象进行动画操作呢？这里我举一个简单的例子，比如说我们有一个自定义的View，在这个View当中有一个Point对象用于管理坐标，然后在onDraw()方法当中就是根据这个Point对象的坐标值来进行绘制的。也就是说，如果我们可以对Point对象进行动画操作，那么整个自定义View的动画效果就有了。显然，补间动画是不具备这个功能的，这是它的第一个缺陷。

然后补间动画还有一个缺陷，就是它只能够实现移动、缩放、旋转和淡入淡出这四种动画操作，那如果我们希望可以对View的背景色进行动态地改变呢？很遗憾，我们只能靠自己去实现了。说白了，之前的补间动画机制就是使用硬编码的方式来完成的，功能限定死就是这些，基本上没有任何扩展性可言。

最后，补间动画还有一个致命的缺陷，就是它只是改变了View的显示效果而已，而不会真正去改变View的属性。什么意思呢？比如说，现在屏幕的左上角有一个按钮，然后我们通过补间动画将它移动到了屏幕的右下角，现在你可以去尝试点击一下这个按钮，点击事件是绝对不会触发的，因为实际上这个按钮还是停留在屏幕的左上角，只不过补间动画将这个按钮绘制到了屏幕的右下角而已。

### 专题

### 性能优化

#### [Android性能优化典范 - 第1季](http://hukai.me/android-performance-patterns/)
1. **Render Performance** Android系统每隔16ms发出VSYNC信号，触发对UI进行渲染，如果每次渲染都成功，这样就能够达到流畅的画面所需要的60fps，为了能够实现60fps，这意味着程序的大多数操作都必须在16ms内完成。我们可以通过一些工具来定位问题，比如可以使用HierarchyViewer来查找Activity中的布局是否过于复杂，也可以使用手机设置里面的开发者选项，打开Show GPU Overdraw等选项进行观察。你还可以使用TraceView来观察CPU的执行情况，更加快捷的找到性能瓶颈。
2. **Understanding Overdraw** Overdraw(过度绘制)描述的是屏幕上的某个像素在同一帧的时间内被绘制了多次。在多层次的UI结构里面，如果不可见的UI也在做绘制的操作，这就会导致某些像素区域被绘制了多次。这就浪费大量的CPU以及GPU资源。Overdraw有时候是因为你的UI布局存在大量重叠的部分，还有的时候是因为非必须的重叠背景。例如某个Activity有一个背景，然后里面的Layout又有自己的背景，同时子View又分别有自己的背景。仅仅是通过移除非必须的背景图片，这就能够减少大量的红色Overdraw区域，增加蓝色区域的占比。这一措施能够显著提升程序性能。
3. **Understanding VSYNC** Refresh Rate：代表了屏幕在一秒内刷新屏幕的次数，这取决于硬件的固定参数，例如60Hz。Frame Rate：代表了GPU在一秒内绘制操作的帧数，例如30fps，60fps。通常来说，帧率超过刷新频率只是一种理想的状况，在超过60fps的情况下，GPU所产生的帧数据会因为等待VSYNC的刷新信息而被Hold住，这样能够保持每次刷新都有实际的新的数据可以显示。但是我们遇到更多的情况是帧率小于刷新频率。
4. **Tool:Profile GPU Rendering** 性能问题如此的麻烦，幸好我们可以有工具来进行调试。打开手机里面的开发者选项，选择Profile GPU Rendering，选中On screen as bars的选项。
5. **Why 60fps?** 我们通常都会提到60fps与16ms，可是知道为何会是以程序是否达到60fps来作为App性能的衡量标准吗？这是因为人眼与大脑之间的协作无法感知超过60fps的画面更新。开发app的性能目标就是保持60fps，这意味着每一帧你只有16ms=1000/60的时间来处理所有的任务。
6. **Android, UI and the GPU** 在Android里面那些由主题所提供的资源，例如Bitmaps，Drawables都是一起打包到统一的Texture纹理当中，然后再传递到GPU里面，这意味着每次你需要使用这些资源的时候，都是直接从纹理里面进行获取渲染的。当然随着UI组件的越来越丰富，有了更多演变的形态。例如显示图片的时候，需要先经过CPU的计算加载到内存中，然后传递给GPU进行渲染。文字的显示更加复杂，需要先经过CPU换算成纹理，然后再交给GPU进行渲染，回到CPU绘制单个字符的时候，再重新引用经过GPU渲染的内容。动画则是一个更加复杂的操作流程。为了能够使得App流畅，我们需要在每一帧16ms以内处理完所有的CPU与GPU计算，绘制，渲染等等操作。
7. **Invalidations, Layouts, and Performance** 任何时候View中的绘制内容发生变化时，都会重新执行创建DisplayList，渲染DisplayList，更新到屏幕上等一系列操作。这个流程的表现性能取决于你的View的复杂程度，View的状态变化以及渲染管道的执行性能。举个例子，假设某个Button的大小需要增大到目前的两倍，在增大Button大小之前，需要通过父View重新计算并摆放其他子View的位置。修改View的大小会触发整个HierarcyView的重新计算大小的操作。如果是修改View的位置则会触发HierarchView重新计算其他View的位置。如果布局很复杂，这就会很容易导致严重的性能问题。我们需要尽量减少Overdraw。
8. **Overdraw, Cliprect, QuickReject** 我们可以通过canvas.clipRect()来帮助系统识别那些可见的区域。这个方法可以指定一块矩形区域，只有在这个区域内才会被绘制，其他的区域会被忽视。这个API可以很好的帮助那些有多组重叠组件的自定义View来控制显示的区域。同时clipRect方法还可以帮助节约CPU与GPU资源，在clipRect区域之外的绘制指令都不会被执行，那些部分内容在矩形区域内的组件，仍然会得到绘制。
9. **Memory Churn and performance** 执行GC操作的时候，所有线程的任何操作都会需要暂停，等待GC操作完成之后，其他操作才能够继续运行。Memory Churn内存抖动，内存抖动是因为大量的对象被创建又在短时间内马上被释放。瞬间产生大量的对象会严重占用Young Generation的内存区域，当达到阀值，剩余空间不够的时候，也会触发GC。即使每次分配的对象占用了很少的内存，但是他们叠加在一起会增加Heap的压力，从而触发更多其他类型的GC。这个操作有可能会影响到帧率，并使得用户感知到性能问题。
10. **Garbage Collection in Android** 原始JVM中的GC机制在Android中得到了很大程度上的优化。Android里面是一个三级Generation的内存模型，最近分配的对象会存放在Young Generation区域，当这个对象在这个区域停留的时间达到一定程度，它会被移动到Old Generation，最后到Permanent Generation区域。如果不小心在最小的for循环单元里面执行了创建对象的操作，这将很容易引起GC并导致性能问题。通过Memory Monitor我们可以查看到内存的占用情况，每一次瞬间的内存降低都是因为此时发生了GC操作，如果在短时间内发生大量的内存上涨与降低的事件，这说明很有可能这里有性能问题。我们还可以通过Heap and Allocation Tracker工具来查看此时内存中分配的到底有哪些对象。
11. **Performance Cost of Memory Leaks** 内存泄漏指的是那些程序不再使用的对象无法被GC识别，这样就导致这个对象一直留在内存当中，占用了宝贵的内存空间。显然，这还使得每级Generation的内存区域可用空间变小，GC就会更容易被触发，从而引起性能问题。
12. **Memory Performance** 通常来说，Android对GC做了大量的优化操作，虽然执行GC操作的时候会暂停其他任务，可是大多数情况下，GC操作还是相对很安静并且高效的。但是如果我们对内存的使用不恰当，导致GC频繁执行，这样就会引起不小的性能问题。
13. **Tool - Memory Monitor** Android Studio中的Memory Monitor可以很好的帮助我们查看程序的内存使用情况。
14. **Battery Performance** 我们应该尽量减少唤醒屏幕的次数与持续的时间，使用WakeLock来处理唤醒的问题，能够正确执行唤醒操作并根据设定及时关闭操作进入睡眠状态。某些非必须马上执行的操作，例如上传歌曲，图片处理等，可以等到设备处于充电状态或者电量充足的时候才进行。触发网络请求的操作，每次都会保持无线信号持续一段时间，我们可以把零散的网络请求打包进行一次操作，避免过多的无线信号引起的电量消耗。关于网络请求引起无线信号的电量消耗
15. **Understanding Battery Drain on Android** 使用WakeLock或者JobScheduler唤醒设备处理定时的任务之后，一定要及时让设备回到初始状态。每次唤醒无线信号进行数据传递，都会消耗很多电量，它比WiFi等操作更加的耗电
16. **Battery Drain and WakeLocks** 这正是JobScheduler API所做的事情。它会根据当前的情况与任务，组合出理想的唤醒时间，例如等到正在充电或者连接到WiFi的时候，或者集中任务一起执行。我们可以通过这个API实现很多免费的调度算法。

#### [Android性能优化典范 - 第2季](http://hukai.me/android-performance-patterns-season-2/)
1. **Battery Drain and Networking** 我们可以有针对性的把请求行为捆绑起来，延迟到某个时刻统一发起请求。这部分主要会涉及到Prefetch(预取)与Compressed(压缩)这两个技术。对于Prefetch的使用，我们需要预先判断用户在此次操作之后，后续零散的请求是否很有可能会马上被触发，可以把后面5分钟有可能会使用到的零散请求都一次集中执行完毕。对于Compressed的使用，在上传与下载数据之前，使用CPU对数据进行压缩与解压，可以很大程度上减少网络传输的时间。
2. **Wear & Sensors** 首先我们需要尽量使用Android平台提供的既有运动数据，而不是自己去实现监听采集数据，因为大多数Android Watch自身记录Sensor数据的行为是有经过做电量优化的。其次在Activity不需要监听某些Sensor数据的时候需要尽快释放监听注册。还有我们需要尽量控制更新的频率，仅仅在需要刷新显示数据的时候才触发获取最新数据的操作。另外我们可以针对Sensor的数据做批量处理，待数据累积一定次数或者某个程度的时候才更新到UI上。最后当Watch与Phone连接起来的时候，可以把某些复杂操作的事情交给Phone来执行，Watch只需要等待返回的结果。
3. **Smooth Android Wear Animation** 在Android里面一个相对操作比较繁重的事情是对Bitmap进行旋转，缩放，裁剪等等。例如在一个圆形的钟表图上，我们把时钟的指针抠出来当做单独的图片进行旋转会比旋转一张完整的圆形图的所形成的帧率要高56%。
4. **Android Wear Data Batching** 仅仅在真正需要刷新界面的时候才发出请求，尽量把计算复杂操作的任务交给Phone来处理，Phone仅仅在数据发生变化的时候才通知到Wear，把零碎的数据请求捆绑一起再进行操作。
5. **Object Pools** 使用对象池技术有很多好处，它可以避免内存抖动，提升性能，但是在使用的时候有一些内容是需要特别注意的。通常情况下，初始化的对象池里面都是空白的，当使用某个对象的时候先去对象池查询是否存在，如果不存在则创建这个对象然后加入对象池，但是我们也可以在程序刚启动的时候就事先为对象池填充一些即将要使用到的数据，这样可以在需要使用到这些对象的时候提供更快的首次加载速度，这种行为就叫做预分配。使用对象池也有不好的一面，程序员需要手动管理这些对象的分配与释放，所以我们需要慎重地使用这项技术，避免发生对象的内存泄漏。为了确保所有的对象能够正确被释放，我们需要保证加入对象池的对象和其他外部对象没有互相引用的关系。
6. **To Index or Iterate?** for index的方式有更好的效率，但是因为不同平台编译器优化各有差异，我们最好还是针对实际的方法做一下简单的测量比较好，拿到数据之后，再选择效率最高的那个方式。
7. **The Magic of LRU Cache** 使用LRU Cache能够显著提升应用的性能，可是也需要注意LRU Cache中被淘汰对象的回收，否者会引起严重的内存泄露。
8. **Using LINT for Performance Tips** Lint已经集成到Android Studio中了，我们可以手动去触发这个工具，点击工具栏的Analysis -> Inspect Code，触发之后，Lint会开始工作，并把结果输出到底部的工具栏，我们可以逐个查看原因并根据指示做相应的优化修改。
9. **Hidden Cost of Transparency** 通常来说，对于不透明的View，显示它只需要渲染一次即可，可是如果这个View设置了alpha值，会至少需要渲染两次。
10. **Avoiding Allocations in onDraw()** 首先onDraw()方法是执行在UI线程的，在UI线程尽量避免做任何可能影响到性能的操作。虽然分配内存的操作并不需要花费太多系统资源，但是这并不意味着是免费无代价的。设备有一定的刷新频率，导致View的onDraw方法会被频繁的调用，如果onDraw方法效率低下，在频繁刷新累积的效应下，效率低的问题会被扩大，然后会对性能有严重的影响。
11. **Tool: Strict Mode** Android提供了一个叫做Strict Mode的工具，我们可以通过手机设置里面的开发者选项，打开Strict Mode选项，如果程序存在潜在的隐患，屏幕就会闪现红色。我们也可以通过StrictMode API在代码层面做细化的跟踪，可以设置StrictMode监听那些潜在问题，出现问题时如何提醒开发者，可以对屏幕闪红色，也可以输出错误日志。
12. **Custom Views and Performance** Useless calls to onDraw()：我们知道调用View.invalidate()会触发View的重绘，有两个原则需要遵守，第1个是仅仅在View的内容发生改变的时候才去触发invalidate方法，第2个是尽量使用ClipRect等方法来提高绘制的性能。Useless pixels：减少绘制时不必要的绘制元素，对于那些不可见的元素，我们需要尽量避免重绘。Wasted CPU cycles：对于不在屏幕上的元素，可以使用Canvas.quickReject把他们给剔除，避免浪费CPU资源。另外尽量使用GPU来进行UI的渲染，这样能够极大的提高程序的整体表现性能。
13. **Batching Background Work Until Later** 
1.AlarmManager 使用AlarmManager设置定时任务，可以选择精确的间隔时间，也可以选择非精确时间作为参数。除非程序有很强烈的需要使用精确的定时唤醒，否者一定要避免使用他，我们应该尽量使用非精确的方式。2.SyncAdapter 我们可以使用SyncAdapter为应用添加设置账户，这样在手机设置的账户列表里面可以找到我们的应用。这种方式功能更多，但是实现起来比较复杂。我们可以从这里看到官方的培训课程：http://developer.android.com/training/sync-adapters/index.html 3.JobSchedulor 这是最简单高效的方法，我们可以设置任务延迟的间隔，执行条件，还可以增加重试机制。
14. **Smaller Pixel Formats** Android的Heap空间是不会自动做兼容压缩的，意思就是如果Heap空间中的图片被收回之后，这块区域并不会和其他已经回收过的区域做重新排序合并处理，那么当一个更大的图片需要放到heap之前，很可能找不到那么大的连续空闲区域，那么就会触发GC，使得heap腾出一块足以放下这张图片的空闲区域，如果无法腾出，就会发生OOM。
15. **Smaller PNG Files** 尽量减少PNG图片的大小是Android里面很重要的一条规范。相比起JPEG，PNG能够提供更加清晰无损的图片，但是PNG格式的图片会更大，占用更多的磁盘空间。到底是使用PNG还是JPEG，需要设计师仔细衡量，对于那些使用JPEG就可以达到视觉效果的，可以考虑采用JPEG即可。
16. **Pre-scaling Bitmaps** 对bitmap做缩放，这也是Android里面最遇到的问题。对bitmap做缩放的意义很明显，提示显示性能，避免分配不必要的内存。Android提供了现成的bitmap缩放的API，叫做createScaledBitmap()
17. **Re-using Bitmaps** 使用inBitmap属性可以告知Bitmap解码器去尝试使用已经存在的内存区域，新解码的bitmap会尝试去使用之前那张bitmap在heap中所占据的pixel data内存区域，而不是去问内存重新申请一块区域来存放bitmap。利用这种特性，即使是上千张的图片，也只会仅仅只需要占用屏幕所能够显示的图片数量的内存大小。
18. **The Performance Lifecycle** Gather：收集数据，Insight：分析数据，Action：解决问题

#### [Android性能优化典范 - 第3季](http://hukai.me/android-performance-patterns-season-3/)
1. **Fun with ArrayMaps** 为了解决HashMap更占内存的弊端，Android提供了内存效率更高的ArrayMap。它内部使用两个数组进行工作，其中一个数组记录key hash过后的顺序列表，另外一个数组按key的顺序记录Key-Value值
2. **Beware Autoboxing** 有时候性能问题也可能是因为那些不起眼的小细节引起的，例如在代码中不经意的“自动装箱”。我们知道基础数据类型的大小：boolean(8 bits), int(32 bits), float(32 bits)，long(64 bits)，为了能够让这些基础数据类型在大多数Java容器中运作，会需要做一个autoboxing的操作，转换成Boolean，Integer，Float等对象
3. **SparseArray Family Ties** 为了避免HashMap的autoboxing行为，Android系统提供了SparseBoolMap，SparseIntMap，SparseLongMap，LongSparseMap等容器。
4. **The price of ENUMs** Android官方强烈建议不要在Android程序里面使用到enum。
5. **Trimming and Sharing Memory** Android系统提供了一些回调来通知应用的内存使用情况，通常来说，当所有的background应用都被kill掉的时候，forground应用会收到onLowMemory()的回调。在这种情况下，需要尽快释放当前应用的非必须内存资源，从而确保系统能够稳定继续运行。Android系统还提供了onTrimMemory()的回调，当系统内存达到某些条件的时候，所有正在运行的应用都会收到这个回调
6. **DO NOT LEAK VIEWS** 避免使用异步回调,避免使用Static对象,避免把View添加到没有清除机制的容器里面
7. **Location & Battery Drain** 其中存在的一个优化点是，我们可以通过判断返回的位置信息是否相同，从而决定设置下次的更新间隔是否增加一倍，通过这种方式可以减少电量的消耗
8. **Double Layout Taxation** 布局中的任何一个View一旦发生一些属性变化，都可能引起很大的连锁反应。例如某个button的大小突然增加一倍，有可能会导致兄弟视图的位置变化，也有可能导致父视图的大小发生改变。当大量的layout()操作被频繁调用执行的时候，就很可能引起丢帧的现象。
9. **Network Performance 101** 减少移动网络被激活的时间与次数,压缩传输数据
10. **Effective Network Batching** 发起网络请求与接收返回数据都是比较耗电的，在网络硬件模块被激活之后，会继续保持几十秒的电量消耗，直到没有新的网络操作行为之后，才会进入休眠状态。前面一个段落介绍了使用Batching的技术来捆绑网络请求，从而达到减少网络请求的频率。那么如何实现Batching技术呢？通常来说，我们可以会把那些发出的网络请求，先暂存到一个PendingQueue里面，等到条件合适的时候再触发Queue里面的网络请求。
11. **Optimizing Network Request Frequencies** 前面的段落已经提到了应该减少网络请求的频率，这是为了减少电量的消耗。我们可以使用Batching，Prefetching的技术来避免频繁的网络请求。Google提供了GCMNetworkManager来帮助开发者实现那些功能，通过提供的API，我们可以选择在接入WiFi，开始充电，等待移动网络被激活等条件下再次激活网络请求。
12. **Effective Prefetching** 类似上面的情况会频繁触发网络请求，但是如果我们能够预先请求后续可能会使用到网络资源，避免频繁的触发网络请求，这样就能够显著的减少电量的消耗。可是预先获取多少数据量是很值得考量的，因为如果预取数据量偏少，就起不到减少频繁请求的作用，可是如果预取数据过多，就会造成资源的浪费。

#### [Android性能优化典范 - 第4季](http://hukai.me/android-performance-patterns-season-4/)
1. **Cachematters for networking** 想要使得Android系统上的网络访问操作更加的高效就必须做好网络数据的缓存。这是提高网络访问性能最基础的步骤之一。从手机的缓存中直接读取数据肯定比从网络上获取数据要更加的便捷高效，特别是对于那些会被频繁访问到的数据，需要把这些数据缓存到设备上，以便更加快速的进行访问。
2. **Optimizing Network Request Frequencies** 首先我们要对网络行为进行分类，区分需要立即更新数据的行为和其他可以进行延迟的更新行为，为不同的场景进行差异化处理。其次要避免客户端对服务器的轮询操作，这样会浪费很多的电量与带宽流量。解决这个问题，我们可以使用Google Cloud Message来对更新的数据进行推送。然后在某些必须做同步的场景下，需要避免使用固定的间隔频率来进行更新操作，我们应该在返回的数据无更新的时候，使用双倍的间隔时间来进行下一次同步。最后更进一步，我们还可以通过判断当前设备的状态来决定同步的频率，例如判断设备处于休眠，运动等不同的状态设计各自不同时间间隔的同步频率。
3. **Effective Prefetching** 到底预取多少才比较合适呢？一个比较普适的规则是，在3G网络下可以预取1-5Mb的数据量，或者是按照提前预期后续1-2分钟的数据作为基线标准。在实际的操作当中，我们还需要考虑当前的网络速度来决定预取的数据量，例如在同样的时间下，4G网络可以获取到12张图片的数据，而2G网络则只能拿到3张图片的数据。所以，我们还需要把当前的网络环境情况添加到设计预取数据量的策略当中去。判断当前设备的状态与网络情况，可以使用前面提到过的GCMNetworkManager。
4. **Adapting to Latency** 一个典型的网络操作行为，通常包含以下几个步骤：首先手机端发起网络请求，到达网络服务运营商的基站，再转移到服务提供者的服务器上，经过解码之后，接着访问本地的存储数据库，获取到数据之后，进行编码，最后按照原来传递的路径逐层返回。常来说，我们可以把网络请求延迟划分为三档：例如把网络延迟小于60ms的划分为GOOD，大于220ms的划分为BAD，介于两者之间的划分为OK（这里的60ms，220ms会需要根据不同的场景提前进行预算推测）。
5. **Minimizing Asset Payload** 为了能够减小网络传输的数据量，我们需要对传输的数据做压缩的处理，这样能够提高网络操作的性能。首先需要做的是减少图片的大小，其次需要做的是减少序列化数据的大小。
6. **Service Performance Patterns** Service是Android程序里面最常用的基础组件之一，但是使用Service很容易引起电量的过度消耗以及系统资源的未及时释放。避免错误的使用Service，例如我们不应该使用Service来监听某些事件的变化，不应该搞一个Service在后台对服务器不断的进行轮询(应该使用Google Cloud Messaging)。如果已经事先知道Service里面的任务应该执行在后台线程(非默认的主线程)的时候，我们应该使用IntentService或者结合HanderThread，AsycnTask Loader实现的Service。
7. **Removing unused code** Android为我们提供了Proguard的工具来帮助应用程序对代码进行瘦身，优化，混淆的处理。它会帮助移除那些没有使用到的代码，还可以对类名，方法名进行混淆处理以避免程序被反编译。
8. **Removing unused resources** 所幸的是，我们可以使用Gradle来帮助我们分析代码，分析引用的资源，对于那些没有被引用到的资源，会在编译阶段被排除在APK安装包之外，要实现这个功能，对我们来说仅仅只需要在build.gradle文件中配置shrinkResource为true就好了
9. **Perf Theory: Caching** 当我们讨论性能优化的时候，缓存是最常见最有效的策略之一。无论是为了提高CPU的计算速度还是提高数据的访问速度，在绝大多数的场景下，我们都会使用到缓存。
10. **Perf Theory: Approximation(近似法)** 例如使用一张比较接近实际大小的图片来替代原图，换取更快的加载速度。所以对于那些对计算结果要求不需要十分精确的场景，我们可以使用近似法则来提高程序的性能。
11. **Perf Theory: Culling(遴选，挑选)** 一个提高性能的方法是逐步对数据进行过滤筛选，减小搜索的数据集，以此提高程序的执行性能。例如我们需要搜索到居住在某个地方，年龄是多少，符合某些特定条件的候选人，就可以通过逐层过滤筛选的方式来提高后续搜索的执行效率。
12. **Perf Theory: Threading** 使用多线程并发处理任务，从某种程度上可以快速提高程序的执行性能。对于Android程序来说，主线程通常也成为UI线程，需要处理UI的渲染，响应用户的操作等等。
13. **Perf Theory: Batching** 网络请求的批量执行是另外一个比较适合说明batching使用场景的例子，因为每次发起网络请求都相对来说比较耗时耗电，如果能够做到批量一起执行，可以大大的减少电量的消耗。
14. **Serialization performance** 数据序列化的行为可能发生在数据传递过程中的任何阶段，例如网络传输，不同进程间数据传递，不同类之间的参数传递，把数据存储到磁盘上等等。通常情况下，我们会把那些需要序列化的类实现Serializable接口(如下图所示)，但是这种传统的做法效率不高，实施的过程会消耗更多的内存。但是我们如果使用GSON库来处理这个序列化的问题，不仅仅执行速度更快，内存的使用效率也更高。Android的XML布局文件会在编译的阶段被转换成更加复杂的格式，具备更加高效的执行性能与更高的内存使用效率。
15. **Smaller Serialized Data** 数据呈现的顺序以及结构会对序列化之后的空间产生不小的影响。
16. **Caching UI data** 缓存UI界面上的数据，可以采用方案有存储到文件系统，Preference，SQLite等等，做了缓存之后，这样就可以在请求数据返回结果之前，呈现给用户旧的数据，而不是使用正在加载的方式让用户什么数据都看不到，当然在请求网络最新数据的过程中，需要有正在刷新的提示。至于到底选择哪个方案来对数据进行缓存，就需要根据具体情况来做选择了。
17. **CPU Frequency Scaling** 调节CPU的频率会执行的性能产生较大的影响，为了最大化的延长设备的续航时间，系统会动态调整CPU的频率，频率越高执行代码的速度自然就越快。我们可以使用Systrace工具来导出CPU的执行情况，以便帮助定位性能问题。

#### [Android性能优化典范 - 第5季](http://hukai.me/android-performance-patterns-season-5/)
1. **Threading Performance** AsyncTask: 为UI线程与工作线程之间进行快速的切换提供一种简单便捷的机制。适用于当下立即需要启动，但是异步执行的生命周期短暂的使用场景。HandlerThread: 为某些回调方法或者等待某些任务的执行设置一个专属的线程，并提供线程任务的调度机制。ThreadPool: 把任务分解成不同的单元，分发到各个不同的线程上，进行同时并发处理。IntentService: 适合于执行由UI触发的后台Service任务，并可以把后台任务执行的情况通过一定的机制反馈给UI。
2. **Understanding Android Threading** 通常来说，一个线程需要经历三个生命阶段：开始，执行，结束。线程会在任务执行完毕之后结束，那么为了确保线程的存活，我们会在执行阶段给线程赋予不同的任务，然后在里面添加退出的条件从而确保任务能够执行完毕后退出。
3. **Memory & Threading** 不要在任何非UI线程里面去持有UI对象的引用。系统为了确保所有的UI对象都只会被UI线程所进行创建，更新，销毁的操作，特地设计了对应的工作机制(当Activity被销毁的时候，由该Activity所触发的非UI线程都将无法对UI对象进行操作，否者就会抛出程序执行异常的错误)来防止UI对象被错误的使用。
4. **Good AsyncTask Hunting** AsyncTask虽然提供了一种简单便捷的异步机制，但是我们还是很有必要特别关注到他的缺点，避免出现因为使用错误而导致的严重系统性能问题。
5. **Getting a HandlerThread** HandlerThread比较合适处理那些在工作线程执行，需要花费时间偏长的任务。我们只需要把任务发送给HandlerThread，然后就只需要等待任务执行结束的时候通知返回到主线程就好了。另外很重要的一点是，一旦我们使用了HandlerThread，需要特别注意给HandlerThread设置不同的线程优先级，CPU会根据设置的不同线程优先级对所有的线程进行调度优化。
6. **Swimming in Threadpools** 线程池适合用在把任务进行分解，并发进行执行的场景。通常来说，系统里面会针对不同的任务设置一个单独的守护线程用来专门处理这项任务。
7. **The Zen of IntentService** 默认的Service是执行在主线程的，可是通常情况下，这很容易影响到程序的绘制性能(抢占了主线程的资源)。除了前面介绍过的AsyncTask与HandlerThread，我们还可以选择使用IntentService来实现异步操作。IntentService继承自普通Service同时又在内部创建了一个HandlerThread，在onHandlerIntent()的回调里面处理扔到IntentService的任务。所以IntentService就不仅仅具备了异步线程的特性，还同时保留了Service不受主页面生命周期影响的特点。
8. **Threading and Loaders** 当启动工作线程的Activity被销毁的时候，我们应该做点什么呢？为了方便的控制工作线程的启动与结束，Android为我们引入了Loader来解决这个问题。我们知道Activity有可能因为用户的主动切换而频繁的被创建与销毁，也有可能是因为类似屏幕发生旋转等被动原因而销毁再重建。在Activity不停的创建与销毁的过程当中，很有可能因为工作线程持有Activity的View而导致内存泄漏(因为工作线程很可能持有View的强引用，另外工作线程的生命周期还无法保证和Activity的生命周期一致，这样就容易发生内存泄漏了)。除了可能引起内存泄漏之外，在Activity被销毁之后，工作线程还继续更新视图是没有意义的，因为此时视图已经不在界面上显示了。
9. **The Importance of Thread Priority** 在Android系统里面，我们可以通过android.os.Process.setThreadPriority(int)设置线程的优先级，参数范围从-20到24，数值越小优先级越高。Android系统还为我们提供了以下的一些预设值，我们可以通过给不同的工作线程设置不同数值的优先级来达到更细粒度的控制。
10. **Profile GPU Rendering : M Update** 从Android M系统开始，系统更新了GPU Profiling的工具来帮助我们定位UI的渲染性能问题。早期的CPU Profiling工具只能粗略的显示出Process，Execute，Update三大步骤的时间耗费情况。

#### [官方性能优化系列教程](https://www.youtube.com/playlist?list=PLWz5rJ2EKKc9CBxr3BVjPTPoDPLdPIFCE)

### 架构分析
[MVVM](http://tech.meituan.com/android_mvvm.html)

[MVP](https://code.tutsplus.com/series/how-to-adopt-model-view-presenter-on-android--cms-1012)

### 阿里面试题
#### 进程间通信方式
1. 通过Intent在Activity、Service或BroadcastReceiver间进行进程间通信，可通过Intent传递数据
2. AIDL方式
3. Messenger方式
4. 利用ContentProvider
5. Socket方式
6. 基于文件共享的方式

#### 什么是协程
我们知道多个线程相对独立，有自己的上下文，切换受系统控制；而协程也相对独立，有自己的上下文，但是其切换由自己控制，由当前协程切换到其他协程由当前协程来控制。
￼
#### 内存泄露是怎么回事
由忘记释放分配的内存导致的

#### 程序计数器，引到了逻辑地址（虚地址）和物理地址及其映射关系
虚拟机中的程序计数器是Java运行时数据区中的一小块内存区域，但是它的功能和通常的程序计数器是类似的，它指向虚拟机正在执行字节码指令的地址。具体点儿说，当虚拟机执行的方法不是native的时，程序计数器指向虚拟机正在执行字节码指令的地址；当虚拟机执行的方法是native的时，程序计数器中的值是未定义的。另外，程序计数器是线程私有的，也就是说，每一个线程都拥有仅属于自己的程序计数器。

#### 数组和链表的区别
数组是将元素在内存中连续存放，由于每个元素占用内存相同，可以通过下标迅速访问数组中任何元素。但是如果要在数组中增加一个元素，需要移动大量元素，在内存中空出一个元素的空间，然后将要增加的元素放在其中。同样的道理，如果想删除一个元素，同样需要移动大量元素去填掉被移动的元素。如果应用需要快速访问数据，很少或不插入和删除元素，就应该用数组。

链表恰好相反，链表中的元素在内存中不是顺序存储的，而是通过存在元素中的指针联系到一起。比如：上一个元素有个指针指到下一个元素，以此类推，直到最后一个元素。如果要访问链表中一个元素，需要从第一个元素开始，一直找到需要的元素位置。但是增加和删除一个元素对于链表数据结构就非常简单了，只要修改元素中的指针就可以了。如果应用需要经常插入和删除元素你就需要用链表数据结构了。

#### 二叉树的深度优先遍历和广度优先遍历的具体实现
http://www.i3geek.com/archives/794

#### 堆的结构
年轻代（Young Generation）、年老代（Old Generation）和持久代（Permanent 
Generation）。其中持久代主要存放的是Java类的类信息，与垃圾收集要收集的Java对象关系
不大。年轻代和年老代的划分是对垃 圾收集影响比较大的。

#### bitmap对象的理解
http://blog.csdn.net/angel1hao/article/details/51890938

#### 什么是深拷贝和浅拷
浅拷贝：使用一个已知实例对新创建实例的成员变量逐个赋值，这个方式被称为浅拷贝。
深拷贝：当一个类的拷贝构造方法，不仅要复制对象的所有非引用成员变量值，还要为引用类型的成员变量创建新的实例，并且初始化为形式参数实例值。这个方式称为深拷贝

#### 对象锁和类锁是否会互相影响
对象锁：Java的所有对象都含有1个互斥锁，这个锁由JVM自动获取和释放。线程进入synchronized方法的时候获取该对象的锁，当然如果已经有线程获取了这个对象的锁，那么当前线程会等待；synchronized方法正常返回或者抛异常而终止，JVM会自动释放对象锁。这里也体现了用synchronized来加锁的1个好处，方法抛异常的时候，锁仍然可以由JVM来自动释放。
类锁： 对象锁是用来控制实例方法之间的同步，类锁是用来控制静态方法（或静态变量互斥体）之间的同步。其实类锁只是一个概念上的东西，并不是真实存在的，它只是用来帮助我们理解锁定实例方法和静态方法的区别的。我们都知道，java类可能会有很多个对象，但是只有1个Class对象，也就是说类的不同实例之间共享该类的Class对象。Class对象其实也仅仅是1个java对象，只不过有点特殊而已。由于每个java对象都有1个互斥锁，而类的静态方法是需要Class对象。所以所谓的类锁，不过是Class对象的锁而已。获取类的Class对象有好几种，最简单的就是MyClass.class的方式。
类锁和对象锁不是同1个东西，一个是类的Class对象的锁，一个是类的实例的锁。也就是说：1个线程访问静态synchronized的时候，允许另一个线程访问对象的实例synchronized方法。反过来也是成立的，因为他们需要的锁是不同的。

#### looper架构
http://wangkuiwu.github.io/2014/08/26/MessageQueue/

#### 自定义控件原理
http://www.jianshu.com/p/988326f9c8a3

#### binder工作原理
Binder是客户端和服务端进行通讯的媒介

#### ActivityThread，Ams，Wms的工作原理
ActivityThread: 运行在应用进程的主线程上，响应 ActivityManangerService 启动、暂停Activity，广播接收等消息。
ams:统一调度各应用程序的Activity、内存管理、进程管理

#### Java中final，finally，finalize的区别
* final 用于声明属性,方法和类, 分别表示属性不可变, 方法不可覆盖, 类不可继承. 
* finally 是异常处理语句结构的一部分，表示总是执行. 
* finalize 是Object类的一个方法，在垃圾收集器执行的时候会调用被回收对象的此方法，可以覆盖此方法提供垃圾收集时的其他资源回收，例如关闭文件等. JVM不保证此方法总被调用.

#### 一个文件中有100万个整数，由空格分开，在程序中判断用户输入的整数是否在此文件中。说出最优的方法

#### 两个进程同时要求写或者读，能不能实现？如何防止进程的同步？

#### volatile 的意义？

防止CPU指令重排序

#### 单例

```java
public class Singleton{
private volatile static Singleton mSingleton;
private Singleton(){
}
public static Singleton getInstance(){
  if(mSingleton == null){\\A
    synchronized(Singleton.class){\\C
     if(mSingleton == null)
      mSingleton = new Singleton();\\B
      }
    }
    return mSingleton;
  }
}
```

#### Given a string, determine if it is a palindrome（回文，如果不清楚，按字面意思脑补下）, considering only alphanumeric characters and ignoring cases.  

For example,  "A man, a plan, a canal: Panama" is a palindrome.  "race a car" is not a palindrome.  

Note:  Have you consider that the string might be empty? This is a good question to ask during an interview.  For the purpose of this problem, we define empty string as valid palindrome.

```
public boolean isPalindrome(String palindrome){
		char[] palindromes = palidrome.toCharArray();
 		if(palindromes.lengh == 0){
	 		return true
 		}
 		Arraylist<Char> temp = new Arraylist();
 		for(int i=0;i<palindromes.length;i++){
 		if((palindromes[i]>'a' && palindromes[i]<'z')||palindromes[i]>'A' && palindromes[i]<'Z')){
 		temp.add(palindromes[i].toLowerCase());
 		}
		}
 		for(int i=0;i<temp.size()/2;i++){
 		if(temp.get(i) != temp.get(temp.size()-i)){
 		//
 		return false;
 		}
 		}
 		return true;
}
```

#### 烧一根不均匀的绳，从头烧到尾总共需要1个小时。现在有若干条材质相同的绳子，问如何用烧绳的方法来计时一个小时十五分钟呢
用两根绳子，一个绳子两头烧，一个一头烧。

### 腾讯
#### 2000万个整数，找出第五十大的数字？
冒泡、选择、建堆
#### 从网络加载一个10M的图片，说下注意事项
图片缓存、异常恢复、质量压缩
#### 自定义View注意事项
渲染帧率、内存
#### 项目中常用的设计模式
单例、观察者、适配器、建造者。。
#### JVM的理解
[http://www.infoq.com/cn/articles/java-memory-model-1
](http://www.infoq.com/cn/articles/java-memory-model-1)

