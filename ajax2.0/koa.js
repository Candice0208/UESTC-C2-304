const koa = require('koa');
const route = require('koa-router');
const convert = require('koa-convert');
const body = require('koa-better-body');

const app = new koa();

//监听端口
app.listen(2019);

//新建路由对象
let router = new route();

// 处理路由
router.post('/upload',async ctx=>{
    console.log('fields',ctx.request.fields);
    let {username,password,file} = ctx.request.fields
})

// 处理文件上传
app.use(convert(body({
    uploadDir:'./upload', //指定上传文件的路径，实际开发最好只用绝对路径path.resolve(__dirname)
    keepExtensions:'true',// 文件是否需要扩展名
})))

// 处理跨域
app.use(async (ctx,next)=>{
    ctx.set("Access-Control-Allow-Origin","*"); //第二个参数为允许跨域的域名
    await next();
})

// 使用路由
app.use(router.routes());