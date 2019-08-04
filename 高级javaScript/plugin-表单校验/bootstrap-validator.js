(function(global, factory, plug){
    return factory.call(global, global.jQuery, plug)
})(this, function($, plug){
    // 默认值
    var __DEFS__ = {
        raise:'change'
    };
    // 规则引擎
    var __RULES__ = {
        "require":function(){
            return !!this.val();
        },
        "regex":function(){
            return true;
        },
        "email":function(){
            return /^([a-zA-Z0-9._-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/.test(this.val());
        },
        "mobile":function(){
            return true;
        },
        "phone":function(){
            return true;
        },
        "ipaddress":function(){
            return true;
        },
        "number":function(){
            return true;
        },
        "amount":function(){
            return true;
        },
        "maxlength":function(){
            return this.val().length <= this.data('bv-maxlength');
        },
        "maxvalue":function(){
            return true;
        },
        //...扩展
    }
    // 创建$插件
    $.fn[plug] = function(ops){
        this.each(function(){
            var $this = $(this);
            $.extend($this,ops);
            $this.raise = $this.data('bv-raise') || $this.raise || __DEFS__.raise;
            var $fields = $this.find('[data-bv=true]');   // 找到所有需要校验的元素
            console.log($fields,$this.raise);
            $fields.on($this.raise,function(){
                var $field = $(this);
                var $group = $field.parents(".form-group").removeClass('has-success has-error');
                $group.find('.help-block').remove();
                var result = true;
                $.each(__RULES__,function(rule,valid){
                    if($field.data('bv-'+rule)){
                        result = valid.call($field);
                        if(!result) {
                            $field.after(`<span class='help-block'>${$field.data(`bv-${rule}-error`)}</span>`)
                        }
                        return result;
                    }
                })
                $group.addClass(result?'has-succes':'has-error');
            })
        })
    }
}, 'bootstrapvalidator')