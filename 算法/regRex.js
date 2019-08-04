// 删除首尾字符串
var str = ' 123 123 ';
var str1 = str.replace(/(^\s*)|(\s*$)/g,'');
console.log(str1.length,str1);