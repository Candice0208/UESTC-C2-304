window.jQuery.ajax = ({method,path,body,headers})=>{//ES6语法
    //进行Promise封装
     return new Promise((resolve,reject)=>{//这句话是套路,记住
         let xhr = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject('Microsoft.XMLHTTP');
         xhr.open(method,path);//配置
 
         for (const key in headers) {//遍历header,设置响应头
             let value = headers[key];
             xhr.setRequestHeader(key,value);
         }
         xhr.send(body);//发送,并配置响应体
 
         xhr.onreadystatechange = ()=>{
             if(xhr.readyState ===4){
                 if ( xhr.status>=200&&xhr.status<=400){
                     resolve.call(undefined,xhr.responseText);//执行成功函数
                 }else if(xhr.status>=400){
                     reject.call(undefined,xhr);//执行失败函数
                 }
             }
         }
     })
 }

 // 调用方法
 myButton.addEventListener("click",(e)=>{
    //使用ajax
    $.ajax({
        method:"post",
        path:"/xxx",
        body:"username=mtt&password=1",
        headers:{
            "content-type":'application/x-www-form-urlencoded',
            "mataotao":18
        }
    }).then(
        (responseText)=>{console.log(responseText);},//成功就调用这个函数
        (request)=>{console.log(request);}//失败就调用这个函数
    )
})