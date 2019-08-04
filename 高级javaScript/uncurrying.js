// 在 JavaScript 中，当我们调用对象的某个方法时，其实不用去关心该对象原本是否被设计为拥有这个方法

Function.prototype.uncurrying = function () {
    var self = this;
    return function () {
        var obj = Array.prototype.shift.call(arguments);  // 删除第一个元素，并将其返回
        return self.apply(obj, arguments);
    }
}

// 另一种实现
Function.prototype.uncurrying = function(){
    var self = this; 
    return function(){
        return Function.prototype.call.apply( self, arguments ); 
    }
};

// 使用
var push = Array.prototype.push.uncurrying();
(function () {
    push(arguments, 4);
    console.log(arguments); // 输出:[1, 2, 3, 4]
})(1, 2, 3);

for (var i = 0, fn, ary = ['push', 'shift', 'forEach']; fn = ary[i++];) {
    Array[fn] = Array.prototype[fn].uncurrying();
};
var obj = {
    "length": 3,
    "0": 1, 
    "1": 2, 
    "2": 3
};
Array.push(obj, 4); 
console.log(obj.length);// 向对象中添加一个元素 // 输出:4
var first = Array.shift(obj); // 截取第一个元素 console.log( first ); // 输出:1
console.log(obj); // 输出:{0: 2, 1: 3, 2: 4, length: 3}
Array.forEach(obj, function (i, n) {
    console.log(n); // 分别输出:0, 1, 2
});