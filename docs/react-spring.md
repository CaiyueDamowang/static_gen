### react-spring
`react-spring` 强大的弹簧物理引擎动画库

可以使动画的进度像弹簧伸缩的进度一样,原理是通过正弦曲线来计算下一个animation state的值处于最终值的哪个位置

#### 文字跑马灯

1. 头尾衔接
```css
  animation-name: marquee;
  animation-iteration-count: infinite;
  animtion-duration: {allWords.length * scrollRatio}s;
  animation-play-state: {stop ? 'paused' : 'running'};

  @keyframes marquee {
    0% { transform: translateX(0%) }
    100% { transform: translateX(-100%) }
  }
```

开启动画后，在该滚动元素末尾，添加一个absolute定位的尾随元素，使其处于右侧

该元素与滚动元素一直

在每一周期的动画结束后，滚动元素都在滚动区域左侧，尾随元素在滚动元素动画周期初始位置

恰好在动画开启的下一刻，两帧相同

2. 不够长顶宽居中

控制 play-state
#### 拖拽modal

```js
onTouchStart // 有事件对象传入
onTouchMove  // 有
onTouchEnd   // 无

onMouseDown  // 有
onMouseMove  // 有
onMouseUp    // 无
onMouseLeave // 无
```

判断拖动距离  设置阈值