var qqwry = require('lib-qqwry').info(); //调用并初始化，普通机器初始需要70毫秒左右;

var ipList = [
    "127.0.0.1",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10",
    "202.103.102.10"
]

//ipList.forEach(function (ip) {
//    console.log(ip);
//    ipinfo = qqwry.searchIP(ip);
//    console.log("this ip from: " + ipinfo)
//});
//console.log(ipL);

qqwry.infoAsync(function(){
    //var ipL = qqwry.searchIP("202.103.102.10");
    ipList.forEach(function (ip) {
        ipinfo = qqwry.searchIP(ip);
        console.log(ip + " from: " + ipinfo.Area + " " + ipinfo.Country + " ");
    });
});
