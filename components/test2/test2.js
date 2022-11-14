// components/test2/test2.js
Component({
  options: {
    pureDataPattern: /^_/ //满足此正则表达式的字段为纯数据字段，不参加渲染
  },

  /**
   * 组件的属性列表
   */
  properties: {
    addend: {
      type: Number,
      value: 1
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    n1: 0,
    n2: 0,
    sum: 0,
    newAddend: 1
  },

  /**
   * 组件的方法列表
   */
  methods: {
    n1Add() {
      this.setData({
        n1: this.data.n1 + this.properties.addend
      })
    },
    n2Add() {
      this.setData({
        n2: this.data.n2 + this.properties.addend
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
  },

  // 生命周期函数
  lifetimes: {
    created() {},
    attached() {},
    detached() {}
  },

  // 监听页面生命周期函数
  pageLifetimes: {
    show() {
      this.setData({
        newAddend: this.properties.addend
      })
    },
    hide() {},
    resize() {}
  }
})