// 递归
function binarySearch(arr, key, low, high) {
    var mid = parseInt((low + high) / 2);
    if (arr[mid] > key) {
        high = mid - 1;
        return (low > high) ? -1: binarySearch(arr, key, low, high);
    } else if (arr[mid] < key) {
        low = mid + 1;
        return (low > high) ? -1: binarySearch(arr, key, low, high);
    } else {
        return mid;
    }
}

// 循环
function binarySearch2(arr, key) {
    var low = 0,
        high = arr.length - 1;
    while(low <= high) {
        var mid = parseInt((high + low) /2);
        if(key == arr[mid]) {
            return mid;
        } else if(key > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

// 测试   全部通过测试
var arr = [2,45,67,222,1457,12345]

console.log(binarySearch(arr,2,0,5))
console.log(binarySearch2(arr,2))

console.log(binarySearch(arr,221,0,5))
console.log(binarySearch2(arr,221))

console.log(binarySearch(arr,12345,0,5))
console.log(binarySearch2(arr,12345))

console.log(binarySearch(arr,67,0,5))
console.log(binarySearch2(arr,67))

console.log(binarySearch(arr,12345,0,4))
