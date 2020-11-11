/* 
    localStorage：
        生命周期：用户存储，如果不主动删除则不会删除
        方法：
            setItem：保存数据
            getItem：获取数据
            removeItem：移除数据
            clear：清除所有数据


            注意：键不能重复，否则将会被覆盖
*/

var i=0;

function saveData(){
    i++;
    var data=document.getElementById("input");
    var str=data.nodeValue;
    // 保存数据
    localStorage.setItem("name"+i,str);  // 键值对
}

function getData(){
    var text=document.getElementById("msg");
    var str=localStorage.getItem("name2");
    text.innerHTML=str;
}

function removeData(){
    localStorage.removeItem("name1");
}

function clearAllData(){
    localStorage.clear();
}