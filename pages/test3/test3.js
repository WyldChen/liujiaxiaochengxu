// pages/test3/test3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      cv:"qqq",
      name:"zhangsan",
      user:{
        name:"陈亮男",
        age:20,
        gender:"男"
      },
      books:[111,222,333]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // setTimeout(()=>{
    //   this.setData({
    //     name:"lisi",
    //     vb:"aaa"
    //   })
    // },2000)
    setTimeout(()=>{
      wx.navigateBack({
        delta:1
      })
    },2000)
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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})