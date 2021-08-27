import{o as e,c as n,a as t}from"./index.391a9efd.js";const s={class:"markdown-body"},o=t('<html><p class="title" style="display:none;">3D堆叠游戏——第一步 基础 初始化游戏 </p></html><html><p class="article_id" style="display:none;">6911909496050843655</p></html><html><p class="target" style="display:none;">typescript|threejs</p></html><html><p class="create_time" style="display:none;">1609311480000</p></html><html><p class="update_time" style="display:none;">1609311480002</p></html><html><p class="cover_image" style="display:none;">https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ebc74ac31344fd280f9c0ae4a5ec5f9~tplv-k3u1fbpfcp-watermark.image</p></html><html><p class="brief_content" style="display:none;">应用技术栈webpackthreejstypescript第一步，准备工作（思考游戏玩法，绘制思维导图，搭建项目，创建场景）文件目录下面是主要的功能以及场景元素的选择来自灵魂画师绘制的构图首先创建场景</p></html><h3>应用技术栈</h3><p>webpack</p><p>threejs</p><p>typescript</p><h3>第一步，准备工作（思考游戏玩法，绘制思维导图，搭建项目，创建场景）</h3><p>文件目录</p><pre><code>│  bash.exe.stackdump\n│  package-lock.json\n│  package.json\n│  README.md\n│  tsconfig.json\n│  webpack.config.js\n│  webpack.plugins.js\n│\n└─src\n    ├─html\n    │      index.html  // html\n    │\n    └─screen\n            index.ts  // ts入口文件\n</code></pre><p>下面是主要的功能以及场景元素的选择</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f99ec42767754d5cb1b2d31d21fa6662~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>来自灵魂画师绘制的构图</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7ebc74ac31344fd280f9c0ae4a5ec5f9~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3>首先创建场景以及其他必要元素</h3><p>一堆代码</p><pre><code class="language-typescript">const THREE = require(\\&quot;three\\&quot;);\nimport { OrbitControls } from \\&quot;../../node_modules/three/examples/jsm/controls/OrbitControls\\&quot;;\n\nclass CreateScene {\n    // 屏幕宽度\n  width: number = window.innerWidth;\n  // 屏幕高度\n  height: number = window.innerHeight;\n  // 3d容器\n  container: any = document.body;\n  frustumSize = 2000;\n  scene // 场景\n  renderer  // 渲染器\n  camera // 相机\n  controls // 控制器 \n  constructor() {\n      this.createScene()\n    this.createCamera()\n    this.createRenderer()\n    this.createControls()\n    this.render()\n    this.axesHelper(100)\n    this.createBackground()\n    // 监听屏幕尺寸变化\n    window.addEventListener(\\&quot;resize\\&quot;, this.onWindowResized.bind(this), false);\n  }\n  // 创建场景\n  createScene(): void {\n      this.scene = new THREE.Scene();\n  }\n  // 创建渲染器\n  createRenderer(): void {\n      this.renderer = new THREE.WebGLRenderer();\n    this.renderer.setSize(this.width, this.height);\n    document.body.appendChild(this.renderer.domElement);\n  }\n  // 创建相机\n  createCamera(): void {\n      this.camera = new THREE.OrthographicCamera(this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, this.frustumSize);\n    this.camera.zoom = 3\n    console.log(this.camera)\n    this.camera.position.set(200, 250, 200)\n    this.scene.add(this.camera);\n    this.camera.updateProjectionMatrix()\n  }\n  // 创建控制器\n  createControls(): void {\n      this.controls = new OrbitControls(\n        this.camera,\n      this.renderer.domElement\n    );\n    this.controls.screenSpacePanning = true\n    this.controls.target = new THREE.Vector3(0, 100, 0)\n\n  }\n  // 渲染动画\n  animate(): void {\n      requestAnimationFrame(this.render.bind(this));\n  }\n  // 渲染\n  render(): void {\n      this.animate()\n    this.renderer.render(this.scene, this.camera);\n    this.controls.update();\n\n  }\n  // 创建坐标轴辅助线\n  axesHelper(len: number): void {\n      const axesHelper = new THREE.AxesHelper(len);\n    this.scene.add(axesHelper);\n  }\n  // 监听屏幕改变\n  onWindowResized() {\n      this.camera.left = this.width / - 2;\n    this.camera.right = this.width / 2;\n    this.camera.top = this.height / 2;\n    this.camera.bottom = this.height / - 2;\n    this.camera.updateProjectionMatrix();\n    this.width = window.innerWidth\n    this.height = window.innerHeight\n    this.renderer.setSize(this.width, this.height);\n  }\n  // 创建天空背景\n  createBackground(): any {\n      const canvas = document.createElement(&#39;canvas&#39;);\n    canvas.width = 1;\n    canvas.height = 32;\n\n    const context = canvas.getContext(&#39;2d&#39;);\n    const gradient = context.createLinearGradient(0, 0, 0, 32);\n    gradient.addColorStop(0.0, &#39;#014a84&#39;);\n    gradient.addColorStop(0.5, &#39;#0561a0&#39;);\n    gradient.addColorStop(1.0, &#39;#437ab6&#39;);\n    context.fillStyle = gradient;\n    context.fillRect(0, 0, 1, 32);\n\n    const sky = new THREE.Mesh(\n        new THREE.SphereBufferGeometry(1000),\n      new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(canvas), side: THREE.BackSide })\n    );\n    this.scene.add(sky);\n  }\n\n}\nexport { CreateScene, THREE }\n</code></pre><p>然后在<code>screen/index.ts</code> 入口文件直接引用并实例化</p><pre><code class="language-typescript">import {CreateScene,THREE} from &#39;../createScene/index&#39;\nconst _this = new CreateScene()\n</code></pre><p>创建后的场景如下</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9f37f8f017d24477b679ec95cad37cc2~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3>第二步 创建底座以及第一个可以移动的主角</h3><p>创建主角</p><pre><code class="language-typescript">initFloor() {\n      const w: number = 30\n    const h: number = 50\n    const l: number = 30\n    const floorParams = {\n        w: w,\n      h: h,\n      l: l,\n      x: w / 2,\n      y: h / 2,\n      z: l / 2\n    }\n    this.floorCube = createCube(floorParams)\n    this.floorGroup.add(this.floorCube)\n  }\n</code></pre><p><code>createCube</code> 是封装的一个方法，主要功能创建方块，包括底板和主角</p><pre><code class="language-typescript">// 创建方块时候需要的参数\ninterface cubeParams {\n    w: number // 宽度  对应X轴\n  h: number // 高度  对应Y轴\n  l: number // 长度  对应Z轴\n  x: number // x轴位置\n  y: number // y轴位置\n  z: number // z轴位置\n}\n// 创建方块\nexport function createCube(p: cubeParams): any {\n    const geometry = new THREE.BoxGeometry(p.w, p.h, p.l);\n  const material = new THREE.MeshNormalMaterial();\n  const cube = new THREE.Mesh(geometry, material);\n  cube.position.set(p.x, p.y, p.z)\n  return cube\n}\n</code></pre><p>创建完成后</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/019c1b188003405ca1234dc8c48a440d~tplv-k3u1fbpfcp-watermark.image" alt=""></p><h3>接下来需要创建主角（可移动方块）</h3><p>需要获取的信息为底板的高度，底板的顶点信息 底板的位置信息，过往主角都将视为底板内容，</p><p>所以底板不直接添加到<code>scene</code>场景内，而是创建一个<code>group</code></p><p>可以通过封装好的<code>getBox</code>方法获取size</p><p>封装好的getBox方法</p><pre><code>const THREE = require(\\&quot;three\\&quot;);\nfunction getBox(mesh: any) {\n    let b = new THREE.Box3();\n  b.expandByObject(mesh);\n  return b\n\n}\n// 获取尺寸\n// 模型，vector3\nexport function getSize(mesh: any, v3:any) {\n    getBox(mesh).getSize(v3);\n}\n// 获取世界坐标\nexport function getPosition(mesh:any, v3: any) {\n    mesh.getWorldPosition(v3)\n}\n</code></pre><h3>创建主角并设置位置信息</h3><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ae356c65997145548fa2627cac74bfc7~tplv-k3u1fbpfcp-watermark.image" alt=""></p><pre><code class="language-typescript">createlead() {\n      const size = new THREE.Vector3()\n    const mesh = this.floorGroup\n    // 获取尺寸\n    getSize(mesh, size)\n    const position = new THREE.Vector3()\n    // 获取底板的位置 默认应该都是0\n    getPosition(mesh, position)\n    const gy = position.y // 底板的Y值\n    const y = size.y + gy + this.leadY / 2 // 主角的Y值\n    // 设定第奇数个主角从z轴的负方向来，第偶数个主角从X轴方向来 \n    // 需要一个主角计数器，同样可以用来计算分数\n    // 起始点距离底板30\n    // 主角初始位置\n    const flag = this.leadCount % 2 === 0 // 是否是偶数主角\n    // x 起始点\n    let sx = (flag ? -this.startPoint : 0) + this.size / 2\n    // z 起始点\n    let sz = (flag ? 0 : -this.startPoint) + this.size / 2\n    // 创建一个主角\n    const leadParam = {\n        w: this.size,\n      h: this.leadY,\n      l: this.size,\n      x: sx,\n      y: y,\n      z: sz\n    }\n    const leadCube = createCube(leadParam)\n    this.scene.add(leadCube)\n    // 创建角色后计数器自增1\n    this.leadCount++\n  }\n</code></pre><h3>多调用几次便可以从两侧创建主角</h3><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7916a147a2e347f2a3a225ae85a4eb1c~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>下面是initGame代码 又是一堆代码 汗!!!</p><pre><code>const THREE = require(\\&quot;three\\&quot;);\nimport { createCube } from &#39;../utils/tools&#39;\nimport { getSize, getPosition } from &#39;../utils/getBox&#39;\nclass CreateGame {\n    scene: any\n  floorCube: any // 初始底板\n  floorGroup: any // 底板组\n  size: number = 30 // 主角宽度和长度\n  leadY: number = 5 // 主角高度\n  leadCount: number = 0 // 计数器\n  startPoint: number = 60 // 主角起始位置 x或z\n  leadInterval: any = null // 循环\n  constructor(element: any) {\n      this.scene = element.scene\n    this.floorGroup = new THREE.Group()\n    this.scene.add(this.floorGroup)\n    this.initFloor()\n  }\n  initFloor() {\n      const w: number = this.size\n    const h: number = 50\n    const l: number = this.size\n    const floorParams = {\n        w: w,\n      h: h,\n      l: l,\n      x: w / 2,\n      y: h / 2,\n      z: l / 2\n    }\n    this.floorCube = createCube(floorParams)\n    this.floorGroup.add(this.floorCube)\n    this.floorGroup.updateMatrix()\n  }\n  createlead() {\n      const size = new THREE.Vector3()\n    const mesh = this.floorGroup\n    // 获取尺寸\n    getSize(mesh, size)\n    const position = new THREE.Vector3()\n    // 获取底板的位置 默认应该都是0\n    getPosition(mesh, position)\n    const gy = position.y // 底板的Y值\n    const y = size.y + gy + this.leadY / 2 // 主角的Y值\n    // 设定第奇数个主角从z轴的负方向来，第偶数个主角从X轴方向来 \n    // 需要一个主角计数器，同样可以用来计算分数\n    // 起始点距离底板30\n    // 主角初始位置\n    const flag:boolean = this.leadCount % 2 === 0 // 是否是偶数主角\n    // x 起始点\n    let sx:number = (flag ? -this.startPoint : 0) + this.size / 2\n    // z 起始点\n    let sz:number = (flag ? 0 : -this.startPoint) + this.size / 2\n    // 创建一个主角\n    const leadParam = {\n        w: this.size,\n      h: this.leadY,\n      l: this.size,\n      x: sx,\n      y: y,\n      z: sz\n    }\n    const leadCube = createCube(leadParam)\n    this.floorGroup.add(leadCube)\n    // 创建角色后计数器自增1\n    this.leadCount++\n  }\n}\n\nexport { CreateGame }\n</code></pre><h3>游戏共分为4个步骤来写文章</h3><p>第一步 基础 初始化游戏</p><p>第二步 <a href="https://juejin.cn/post/6911947391369216013">控制 控制主角移动以及停止</a></p><p><a href="https://juejin.cn/post/6912306652632842247">第三步 切割 将主角切割为底板内部方块，底板外部方块 外部方块进行自由落体</a></p><p><a href="https://juejin.cn/post/6912362707928907790/">第四步 记分器、加载中等其他功能</a> &quot;</p>',50),i={expose:[],setup:t=>(defineExpose({frontmatter:{}}),(t,i)=>(e(),n("div",s,[o])))};export default i;
