//index.js
//获取应用实例
const app = getApp();
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535608090906&di=d253a2f3222e637a0a05c9e95c9c7e98&imgtype=0&src=http%3A%2F%2Fc1.mifile.cn%2Ff%2Fi%2F16%2Fchain%2Fmtwatch-2%2Fmtwatch-07.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535608090906&di=d253a2f3222e637a0a05c9e95c9c7e98&imgtype=0&src=http%3A%2F%2Fc1.mifile.cn%2Ff%2Fi%2F16%2Fchain%2Fmtwatch-2%2Fmtwatch-07.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535608090906&di=d253a2f3222e637a0a05c9e95c9c7e98&imgtype=0&src=http%3A%2F%2Fc1.mifile.cn%2Ff%2Fi%2F16%2Fchain%2Fmtwatch-2%2Fmtwatch-07.jpg'
    ],
    productList:[
      {
        name:'红米Note 5',
        img:"../../images/pro08.jpg",
        title:"千元全面屏，前置柔光自拍",
        price:"1399"
      },
      {
        name: '红米Note 5 4GB+64GB',
        img: "../../images/pro08.jpg",
        title: "千元全面屏，前置柔光自拍",
        price: "1399"
      },
      {
        name: '红米Note 5 4GB+64GB',
        img: "../../images/pro08.jpg",
        title: "千元全面屏，前置柔光自拍",
        price: "1399"
      },
      {
        name: '红米Note 5 4GB+64GB',
        img: "../../images/pro08.jpg",
        title: "千元全面屏，前置柔光自拍",
        price: "1399"
      }
    ],
    swiperCurrent: 0
  },

  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    //this.getBannerList();
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //轮播图切换的事件,只要把切换后的当前index传给<swiper>组件的current属性即可。
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  chuangEvent: function (e) {
    //console.log(e)
    this.setData({
      swiperCurrent: e.currentTarget.id
    })
  },
  getBannerList: function () {
    var that = this;
    var datas = {
      type: 5,
      categoryId: 408
    }
    app.ajaxRequest('/ad/getAdvertListBy', 'GET', 'json', datas, function (ret) {
      console.log(ret)
    }, function (err) {

    }, 4)
  },
  goGoodsdetail: function (e) {
    var index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '/pages/goodsdetail/goodsdetail?index='+index,
    })
  }

})


