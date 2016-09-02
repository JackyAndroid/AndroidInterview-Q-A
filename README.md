###Welcome to follow me on GitHub or CSDN

GitHub: https://github.com/JackyAndroid

CSDN: http://blog.csdn.net/rain_butterfly

[中文版文档](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/README-CN.md)

---

# AndroidInterview-Q-A
Some of the questions (along with their answers) related to android and java asked in top notch companies.

###Java

####Significance of Interface

- Specification
- Extension
- Callback

####The significance of an abstract class

* Provide a common type of its subclasses
* Encapsulation subclasses of duplicate content
* To define abstract methods

####The role of the inner class

1. The inner class can use multiple instances of each instance has its own state information, and information with other peripheral objects are independent of each other.
2. Outside of a single class, allows multiple inner class to implement the same interface in different ways, or the same class inheritance.
3. Create inner class object moment does not depend on peripheral class object creation.
4. Inner classes is not confusing "is - a"relationship, it is an independent entity.
5. Inner class provides better encapsulation, in addition to the outer class, other class cannot access

####Does static method can be overriden？Why or why not?

No we can't override static methods.

Subclass inherits the parent class, use the same method of static and non-static methods, then non-static methods covered in the parent class method (namely rewriting), the static method of the parent is hidden (if the object is the parent class is called the hidden method), the other a subclass inherits the parent class of the static and non-static methods, as for the method overloading I think it is one of the elements in the same class, can't say what the parent class method and what method in a subclass is the embodiment of the method overloading

####Major sorting algorithims and their implementation in Java

These can be found here in this blog - http://blog.csdn.net/qy1387/article/details/7752973
P.S- If you don't understand chinese then please translate blog to your local language.

####Enumerate the Java collection and inheritance relationships

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/collection.png)

####What are the important characteristics of the Java virtual machine

An important feature of the Java language is with platform independence.While using the Java virtual machine is the key to achieve this feature.The general high-level language if you want to run on different platforms, at least needs to be compiled into different object code.And after the introduction of Java virtual machine, the Java language runtime on different platforms do not need to recompile.Java language usage patterns Java virtual machine blocked information related to the specific platform, makes the Java language compiler to generate the Java virtual machine to run the target code (byte code), you can run on multiple platforms without modification.Java virtual machine when performing the bytecode, explain the bytecode into concrete platform machine instruction execution.

####Which object will be rid of garbage collection

The Java garbage collection mechanism is the most basic way is to generational collection.In memory area is divided into different generations, object according to its survival time is saved in the corresponding generation area.The general implementation is divided into three generation: young, old and permanent.Memory allocation is occurred in the young generation.When an object survival time long enough, it will be copied to the older generation.For different generations can use different garbage collection algorithm.Divides the starting point is the generation of application objects to study the survival time of statistical rule.In general, an application of most objects in the survival of the time is very short.Such as the survival of the local variable time is only the execution of the method.Based on this, the young generation garbage collection algorithm can be targeted.

####What is the difference between threads and processes

In short, a program of at least one process, a process of at least one thread.The thread dimension is less than the process of dividing, making high concurrency multithreaded program.In addition, the process is in the process of execution has an independent memory unit, and multiple threads to Shared memory, thus greatly improve the efficiency of the program.Threads in the process of execution and process or is there a difference.Each individual threads run a program entry, order execution sequence and the procedure of exports.But the threads will not be able to independently execute, must depend on application, provide multiple threads execute control by the application.From a logical point of view, a multithreaded significance lies in an application, there are multiple execution part can perform at the same time.But were not operating system with multiple threads as multiple independent applications, to realize the process of scheduling and management, and resource allocation.This is the important distinction between the threads and processes.Process is a certain independent function of the program on a run on one of the data collection activities, resource allocation and scheduling process is the system of an independent unit.Thread is a process of an entity, is the basic unit of the CPU scheduling and dispatching, which is smaller than the process of the basic unit of the can run independently. Thread basically does not own system resources, have only a little in operation of essential resources (such as the program counter, a set of registers and stack), but it can be to belong to a Shared other threads of a process possesses all the resources.A thread can be created and revoke another thread;Between the multiple threads in the same process can execute concurrently.Process and thread main difference is that they are the different ways of operating system resources management.Process has its own address space, a process after the collapse, in protected mode will not affect other processes, and in the process of the thread is just a different execution path.Thread has its own stack and local variables, but no single address space between thread, a thread die die is equal to the whole process, so the multi-process program than in a multithreaded program, but in the process of switching cost resources is bigger, the efficiency is less.But for some requirements and at the same time and again to share some of the variables of concurrent operation, can only use threads, cannot use process.If you are interested in further, I suggest you look at the modern operating systems or the design and implementation of the operating system.Said to is a problem more clearly.

####Difference between == && equals() in java

http://blog.csdn.net/tiantiandjava/article/details/46988461

####What are the time complexities of common sorting algorithms

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/algorithm.png)

####What is a HashMap implementation principle

1. A HashMap overview：
	HashMap is based on the hash Map interface of asynchronous implementation.This implementation provides all of the optional mapping operations, and allows the use of null values and null keys.Such does not guarantee the order of the map, in particular, it does not guarantee that the constant sequence. 
2. The data structure of a HashMap：
	In the Java programming language, the basic structure is two kinds, one is an array, and another is to simulate a pointer (reference), all of the data structure can be used both to construct the basic structure, HashMap is no exception.HashMap is actually a "linked list hash data structure, which is a combination of array and chain table.

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/hashmap.jpg)
	
Can be seen from the diagram above, a HashMap in the underlying structure is an array, each item in the array and a linked list. When a new HashMap will initialize an array.

####Define Java state machine

http://www.jdon.com/designpatterns/designpattern_State.htm

####How many bits and bytes does each of short, int, long, char, float, double contains in Java

1 byte contains 8 bits, therefore

short - 16 bits or 2 bytes

int - 32 bits or 4 bytes

long - 64 bits or 8 bytes

float - 32 bits or 4 bytes

double - 64 bits or 8 bytes

char - 16 bits or 2 bytes

####What is the difference between int and an Integer in Java

http://www.cnblogs.com/shenliang123/archive/2011/10/27/2226903.html

####What is the Difference between string, stringbuffer and stringbuilder

String String constants

StringBuffer A string variable（Thread safe）

StringBuilder A string variable（Not thread-safe）

In short, the type String and StringBuffer types of main performance difference is that the String is an immutable object, so in when to change the type String is equal to generate a new String object, then the pointer to a new String object, so often it is best not to change the contents of the String with a String, because every time generated objects will have an effect on system performance, especially when memory without much reference object, the JVM GC will start to work, that is will be a rather slow speed.

And if it is to use StringBuffer class the result is different, every time the results to StringBuffer object itself, rather than generating new objects, then change the object reference.So in general we recommend StringBuffer, especially a string object changes often.And in some special cases, the String object String concatenation is explained by the JVM became StringBuffer object, so when the String object than StringBuffer object will not be slow, and in particular, in which of the following String objects generated String efficiency is far faster than StringBuffer:

String S1 = “This is only a” + “ simple” + “ test”;

StringBuffer Sb = new StringBuilder(“This is only a”).append(“ simple”).append(“ test”);
You will be surprised to find that generated String S1 object speed is too fast, and this time StringBuffer incredibly speed is not dominant.This is a trick of the JVM, in the eyes of the JVM, the
 String S1 = “This is only a” + “ simple” + “test”; In fact is: String S1 = “This is only a simple test”; So, of course, don't need too much time.But everyone here to note is that if you have a String is a String object from another, is not so fast, such as:
 
String S2 = “This is only a”;
String S3 = “ simple”;
String S4 = “ test”;
String S1 = S2 +S3 + S4;

At that time the JVM will behave according to the original way to do it

In most cases StringBuffer > String

StringBuffer

java.lang.StringBuffer thread safe variable character sequence. A similar String String buffer, but cannot be modified. Though at any point in time it contains some specific sequences of characters, but through certain method calls can change the length of the sequence and content.

A string buffer can be safely used in multiple threads. Can be in when necessary to synchronization of these methods, therefore all operations on any particular instance as if in a serial order, the order and method invocations of each thread order.

Are the major operating on the StringBuffer append and insert method, can override these methods, to accept any type of data.Each method can effectively to the given data into a string, then the string of characters added or inserted into the string in the buffer.These characters of append method will always add it to the end of the buffer;While the insert method add character at the specified point.

If z refer to a current contents, for example, is "start" string buffer object, then this method calls z.a ppend (" le ") can make the string buffer includes "tackle", while z.i nsert (4, "le") will change the string buffer, to include the "starlet.

In most cases StringBuilder > StringBuffer

java.lang.StringBuilder

java.lang.StringBuilder a mutable sequence of characters is the new 5.0.This provides an API compatible with StringBuffer, but does not guarantee that synchronization.This class is designed to be used as a replacement of a simple StringBuffer, when used in string buffer is used by a single thread (this is very common). If possible, it is recommended that the priority use this class, because in most implementations, it is faster than StringBuffer.Both methods are basically the same.

####Explain polymorphism in Java

The understanding of Java polymorphism

Java realization of polymorphism

What is a polymorphism?

Object-oriented programming has three features: encapsulation, inheritance and polymorphism. From a certain perspective, encapsulation and inheritance are almost for state. This is our last concept, which is the most important for knowledge as an android developer.

The definition of polymorphism refers to allow different kinds of objects to respond to the same news.The same message can be according to difference of sending objects and use a variety of different ways of behavior (send a message is a function call).

Polymorphism of the technology, called: dynamic binding (dynamic binding), refers to judgment during the execution of the actual type of reference objects, according to its actual type call the corresponding method.

The role of polymorphism: eliminate the coupling relationship between the types.

In reality, examples of polymorphism. If we press the F1 key action, for example, the current in the pop-up Flash screen is AS 3 help documentation;If the current pop-up is Word then it display "help" under the Word;Under the Windows is a pop-up Windows help and support. The same event will produce different results in different objects.

Here are three necessary conditions for the existence of polymorphism

Three necessary conditions for the existence of polymorphism
*inherited;
*rewrite；
*The parent class reference is to subclass object。

Benifits of Polymorphism:

1. Replaceability (substitutability).Polymorphism with replaceability to existing code.Polymorphism of Circle Circle kind of work, for example, to any other Circle geometry, such as Circle, also work.

2. Scalability (extensibility).Polymorphism has scalability to the code.Add new subclass does not affect existing class polymorphism, inheritance, and other characteristics of run and operation.New subclasses are more likely to actually get polymorphic function.For example, in the realization of the cone, cone and half sphere of polymorphism, it is easy to add ball class polymorphism.

3. Interface (interface - ability).Polymorphism is the superclass method signature by to subclass provides a common interface, by subclasses to refine or cover it.As shown in figure 8.3.The Shape CSL class defines two implementations of polymorphic interface methods, computeArea () and computeVolume ().Subclasses, such as Circle and Sphere in order to achieve the polymorphism, perfect or covering the two interface methods.

4. Flexibility (flexibility).It embodies the operation of flexible in application, improve the efficiency.

5. Simplify (simplicity).Polymorphic simplify the coding of application software and modification process, especially in dealing with a large number of operation and operation of the object, this feature is particularly prominent and important.

Java realization of polymorphic methods: interface implementation, rewrite the inheritance of the parent class method, in the same class method overloading.

####What causes thread block

The blocking of the thread:

In order to solve the conflict of access to the Shared storage area, Java synchronization mechanism was introduced, now let's examine multiple threads access to Shared resources, synchronization mechanism has obviously not enough, because the resources required at any time may not ready to be accessed, in turn, the same time ready resources can be more than one.In order to solve the problem of this kind of access control, Java's support for blocking mechanism is introduced.

Blocking refers to suspend the execution of a thread to wait for a condition (such as a resource in place), studied the operating system's classmate of it must have been very familiar with.Java provides a number of ways to support block, let's analyze them one by one.

1. Sleep() methods: sleep() allows you to specify a period of time in milliseconds as a parameter, it makes the thread into the blocked state within a specified time, can't get the CPU time, the specified time, the thread back into the executable.Typically, the sleep() is used in waiting for a resource ready: test found that when conditions are not fulfilled, the thread block after a period of time to test, until a condition is met.
2. Suspend() and resume() method: two methods, suspend() makes the thread into the blocking state, and does not automatically restore, must have its corresponding resume() is called, to make the thread back into the executable.Typically, suspend() and resume() is used in waiting for the result of a another thread: after tests found that the result has not produced, let the thread block, another thread produced results, calls resume() to make it recover.
3. Yield() method: the yield() allows a thread to abandon the current share of CPU time, but don't make the thread block, the thread is still in the executable state, could share of CPU time again at any time.Call the yield() is equivalent to the effect of the scheduler that the thread has been carried out enough time to go to another thread.
4. Wait() and notify() method: two methods are used, wait() makes the thread into the blocking state, it has two forms, one allows you to specify a period of time in milliseconds as a parameter, another has no parameters, the former when the corresponding notify() is invoked or beyond the specified time back into the executable thread state, the latter must correspond to the notify() is invoked.

At first glance, suspend() and resume() method looks no different, but in fact they are very different. The core difference is that in front of the narrative method of all blocked will not release takes lock (if takes up), and the opposite each other.

The core difference between them led to a series of the difference on the details.

First of all, in front of the narrative of all methods belongs to the Thread class, but the pair of directly affiliated to the Object class, that is to say, all objects with the two methods.At first glance it is quite incredible, but in fact it is very natural, because it blocked a method to release takes up the lock, the lock is any object, invoke arbitrary objects of wait() method of thread blocks, and the lock of the object is released.Object and calling any notify() method to call on the object of the wait() method and random selection in the blocked thread a unblocked (but have to wait until after the lock truly executable).

Second, the narrative of all method calls can be in any position, but the two methods must be in a synchronized method or block calls, reason is very simple, only in a synchronized method or block the current thread holds locks, lock can be released.In the same way, call this method on the object lock must be owned by the current thread, so you can release a lock.As a result, the pair of method calls must be placed in such a synchronized method or block, the method or block the locked object is to call this method.If they do not meet the conditions, the program, though still able to compile, but abnormal IllegalMonitorStateException at run time.

Wait() and notify() method of the above features determines they often use, together with a synchronized method or block them and inter-process communication mechanism of the operating system you will find a comparison of their similarities: a synchronized method or block provides a similar to the function of the operating system primitives, their execution will not be multi-threaded mechanism of the interference, and the laws of the other party is equal to the block and wakeup primitives (the two methods are declared as synchronized).They allow us to realize the combination of the operating system on a series of subtle interprocess communication algorithm (e.g., semaphore algorithm), and is used to solve the problem of all kinds of complex communication between threads.

About the wait() and notify() method and then two points:

First: call notify() method to remove blocked thread from object by calling the wait() method and random in blocked thread, we cannot predict which thread will be selected, so to be very careful when programming, to avoid the problem due to the uncertainty.

Second: in addition to notify(), and a method of notifyAll() can also play a similar role, the only difference is that the notifyAll() method will turn the object by call wait() method and block all the threads of disposable is unblocked.Of course, only get a lock that a thread can enter the executable.

When it comes to block, that is to talk about a deadlock, slightly analysis can be found that suspend() method and do not specify a timeout period of wait() method calls are likely to produce a deadlock.Unfortunately, the Java does not support in the language level to avoid deadlock, we must be careful to avoid deadlock in the programming.

Above we implemented in Java thread blocking the various methods for the analysis, we analyzed the wait() and notify() method, because they are the most powerful, use is also the most flexible, but it also leads to low efficiency, the more error prone.We should be flexible use of various methods in practical use, in order to better achieve our purpose.

####What is the difference between an abstract class and interface

1. The realization of the default method:
An abstract class can have a default method is completely abstract.The realization of the interface method doesn't exist

2. Implementation:
Subclasses use the extends keyword to inherit an abstract class.If a subclass isn't an abstract class, it will need to provide all the methods declared in the abstract class.A subclass to implement the interface with the keyword implements.It will need to provide all the methods declared in the interface implementation
3. The constructor:
An abstract class can have a constructor,Interface can not have a constructor
4. The difference between the interface and the normal Java classes:	
Besides you cannot instantiate an abstract class, it and ordinary Java classes without any difference
The type of interface is completely different
5. Access modifiers:	
Abstract methods can be public, protected, and the default these modifiers
The default modifier is public interface methods.You can not use other modifiers.
6. The main() method	
Abstract method can have the main method and we can run it	
Interface is not the main method, so we can't afford to run it.
7. Multiple inheritance	
Abstract classes in the Java language is a kind of inheritance, said in a subclass is only one parent, but there can be multiple interfaces.
8. Speed	
Abstract class are faster than interfaces	
Interface is a little slow, because it need time to find the method to realize in the class.
9. Add new methods
If you have to add a new method in an abstract class, you can give it the default implementation. So you don't need to change your code now.
If you added a new method to the interface, then you have to change the class implementation of that interface.

####What is the difference between container classes

http://www.cnblogs.com/yuanermen/archive/2009/08/05/1539917.html<br>
http://alexyyek.github.io/2015/04/06/Collection/<br>
http://tianmaying.com/tutorial/java_collection<br>
For english readers: http://www.javatpoint.com/collections-in-java


####Define Inner classes in Java

http://www.cnblogs.com/chenssy/p/3388487.html
For english language users: http://www.tutorialspoint.com/java/java_innerclasses.htm

####What is HashMap?Differentiate between a HashMap and HashTable in Java

http://www.233.com/ncre2/JAVA/jichu/20100717/084230917.html
For english language users: http://www.javatpoint.com/difference-between-hashmap-and-hashtable

####Differentiate between ArrayMap and HashMap

http://lvable.com/?p=217

###Android

####What types the operation of the database, how to import the external database

The original database is included in the project source res/raw

Under the android system should be stored in a database/data/data/com. *. * (package name)/directory, so we need to do is to put the existing database into the directory. Operation method is to use FileInputStream read the original database, reoccupy FileOutputStream your read write to that directory.

####Whether used the local radio, and what is the difference between a global broadcast

Because of radio data transmission in the application scope, don't have to worry about privacy data leakage problems.
Don't have to worry about other application forge the broadcast, cause potential safety hazard.
Compared to send global broadcast in the system, it is more efficient.

####Have you used intentService? What is the function of intentService? Does AIDL has solved the problem

To generate a default and independent of each other than the main thread to execute all sent to onStartCommand () method of Intetnt.

Generate a work queue to send Intent object to your onHandleIntent () method, the same time send an Intent object, only in this way, you don't have to worry about multi-threading.In all request (Intent) was performed after will automatically stop the service, so you shouldn't have to call stopSelf () method to stop.

The service provides a onBind() method of the default implementation, it returns null

Provides a onStartCommand() method of the default implementation, it will be the Intent to transfer to the work queue, and then from the work queue every time a transmitted onHandleIntent () method, in the method of Intent on corresponding processing.

AIDL (Android Interface Definition Language) is a kind of IDL Language, is used to generate on Android devices can be interprocess communication between two processes (interprocess communication, IPC) code.If in a process (such as activities) to invoke another object (e.g., Service) in the process of operation, you can use AIDL 
generates serializable parameters.

AIDL IPC mechanism is an interface, like COM and Corba, but more lightweight.It is to use the proxy class transfer data on the client and implementation.

####What is the difference between an Activity, the Window, and the View? What are some of the characteristics of the fragments

Activity as a craftsman (control unit), the Window like a Window (carrying model), the View like a paper-cut (display View)

LayoutInflater like scissors, Xml configuration like window drawings.

1. Calls to attach in the Activity, to create a Window
2. Create a window is its subclasses PhoneWindow, create PhoneWindow in the attach
3. Call in the Activity setContentView(R.layout.xxx)
4. Which is actually call getWindow().setContentView()
5. Call of the setContentView PhoneWindow method
6. Create ParentView As a subclass of ViewGroup, is actually a DecorView create (as a subclass of FramLayout)
7. For filling out will specify the R.l ayout. XXX college through the layout filler filler (including the parent means DecorView)
8. Calls to a ViewGroup
9. Invoke the ViewGroup removeAllView(), all of the first view to remove
10. Add a new view: addView()

Characteristics of fragments:

* Fragments can be used as the Activity of part of the interface
* Can appear many fragments at the same time, in an Activity and a fragments can also be used in more than one Activity
* In the process of Activity operation, can add, remove or replace the fragments
* Fragments can respond to their own input events, and has its own life cycle, their life cycle will be affected by the host of the Activity lifecycle

####What is the difference between Handler, Thread and HandlerThread

http://blog.csdn.net/guolin_blog/article/details/9991569

http://droidyue.com/blog/2015/11/08/make-use-of-handlerthread/

Thread from the Android (Java. Lang. Thread - > Java. Lang. Object) description can be seen that the Android Thread in Java Thread to do no encapsulation, but Android provides a inheriting from the Thread class HandlerThread (Android. OS. HandlerThread - > Java. Lang, Thread), the class of Java Thread did a lot of convenience Android encapsulation.

Android. The OS. The Handler can be instantiated by which objects, and running in other threads, android provides for Handler thread running in other threads, is also a HandlerThread.HandlerThread start can be obtained after the stars object, and using this Handler which object instance.

####Low version of the SDK to achieve high version of the API

Implement it myself or @ TargetApi annotation

####Ubuntu compiled android

1. Enter the source root directory
2. . build/envsetup.sh
3. lunch
4. full(Compile all)
5. userdebug(Select compiler version)
6. make -j8(Open eight compilation thread)

####Describe various launch mode Application scenarios

Standard, create a new Activity.

SingleTop, stack is not the type of Activity, to create a new Activity.Otherwise, onNewIntent.

SingleTask, back up the stack without this type of Activity, to create the Activity, otherwise, onNewIntent + ClearTop.

Note:

 1. Set the startup mode "singleTask" Activity, when it is launched, affinity will first look for in the system attribute value is equal to the Task that it taskAffinity attribute values exist;If there is such a Task, it will start in this Task, or it will start in the new Task stack.So if we want to set the boot mode "singleTask" Activity start in a new mission, for it set up an independent taskAffinity attribute values.
 2. If set the startup mode "singleTask" Activity is not started in the new task, it will check whether already exists in the existing task corresponding Activity instance, if present, will be put in the end of this Activity instance Activity above all, namely the Activity instance will end up in the task of the top of the Stack.
 3. In a task stack only a "singleTask" startup mode of Activity.He can have other Activity.There is a difference between this and singleInstance.

SingleInstance, back up the stack, only that an Activity, there is no other Activity.

SingleTop is suitable for receiving notifications start according to the content of the page.

For example, a client's news news content page, if you receive 10 news feeds, open a news content page every time, it is very annoying.

Serve as singleTask program entry point.

For example, the browser's main interface.No matter how many applications from launch a browser, it will only start the main interface once, the rest will go onNewIntent, and clears the main interface on other pages.

SingleInstance application scenarios:

The alarm bell ring interface.You used to set up an alarm: six o 'clock in the morning.58 points at 5 o 'clock in the morning, you start the alarm Settings interface, and press the Home button back to the desktop;At 59 to 5 in the morning, you at WeChat and friend chat;At 6 o 'clock, when the alarm rang, and pop up a dialog box in the form of Activity (called AlarmAlertActivity) prompts you to 6 (this Activity is to SingleInstance loading mode to open), you press the return key, back is WeChat chat interface, this is because the AlarmAlertActivity stack of the Task is only one element, he therefore exit after the Task stack is empty.If is AlarmAlertActivity SingleTask open, so when the alarm is ringing, press the return key should alarm set into the interface.

####Describe Touch event delivery process

http://hanhailong.com/2015/09/24/Android-%E4%B8%89%E5%BC%A0%E5%9B%BE%E6%90%9E%E5%AE%9ATouch%E4%BA%8B%E4%BB%B6%E4%BC%A0%E9%80%92%E6%9C%BA%E5%88%B6/

####How the view drawing process works

http://www.codekk.com/blogs/detail/54cfab086c4761e5001b253f

####How to use Multithreading in Android

* Activity.runOnUiThread(Runnable)
* View.post(Runnable),View.postDelay(Runnable,long)
* Handler
* AsyncTask

####Describe Thread synchronization process in Android

http://www.itzhai.com/java-based-notebook-thread-synchronization-problem-solving-synchronization-problems-synchronized-block-synchronized-methods.html#read-more

http://www.juwends.com/tech/android/android-inter-thread-comm.html

singleton

```java
public class Singleton{
private volatile static Singleton mSingleton;
private Singleton(){
}
public static Singleton getInstance() {
	if(mSingleton == null) { \\ A
		synchronized(Singleton.class) { \\ C
			if(mSingleton == null) {
				mSingleton = new Singleton();\\ B
			}
		}
	}
	return mSingleton;
}
```
####What are causes of the memory leak

1. A memory leak caused by resource object is not closed

Resource objects such as Cursor, File documents, etc.) are often used some buffer, when not in use, we should close them in time, so that their timely recovery of memory buffer.Their buffer not only exists in the Java virtual machine, also exists in the Java virtual closed.If we just put it in the reference set to null, and do not close them, tend to cause a memory leak.Because some resource objects, such as SQLiteCursor (in the destructor finalize (), if we don't close it, it will adjust the close (closed), if we don't close it, system will close it when recycling it, but the efficiency is too low.So for resource object when not in use, should call it the close () function, will close it out, and then set to null. When exiting in our program must ensure that our resource object has been closed.Programs often to query the database operation, but often have completed used without shut down after the Cursor.If our query result set is small, the memory consumption is not easy to find, often the only time a large number of operating case retrieval memory problems, it will bring to screening tests and problems later difficulties and risks.

2. Construct the Adapter, without using a cache convertView

To construct the ListView BaseAdapter, for example, in the BaseAdapter provides methods:Public View getView (int position, ViewconvertView, ViewGroup parent)Give ListView view objects needed for each item.Initial ListView will based on the current screen layout from BaseAdapter instantiate a certain number of view objects, at the same time the ListView will the view object cache.When the scroll up to ListView, originally located at the top of the list item of view objects will be recycled, is then used to construct new appear at the bottom of the list item.The construction process is the getView () method, getView () the second parameter of the View convertView is cached item in the list are of the View object (initialization time the cache does not View objects convertView is null).Thus it can be seen that if we don't use convertView, but each time the getView () to instantiate a View object, namely the waste of resources and waste of time, will also make the memory footprint is more and more big.ListView to recycle the list view object process can view the item:Android. Widget. AbsListView. Java -- > voidaddScrapView (View scrap) method.

The sample code:

```java
public View getView(int position, ViewconvertView, ViewGroup parent){
	View view= new Xxx(...);
	// ... ... 
	return view;
} 
```

Revised sample code:

```java
public View getView(int position, View convertView, ViewGroup parent) {
	View view = null;
	if (convertView != null) {
		view = convertView;
		populate(view, getItem(position));
		// ...
	} else {
		view=new Xxx(...);
		// ...
	}
	return view;
}
```

3. Bitmap object when not in use call recycle() free memory

Sometimes we manual operation Bitmap object, if a Bitmap object comparison of memory, when it is not used, can call the Bitmap. The recycle () method to recycle the object pixels of the memory, but it is not necessary, as the case may be.May I see the comments in the code:

/** 
•Free up the memory associated with thisbitmap's pixels, and mark the 
•bitmap as "dead", meaning itwill throw an exception if getPixels() or 
•setPixels() is called, and will drawnothing. This operation cannot be 
•reversed, so it should only be called ifyou are sure there are no 
•further uses for the bitmap. This is anadvanced call, and normally need 
•not be called, since the normal GCprocess will free up this memory when 
•there are no more references to thisbitmap. 
*/ 

4. Try to use the context of the application to replace the context related to the activity

This is a very obscure memory leaks.There is a simple way to avoid the context related to the memory leak.The most significant one is to avoid the context to escape from outside the scope of his own.Use the Application context.The context of the life cycle and the application of life cycle, you are long, instead of depending on the activity lifecycle.If you want to keep a long-term survival of object, and this requires a context object, remember to use the application object.You can call the Context. GetApplicationContext () or Activity. GetApplication ().More look at how to avoid this articleAndroid memory leaks.

5. Registered didn't cancel cause memory leaks

Some Android program may refer to our Android objects (such as registration mechanism).Even though our Android program has ended, but the other reference program is still on our Android applications of an object reference, leak memory still cannot be garbage collected.After calling registerReceiver unregisterReceiver did not call.For example, suppose that we want in the lock screen interface (LockScreen), listen to telephone services in order to get some information in the system (such as the signal strength, etc.) can be defined in LockScreen a PhoneStateListener object, register it into the TelephonyManager service at the same time.For LockScreen object, when need to display the lock screen interface can create a LockScreen object, and when the lock screen interface disappeared LockScreen object will be released.

But if at the time of release LockScreen object forget cancel before we register PhoneStateListener object, leads to LockScreen cannot be garbage collected.If constantly make the lock screen interface display and disappear, will eventually because of a large number of LockScreen object can't be recycled and cause OutOfMemory, make system_process process hang up.Although some system program, it can itself seems to be cancelled automatically registered (not in time, of course), but we should be clear in our programs to cancel the registration, at the end of the program should cancel all registered.

6. Collection of objects not clean up the cause of memory leaks

We usually add some reference to the collection, when we don't need this object, did not make it a reference from the collection, so that this collection will be bigger and bigger.If this set is static, the situation is more serious.

####ANR positioning and correction

If development machine appear problem, we can by looking at the/data/anr/traces. TXT, the latest anr information in the first part.

* The main thread is IO operations (from 4.0 after network IO is not allowed in the main thread) obstruction.
* The main thread of time-consuming calculation
* The wrong operation in the main Thread, such as Thread. Wait or Thread. Sleep, etcThe Android system will monitor the response of the situation, once appear, the following two cases, the pop-up ANR dialog
* Application in 5 seconds did not respond to user input events (such as buttons or touch)
* BroadcastReceiver not complete relevant processing in 10 seconds
* Service in a particular time to handle complete 20 seconds

* Use AsyncTask processing time consuming IO operations.
* Using Thread or HandlerThread, call Process. SetThreadPriority (Process. THREAD_PRIORITY_BACKGROUND) set priority, or still can reduce response Process, because the default Thread priority is the same as the main Thread.
* Using Handler Thread processing results, rather than using Thread. The wait () or Thread. The sleep () to block the main Thread.
* The Activity's onCreate and onResume avoid time-consuming code in a callback
* The BroadcastReceiver onReceive code also want to minimize the time consuming, it is recommended to use IntentService processing.

####Android Memory optimationzan Techniques

http://www.jcodecraeer.com/a/anzhuokaifa/androidkaifa/2015/0920/3478.html

1）Use more lightweight data structure
2）Android use Enum inside
3）Bitmap object memory footprint
4）The bigger picture
5）Ontouch method perform object created inside
6）StringBuilder

####What are some of modes of communication between Android Service with the Activity

* Through a Binder object
* Through the broadcast in the form of (radio)

####The difference between Android API versions

http://blog.csdn.net/lijun952048910/article/details/7980562

####Implementation in the Android WAP way connected to the Internet

http://blog.csdn.net/asce1885/article/details/7844159

####How to ensure that the service does not get killed in background

Return to START_STICKY onStartCommand method

1. START_STICKY
After running after onStartCommand service process is the kill, it will be held at the beginning, but don't keep the incoming intent.Shortly after the service will try to create again, because in the start state, call onstartCommand will ensure that after creating the service.If not pass any start command to the service, it will get to null intent.

2. START_NOT_STICKY
After running after onStartCommand service process is the kill, and there is no new intent passed to it.State of the Service will be removed from the start, and until the new obvious way startService () call to recreate.Because if you don't pass any pending intent so the service is not started, namely during onstartCommand will not receive any null intent.

3. START_REDELIVER_INTENT
After running after onStartCommand service process is the kill, system will restart the service, and passed the last intent to onStartCommand.Didn't stop until the call stopSelf (int) passed the intent.If is in after the kill and untreated good intent, the service will start automatically after being the kill.Therefore, onstartCommand will not receive any null intent.

*Improve the service priority

In AndroidManifest. XML file for intent - can filter through the android: priority = "1000" this attribute sets the highest priority, 1000 is the highest, if the number is smaller, the lower the priority, suitable for broadcast at the same time.

*Improve the service process priority

Android is managed in the process, when the system process space is tight, will be in accordance with the priority automatically the process of recovery.Android process can be divided into six grades, they in priority order from high to low in turn is:

1. Foreground process
2. The visual process
3. Secondary service process
4. Background processes
5. Content supply nodes
6. An empty process

When the service running in low memory conditions, will kill off some existing process.So the process priority will be very important, you can use startForeground put the service in the front desk.When the low memory so kill probability is lower.

*Restart the service in the onDestroy method

Service + broadcast mode, that is, when the service go ondestory, send a custom broadcast, when the received radio, restart the service;

*Application add Persistent property

*Monitoring system broadcasts to judge the Service state

Through some broadcasting system, such as: mobile phone restart, interface sensei, application state changes, and so on to monitor and capture, then judge whether our Service also live, don't forget to add permissions.

####Requestlayout onlayout, ontouch, DrawChild differences and their relationship

RequestLayout() method, can lead to call measure () process and layout () process.Description: just back to the View tree layout layout process includes the measure () and layout () procedure, don't call the draw () procedure, but not redrawnAny view including the caller itself.

OnLayout() method (if the View is ViewGroup object, you need to implement the method, for each child View layout)

Calling ontouch() method draw View itself (each View to override this method, ViewGroup don't need to implement the method)

DrawChild() to the callback for each child view the draw () method

####What is the difference between invalidate() and postInvalidate()

http://blog.csdn.net/mars2639/article/details/6650876

####How Android animation framework works

Animation framework defines transparency, rotate, scale and displacement of several common Animation, and control the whole View, the realization principle is every time map View in the View of ViewGroup drawChild function to get the View the Animation of the Transformation of value, and then call canvas. The concat (transformToApply. GetMatrix ()), through the matrix operations complete Animation frames, if there is no complete Animation, continue to call invalidate () function, start the next map to drive the Animation, Animation in the process of clearance between the frame time is consumed by a mapping function, may cause Animation consume more CPU resources, the most important thing is, Animation change just show, and not the corresponding event.

####Android for each application allocated memory size is it

It varies with screen size and android versions, however the android program memory is generally limited to 16 mb as in android 4.1.

####Describe View refresh mechanism in Android

Object by ViewRoot performTraversals () method calls the draw () method to draw the tree View, it is worth noting that every time a drawing, does not redraw each View tree View, and will only be redraw those who "need to redraw the View, the View class internal variable contains a sign DRAWN, when the View needs to redraw, will be for the View to add the logo.

Call the process:

mView.draw() began to draw，draw() methods the functions as follows：

1. Draw the View of the background
2. Do some preparation for the gradient dialog operation (see 5, in most cases, do not need to change the gradient box)          
3. Calling ontouch() method draw View itself (each View to override this method, ViewGroup don't need to implement the method)
4. Call dispatchDraw() method draw child views (if the View type of ViewGroup that does not contain child views, do not need to reload the method) is worth, ViewGroup class has been rewritten for us dispatchDraw() function implementation, application generally does not need to rewrite the method, but you can override the parent class function to achieve specific functions.

####LinearLayout contrast RelativeLayout

1. RelativeLayout can let the child View call two onMeasure, LinearLayout in weight, also can call onMeasure View2 times
2. RelativeLayout child View if different height and RelativeLayout, will lead to efficiency, when the View is very complex, this problem will be more serious.If you can, try to use padding instead of margin.
3. In does not affect the levels of depth, under the condition of using LinearLayout and FrameLayout rather than RelativeLayout.

Finally, consider the question of opening the contradiction, why Google to developers default has built a RelativeLayout, in using a LinearLayout DecorView on yourself.Because of the depth of the hierarchy of DecorView is known and fixed, a title bar above, below a NaRongLan.Using RelativeLayout will not reduce the levels of depth, so at this point on the root node using LinearLayout is the most efficient.And the reason for developers default has built a RelativeLayout is a hope that developers can use less as far as possible to express the View hierarchy layout to achieve optimal performance, because the View of complex nested will be a greater impact on performance.

####Optimization of the custom view

In order to speed up your view, for the method called frequently, need to try to reduce unnecessary code.Begin with ontouch, need special attention should not be here to do the memory allocation, because it will lead to the GC, resulting in caton.During the initialization or animation clearance do allocate memory.Don't do memory allocation when animation is executing.

You need as far as possible to reduce ontouch is called the number of times, most of the time, cause all ontouch because of call invalidate(). So please try to reduce the call invaildate() the number of times.If possible, try to call contains four parameters invalidate() method rather than no parameters invalidate().No arguments will invalidate mandatory redraw the entire view.

Another very time-consuming operation is requested layout.At any time to perform requestLayout(), will make the Android UI system to traverse the entire View hierarchy to calculate the size of each View.If found conflicting values, it will need to recalculate the several times.Also need to try to keep the View hierarchy is flat, it is very helpful to improve efficiency.

If you have a complex UI, you should consider writing a custom ViewGroup to perform his layout operations.With built-in view is different, the custom view can make the program simply measure the part, this avoids to traverse the entire view hierarchy to calculate the size.The PieChart example shows how to inherit the ViewGroup as part of a custom view.PieChart have child views, but it never measure them.But according to the laws of his own layout, the size of the set them directly.

####What are ContentProviders

http://blog.csdn.net/coder_pig/article/details/47858489

####Life cycle of Fragments

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/fragment-life.png)

####Volley Networking Library

http://a.codekk.com/detail/Android/grumoon/Volley%20%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90

####Glide Library

http://www.lightskystreet.com/2015/10/12/glide_source_analysis/
http://frodoking.github.io/2015/10/10/android-glide/

####Design Patterns in Android

http://blog.csdn.net/bboyfeiyu/article/details/44563871

####Architecture design

![](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/picture/architucture.png)

http://www.tianmaying.com/tutorial/AndroidMVC

####Android attribute animation features

If you only need to View in the demand of the mobile, zoom, rotate and fades operation, then fill between animation is enough for the sound.But obviously, these functions is not enough to cover all of the scene, once we demand beyond the mobile, zoom, rotate and fade out of these four, to the operation of the View that filling between the animation will not be able to help us again, that is to say it in terms of function and extensible has considerable limitations, so let's take a look at between animation is not up to the scene.

Notice above when I fill in the introduction animation has used "to manipulate the View", that's right, curation of animation is only able to function in the View.That is to say, we can on a Button, TextView, even a LinearLayout, or any other inherited from the View of animation component for operation, but if we want to be the object of a non View animation operation, I'm sorry, fill between animation can't help you.Some friends may feel do not understand, how could I need animation on a non View object for operation?Here I cite a simple example, for example we have a custom View, in the View of a Point object is used to manage coordinates, and then in ontouch () method is based on the Point of the object's coordinates to draw.That is to say, if we can to animation operation Point object, so the custom View of animation effects.Obviously, the animation is not have this feature, which is the first of its defects.

And then fill between animation has a defect, is it can only realize mobile, zoom, rotate and fade out the four kinds of animation, that if we want can be dynamically change the background color of the View?It's a pity that we can only rely on yourself to achieve it.To put it bluntly, before filling mechanism between animation is to use hard-coded way to complete, function is the limited death, basically do not have any extensibility.

Finally, fill between animation has a fatal flaw, is it just changed the display View, rather than to change the View of the real property.What does that mean?At the upper left of the screen, for instance, now there is a button, and then we through filling between animation to move it to the lower right corner of the screen, now you can go to try to click this button, click event is absolutely not trigger, because in fact this button or stay on the top left corner of the screen, just fill between animation are drawn this button in the lower right corner of the screen.
