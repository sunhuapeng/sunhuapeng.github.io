<html>
    <p class="title" style="display:none;">一些three.js的基础——加载FBX模型
    </p>
</html>
<html>
    <p class="article_id" style="display:none;">6911217131254185991</p>
</html>
<html>
    <p class="target" style="display:none;">前端</p>
</html>
<html>
    <p class="create_time" style="display:none;">1618841071708</p>
</html>
<html>
    <p class="update_time" style="display:none;">1609143155003</p>
</html>
<html>
    <p class="cover_image" style="display:none;">https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f4838afdfc1045bc88798ea761120e7f~tplv-k3u1fbpfcp-watermark.image</p>
</html>
<html>
    <p class="brief_content" style="display:none;">... 3D工程师在交给你一项3D工程的时候会有很多贴图，比如发光贴图，凹凸贴图、颜色贴图、环境贴图、等等...</p>
</html>



1、创建一个基础场景
    包含场景`scene`、透视相机`PerspectiveCamera`、控制器`OrbitControls`、点光源`PointLight`、半球光`HemisphereLight`、渲染器`WebGLRenderer`，以及今天的主角`FBXLoader` fbx加载器 
    场景背景颜色设置为`0xf65144`



``` javascript

scene = new THREE.Scene();scene = new THREE.Scene();scene = new THREE.Scene();scene = new THREE.Scene();scene = new THREE.Scene();scene = new THREE.Scene();scene = new THREE.Scene();

scene.fog = new THREE.Fog(0x000000, 600, 3000); //雾化场景

scene.background = new THREE.Color(0xf65144);

```



透视相机位置设置为正对x轴



```javascript

camera = new THREE.PerspectiveCamera(
    
      45,

  window.innerWidth / window.innerHeight,

  1,

  10000

);

camera.position.set(0, 0, 200); //设置相机位置

```



灯光采用半球光和点光源两种



半球光用来渲染整个场景的颜色，点光源用来渲染模型高光



``` javascript

// 设置光照

// 半球光

const hemisphereLight = new THREE.HemisphereLight(
    
    0xffffff,

0x444444,

1

);

// hemisphereLight.position.set(0, 200, 0);

scene.add(hemisphereLight);

// 点光源

light = new THREE.PointLight(0xffff00, 2, 100);

light.position.set(0, 0, 0);

scene.add(light);



```

...



所有基础元素创建完成后，可以在页面看到这样的场景



<img src=\"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df963a4eda744ae7b8cf04ee1dac9009~tplv-k3u1fbpfcp-watermark.image\" style=\"zoom:33%;\" />



接下载要使用到fbxloader



文件的引用

```

    <script src=\"../../../three.js-master\\examples\\js\\loaders\\FBXLoader.js\"></script>

```



因为是在html内写的代码，所以路径为当前文件的相对路径，可以根据自己文件位置进行更改



官网内有对于fbx加载器的使用，这里不赘述，主要讲一下材质和贴图



![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c45f72ed4e0f4b5b8eb06b9748b7a7ad~tplv-k3u1fbpfcp-watermark.image)



``` javascript

// 模型地址

const url = \"../model/fbx/beats耳机/source/beats_highpoly.fbx\"

const loader = new THREE.FBXLoader()

loader.load(
    
    url,

function (loadedModel) {
    
    console.log(loadedModel);

mesh = loadedModel.children[0].clone();

scene.add(mesh);

}

);

```



在加载的过程中遇到一些小问题，fbx依赖的Inflate.min.js文件找不到



需要在js中引入intflate.min.js



```javascript

<script src=\"../../../three.js-master\\examples\\js\\loaders\\FBXLoader.js\"></script>

<script src=\"../../../three.js-master\\examples\\js\\libs\\inflate.min.js\"></script>

```



加载后可以看出来，没有对模型进行材质的修改和贴图，材质本身是黑色的



![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b4ba70b5885a41d6ab1d27bd7f8e72d6~tplv-k3u1fbpfcp-watermark.image)



在上面代码中，我们打印一下`loadedModel` 是一个组对象`group`，组对象没有材质，而且并不是咱们最终要加载的模型对象，可以看一下组对象的children中的结果，有一个mesh对象，这是咱们需要渲染的对象，打印一下可以看到material材质对象



![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df793546c41e44e6a8653fd944980b91~tplv-k3u1fbpfcp-watermark.image)



模型本身的材质是一个[Phong网格材质](https://threejs.org/docs/index.html#api/zh/materials/MeshPhongMaterial)



那么一会的贴图也会选择这样的材质



首选如果要贴图肯定需要将贴图加载为纹理，这样就要用到 `TextureLoader`



```javascript

const textureLoader = new THREE.TextureLoader();

const textureUrl = \"../model/fbx/beats耳机/textures/beats_red.png\"

const textureNormal = textureLoader.load(
    
      textureUrl

);

```



原本贴图样式



![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/dc0fe131a1b24078a654f7ebe90a7d63~tplv-k3u1fbpfcp-watermark.image)



这张图，是3D工程师导出工程的时候通过某种手段生成的，感兴趣的童鞋可以跟身边的3D工程师了解



至于每个贴图点，每个位置能够对应上模型，也是在3D工程生成时候计算好的，作为前端只是拿来用就可以



接下来对模型进行材质的重新渲染



```

mesh = loadedModel.children[0].clone();

mesh.material = new THREE.MeshPhongMaterial({
    
      color: 0x00ffff,

})

console.log(mesh);

scene.add(mesh);

```



先小试一下



![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2aa16870544347949c5d224908513004~tplv-k3u1fbpfcp-watermark.image)



通过已经被改变的颜色不难发现，可以对模型的材质进行修改



接下来需要将我们加载好的纹理贴图和模型结合上，



3D工程师在交给你一项3D工程的时候会有很多贴图，比如发光贴图，凹凸贴图、颜色贴图、环境贴图、等等...



![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c973183b56c34751a723751cc5554437~tplv-k3u1fbpfcp-watermark.image)



可以通过这里看出来之前默认为null的表示之前并未对它进行材质贴图，也可以通过官网上面的material查看这些贴图具体什么作用



此次我们要对贴图进行重新渲染的是map 颜色贴图



所以将map设置为之前定义的 `textureNormal` 即可



``` javascript

// 模型地址

const url = \"../model/fbx/beats耳机/source/beats_highpoly.fbx\";

const loader = new THREE.FBXLoader();

loader.load(url, function (loadedModel) {
    
    const textureLoader = new THREE.TextureLoader();

const textureUrl =  \"../model/fbx/beats耳机/textures/beats_red.png\"

const textureNormal = textureLoader.load(
    
    textureUrl

);

mesh = loadedModel.children[0].clone();

mesh.material.map = textureNormal

console.log(loadedModel.children[0]);

scene.add(mesh)

});

```



![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/78c6c1b019bf40049ed3931bd3390710~tplv-k3u1fbpfcp-watermark.image)



接下来我们就可以通过一些微调改变一下模型材质的展示



mesh.material中有一个属性`shininess` 控制高光显示程度，可以对它进行控制，修改高光具体显示程度



首先要调整的是灯光，我们之前对灯光只是设置上了，并没有调整打光的位置



```

// 设置光照

// 半球光

const hemisphereLight = new THREE.HemisphereLight(
    
      0xffaea8, // 天空发出颜色

  0x7f0900, // 地面发出颜色

  1 // 光照强度

);

hemisphereLight.position.set(0, 50, 60);

scene.add(hemisphereLight);



// 聚光灯

const spotLight = new THREE.SpotLight(0xffffff);

spotLight.position.set(100, 60, 100);

scene.add(spotLight);



const spotLightHelper = new THREE.SpotLightHelper(spotLight);

scene.add(spotLightHelper);

```



在渲染动画中，将点光源进行一个位置的转换，这样就可以调整出不同位置的高光



```

function animate() {
    
    requestAnimationFrame(animate);

const time = Date.now() * 0.0005;

if (light) {
    
      light.position.x = Math.sin(time * 0.7) * 50;

  // light.position.y = Math.cos(time * 0.3) * 50;

  light.position.z = Math.sin(time * 0.5) * 50;

}

renderer.render(scene, camera);

}

```



![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8d4fa8d4a16e46a39500dd7a0fa49d69~tplv-k3u1fbpfcp-watermark.image)



最终调整的效果如下：



![](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/12ab6b28f9f2457ebced483c0c0688a5~tplv-k3u1fbpfcp-watermark.image)





代码地址



[html](https://github.com/sunhuapeng/sunhuapeng_2.0/blob/master/public/html/%E4%B8%AD%E7%BA%A7%E6%A1%88%E4%BE%8Bhtml/loadTexture.html)



[模型](https://github.com/sunhuapeng/sunhuapeng_2.0/blob/master/public/html/model/fbx/beats%E8%80%B3%E6%9C%BA/source/beats_highpoly.fbx)



[贴图](https://github.com/sunhuapeng/sunhuapeng_2.0/blob/master/public/html/model/fbx/beats%E8%80%B3%E6%9C%BA/textures/beats_red.png)









