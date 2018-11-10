// pages/zhaodaikuai/zhaodaikuai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {pic:"../../img/home/c5.png",title:"启动宝",money:"1500-7000",rate:"0.10",time:"3",people:"537",add:"来者不拒，必下款"},
      {pic:"../../img/home/c2.png",title:"柠檬宝",money:"2500-8000",rate:"0.03",time:"3",people:"538",add:"急用钱借贷工具"},
      {pic:"../../img/home/c3.png",title:"乐乐应急",money:"1500-7000",rate:"0.10",time:"3",people:"5643",add:"来者不拒，必下款"},
      {pic:"../../img/home/c1.png",title:"及贷",money:"1500-7000",rate:"0.17",time:"1",people:"123",add:"来者不拒，必下款"},
      {pic:"../../img/home/c6.jpg",title:"有矿",money:"1500-8000",rate:"0.10",time:"2",people:"5567",add:"你来我就借"},
      {pic:"../../img/home/c7.jpg",title:"金巴克",money:"1500-7000",rate:"0.18",time:"3",people:"597",add:"来者不拒，必下款"},
      {pic:"../../img/home/c8.jpg",title:"金拇指",money:"1000-1000",rate:"0.10",time:"5",people:"537",add:"不查征信"},
      {pic:"../../img/home/c9.jpg",title:"启动宝",money:"1500-7000",rate:"0.08",time:"3",people:"637",add:"来者不拒，必下款"},
      {pic:"../../img/home/c10.jpg",title:"启动宝",money:"3000-7000",rate:"0.10",time:"3",people:"537",add:"来者不拒，必下款"},
      {pic:"../../img/home/c6.jpg",title:"秒到账",money:"1500-7000",rate:"0.05",time:"4",people:"537",add:"一秒到账"},
      {pic:"../../img/home/c1.png",title:"一起贷",money:"4500-7000",rate:"0.10",time:"1",people:"7837",add:"来者不拒，必下款"},
      {pic:"../../img/home/c2.png",title:"大米口袋",money:"1000-8000",rate:"0.10",time:"3",people:"537",add:"来者不拒，必下款"},
      {pic:"../../img/home/c3.png",title:"螃蟹贷",money:"1500-7000",rate:"0.12",time:"5",people:"8837",add:"手机实名，秒下1500"},
      {pic:"../../img/home/c4.png",title:"金蚁在线",money:"1500-7000",rate:"0.10",time:"3",people:"537",add:"来者不拒，必下款"},
      {pic:"../../img/home/c5.png",title:"小白菜",money:"1500-8000",rate:"0.10",time:"3",people:"937",add:"来者不拒，必下款"},
      {pic:"../../img/home/c10.jpg",title:"一秒到",money:"1500-7000",rate:"0.12",time:"2",people:"537",add:"来者不拒，必下款"},
      {pic:"../../img/home/c9.jpg",title:"启动宝",money:"1500-10000",rate:"0.10",time:"3",people:"537",add:"超高通过率"},
      {pic:"../../img/home/c8.jpg",title:"小白来花",money:"2500-20000",rate:"0.10",time:"1",people:"537",add:"应急专用，放款秒到"}

    ]
  },
  others:function(){
      wx.navigateTo({
        url:"/pages/jisudai2/jisudai2"
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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