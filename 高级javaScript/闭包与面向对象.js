// 闭包写法
var extent = function(){ 
    var value = 0;
    return {
        call: function(){
            value++;
            console.log( value ); 
        }
    }
}

var extent = extent();  // 执行extent函数，并将结果给extent变量
extent.call();
extent.call();
extent.call();

// 面向对象写法1
var extent1 = {
    value:0,
    call:function(){
        this.value++;
        console.log(this.value);
    }
}
extent1.call();
extent1.call();
extent1.call();

// 面向对象写法2
var Extent = function(){
    this.value = 0;
}
Extent.prototype.call = function(){
    this.value++;
    console.log(this.value);
}
var ext = new Extent();
ext.call();
ext.call();
ext.call();