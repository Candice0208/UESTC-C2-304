/*
容器机制
流程控制
*/
(function(root){
    var _ = {
        // 创建一个容器
        callbacks: function(options){
            options = typeof options === "string" ? creatOptions(options):{};
            var list = [];
            var index, length, testting, memory, starts;
            var fire = function(data){
                memory = options.memory && data;
                index = starts || 0;
                starts = 0;
                length = list.length;
                testting = true;
                for(;index<length;index++){
                    if(list[index].apply(data[0],data[1]) === false && options.stopOnfalse){
                        break;
                    };
                }
            }
            var self = {
                add:function(){
                    var args = [].slice.call(arguments);
                    
                    // args = args.filter(function(item){
                    //     return item instanceof Function;
                    // });
                    // list.push(args);

                    args.forEach(element => {
                        if(toString.call(element) === '[object Function]'){
                            list.push(element);
                        }
                    });

                    if(memory){
                        starts = length;
                        fire(memory);
                    }
                },
                fireWith:function(context,arguments){
                    var arg = [context,arguments];
                    if(!options.once || !testting){
                        fire(arg);
                    }
                },
                fire:function(){
                    self.fireWith(this, arguments);   // 传参，并指定上下文
                },
                // 异步编程的流程控制
                deferred: function(){
                    // 创建语法糖
                    var tuples = [
                        ['resolve', 'done',_.callbacks("once memory"),'resolved'],
                        ['reject', 'fail',_.callbacks("once memory"),'rejected'],
                        ['notify', 'progress',_.callbacks("once memory")]
                    ]
                    var promise = {};   // 数据的添加 （回调）
                    var deferred = {};   // 状态控制

                    tuples.forEach(function(tuple,i){
                        var callList = tuple[2];
                        promise[tuple[1]] = callList.add;
                        deferred[tuple[0]] = callList.fire;
                    })

                }
            }

            function creatOptions(options){
                var obj = {};
                options.split(/\s+/).forEach(function(value){
                    obj[value] = true;
                })
                return obj;
            }

            return self;
        }
    }
    root._ = _;
})(this)