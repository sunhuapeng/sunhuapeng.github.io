import{o as e,c as n,a as t}from"./index.0b447cd2.js";const s={class:"markdown-body"},o=[t('<html><p class="title" style="display:none;">3D堆叠游戏——第二步 控制 控制主角移动以及停止 </p></html><html><p class="article_id" style="display:none;">6911947391369216013</p></html><html><p class="target" style="display:none;">typescript|threejs</p></html><html><p class="create_time" style="display:none;">1609313161000</p></html><html><p class="update_time" style="display:none;">1609313161001</p></html><html><p class="cover_image" style="display:none;">https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0f7978a4fa74feabb197bc35949c979~tplv-k3u1fbpfcp-watermark.image</p></html><html><p class="brief_content" style="display:none;">在上一篇文章中制作了游戏的第一步创建基础这一篇将制作游戏第二步，控制主角主角移动主要使用TWEEN作为动画引擎因为不是介绍tweenjs所以这里不提基础用法，如果有需要可以留言，专门研究一下这个是封装</p></html><p>在<a href="https://juejin.cn/post/6911909496050843655">上一篇</a>文章中制作了游戏的第一步创建基础 这一篇将制作游戏第二步，控制主角</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f0f7978a4fa74feabb197bc35949c979~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>主角移动主要使用<code>TWEEN</code> 作为动画引擎</p><p>因为不是介绍tweenjs所以这里不提基础用法，如果有需要可以留言，专门研究一下</p><p>这个是封装好的动画</p><pre><code class="language-typescript">const TWEEN = require(\\&quot;@tweenjs/tween.js\\&quot;);\n\nexport class Animate {\n    tween\n  constructor(mesh:any, e:any, t:number) {\n      this.tween = new TWEEN.Tween(mesh.position)\n    this.tween.to(e, t)\n    this.tween.start()\n  }\n}\n\n</code></pre><p>很简单，从起始vector3向量到结束vector3向量</p><p>调用动画还需要在<code>render</code>方法中对动画进行更新</p><pre><code>// 渲染\nrender(): void {\n    this.animate()\n  this.renderer.render(this.scene, this.camera);\n  this.controls.update();\n  TWEEN.update();\n}\n</code></pre><h3>控制主角动画</h3><p>参数为起始点为主角<code>position</code> 终点为计算后结果，运动时间 <code>T:number = 5000 // 主角运动时间，随着高度增加而衰减</code></p><pre><code class="language-typescript"> // 控制主角\nleadHandle() {\n    // 控制移动\n  const lead = this.leadCube\n  // 动画起始点\n  const start = lead.position\n  let ex = lead.position.x\n  let ez = lead.position.z\n  ex = ex === this.size / 2 ? this.size / 2 : (Math.abs(ex) + this.offset)\n  ez = ez === this.size / 2 ? this.size / 2 : (Math.abs(ez) + this.offset)\n  // 动画结束点\n  const end = new THREE.Vector3(ex, start.y, ez)\n  console.log(start, end)\n  // 开启主角动画\n  // 每增加一层减100毫秒 难度增加\n  const t = Math.max(this.T - this.leadCount * 100, 1000)\n  this.tween = new Animate(this.leadCube, end, t)\n}\n</code></pre><blockquote><p>操作控制</p></blockquote><p>游戏使用空格控制主角暂停和其他操作</p><p>监听一下<code>keydown</code>事件</p><pre><code class="language-typescript">window.addEventListener(&#39;keydown&#39;, this.leadStop.bind(this))\n</code></pre><p>主角停止事件</p><pre><code class="language-typescript">// 主角停止\nleadStop(event) {\n    // 判断是否点击空格\n  if (event.keyCode === 32) {\n      if (this.tween) {\n        // 暂停动画\n      this.tween.tween.stop()\n      this.tween = null\n      // 生成下一个主角\n      this.createlead()\n    }\n  }\n}\n</code></pre><p>目前游戏效果是这样的</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/61a022df3d2b469aa5f7ad5cf4039200~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>目前生成下一个角色只有在点击空格之后，所以还需要一个是主角运动结束 再生成下一个主角</p><pre><code class="language-typescript">this.tween.tween.onComplete(this.leadOperation.bind(this))\n</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/37831c5f142d4ec9888b47492ac90db9~tplv-k3u1fbpfcp-watermark.image" alt=""></p><p>leadOperation方法</p><pre><code class="language-typescript">// 对主角进行处理，包括生成新的主角，裁切主角，重绘底板等\nleadOperation(){\n    // 生成下一个主角\n  this.createlead()\n}\n</code></pre><p>之后的文章会写到裁切功能，自由落体，游戏结束等</p><h3>initGame目前完整代码</h3><pre><code class="language-typescript">const THREE = require(\\&quot;three\\&quot;);\nimport { createCube } from &#39;../utils/tools&#39;\nimport { getSize, getPosition } from &#39;../utils/getBox&#39;\n// 引入封装好的动画\nimport { Animate } from &#39;../utils/animate&#39;\n\nclass CreateGame {\n    scene: any\n  floorCube: any // 初始底板\n  floorGroup: any // 底板组\n  size: number = 30 // 主角宽度和长度\n  leadY: number = 5 // 主角高度\n  leadCount: number = 0 // 计数器\n  startPoint: number = 60 // 主角起始位置 x或z\n  leadInterval: any = null // 循环\n  leadCube: any = null // 主角\n  tween: any = null // 动画\n  offset: number = 40 // 主角起始位置和终点位置偏移量\n  T:number = 500 // 主角运动时间，随着高度增加而衰减\n  constructor(element: any) {\n      this.scene = element.scene\n    this.floorGroup = new THREE.Group()\n    this.scene.add(this.floorGroup)\n    this.initFloor()\n    window.addEventListener(&#39;keydown&#39;, this.leadStop.bind(this))\n  }\n  initFloor() {\n      const w: number = this.size\n    const h: number = 50\n    const l: number = this.size\n    const floorParams = {\n        w: w,\n      h: h,\n      l: l,\n      x: w / 2,\n      y: h / 2,\n      z: l / 2\n    }\n    this.floorCube = createCube(floorParams)\n    this.floorGroup.add(this.floorCube)\n    this.floorGroup.updateMatrix()\n  }\n  createlead() {\n      const size = new THREE.Vector3()\n    const mesh = this.floorGroup\n    // 获取尺寸\n    getSize(mesh, size)\n    const position = new THREE.Vector3()\n    // 获取底板的位置 默认应该都是0\n    getPosition(mesh, position)\n    const gy = position.y // 底板的Y值\n    const y = size.y + gy + this.leadY / 2 // 主角的Y值\n    // 设定第奇数个主角从z轴的负方向来，第偶数个主角从X轴方向来 \n    // 需要一个主角计数器，同样可以用来计算分数\n    // 起始点距离底板30\n    // 主角初始位置\n    const flag: boolean = this.leadCount % 2 === 0 // 是否是偶数主角\n    // x 起始点\n    let sx: number = (flag ? -this.startPoint - this.offset : 0) + this.size / 2\n    // z 起始点\n    let sz: number = (flag ? 0 : -this.startPoint - this.offset) + this.size / 2\n    // 创建一个主角\n    const leadParam = {\n        w: this.size,\n      h: this.leadY,\n      l: this.size,\n      x: sx,\n      y,\n      z: sz\n    }\n    this.leadCube = createCube(leadParam)\n    this.floorGroup.add(this.leadCube)\n    // 创建角色后计数器自增1\n    this.leadCount++\n    // 开始控制主角\n    // const startVector3 = new THREE.Vector3(sx,y,sz)\n    this.leadHandle()\n  }\n  // 控制主角\n  leadHandle():void {\n      // 控制移动\n    const lead = this.leadCube\n    // 动画起始点\n    const start = lead.position\n    let ex = lead.position.x\n    let ez = lead.position.z\n    ex = ex === this.size / 2 ? this.size / 2 : (Math.abs(ex) + this.offset)\n    ez = ez === this.size / 2 ? this.size / 2 : (Math.abs(ez) + this.offset)\n    // 动画结束点\n    const end = new THREE.Vector3(ex, start.y, ez)\n    console.log(start, end)\n    // 开启主角动画\n    // 每增加一层减100毫秒 难度增加\n    const t = Math.max(this.T - this.leadCount * 100, 1000)\n    this.tween = new Animate(this.leadCube, end, t)\n\n    if(this.tween) {\n        console.log(this.tween.tween)\n      this.tween.tween.onComplete(this.leadOperation.bind(this))\n    }\n  }\n  // 主角停止\n  leadStop(event):void {\n      // 判断是否点击空格\n    if (event.keyCode === 32) {\n        if (this.tween) {\n          // 暂停动画\n        this.tween.tween.stop()\n        this.tween = null\n        this.leadOperation()\n      }\n    }\n  }\n\n  // 对主角进行处理，包括生成新的主角，裁切主角，重绘底板等\n  leadOperation(){\n      // 生成下一个主角\n    this.createlead()\n    \n  }\n}\n\nexport { CreateGame }\n</code></pre><p>代码可能有点粗糙，还望指正</p><p><a href="https://juejin.cn/post/6911909496050843655">3D堆叠游戏——第一步 基础 初始化游戏</a> &quot;</p>',37)],i={__name:"3D堆叠游戏——第二步 控制 控制主角移动以及停止",setup:(t,{expose:i})=>(i({frontmatter:{}}),(t,i)=>(e(),n("div",s,o)))};export{i as default};
