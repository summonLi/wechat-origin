//获取应用实例
const app = getApp()

Page({
  data: {
    allsel: false,//全选状态
    total: 0,//总金额
    totalNum: 0,//结算总数
    selall: [],//选中的商品
    shopCar: [{
      'id': '1',
      'name': '流星雨鲜花包装纸1',
      'product': [{
        'classifyId': '1',
        'id': '1',
        'title': '啥电话费红框的撒可富卡士大夫哈哈哈哈是是东皇话返回是电话费',
        'price': '288',
        'amount': '1',
        'image': '../../images/pro08.jpg',
        'specification': '白色 10张1包',
        'checkStatus': false
      }, {
        'classifyId': '1',
        'id': '2',
        'title': '啥电话费红框的撒可富卡士大夫哈哈哈哈是是东皇话返回是电话费',
        'price': '288',
        'amount': '1',
        'image': '../../images/pro08.jpg',
        'specification': '黑色 10张1包',
        'checkStatus': false
      }, {
        'classifyId': '1',
        'id': '3',
        'title': '啥电话费红框的撒可富卡士大夫哈哈哈哈是是东皇话返回是电话费',
        'price': '288',
        'amount': '1',
        'image': '../../images/pro08.jpg',
        'specification': '黑色 10张1包',
        'checkStatus': false
      }]
    }, {
      'id': '2',
      'name': '流星雨鲜花包装纸2',
      'product': [{
        'classifyId': '2',
        'id': '1',
        'title': '啥电话费红框的撒可富卡士大夫哈哈哈哈是是东皇话返回是电话费',
        'price': '288',
        'amount': '1',
        'image': '../../images/pro08.jpg',
        'specification': '白色 10张1包',
        'checkStatus': false
      }, {
        'classifyId': '2',
        'id': '2',
        'title': '啥电话费红框的撒可富卡士大夫哈哈哈哈是是东皇话返回是电话费',
        'price': '288',
        'amount': '1',
        'image': '../../images/pro08.jpg',
        'specification': '黑色 10张1包',
        'checkStatus': false
      }]
    }]
  },
  onLoad: function () {
    console.log("cart1")
  },
  //点击单个选择按钮
  clickGoods: function (e) {
    let shopCar = this.data.shopCar;//购物车商品数据
    let totalNum = this.data.totalNum;//结算的数目
    let selall = this.data.selall;//选中的商品
    let total = this.data.total;//总金额
    shopCar.forEach(function (item, index) {
      if (item.id == e.currentTarget.dataset.classifyid) {
        item.shopSelStu = true;//店铺选中状态
        item.product.forEach(function (pItem, pIndex) {
          if (pItem.id == e.currentTarget.dataset.id) {
            pItem.checkStatus = !pItem.checkStatus;
            if (pItem.checkStatus) {//选中操作
              total += pItem.price * pItem.amount;
              totalNum++;
              selall.push(pItem);
            } else {//去掉选中操作
              total -= pItem.price * pItem.amount;
              for (let i = 0; i < selall.length; i++) {
                if (pItem.id == selall[i].id && pItem.classifyid == selall[i].classifyid) {
                  selall.splice(i, 1);
                  totalNum--;
                  break;
                }
              }
            }
          };
          if (!pItem.checkStatus) {//店铺选中状态
            item.shopSelStu = false;
            return;
          }
        })
      };
    });
    this.listenAllsel();
    this.setData({
      shopCar: shopCar,
      total: total,
      totalNum: totalNum,
      selall: selall
    })

  },
  //点击店铺选择按钮
  clickShop: function (e) {
    let total = this.data.total;
    let totalNum = this.data.totalNum;
    let selall = this.data.selall;
    this.data.shopCar.forEach(function (item, index) {
      if (item.id == e.currentTarget.id) {
        item.shopSelStu = !item.shopSelStu;
        item.product.forEach(function (pItem, pIndex) {
          if (item.shopSelStu) {
            if (pItem.checkStatus == false) {
              pItem.checkStatus = true;
              total += pItem.price * pItem.amount;
              totalNum++;
              selall.push(pItem);
            }
          } else {
            pItem.checkStatus = false;
            total -= pItem.price * pItem.amount;
            for (var i = 0; i < selall.length; i++) {
              if (pItem.id == selall[i].id) {
                selall.splice(i, 1);
                totalNum--;
                break;
              }
            }
          }
        })
      }
    });
    this.listenAllsel();
    this.setData({
      shopCar: this.data.shopCar,
      total: total,
      totalNum: totalNum,
      selall: selall
    })
  },
  //全选按钮
  allcheckTap: function () {
    let allsel = !this.data.allsel;//点击全选后allsel变化
    let total = 0;
    let shopcar = this.data.shopCar;
    let totalNum = 0;
    for (var i = 0; i < shopcar.length; i++) {
      shopcar[i].shopSelStu = allsel;//给选中店铺状态
      for (var j = 0; j < shopcar[i].product.length; j++) {
        shopcar[i].product[j].checkStatus = allsel;//商品选中状态等于全选状态
        if (allsel) {
          total += shopcar[i].product[j].price * shopcar[i].product[j].amount;
          totalNum++;
        }
      }
    };
    this.data.selall = allsel ? shopcar : [];
    this.setData({
      allsel: allsel,
      shopCar: shopcar,
      total: total,
      totalNum: totalNum,
      selall: this.data.selall
    })
  },
  //监听全选变化
  listenAllsel: function () {
    let allsel = true;
    this.data.shopCar.forEach(function (item, index) {
      item.product.forEach(function (pItem, pIndex) {
        if (!pItem.checkStatus) {
          allsel = false;
          return;
        }
      })
    });
    this.setData({
      allsel: allsel,
      shopCar: this.data.shopCar
    })
  },
  //点击加减按钮
  numchangeTap: function (e) {
    let types = e.currentTarget.dataset.types;
    let total = this.data.total;
    switch (types) {
      case 'add':
        this.data.shopCar.forEach(function (item, index) {
          if (item.id == e.currentTarget.dataset.classifyid) {
            item.product.forEach(function (pItem, pIndex) {
              if (pItem.id == e.currentTarget.dataset.id) {
                pItem.amount++;
                pItem.checkStatus && (total += parseInt(pItem.price));//如果商品为选中状态，则合计价格+商品价格
              }
            })
          }
        })
        break;
      case 'minus':
        this.data.shopCar.forEach(function (item, index) {
          if (item.id == e.currentTarget.dataset.classifyid) {
            item.product.forEach(function (pItem, pIndex) {
              if (pItem.id == e.currentTarget.dataset.id) {
                if (pItem.amount > 1) {
                  pItem.amount--;
                  pItem.checkStatus && (total -= parseInt(pItem.price));//如果商品为选中状态，则合计价格+商品价格
                } else {
                  wx.showToast({
                    title: '该宝贝不能减少了哟~',
                    icon: 'none',
                    duration: 1000
                  })
                }
              }
            })
          }
        })
        break;
    };
    this.setData({
      shopCar: this.data.shopCar,
      total: total
    })
  },
  onShow:function(){

  },
  onSettlement(){
    if (this.data.totalNum==0){
      wx.showToast({
        title: '请选择商品',
        icon:"none"
      })
    }else{
      wx.navigateTo({
        url: '../submitorder/submitorder',
      })
    }
    
  }
})