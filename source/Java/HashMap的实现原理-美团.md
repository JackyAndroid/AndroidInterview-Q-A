#### HashMap的实现原理-美团
[HashMap常见面试问题](https://www.cnblogs.com/youzhibing/p/11833040.html)

##### [HashMap 中的取模和扩容公式推导](https://segmentfault.com/a/1190000039294622)

[HashMap默认加载因子为什么选择0.75？](https://www.cnblogs.com/aspirant/p/11470928.html)

[Java 8系列之重新认识HashMap](https://tech.meituan.com/2016/06/24/java-hashmap.html)

[Map 综述（一）：彻头彻尾理解 HashMap](https://blog.csdn.net/justloveyou_/article/details/62893086)

1. HashMap概述：
   HashMap是基于哈希表的Map接口的非同步实现。此实现提供所有可选的映射操作，并允许使用null值和null键。此类不保证映射的顺序，特别是它不保证该顺序恒久不变。 
2. HashMap的数据结构：
	在java编程语言中，最基本的结构就是两种，一个是数组，另外一个是模拟指针（引用），所有的数据结构都可以用这两个基本结构来构造的，HashMap也不例外。HashMap实际上是一个“链表散列”的数据结构，即数组和链表的结合体。

![](../../picture/hashmap.jpg)
	
从上图中可以看出，HashMap底层就是一个数组结构，数组中的每一项又是一个链表。当新建一个HashMap的时候，就会初始化一个数组。