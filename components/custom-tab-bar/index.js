const app = getApp()
Component({
  data: {
    selected: app.globalData.selected,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/pages/index/index",
      iconPath: "/images/icon_home.jpg",
      selectedIconPath: "/images/icon_home_2.jpg",
      text: "首页"
      }, 
      {
        pagePath: "/pages/lists/lists",
        iconPath: "/images/icon_list.jpg",
        selectedIconPath: "/images/icon_list_2.jpg",
        text: "列表"
      },  
      {
      pagePath: "/pages/lyb/lyb",
      iconPath: "/images/icon_component.png",
      selectedIconPath: "/images/icon_component_HL.png",
      text: "案例"
      }, 
      {
      pagePath: "/pages/lyb/lyb",
      iconPath: "/images/icon_API.png",
      selectedIconPath: "/images/icon_API_HL.png",
      text: "设置"
    }
    ]
  }, 
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      app.globalData.selected = 1
      wx.switchTab({url})
      this.setData({
        selected: data.index,
      })
    }
  }
})