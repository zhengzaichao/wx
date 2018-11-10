CREATE DATABASE youjie CHARSET=utf8;
USE youjie;
/*轮播图片*/
CREATE TABLE five(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    img_url VARCHAR(255),
    title   VARCHAR(50)
);
INSERT INTO five VALUES(null,"http://127.0.0.1:3000/img/1.png","立即贷款");
INSERT INTO five VALUES(null,"http://127.0.0.1:3000/img/2.png","芝麻信用贷");
INSERT INTO five VALUES(null,"http://127.0.0.1:3000/img/3.png","黑户检测");
INSERT INTO five VALUES(null,"http://127.0.0.1:3000/img/4.png","秒下款");
INSERT INTO five VALUES(null,"http://127.0.0.1:3000/img/5.png","办信用卡");


/*推荐贷款*/
CREATE TABLE more_ways(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    pic     VARCHAR(255),
    title   VARCHAR(50),
    content VARCHAR(50),
    money   VARCHAR(50),
    time    VARCHAR(50)
);
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c1.png","麻利贷",'急用钱借款工具',"1500-10000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c2.png","速花花",'急速审核，快速下款',"1500-7000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c3.png","花卷贷",'不查征信秒下2000',"2000-50000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c4.png","立即贷",'通过率高达92%',"500-10000","2分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c5.png","启动宝",'来者不拒，必下款',"1000-50000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c6.jpg","好莱宝",'好莱宝，想话就花',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c7.jpg","快乐钱柜",'提额高',"1000-10000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c8.jpg","袋掌门",'包下款神器，秒到账',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c9.jpg","火猫小贷",'手机实名，秒下1500',"1000-15000","2分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c10.jpg","小白来花",'应急专用，一键到账',"1000-10000","5分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c1.png","微贷宝",'新用户秒过，通过率极高',"1000-10000","2分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c2.png","大王贷款",'全新口子，通过率极高',"5000-15000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c3.png","随心借",'0门槛3步审核10s下款',"1000-10000","2分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c4.png","7天贷",'超高通过率',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c5.png","益秒到",'随借随还，放款秒到',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c6.jpg","小白菜",'借款1200-5000',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c7.jpg","充电宝",'急用钱借款工具',"2500-10000","3分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c8.jpg","猎金宝",'急用钱借款工具',"1000-15000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c9.jpg","大米口袋",'全自动认证',"1000-10000","1分钟放款");
INSERT INTO more_ways VALUES(null,"http://127.0.0.1:3000/img/home/c10.jpg","螃蟹贷",'芝麻分改成500+',"1000-10000","3分钟放款");

/*我的  底部功能*/
CREATE TABLE details(
    id      INT PRIMARY KEY AUTO_INCREMENT,
    pic     VARCHAR(255),
    title   VARCHAR(50)
);
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d1.png","信用订单");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d2.png","申请信用卡");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d3.png","邀请好友");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d4.png","关注公众号");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d5.png","电子邮件");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d6.png","在线客服");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d7.png","联系我们");
INSERT INTO details VALUES(null,"http://127.0.0.1:3000/img/user/d8.png","常见问题");





