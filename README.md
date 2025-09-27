# HankSound Website - Next.js Implementation

这是一个使用 Next.js 实现的 HankSound 官方网站。

## 功能特性

- 🎨 现代化的响应式设计
- 📱 移动端友好的界面
- ⚡ 使用 Next.js 14 和 React 18
- 🎭 流畅的动画效果 (Framer Motion)
- 🎨 Tailwind CSS 样式系统
- 📊 TypeScript 支持
- 🔍 语义化 HTML 结构
- 🌍 多语言

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **动画**: Framer Motion
- **图标**: Lucide React
- **字体**: Inter (Google Fonts)

## 项目结构

```
├── app/
│   ├── globals.css          # 全局样式
│   ├── layout.tsx           # 根布局
│   ├── page.tsx             # 首页
│   ├── components/          # 首页组件
│   │   ├── Header.tsx       # 导航栏组件
│   │   ├── Footer.tsx       # 页脚组件
│   │   ├── HeroSection.tsx  # 首页英雄区域
│   │   ├── AboutSection.tsx # 关于我们部分
│   │   ├── ProductsSection.tsx # 产品展示部分
│   │   ├── ServicesSection.tsx # 服务介绍部分
│   │   ├── TechnologySection.tsx # 技术展示部分
│   │   ├── NewsSection.tsx  # 新闻部分
│   │   └── ContactSection.tsx # 联系表单部分
│   ├── products/
│   │   ├── page.tsx         # 产品页面
│   │   └── home-audio-system/
│   │       ├── page.tsx     # 家庭音频系统产品页面
│   │       └── components/  # 家庭音频系统页面组件
│   │           ├── HomeAudioHero.tsx      # 家庭音频英雄区域
│   │           ├── ProductsShowcase.tsx   # 产品展示部分
│   │           └── WhyChooseUs.tsx        # 选择我们的原因
│   └── solutions/
│       └── wireless-streaming/
│           ├── page.tsx     # 无线音频流媒体解决方案页面
│           └── components/  # 解决方案页面组件
│               ├── WirelessStreamingHero.tsx      # 无线流媒体英雄区域
│               ├── ApplicationsSection.tsx        # 应用场景展示
│               ├── AdvantagesSection.tsx          # 优势特点部分
│               ├── TechnologiesSection.tsx        # 技术展示部分
│               └── CTASection.tsx                 # 行动号召部分
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 在浏览器中打开 [http://localhost:3000](http://localhost:3000)

## 构建生产版本

```bash
npm run build
npm start
```

## 主要组件说明

### Header 组件
- 响应式导航栏
- 多级下拉菜单
- 移动端汉堡菜单
- 搜索功能

### HeroSection 组件
- 首页主要展示区域
- 动画效果
- 产品特性展示

### AboutSection 组件
- 公司介绍
- 特色功能展示
- 统计数据

### ProductsSection 组件
- 产品分类展示
- 产品列表
- 悬停效果

### ServicesSection 组件
- 服务项目展示
- 图标和描述
- 交互效果

### TechnologySection 组件
- 技术栈展示
- 网格布局
- 动画效果

### NewsSection 组件
- 新闻文章列表
- 分类标签
- 日期和作者信息

### ContactSection 组件
- 联系表单
- 联系信息
- 表单验证

## 新增页面

### 无线音频流媒体解决方案页面 (`/solutions/wireless-streaming`)
基于 [HankSound无线音频流媒体解决方案页面](https://www.HankSound.com/wireless-audio-streaming-solution/) 实现，包含：

- **WirelessStreamingHero**: 页面英雄区域，展示解决方案概述
- **ApplicationsSection**: 应用场景展示（别墅、家庭、度假村、餐厅、户外、购物中心）
- **AdvantagesSection**: 六大优势特点（开发、更新、稳定性、智能家居、成本效益、性能）
- **TechnologiesSection**: 技术栈展示，包含14种音频技术
- **CTASection**: 行动号召部分，包含联系方式和报价请求

### 家庭音频系统产品页面 (`/products/home-audio-system`)
基于 [HankSound家庭音频系统产品页面](https://www.HankSound.com/home-audio-system-products/) 实现，包含：

- **HomeAudioHero**: 页面英雄区域，展示无线音响系统概述和升级方法
- **ProductsShowcase**: 5个主要产品展示（A50放大器、LP10流媒体、HA400网络设备、无线扬声器、amp2.0音频板）
- **WhyChooseUs**: 选择HankSound的6大原因（硬件软件设计、制造、成本效益、专业度、持续改进、创新）

## 样式定制

项目使用 Tailwind CSS 进行样式管理，主要颜色配置：

- Primary: 蓝色系 (#0ea5e9, #0284c7, #0369a1)
- Gray: 灰色系 (#f9fafb 到 #111827)
- 响应式断点: sm, md, lg, xl

## 动画效果

使用 Framer Motion 实现：
- 页面加载动画
- 滚动触发动画
- 悬停效果
- 过渡动画

## 响应式设计

- 移动端优先设计
- 平板和桌面端适配
- 灵活的网格布局
- 自适应字体大小

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License
