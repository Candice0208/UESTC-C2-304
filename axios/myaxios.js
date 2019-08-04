// 设计思路： 功能确定-模块梳理-架构基础-功能构建

import axios from 'axios';
export default function(arr){
    function _myAxios(){
        this.vueobj = null
        this.status = true;   // 用于防止重复提交请求
    }

    //传入vue组件对象，为了修改该组件中的data属性
    _myAxios.prototype.v = function(obj){
        this.vueobj = obj;
    }

    // 生成请求
    _myAxios.prototype.getAxios = function(config){
        var factory = {
            'get': function(){
                return axios.get(config.url);
            },
            'post':function(){
                return axios.post(config.url,config.data);
            }
        }
        return factory[config.type];
    };

    // 发送请求
    _myAxios.prototype.sendAxios = function(config){
        var _axios = this.getAxios(config);
        if(this.status){
            this.status = false;
            _axios.then((res)=>{
                this.status = true;
                config.success=='default'?this.handleAxios(config.dataname,res.data):
                config.success.call(this.vueobj,res);
            })
        }
    };

    // 处理请求
    _myAxios.prototype.handleAxios = function(dataname,data){
        this.vueobj[dataname] = data;
    };
    
    //初始化
    let _a = new _myAxios();
    arr.forEach((item) => {
        _a[item.apiname] = function(config){
            _a.sendAxios({
                url:item.url,
                type:config&&config.type||'get',
                data:config&&config.data||{},
                success:config&&config.success||'default',
                dataname:config&&config.dataname||item.apiname
            });
        }
    });
    return _a;
}