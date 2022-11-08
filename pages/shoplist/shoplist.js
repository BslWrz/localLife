// pages/shoplist/shoplist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    query: {},
    shopList: [],
    page: 1,
    pageSize: 10,
    countPage: 0,
    isLoading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      query: options
    })
    this.getShopList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    wx.setNavigationBarTitle({
      title: this.data.query.title
    })
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
    // 重置变量值
    this.setData({
      shopList: [],
      page: 1,
      countPage: 0,
      isLoading: false
    })
    this.getShopList(() => {
      // 回调函数
      wx.stopPullDownRefresh()
    })
    // wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    // 无效请求
    if (this.data.page * this.data.pageSize >= this.data.countPage) {
      return wx.showToast({
        title: '没有更多啦...',
        icon: 'error'
      })
    }
    // 节流阀
    if (this.data.isLoading) return
    // 页数自增1
    this.setData({
      page: this.data.page + 1
    })
    this.getShopList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  // 获取购物列表信息
  getShopList(cb) {
    this.setData({
      isLoading: true
    })
    wx.showLoading({
      title: '数据加载中...'
    })
    wx.request({
      url: `https://www.escook.cn/categories/${this.data.query.id}/shops`,
      method: 'GET',
      data: {
        _page: this.data.page,
        _limit: this.data.pageSize
      },
      success: (res) => {
        this.setData({
          shopList: [...this.data.shopList, ...res.data],
          countPage: res.header['X-Total-Count'] - 0
        })
      },
      complete: () => {
        this.setData({
          isLoading: false
        })
        // 短路运算符&&，前为真执行后，前为假不执行后
        cb && cb()
        wx.hideLoading()
      }
    })
  }
})