// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[
      '../../img/d1.jpg' ,
      '../../img/d2.jpg' ,
      '../../img/d3.jpg' ,
      '../../img/d4.jpg' 
    ],
    list:[
      {pic:"../../img/home/c1.png",title:"麻利贷",content:'急用钱借款工具',money:"1500-10000",time:"3分钟放款"},
      {pic:"../../img/home/c2.png",title:"速花花",content:'急速审核，快速下款',money:"1500-7000",time:"3分钟放款"},
      {pic:"../../img/home/c3.png",title:"花卷贷",content:'不查征信秒下2000',money:"2000-50000",time:"5分钟放款"},
      {pic:"../../img/home/c4.png",title:"立即贷",content:'通过率高达92',money:"5000-7000",time:"2分钟放款"},
      {pic:"../../img/home/c5.png",title:"启动宝",content:'来者不拒，必下款',money:"2500-7000",time:"1分钟放款"},
      {pic:"../../img/home/c6.jpg",title:"好莱宝",content:'好莱宝，想话就花',money:"1500-8000",time:"3分钟放款"},
      {pic:"../../img/home/c7.jpg",title:"快乐钱柜",content:'提额高',money:"1000-7000",time:"10分钟放款"},
      {pic:"../../img/home/c8.jpg",title:"袋掌门",content:'包下款神器，秒到账',money:"2500-7000",time:"8分钟放款"},
      {pic:"../../img/home/c9.jpg",title:"火猫小贷",content:'手机实名，秒下1500',money:"2500-10000",time:"3分钟放款"},
      {pic:"../../img/home/c10.jpg",title:"小白来花",content:'应急专用，一键到账',money:"5000-10000",time:"5分钟放款"},
      {pic:"../../img/home/c1.png",title:"微贷宝",content:'新用户秒过，通过率极高',money:"500-7000",time:"3分钟放款"},
      {pic:"../../img/home/c2.png",title:"大王贷款",content:'全新口子，通过率极高',money:"1000-5000",time:"5分钟放款"},
      {pic:"../../img/home/c3.png",title:"随心借",content:'0门槛3步审核10s下款',money:"3500-7500",time:"1分钟放款"},
      {pic:"../../img/home/c4.png",title:"7天贷",content:'超高通过率',money:"1000-7000",time:"2分钟放款"},
      {pic:"../../img/home/c5.png",title:"益秒到",content:'随借随还，放款秒到',money:"3000-20000",time:"3分钟放款"},
      {pic:"../../img/home/c6.jpg",title:"小白菜",content:'借款1200-5000',money:"4000-8000",time:"3分钟放款"},
      {pic:"../../img/home/c7.jpg",title:"充电宝",content:'急用钱借款工具',money:"1000-10000",time:"5分钟放款"},
      {pic:"../../img/home/c8.jpg",title:"猎金宝",content:'急用钱借款工具',money:"2000-10000",time:"3分钟放款"},
      {pic:"../../img/home/c9.jpg",title:"大米口袋",content:'全自动认证',money:"1500-12000",time:"5分钟放款"},
      {pic:"../../img/home/c10.jpg",title:"螃蟹贷",content:'芝麻分改成500+',money:"1000-10000",time:"3分钟放款"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*wx.request({
      url:"127.0.0.1:3000/home/more",
      success:(res)=>{ 
       // console.log(res.data.msg)
        this.setData({
         list:res.data.msg
        });
      }
    })*/
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})