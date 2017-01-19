/**
 * Created by Administrator on 2017/1/16.
 */
// 判断输入是否为数字
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//判断是否为整数
function isInt( num ) {
    if( parseInt(num) == parseFloat(num) ){
        alert( num + '是整数' );
    }else{
        alert( num + '是小数' );
    }
}
