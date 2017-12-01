# wx-yu-wpy
之前的微信小程序（给yu做的）替换一下构建框架，采用wepy构建

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


### 目录结构

```bash
├── .editorconfig // editor 的配置规则(所有支持这个的都生效)
├── .eslintignore // eslint忽略的校验范围
├── .eslintrc.js // esLint规则及配置
├── .wepyignore // wepy忽略处理的范围
├── README.md // 不用多少
├── package-lock.json // lock 文件
├── package.json  // 包清单
├── src
│   ├── api
│   ├── app.wpy
│   ├── common
│   ├── components --
│   ├── index.template.html
│   ├── mixins
│   ├── pages
│   └── utils
└── wepy.config.js
```
