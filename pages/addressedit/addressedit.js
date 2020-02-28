// pages/addressedit/addressedit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:"",
    name:"",
    phone:"",
    address:"",
    region: ['--请选择所在地区--', '', ''],
    customItem: '全部',
    type:"",//判断是新增add还是编辑edit
  },
  //所在地区
  bindRegionChange(e){
    this.setData({
      region: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var type = options.type;
    if(type == 'edit'){
      var province = options.province;
      var city = options.city;
      var district = options.district;
      var region = [province, city, district];
      this.setData({
        type: type,
        id: options.id,
        name:options.name,
        phone:options.phone,
        address: options.addressdetail,
        region: region
      })
    }else{
      this.setData({
        type: type
      })
    }
  },
  //确认
  onOk(){
    wx.request({
      url: '',
      method:"POST",
      data:{

      },
      success:function(res){
        wx.showToast({
          title: '保存成功',
          icon:'success',
          duration:1500,
          mask:true,
          success:function(){
            wx.navigateBack({
              delta:1
            })
          }
        })
      }
    })
  }
})