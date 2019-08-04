//函数有可能被非常频繁地调用，而造成大的性能问题。下面将列举一 些这样的场景。
// window.onresize 
// mousemove
// 上传进度
// 搜索框（防抖）
// 重复提交 （防抖）

// 防抖：只执行一次；
// 节流：周期执行；

// 节流
var throttle = function (fn, interval) {
    var __self = fn, // 保存需要被延迟执行的函数引用 
        timer, // 定时器
        firstTime = true; // 是否是第一次调用
    return function () {
        var args = arguments,
            __me = this;
        if (firstTime) { // 如果是第一次调用，不需延迟执行 
            __self.apply(__me, args);
            return firstTime = false;
        }
        if (timer) { // 如果定时器还在，说明前一次延迟执行还没有完成 
            return false;
        }
        timer = setTimeout(function () { // 延迟一段时间执行 clearTimeout(timer);
            timer = null;
            __self.apply(__me, args);
        }, interval || 500);
    };
};
window.onresize = throttle(function () {
    console.log(1);
}, 500);

// 防抖
var debounce = function(fn,delay){
    let timer;
    return (...args)=>{
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(()=>{
            fn.apply(this,args);
        },delay)
    }
}