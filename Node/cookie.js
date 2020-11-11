// 封装cookie，虽然不是最完美的
var cookieUtil={
    // 设置cookie

    set:function(name,value,expires){
        var cookieText=name+'='+value;
        if(expires instanceof Date){
            cookieText+=";expires="+expires;
        }
        console.log(cookieText);
        document.cookie=cookieText;
    },

    // 获取cookie

    get:function(name){
        var cookieName=name+"=";  // iwenl=
        var cookieStart=document.cookie.indexOf(cookieName);  //如果存在返回恰当的
        var cookieValue=null;
        if(cookieStart>-1){
            var cookieEnd=document.cookie.indexOf(";",cookieStart);
            if(cookieEnd==-1){
                cookieEnd=document.cookie.length;
            }
            // 取到的内容赋值给cookieValue
            cookieValue=document.cookie.substring(cookieStart+cookieName.length);
        }
        return cookieValue;
    },

    // 清除cookie
    delete:function(name){
        this.set(name,null,new Date("January 1,2016"));
    },

    // 重置cookie
    unset:function(name,value,expires){
        if(expires instanceof Date){
            expires=new Date("January 1,2017");
        }
        this.set(name,value,expires);
    }
};