// 高阶函数是指至少满足下列条件之一的函数。
//1. 函数可以作为参数被传递;
//2. 函数可以作为返回值输出。   见 判断数据类型.js
/*
var appendDiv = function (callback) {
    for (var i = 0; i < 100; i++) {
        var div = document.createElement('div'); div.innerHTML = i; document.body.appendChild(div);
        if (typeof callback === 'function') {
            callback(div);
        }
    }
};
appendDiv(function (node) {
    node.style.display = 'none';
});
*/

[ 1, 4, 3 ].sort( function( a, b ){ return a - b;})

// 其他应用

//1.函数柯里化（function currying） currying 又称部分求值。一个 currying 的函数首先会接受一些参数，接受了这些参数之后， 该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保 存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值

var currying = function (fn) {
    var args = [];
    return function () {
        if (arguments.length === 0) {
            return fn.apply(this, args);
        } else {
            [].push.apply(args, arguments);
            //return arguments.callee;
        }
    }
};
var cost = (function () {
    var money = 0;
    return function () {
        for (var i = 0, l = arguments.length; i < l; i++) {
            money += arguments[i];
        }
        return money;
    }
})();
var cost = currying(cost);
// 转化成 currying 函数
cost(100);
cost(200); 
cost(300);

console.log ( cost() ); // 求值并输出:600