// pages/myorder/myorder.js
let app = getApp(); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    winHeight:"",//窗口的高度
    currentTab:''//定位哪个位置，0待付款，1待收货，2已完成，3全部订单
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      currentTab:options.current
    })
    var _this = this;
    //设置自适应屏幕
    wx.getSystemInfo({
      success: function (res) {
        var windowH = res.windowHeight,
          windowW = res.windowWidth,
          rpxR = windowW / 750;
        var calc = (windowH - 100 * rpxR) / rpxR;
        console.log(calc + '//' + rpxR + '//' + windowH + '//' + windowW)
        _this.setData({
          winHeight: calc
        })
      },
    })
  },

  switchTab(e){
    var currentTab = e.currentTarget.dataset.current;
    if (currentTab == this.data.currentTab){
      return false;
    }else{
      this.setData({
        currentTab: currentTab
      })
    }
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