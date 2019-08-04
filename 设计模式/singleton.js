// 单例模式的核心是确保只有一个实例，并提供全局访问

// 1.全局变量
// 在 JavaScript 开发中，我们经常会把全局变量当成单例来使用
// .使用命名空间
// .使用闭包封装私有变量

// 模块模式：为单利创建私有的变量和方法
var singleton = function () {
    var privateVar = 10;
    function modifiedVar(val) {
        privateVar = val;
    }
    return {
        getVar: () => privateVar,
        modVar: (val) => modifiedVar(val)
    }
}()

console.log(singleton.getVar());
singleton.modVar(12);
console.log(singleton.getVar());

// 增强的模块模式
singleton = function () {
    var privateVar = 10;
    function modifiedVar(val) {
        privateVar = val;
    }

    var object = new Object();
    object.getVar = () => privateVar;
    object.modVar = (val) => modifiedVar(val);
    return object;
}()

console.log(singleton.getVar());
singleton.modVar(12);
console.log(singleton.getVar());