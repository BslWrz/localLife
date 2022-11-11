// components/test2/test2.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    n1: 0,
    n2: 0,
    sum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    n1Add() {
      this.setData({
        n1: this.data.n1 + 1
      })
    },
    n2Add() {
      this.setData({
        n2: this.data.n2 + 1
      })
    }
  },

  // 监听器
  observers: {
    'n1,n2': function (n1, n2) {
      this.setData({
        sum: n1 + n2
      })
    }
  }
})