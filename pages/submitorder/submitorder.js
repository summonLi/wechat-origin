// pages/submitorder/submitorder.js
let addressDatas = require('../../datas/address.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressInfo: {},//地址
  },

  //选择收货地址
  goAddress(e) {
    var id = e.currentTarget.id;
    wx.navigateTo({
      url: '../address/address?id=' + id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    //初始化默认收货地址
    addressDatas.addressList.forEach(function (item, index) {
      if (item.isSelect) {
        _this.setData({
          addressInfo: item
        })
      }
    })
  },

  //选择回调地址的方法
  getAddress(id){
    var _this = this;
    //初始化默认收货地址
    addressDatas.addressList.forEach(function (item, index) {
      if (item.id == id) {
        _this.setData({
          addressInfo: item
        })
      }
    })
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