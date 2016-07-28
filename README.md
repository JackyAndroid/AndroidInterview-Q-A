###Welcome to follow me on GitHub or CSDN

GitHub: https://github.com/JackyAndroid

CSDN: http://blog.csdn.net/rain_butterfly

[中文版文档](https://github.com/JackyAndroid/AndroidInterview-Q-A/blob/master/README-CN.md)

---

# AndroidInterview-Q-A
The top Internet companies' interview questions and answers.

translating...

###一、java

**1.interface significance**

Specification、extension、Callback

**2.The significance of an abstract class**

* Provide a common type of its subclasses
* Encapsulation subclasses of duplicate content
* To define abstract methods

**3.The role of the inner class**

1. The inner class can use multiple instances of each instance has its own state information, and information with other peripheral objects are independent of each other.
2. Outside of a single class, allows multiple inner class to implement the same interface in different ways, or the same class inheritance.
3. Create inner class object moment does not depend on peripheral class object creation.
4. Inner classes is not confusing "is - a"relationship, it is an independent entity.
5. Inner class provides better encapsulation, in addition to the outer class, other class cannot access

**4.Static methods can be subclasses override of the parent，why？**

no

Subclass inherits the parent class, use the same method of static and non-static methods, then non-static methods covered in the parent class method (namely rewriting), the static method of the parent is hidden (if the object is the parent class is called the hidden method), the other a subclass inherits the parent class of the static and non-static methods, as for the method overloading I think it is one of the elements in the same class, can't say what the parent class method and what method in a subclass is the embodiment of the method overloading