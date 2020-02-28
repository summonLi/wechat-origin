const app = getApp();
let datas = require('../../datas/productdetail.js');
Page({
  data: {
    proDetail:{},
    index:null,
    goodsSpecifiShow: false,
    selectSpe:"选择 尺码，颜色分类",
    isSelect:'',//设置选中规格
    num:1
  },
  //监听页面加载
  onLoad:function(options){
    var index = options.index;
    //获取对应的页面数据
    var proDetail = datas.productdetail[index];
    this.setData({
      proDetail: proDetail,
      index:index
    })
  },
  //收藏店铺
  handCollection(){
    var isCollection = this.data.proDetail.isCollection;//false为未收藏，true已收藏
    var title = isCollection?'取消收藏':'收藏成功';
    wx.showToast({
      title:title,
      icon:'success',
      duration:2000
    })
    this.setData({
      'proDetail.isCollection': !isCollection//设置对象中的收藏值
    })
  },
  //选择规格
  selectSpe(e){
    let spe = e.currentTarget.dataset.spe;
    this.setData({
      selectSpe:spe,
      isSelect: spe
    })
  },
  //购买数量
  handAdd(e){
    switch (e.currentTarget.dataset.type) {
      case 'add':
        this.data.num++;
        this.setData({
          num:this.data.num
        })
        break;
      case 'minus':
          if(this.data.num != 1){
            this.data.num--;
            this.setData({
              num:this.data.num
            })
          }
        break;
    }
  },
  //查看轮播图片
  previewImage: function (e) {
    var current = e.currentTarget.dataset.src;
    wx.previewImage({
      current: current, // 当前显示图片的http链接
      urls: this.data.proDetail.goodsImg // 需要预览的图片http链接列表
    })
  },
  //加入购物车显示
  showGoodsSpecifi: function (e) {
    this.setData({
      goodsSpecifiShow: !this.data.goodsSpecifiShow
    })
  },
  //关闭购物车隐藏
  closeGoodsSpecifi: function (e) {
    this.setData({
      goodsSpecifiShow: !this.data.goodsSpecifiShow
    })
  },
  //去购物车
  goCart(){
    wx.switchTab({
      url: '../shoppingcart/shoppingcart'
    })
  },
  //加入购物车确定
  onComfirm(){
    wx.showToast({
      title: '加入购物车成功',
      icon: 'success',
      duration: 2000
    })
    this.setData({
      goodsSpecifiShow: !this.data.goodsSpecifiShow
    })
  }
})