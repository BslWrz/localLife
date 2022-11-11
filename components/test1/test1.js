// components/test1/test1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 无默认值
    // max: Number
    // 有默认值
    max: {
      type: Number,
      value: 10
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 不能接受传参，只能内部使用
    count: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击事件处理函数
    addCount() {
      if (this.data.count >= this.properties.max) {
        this._showCount()
        // console.log(this.data === this.properties) // true
        return
      }
      this.setData({
        count: this.data.count + 1
      })
    },
    // 一般自定义方法以‘_’开头
    _showCount() {
      wx.showToast({
        title: 'maxCount: ' + this.properties.max,
        icon: 'error'
      })
    }
  }
})