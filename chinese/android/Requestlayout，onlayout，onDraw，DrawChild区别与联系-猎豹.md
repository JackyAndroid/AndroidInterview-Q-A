#### Requestlayout,onlayout,onDraw,DrawChild区别与联系-猎豹

requestLayout()方法 ：会导致调用measure()过程 和 layout()过程 。
将会根据标志位判断是否需要ondraw

onLayout()方法(如果该View是ViewGroup对象，需要实现该方法，对每个子视图进行布局)

调用onDraw()方法绘制视图本身   (每个View都需要重载该方法，ViewGroup不需要实现该方法)

drawChild()去重新回调每个子视图的draw()方法