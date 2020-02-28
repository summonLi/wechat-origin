//获取应用实例
const app = getApp();
Page({
  data: {
    userInfo: {},
    isLoad:1
  },
  onLoad: function() { 
    console.log(app.globalData.userInfo)
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
      })
    }else{
      console.log("ssss")
      wx.getUserInfo({
        success:res => {
          console.log(res)
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo:app.globalData.userInfo
          })
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    console.log(app.globalData.userInfo)
    //判断是否登录
    if (!app.globalData.isLogin) {
      wx.showModal({
        title: '提示',
        content: '您还未登录，前往登录',
        success(res) {
          if (res.confirm) {
            wx.redirectTo({
              url: '/pages/authorization/authorization',
            })
          } else if (res.cancel) {

          }
        }
      })
    }
  },
  goAddress(){
    wx.navigateTo({
      url: '../address/address',
    })
  },
  goMyorder(e){
    wx.navigateTo({
      url: '../myorder/myorder?current=' + e.currentTarget.dataset.current,
    })
  }
})