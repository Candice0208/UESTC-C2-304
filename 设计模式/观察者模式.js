var event = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments);
        var fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (var i = 0; i < fns.length; i++) {
            fns[i].apply(this, arguments);
        }
    },
    remove: function(key,fn){
        var fns = this.clientList[key];
        if(!fns){
            return false;
        }
        if(!fn){
            fns && (fns.length=0);
        } else {
            for(var i = fns.length-1; i>=0; i--){
                if(fns[i]===fn){
                    fns.splice(i,1);
                    return;
                }
            }
        }

    }
}

var installEvent = function (obj) {
    for (var i in event) {
        obj[i] = event[i];
    }
};

var salesOffices = {};

installEvent(salesOffices);
salesOffices.listen('squareMeter88', fn1 = function (price) {
    console.log('1价格= ' + price);
});

salesOffices.listen('squareMeter88', fn2 = function (price) {
    console.log('2价格= ' + price);
});

salesOffices.listen('squareMeter100', function (price) {
    console.log('价格= ' + price);
});

salesOffices.remove( 'squareMeter88', fn1 );
salesOffices.trigger('squareMeter88', 2000000); // 输出:2000000 
salesOffices.trigger( 'squareMeter100', 3000000 ); // 输出:3000000