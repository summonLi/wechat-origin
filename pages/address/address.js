// pages/address/address.js
var app = getApp();
var datas = require("../../datas/address.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: datas.addressList,
    isShow: true,//选项圆圈图标的显示隐藏，true隐藏，false显示。收货地址管理不可选，直只可新增编辑查看
  },

  // 新增收货地址
  goAdd() {
    wx.navigateTo({
      url: '../addressedit/addressedit?type=add',
    })
  },
  //编辑收货地址
  goEdit(e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    var phone = e.currentTarget.dataset.phone;
    var province = e.currentTarget.dataset.province;
    var city = e.currentTarget.dataset.city;
    var addressdetail = e.currentTarget.dataset.addressdetail;
    var district = e.currentTarget.dataset.district;
    wx.navigateTo({
      url: '../addressedit/addressedit?type=edit&id=' + id + '&name=' + name + '&phone=' + phone + '&province=' + province + '&city=' + city + '&addressdetail=' + addressdetail + '&district=' + district
    })
  },
  //选择收货地址
  onSelect(e){
    this.onforEach(e.currentTarget.id);
    var pages = getCurrentPages();//获取当前页面栈
    var prevPage = pages[pages.length - 2];//上一页
    prevPage.getAddress(e.currentTarget.id);
    wx.navigateBack({
      delta:1
    })
  },

  //遍历数据回选
  onforEach(v){
    var addressList = this.data.addressList;
    addressList.forEach(function (item, index) {
      if (item.id == v) {
        item.isSelect = true;
      } else {
        item.isSelect = false;
      }
    })
    this.setData({
      addressList
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //options有值，则是选择收货地址进入回选已选的地址，无值，则是收货地址管理进入
   if(options.id){
     this.setData({
       isShow:false
     })
     this.onforEach(options.id);
   }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})