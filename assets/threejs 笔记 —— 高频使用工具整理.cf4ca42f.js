import{o as s,c as a,a as n}from"./index.391a9efd.js";const l={class:"markdown-body"},p=n('<html><p class="title" style="display:none;">threejs 笔记 —— 高频使用工具整理 </p></html><html><p class="article_id" style="display:none;">6844904145015570446</p></html><html><p class="target" style="display:none;">前端|threejs</p></html><html><p class="create_time" style="display:none;">1588226835000</p></html><html><p class="update_time" style="display:none;">1588226835000</p></html><html><p class="cover_image" style="display:none;">https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/30/171c999724ce0f0e~tplv-t2oaga2asx-watermark.image</p></html><html><p class="brief_content" style="display:none;">访问模型信息加载器射线点射线屏幕坐标转世界坐标应用效果展示世界坐标转屏幕坐标效果展示</p></html><h3 class="heading">访问模型信息</h3><pre><code class="hljs javascript" lang="javascript"><span class="hljs-keyword">const</span> THREE = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;three&quot;</span>);<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">GetBox</span> </span>{  public box: any  <span class="hljs-keyword">constructor</span>(box) {    <span class="hljs-keyword">this</span>.box = box;  }  <span class="hljs-comment">// 返回box3</span>  getBox() {    <span class="hljs-keyword">let</span> b = <span class="hljs-keyword">new</span> THREE.Box3();    b.expandByObject(<span class="hljs-keyword">this</span>.box);    <span class="hljs-keyword">return</span> b;  }  <span class="hljs-comment">// 获取世界中心坐标</span>  getWp(v3) {    <span class="hljs-keyword">this</span>.box.parent.updateMatrixWorld(<span class="hljs-literal">true</span>);    <span class="hljs-keyword">this</span>.box.getWorldPosition(v3)  }  <span class="hljs-comment">// 返回中心点坐标</span>  getCenter(c) {    <span class="hljs-keyword">this</span>.getBox().getCenter(c);  }  <span class="hljs-comment">// 如果中心点没在模型上，返回距离中心点最近的顶点</span>  getRayCenter(c) {    <span class="hljs-keyword">this</span>.getCenter(c)    <span class="hljs-comment">// 获取中心点</span>    <span class="hljs-keyword">let</span> wd = <span class="hljs-keyword">new</span> THREE.Vector3()    <span class="hljs-keyword">this</span>.getWp(wd) <span class="hljs-comment">// 获取世界坐标</span>    <span class="hljs-keyword">const</span> size = <span class="hljs-keyword">new</span> THREE.Vector3()    <span class="hljs-keyword">this</span>.getSize(size)  <span class="hljs-comment">// 获取模型尺寸</span>    <span class="hljs-keyword">const</span> star = <span class="hljs-keyword">new</span> THREE.Vector3(c.x, c.y + size.y, c.z)   <span class="hljs-comment">// 设置射线起点</span>    <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> THREE.Vector3(c.x, c.y - size.y, c.z) <span class="hljs-comment">// 设置射线终点</span>    <span class="hljs-keyword">const</span> v3 = <span class="hljs-keyword">new</span> THREE.Vector3()    <span class="hljs-keyword">var</span> raycaster = <span class="hljs-keyword">new</span> THREE.Raycaster(star, end); <span class="hljs-comment">// 创建一个正向射线</span>    <span class="hljs-keyword">var</span> intersects = raycaster.intersectObjects([<span class="hljs-keyword">this</span>.box]);  <span class="hljs-comment">// 设置相交物体</span>    <span class="hljs-keyword">if</span> (intersects.length === <span class="hljs-number">0</span>) { <span class="hljs-comment">// 判断相交物体数量是否为0，如果不为0 则中心点在模型内</span>      <span class="hljs-keyword">let</span> minLength: number = <span class="hljs-number">0</span>      <span class="hljs-keyword">let</span> minV3: any = <span class="hljs-keyword">new</span> THREE.Vector3()      <span class="hljs-keyword">let</span> position = <span class="hljs-keyword">this</span>.box.geometry.getAttribute(<span class="hljs-string">&#39;position&#39;</span>)      <span class="hljs-keyword">const</span> pArr = position.array <span class="hljs-comment">// 所有顶点集合</span>      <span class="hljs-keyword">const</span> pI = position.count <span class="hljs-comment">// 顶点数量</span>      <span class="hljs-keyword">const</span> itemsize = position.itemSize  <span class="hljs-comment">// </span>      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; pI; i++) {        <span class="hljs-keyword">const</span> limit = i * itemsize  <span class="hljs-comment">// 每个顶点都是一个三元组。</span>        v3.fromArray(pArr, limit)        v3.add(wd)  <span class="hljs-comment">// 世界坐标向量添加至顶点，确定顶点具体位置</span>        <span class="hljs-keyword">let</span> p3 = c.clone().sub(v3); <span class="hljs-comment">//两点之间的中心点</span>        <span class="hljs-keyword">let</span> l = p3.length(); <span class="hljs-comment">// 两点之间的距离</span>        <span class="hljs-keyword">if</span> (i == <span class="hljs-number">0</span>) {          minLength = l          minV3.copy(v3)        } <span class="hljs-keyword">else</span> {          <span class="hljs-keyword">if</span> (minLength &gt; l) {            minLength = l            minV3.copy(v3)          }        }      }      c.copy(minV3)    }  }  <span class="hljs-comment">// 返回尺寸</span>  getSize(size) {    <span class="hljs-keyword">this</span>.getBox().getSize(size);  }  <span class="hljs-comment">// 矩形表面积</span>  areaSize(): number {    <span class="hljs-keyword">let</span> p = <span class="hljs-keyword">new</span> THREE.Vector3()    <span class="hljs-keyword">this</span>.getSize(p)    <span class="hljs-keyword">let</span> a = p.x,      b = p.z,      s = a * b;    <span class="hljs-keyword">return</span> s;  }  <span class="hljs-comment">// 返回vector3是否在当前box3内</span>  <span class="hljs-keyword">in</span>(p) {    <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.getBox().containsPoint(p);  }}</code></pre><h3 class="heading">加载器</h3><pre><code class="hljs javascript" lang="javascript"><span class="hljs-comment">/** * @desc 加载器 */</span><span class="hljs-keyword">import</span> { GLTFLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../node_modules/three/examples/jsm/loaders/GLTFLoader.js&quot;</span>;<span class="hljs-keyword">import</span> { DRACOLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../node_modules/three/examples/jsm/loaders/DRACOLoader.js&quot;</span>;<span class="hljs-keyword">import</span> { SVGLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../node_modules/three/examples/jsm/loaders/SVGLoader.js&quot;</span>;<span class="hljs-keyword">import</span> { FBXLoader } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;../../node_modules/three/examples/jsm/loaders/FBXLoader.js&quot;</span>;interface Loader {  <span class="hljs-attr">url</span>: string  model: any  loader: any  create(url: string): <span class="hljs-keyword">void</span>}<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LoadGltf</span> <span class="hljs-title">implements</span> <span class="hljs-title">Loader</span> </span>{  public loader: any | <span class="hljs-literal">undefined</span>  public url: string | <span class="hljs-literal">undefined</span>  public model: any | <span class="hljs-literal">undefined</span>  <span class="hljs-keyword">constructor</span>() {  }  create(url: string) {    <span class="hljs-keyword">this</span>.url = url    <span class="hljs-keyword">this</span>.loader = <span class="hljs-keyword">new</span> GLTFLoader();    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(      <span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {        <span class="hljs-keyword">this</span>.loader.setDRACOLoader(<span class="hljs-keyword">new</span> DRACOLoader());        <span class="hljs-keyword">this</span>.loader.load(<span class="hljs-keyword">this</span>.url, (gltf: any) =&gt; {          <span class="hljs-keyword">this</span>.model = gltf.scene          resolve(<span class="hljs-keyword">this</span>.model)        });      }    )  }}<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LoadSvg</span> <span class="hljs-title">implements</span> <span class="hljs-title">Loader</span> </span>{  public loader: any | <span class="hljs-literal">undefined</span>  public url: string | <span class="hljs-literal">undefined</span>  public model: any | <span class="hljs-literal">undefined</span>  <span class="hljs-keyword">constructor</span>() {  }  create(url: string) {    <span class="hljs-keyword">this</span>.url = url    <span class="hljs-keyword">this</span>.loader = <span class="hljs-keyword">new</span> SVGLoader();    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(      <span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {        <span class="hljs-keyword">this</span>.loader.load(<span class="hljs-keyword">this</span>.url, (data: any): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {          resolve(data)        })      }    )  }}<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">LoadFbx</span> <span class="hljs-title">implements</span> <span class="hljs-title">Loader</span> </span>{  public loader: any | <span class="hljs-literal">undefined</span>  public url: string | <span class="hljs-literal">undefined</span>  public model: any | <span class="hljs-literal">undefined</span>  <span class="hljs-keyword">constructor</span>() {  }  create(url: string) {    <span class="hljs-keyword">this</span>.url = url    <span class="hljs-keyword">this</span>.loader = <span class="hljs-keyword">new</span> FBXLoader();    <span class="hljs-keyword">return</span> <span class="hljs-keyword">new</span> <span class="hljs-built_in">Promise</span>(      <span class="hljs-function">(<span class="hljs-params">resolve</span>) =&gt;</span> {        <span class="hljs-keyword">this</span>.loader.load(<span class="hljs-keyword">this</span>.url, (data: any): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {          resolve(data)        })      }    )  }}<span class="hljs-keyword">export</span> {  LoadGltf,  LoadSvg,  LoadFbx}</code></pre><h3 class="heading">射线</h3><h5 class="heading">点射线</h5><pre><code class="hljs javascript" lang="javascript"><span class="hljs-keyword">import</span> GetBox <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;./getBox&quot;</span>;<span class="hljs-keyword">const</span> THREE = <span class="hljs-built_in">require</span>(<span class="hljs-string">&quot;three&quot;</span>);<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Raycaster</span> </span>{  raycaster: any  intersects: any  <span class="hljs-comment">// 检测点是否在模型范围内</span>  pointRay(v3, child) {    <span class="hljs-keyword">if</span> (v3.isVector3) {      <span class="hljs-keyword">let</span> nv3 = v3.clone() <span class="hljs-comment">// 克隆一个新的位置信息，这样不会影响传入的三维向量的值</span>      <span class="hljs-keyword">let</span> b = <span class="hljs-keyword">new</span> THREE.Box3();      b.expandByObject(child); <span class="hljs-comment">// 设置模型的包围盒</span>      <span class="hljs-keyword">const</span> star = nv3.clone() <span class="hljs-comment">// 设置射线的起点</span>      <span class="hljs-keyword">const</span> end = nv3.clone().normalize() <span class="hljs-comment">// 将起点转为单位向量</span>      <span class="hljs-keyword">this</span>.raycaster = <span class="hljs-keyword">new</span> THREE.Raycaster(star, end); <span class="hljs-comment">// 创建一个正向射线</span>      <span class="hljs-keyword">if</span> (child.isGroup) <span class="hljs-keyword">this</span>.intersects = <span class="hljs-keyword">this</span>.raycaster.intersectObjects(child.children, <span class="hljs-literal">true</span>);      <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (child.isMesh) <span class="hljs-keyword">this</span>.intersects = <span class="hljs-keyword">this</span>.raycaster.intersectObjects([child]);      <span class="hljs-keyword">return</span> <span class="hljs-keyword">this</span>.intersects    }  }  <span class="hljs-comment">// 检测两个模型是否相交</span>meshRay(mesh, child) {    <span class="hljs-keyword">let</span> boom = <span class="hljs-number">0</span>    <span class="hljs-keyword">let</span> box3 = <span class="hljs-keyword">new</span> GetBox(mesh)    <span class="hljs-keyword">let</span> worldPosition = <span class="hljs-keyword">new</span> THREE.Vector3()    box3.getWp(worldPosition)        <span class="hljs-keyword">if</span> (mesh.geometry.isGeometry) {      <span class="hljs-keyword">let</span> v3s = mesh.geometry.vertices      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; v3s.length; i++) {        <span class="hljs-keyword">let</span> v3 = v3s[i].clone()        <span class="hljs-keyword">let</span> nv3 = v3.add(worldPosition)        <span class="hljs-keyword">let</span> len = <span class="hljs-keyword">this</span>.pointRay(nv3, child)        <span class="hljs-keyword">if</span> (len.length !== <span class="hljs-number">0</span>) {          boom++        }      }    } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (mesh.geometry.isBufferGeometry) {      <span class="hljs-keyword">let</span> position = mesh.geometry.getAttribute(<span class="hljs-string">&#39;position&#39;</span>)      <span class="hljs-keyword">let</span> pcount = position.count <span class="hljs-comment">// 材质一共有多少个点位信息</span>      <span class="hljs-keyword">let</span> v3 = <span class="hljs-keyword">new</span> THREE.Vector3()      <span class="hljs-keyword">for</span> (<span class="hljs-keyword">let</span> i = <span class="hljs-number">0</span>; i &lt; pcount; i++) {        v3.fromBufferAttribute(position, i)        <span class="hljs-keyword">let</span> nv3 = v3.add(worldPosition)        <span class="hljs-keyword">let</span> len = <span class="hljs-keyword">this</span>.pointRay(nv3, child)        <span class="hljs-keyword">if</span> (len.length !== <span class="hljs-number">0</span>) {          boom++        }      }    }    <span class="hljs-keyword">if</span>(boom) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>        <span class="hljs-keyword">else</span> <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>    }}</code></pre><h3 class="heading">屏幕坐标转世界坐标</h3><pre><code class="hljs javascript" lang="javascript">vector2to3(point, v3?) {    <span class="hljs-keyword">let</span> v2Arr = [      (point[<span class="hljs-number">0</span>] / <span class="hljs-built_in">window</span>.innerWidth) * <span class="hljs-number">2</span> - <span class="hljs-number">1</span>,      -(point[<span class="hljs-number">1</span>] / <span class="hljs-built_in">window</span>.innerHeight) * <span class="hljs-number">2</span> + <span class="hljs-number">1</span>    ];    <span class="hljs-comment">// 通过射线 将2D转为3D</span>    <span class="hljs-keyword">var</span> raycaster = <span class="hljs-keyword">new</span> THREE.Raycaster();    <span class="hljs-keyword">let</span> v2 = <span class="hljs-keyword">new</span> THREE.Vector2(v2Arr[<span class="hljs-number">0</span>], v2Arr[<span class="hljs-number">1</span>]);    raycaster.setFromCamera(v2, <span class="hljs-keyword">this</span>.camera);    <span class="hljs-keyword">this</span>.camera.updateProjectionMatrix()    <span class="hljs-comment">// 获得最终的3D位置</span>    <span class="hljs-keyword">let</span> eV3 = raycaster.ray.origin;    <span class="hljs-keyword">if</span>(v3) v3.copy(eV3)    <span class="hljs-keyword">return</span> eV3}</code></pre><h5 class="heading">应用</h5><pre><code class="hljs javascript" lang="javascript"><span class="hljs-keyword">this</span>.div = <span class="hljs-built_in">document</span>.createElement(<span class="hljs-string">&#39;div&#39;</span>)<span class="hljs-keyword">this</span>.div.setAttribute(<span class="hljs-string">&#39;class&#39;</span>, <span class="hljs-string">&#39;box&#39;</span>)<span class="hljs-built_in">document</span>.body.appendChild(<span class="hljs-keyword">this</span>.div)<span class="hljs-keyword">this</span>.box(<span class="hljs-keyword">new</span> THREE.Vector3())</code></pre><pre><code class="hljs javascript" lang="javascript">box(v3) {    <span class="hljs-keyword">var</span> geometry = <span class="hljs-keyword">new</span> THREE.BoxGeometry(<span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>);    <span class="hljs-keyword">var</span> material = <span class="hljs-keyword">new</span> THREE.MeshBasicMaterial({ <span class="hljs-attr">color</span>: <span class="hljs-number">0xff0000</span> });    <span class="hljs-keyword">var</span> cube = <span class="hljs-keyword">new</span> THREE.Mesh(geometry, material);    cube.position.copy(v3)    <span class="hljs-keyword">this</span>.cube = cube    <span class="hljs-keyword">this</span>.scene.add(<span class="hljs-keyword">this</span>.cube )}</code></pre><pre><code class="hljs css" lang="css"><span class="hljs-selector-class">.box</span>{    <span class="hljs-attribute">width</span>:<span class="hljs-number">20px</span>;    <span class="hljs-attribute">height</span>: <span class="hljs-number">20px</span>;    <span class="hljs-attribute">background</span>: <span class="hljs-number">#ff00ff</span>;    <span class="hljs-attribute">position</span>: fixed;    <span class="hljs-attribute">z-index</span>: <span class="hljs-number">999</span>;    <span class="hljs-attribute">left</span>:<span class="hljs-number">600px</span>;    <span class="hljs-attribute">top</span>: <span class="hljs-number">600px</span>}</code></pre><pre><code class="hljs javascript" lang="javascript"><span class="hljs-comment">// render渲染函数内</span><span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.cube &amp;&amp; <span class="hljs-keyword">this</span>.div) {  <span class="hljs-keyword">let</span> x = <span class="hljs-keyword">this</span>.div.offsetLeft  <span class="hljs-keyword">let</span> y = <span class="hljs-keyword">this</span>.div.offsetTop  <span class="hljs-keyword">let</span> point1 = [x, y]  <span class="hljs-keyword">let</span> v3 = <span class="hljs-keyword">new</span> THREE.Vector3()  <span class="hljs-keyword">this</span>.vector2to3(point1, v3)  v3.addScalar(<span class="hljs-number">-10</span>)  <span class="hljs-keyword">this</span>.cube.position.copy(v3)}</code></pre><h5 class="heading">效果展示</h5><p></p><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/30/171c999724ce0f0e~tplv-t2oaga2asx-image.image"><figcaption></figcaption></figure><p></p><h3 class="heading">世界坐标转屏幕坐标</h3><pre><code class="hljs javascript" lang="javascript">getViewCp(v3, v2) {    <span class="hljs-keyword">var</span> worldVector = v3.clone();    <span class="hljs-keyword">var</span> standardVector = worldVector.project(<span class="hljs-keyword">this</span>.camera); <span class="hljs-comment">//世界坐标转标准设备坐标</span>    <span class="hljs-keyword">var</span> a = <span class="hljs-built_in">window</span>.innerWidth / <span class="hljs-number">2</span>;    <span class="hljs-keyword">var</span> b = <span class="hljs-built_in">window</span>.innerHeight / <span class="hljs-number">2</span>;    <span class="hljs-keyword">var</span> vx = <span class="hljs-built_in">Math</span>.round(standardVector.x * a + a); <span class="hljs-comment">//标准设备坐标转屏幕坐标</span>    <span class="hljs-keyword">var</span> vy = <span class="hljs-built_in">Math</span>.round(-standardVector.y * b + b); <span class="hljs-comment">//标准设备坐标转屏幕坐标</span>    v2.copy(<span class="hljs-keyword">new</span> THREE.Vector2(vx, vy))}<span class="hljs-keyword">let</span> btn = <span class="hljs-built_in">document</span>.getElementById(<span class="hljs-string">&#39;btn&#39;</span>)<span class="hljs-keyword">if</span> (btn) {  btn.onclick = <span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {    <span class="hljs-keyword">let</span> worldVector = <span class="hljs-keyword">new</span> THREE.Vector3()    <span class="hljs-keyword">this</span>.box3.getWp(worldVector)    <span class="hljs-keyword">let</span> v2 = <span class="hljs-keyword">new</span> THREE.Vector2()    <span class="hljs-keyword">this</span>.getViewCp(worldVector, v2)    <span class="hljs-keyword">this</span>.div.style.left = v2.width - <span class="hljs-keyword">this</span>.div.offsetWidth / <span class="hljs-number">2</span> + <span class="hljs-string">&#39;px&#39;</span>    <span class="hljs-keyword">this</span>.div.style.top = v2.height - <span class="hljs-keyword">this</span>.div.offsetHeight / <span class="hljs-number">2</span> + <span class="hljs-string">&#39;px&#39;</span>  }}</code></pre><h5 class="heading">效果展示</h5><p></p><figure><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2020/4/30/171c9ae3c87cb66a~tplv-t2oaga2asx-image.image"><figcaption></figcaption></figure><p></p>&quot; ',32),e={expose:[],setup:n=>(defineExpose({frontmatter:{}}),(n,e)=>(s(),a("div",l,[p])))};export default e;
