// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {pic:"../../img/user/order1.png",title:"待确认"},
      {pic:"../../img/user/order2.png",title:"待放款"},
      {pic:"../../img/user/order3.png",title:"未通过"},
      {pic:"../../img/user/order4.png",title:"待还款"}
    ],
    details:[
      {pic:'../../img/user/d1.png',title:'信用订单'},
      {pic:'../../img/user/d2.png',title:'申请信用卡'},
      {pic:'../../img/user/d3.png',title:'邀请好友'},
      {pic:'../../img/user/d4.png',title:'关注公众号'},
      {pic:'../../img/user/d5.png',title:'电子邮件'},
      {pic:'../../img/user/d6.png',title:'在线客服'},
      {pic:'../../img/user/d7.png',title:'联系我们'},
      {pic:'../../img/user/d8.png',title:'常见问题'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    /*wx.request({
      url:"http://127.0.0.1:3000/user/details",
      success:(res)=>{ 
        //console.log(res)
        this.setData({
          details:res.data.msg
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