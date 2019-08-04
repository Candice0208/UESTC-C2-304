const http=require('http');   // 引入模块开启服务
const mysql=require('mysql');
const url=require('url');
const fs=require('fs');

//新建mysql的连接
const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    password:'123456',
    database:'user'
})
connection.connect(function(err){
    if(err){
        console.log(err)
    }else{
        console.log('连接数据库成功')
    }
});

http.createServer(function(req,res){
    var path = url.parse(req.url).pathname;
    //实现路由功能
    switch(path){
        case '/':
            fs.readFile('./index.html',function(err,data){
                //res.setHeader('Content-Type','text/html;charset=UTF-8');
                var _data = data.toString();
                res.end(_data);
            })
            break;
        case '/login':
            var reqdata='';
            req.on('data',function(chunk){
                reqdata+=chunk;
            })
            req.on('end',function(){
                 var dataobj = JSON.parse(reqdata);
                 var word = `select * from userlist where username='${dataobj.username}' and password='${dataobj.password}'`
                connection.query(word,function(err,result,fields){
                    console.log(result);
                    if(result&&result.length>0){
                        res.setHeader('Set-Cookie','username='+result[0].username);
                        res.end(JSON.stringify({
                            status:1,
                            msg:'登陆成功'
                        }))
                    } else {
                        res.end(JSON.stringify({
                            status:0,
                            msg:'登陆失败'
                        }))
                    }
                })
            })
            break;
        case '/welcome':
            res.end("huanying");
            break;
    }

}).listen(3000)