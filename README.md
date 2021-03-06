# wx-yu-wpy
微信小程序（yu-mall)，采用wepy构建

### 实现的功能主要如下:
- [ ] 商品列表展示
- [x] 商品sticky列表展示
- [x] 商品根据滚动条跳转类别
- [ ] 购物车功能
- [x] 购物车基本流程
- [x] 下单流程
- [ ] 账单功能
- [x] 账单列表展示
- [ ] 用户中心
- [ ] 支付功能




### 使用姿势

1. 全局脚手架: `npm i wepy-cli -g`
2. 克隆项目: `git clone https://github.com/CRPERTEAM/wx-yu-wpy.git`
3. 进入项目: `cd wx-yu-wpy`
4. 安装依赖: `yarn install` or `npm install`
5. 跑起来  : `wepy build --watch`


### 目录结构

```bash
├── .editorconfig  // editor 配置
├── .eslintignore // eslint 忽略处理范围
├── .eslintrc.js  // eslint 规则
├── .gitignore  // git 忽略文件
├── .wepycache  // 脚手架缓存记录
├── .wepyignore // 脚手架忽略处理反问
├── LICENSE  // 协议
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── api // 接口
│   ├── app.wpy  // 根组件
│   ├── common // 通用样式
│   ├── components // 组件
│   ├── index.template.html  // 渲染的基础页面模板
│   ├── mixins  // 公共抽离
│   ├── pages  // 小程序页面
│   └── utils  // 全局常见,异步请求的封装,全局方法等
└── wepy.config.js
```
