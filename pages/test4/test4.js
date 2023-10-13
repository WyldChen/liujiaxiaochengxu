// pages/test4/test4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:"陈亮男",
    num:0,
    color:"pink",
    size:"300rpx",
    title:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },
  onclick(e){
    this.setData({
      name:e.currentTarget.dataset.myname
    })
  },
  //点击了颜色块
  clickbox(){
    let rdm=parseInt(Math.random()*100);
    let r1=parseInt(Math.random()*255);
    let r2=parseInt(Math.random()*255);
    let r3=parseInt(Math.random()*255);
    let size=parseInt(Math.random()*500)+100;
    let color=`rgb(${r1},${r2},${r3})`;
    this.setData({
      num:rdm,
      color:color,
      size:size+"rpx"
    });
  },
  onInput(e){
    this.setData({
      title:e.detail.value,
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