


(function (w) {


function guid() {

    var s = '0123456789abcdef'

    function rand(){ return s[Math.floor(Math.random()*s.length)]}

    return {
        blank: function () { return "00000000-0000-0000-0000-000000000000" },
        create: function () {
            var a = 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'
            var s = ''
            for(var i = 0;i<a.length;i++){
                if(a[i] === 'x') s += rand()
                else s+= a[i]
            }
            return s
         }
    }
}

function eventManager(){
    var table = {}
    return {
        addEvent:function(name,callback){
            if(table[name] === undefined){
                table[name] = [callback]
            } else if( table[name] instanceof Array){
                table[name].push(callback)
            } else {
                throw 'Wrong Event Name !'
            }
        },
        _emit:function(name,argus){
            if(table[name] instanceof Array) {
                var arr= table[name]
                for (var i = 0; i < arr.length; i++) {
                    var e = arr[i];
                    e(argus)
                }
            }
        }
    }
}

function getUrlParams(){
    return function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
}

function getTopWindow(){
    var p = window.parent
}


w.com = {
    guid:guid(),
    eventManager:eventManager(),
    getUrlParams:getUrlParams()
}

})(window)


