// pages/test7/test7.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listarr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getData();
  },
  getData(){
    wx.request({
      url: 'https://api.thecatapi.com/v1/images/search?limit=2',
      success:res=>{
        this.setData({
          listarr:res.data
        });
        wx.stopPullDownRefresh();
      }
    })
  },
  getData1(){
    wx.showLoading({
      title:"加载中...",
      mask:true
    });
    wx.request({
      url: 'https://api.thecatapi.com/v1/images/search?limit=2',
      success:res=>{
        this.setData({
          listarr:this.data.listarr.concat(res.data)
        });
        wx.hideLoading();
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.setData({
      listarr:[]
    });
    this.getData();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    this.getData1();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})