
// 1.封装变量：带有缓存功能的乘法
var mult = (function () {
    var cache = {};
    var calculate = function () { // 封闭 calculate 函数（如果这些小函数不需要在程序的其他地方使用，最好是把它们用闭包封闭起来）
        var a = 1;
        for (var i = 0, l = arguments.length; i < l; i++) {
            a = a * arguments[i];
        }
        return a;
    };
    return function () {
        var args = Array.prototype.join.call(arguments, ',');
        if (args in cache) {
            return cache[args];
        }
        return cache[args] = calculate.apply(null, arguments);
    }
})()

// 2.延续局部变量的寿命：丢失数据的原因是 img 是 report 函数中的局部变量，当 report 函数的 调用结束后，img 局部变量随即被销毁，而此时或许还没来得及发出 HTTP 请求，所以此次请求 就会丢失掉。

var report = (function () {
    var imgs = [];
    return function (src) {
        var img = new Image(); imgs.push(img); img.src = src;
    }
})();
report('http://xxx.com/getUserInfo');

