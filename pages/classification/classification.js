var categoryData = require("../../utils/categoryData.js")
var app = getApp();
Page({
  data: {
    curNav: 1,
    curIndex: 1,
    scrollTop: 0,
    toView: 'classifyR1',
  },
  onLoad: function () {
    this.setData({
      categoryData: categoryData
    });
  },
  //点击左边导航的方法
  tapClick: function (e) {
    var curIndex = e.currentTarget.id;
    this.setData({
      curIndex: curIndex,
      toView: 'classifyR' + curIndex,
    })
  }

})