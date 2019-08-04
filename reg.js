// 实现给金额加逗号
var str = '1234567890.12';

var reg = /(\d{1,3})(?=(\d{3})+(?:$|\.))/g;
console.log(str.replace(reg, "$1,"));

var num_s = "1232134456.546 ";
console.log(parseFloat(str).toLocaleString());