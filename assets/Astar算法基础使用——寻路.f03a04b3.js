import{o as e,c as t,a}from"./index.0b447cd2.js";const n={class:"markdown-body"},p=[a('<html><p class="title" style="display:none;">Astar算法基础使用——寻路 </p></html><html><p class="article_id" style="display:none;">69635328544205701431</p></html><html><p class="target" style="display:none;">算法</p></html><html><p class="create_time" style="display:none;">1621323840000</p></html><html><p class="update_time" style="display:none;">1621323840006</p></html><html><p class="cover_image" style="display:none;">https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/126aa081f89d494dbc4ed5faee64b3c5~tplv-k3u1fbpfcp-watermark.image</p></html><html><p class="brief_content" style="display:none;">ASTAR的应用非常广泛，后续要将结合前端识图技术根据具体的地图去识别可行走路线，从而分析运动轨迹等功能</p></html><h4>技术栈</h4><ul><li>html</li><li>javascript</li><li>css</li><li>astar.js</li></ul><h4>准备工作</h4><p>文件目录结构</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/67b92e9d33684cccbd0764a8cbcaab0e~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h5>第一步先用js循环绘制出 10*10的方格</h5><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d2bb70f3918a4b2d94e8306c3a37d32a~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><pre><code class="language-javascript">// 初始化地图\nlet w = h = 40\nfunction createMap () {\n    const mapDom = document.querySelector(\\&quot;#map\\&quot;)\n  for (let i = 0; i &lt; 10; i++) {\n      var ul = document.createElement(&#39;ul&#39;);\n    mapDom.appendChild(ul)\n    for (let j = 0; j &lt; 10; j++) {\n        var li = document.createElement(&#39;li&#39;);\n      ul.appendChild(li)\n      li.innerHTML = i + &#39;,&#39; + j\n      li.style.left = i * w + &#39;px&#39;\n      li.style.top = j * h + &#39;px&#39;\n    }\n  }\n}\ncreateMap()\n</code></pre><h5>设置随机可行走点</h5><p>每一个方格都有自己的坐标点，既然要做一个寻路的功能，那就需要一下几个元素，1.起点，2.终点，3.可行走的点，起点可以标注为(0,0)，终点可以标注为(9,9)，中间随机分布一些可行走的点，那么将上面的循环改造一下，要得出一个二维数组，由0，1组成，1为可行走的位置，0为不可行走的位置，用不同的颜色标注，每一个1对应猛男色的方块，每个0对应空白方块，万丈深渊</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cb8070fccf93423195957adf07edd25b~tplv-k3u1fbpfcp-watermark.image" alt="image.png"> (后补的一张图)</p><p>这时候 循环被改造为这样</p><pre><code class="language-javascript">// 初始化地图\nlet w = h = 40\nconst mapArr = []\nfunction createMap () {\n    // 获取地图容器\n  const mapDom = document.querySelector(\\&quot;#map\\&quot;)\n  // 第一层循环\n  for (let i = 0; i &lt; 10; i++) {\n      let arr = []\n    // 将第一层循环的数组加入到map数组中\n    mapArr.push(arr)\n    // 创建ul\n    var ul = document.createElement(&#39;ul&#39;);\n    ul.style.display = &#39;flex&#39;\n    mapDom.appendChild(ul)\n    // 第二层循环\n    for (let j = 0; j &lt; 10; j++) {\n        var li = document.createElement(&#39;li&#39;);\n      const num = getRandom(1, 6)\n      if (num &gt; 2) {\n          arr.push(1)\n        li.style.background = &#39;#ffd9cd&#39;\n      } else {\n          arr.push(0)\n      }\n      // 起点和终点始终为可行走\n      if(i===0&amp;&amp;j===0 || i===9&amp;&amp;j===9) {\n          mapArr[i][j] = 1\n        li.style.background = &#39;#ffd9cd&#39;\n      }\n      ul.appendChild(li)\n      li.style.left = j * w + &#39;px&#39;\n      li.style.top = i * h + &#39;px&#39;\n      // 设置一个坐标属性，方便之后查找\n      li.setAttribute(&#39;coordinate&#39;, i + &#39;,&#39; + j)\n    }\n  }\n}\n// 生成两个整数之间的随机整数\nfunction getRandom (max, min) {\n    return Math.floor(Math.random() * (max - min + 1) + min);\n}\ncreateMap()\n</code></pre><p>如果手动标记可行走路线，将粉色方块用线连起来</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5315e930ba2e4ed9bc761b9423f2651f~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>具体案例 <a href="https://sunhuapeng.github.io/#/gamemaze">迷宫游戏</a>的充值VIP</p><p>现在我们有了一个二维数组，里面有一堆可行走的点，还有一个起点(0,0)，终点(9,9)，那现在要做的就是引入<code>astar</code> 算法</p><pre><code class="language-html">&lt;script src=\\&quot;./js/astar.js\\&quot;&gt;&lt;/script&gt;\n</code></pre><h4>使用算法工具</h4><p>稍微看一下astar源码</p><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e465a408bc3745ff816f294693269049~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p><code>gridIn</code>字段为二维数组字段，<code>diagonal</code>选项确定是否可走对角线 <code>this.diagonal = !!options.diagonal;</code> 不填为false</p><p>先调用一下Graph方法</p><pre><code class="language-javascript">// 计算路径 astar算法\nfunction astarCreate (star, end, graph) {\n    var maps = new Graph(graph);\n  console.log(maps)\n}\n</code></pre><pre><code class="language-javascript">astarCreate([0,0], [9,9], mapArr)\n</code></pre><p>打印出来的maps：</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62013516fb3b4ae1a4fcdf30eb6b8f98~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>grid输出的是二维GridNode节点，nodes输出的是平铺的节点</p><p>接下来用到<code>search</code>方法</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bd7fee8cdcf94e40b83a71680324c3f9~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>通过起点终点和刚才<code>new graph</code>返回的gridnode节点，计算出可行走路线，如果指定没返回，则没有从起点到终点的路径</p><pre><code class="language-javascript">// 计算路径 astar算法\nfunction astarCreate (star, end, graph) {\n    var maps = new Graph(graph);\n  var starPosition = maps.grid[star[0]][star[1]];\n  var endPosition = maps.grid[end[0]][end[1]];\n  var result = astar.search(maps, starPosition, endPosition);\n  console.log(&#39;result&#39;, result)\n}\n</code></pre><p>这是没有可到路线的情况</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ca901a064daf42d4acfad58a42d34efe~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p>因为对角线的属性没设置为<code>true</code></p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6b49e09078de4bde93830560c122b25d~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><p><code>result</code>有值 说明有可行走路线，画的可能不是返回的值</p><h4>将可行走点标记出来</h4><pre><code class="language-javascript">targDom(result)\n\nfunction targDom(result){\n    for(let i=0; i&lt;result.length; i++) {\n      const x = result[i].x\n    const y = result[i].y\n    const coordinate = x + &#39;,&#39; + y\n    console.log(coordinate)\n  }\n}\n\n</code></pre><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/35309084b04b4c2e9da8728c5adaf7e4~tplv-k3u1fbpfcp-watermark.image" alt="image.png"></p><h4>让元素动起来</h4><pre><code class="language-js">function targDom (result) {\n    for (let i = 0; i &lt; result.length - 1; i++) {\n      const x = result[i].x\n    const y = result[i].y\n    const coordinate = x + &#39;,&#39; + y\n    // 通过之前设置的coordinate属性寻找具体的dom\n    const dom = document.querySelector(`[coordinate^=&#39;${coordinate}&#39;]`)\n    if (dom) {\n        dom.style.background = &#39;#FFEB3B&#39; // 修改dom节点的背景色\n      setTimeout(() =&gt; {\n          moveImg(x, y, i === result.length - 2)\n      }, 200 * i)\n    }\n  }\n}\n\n// 让图片动起来\nfunction moveImg (t, l, last) {\n    const img = document.querySelector(&#39;#first-li&#39;)\n  if (img) {\n      img.style.left = l * w + &#39;px&#39;\n    img.style.top = t * h + &#39;px&#39;\n    // 判断是否为最后一个，最后一个要滑到终点去\n    if (last) {\n        setTimeout(() =&gt; {\n          img.style.left = 9 * w + &#39;px&#39;\n        img.style.top = 9 * h + &#39;px&#39;\n      }, 300)\n    }\n  }\n}\n</code></pre><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c0dde61ea1a4d8299d0c8999b2b509e~tplv-k3u1fbpfcp-watermark.image" alt="11111.gif"></p><h4>astar在3d模型中的应用</h4><p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4ac0e4f50c164f3fbd8a79bec05b5a6a~tplv-k3u1fbpfcp-watermark.image" alt="11111.gif"></p><p><a href="https://sunhuapeng.github.io/#/iframe?url=html%2F%E4%B8%AD%E7%BA%A7%E6%A1%88%E4%BE%8Bhtml%2Fastar%E7%AE%97%E6%B3%95%E5%9F%BA%E7%A1%80%E4%BD%BF%E7%94%A8.html">戳我体验</a></p><p>代码可能不是很精深，希望大家能够多提宝贵意见&quot;</p>',54)],c={__name:"Astar算法基础使用——寻路",setup:(a,{expose:c})=>(c({frontmatter:{}}),(a,c)=>(e(),t("div",n,p)))};export{c as default};
