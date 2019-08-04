const http = require('http');
const querystring = require('querystring');
const url = require('url');

let app = http.createServer((req,res)=>{
    var {pathname,query} = url.parse(req.url,true);
    let arr = [];
    req.on('data',(data)=>{
        arr.push(data);
    })

    req.on('end',()=>{
        let buffer = Buffer.concat(arr);
        let post = querystring.parse(buffer.toString());
        console.log(pathname,query,post)
    })
}).listen(2019);