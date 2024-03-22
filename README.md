此项目使用 vitejs 开发，不过不了解`vite`也没关系，实现的内容与`vite`并无很大的依赖性。

此项目为广大不同平台使用者考虑，均以`typescript`语言开发，入口文件为`src/pages/content/main.ts`

可将`main.ts`中的内容迁移到自己的业务逻辑，或者直接在自己的`vite`，`vue`，`umi`等项目中去使用。

## 静态地址说明

文件中配置了静态资源地址，`npm run dev`启动项目时，环境默认为`.env`中的本地地址，
如需部署到服务器上，请修改`.env.production`文件，部署环境地址默认作者 oss 地址（非指定网站不可访问）。

## 安装依赖

yarn

```bash
npm install
```

或

```bash
yarn install
```

## 安装环境

仅供参考

```bash
node -v
v18.19.0
```

[vitejs 官网](https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project)

## 启动

```bash
yarn dev
```

```bash
npm run dev
```

## 打包

```bash
npm run build
```

启动成功后默认[访问](http://localhost:5173/) (如端口 5173 被占用可根据控制台提示自行选择地址)

本文通过百度地图 api 实现一个地球地图模型，通过运用精确的`Haversine公式`和`Vincenty公式`，系统能够迅速计算出这两个坐标点之间的实际距离。文中力求使用专业的地理和数学的术语解释计算原理。

源码中的百度 ak 需要自己获取，文中有获取流程

```html
<script type="text/javascript"
        src="//api.map.baidu.com/api?type=webgl&v=1.0&ak=HuHxXgGTCgKqusDO6FqSsC4EUeQqpKGx"></script>
```
