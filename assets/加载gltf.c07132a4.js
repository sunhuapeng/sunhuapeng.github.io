import"./index.391a9efd.js";var e,n,i,t,d,o,r,a;function w(){n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight)}!function(){t=document.createElement("div"),document.body.appendChild(t),(i=new THREE.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),i.setSize(window.innerWidth,window.innerHeight),t.appendChild(i.domElement),r=new Stats,t.appendChild(r.dom),(n=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4)).position.set(120,0,0),(o=new THREE.OrbitControls(n,document.querySelector("canvas"))).screenSpacePanning=!0,o.update(),(e=new THREE.Scene).fog=new THREE.Fog(10526880,600,3e3),e.background=new THREE.Color(10526880),(d=new THREE.HemisphereLight(16777215,4473924,2)).position.set(0,200,0),e.add(d);var s=new THREE.AxisHelper(250);e.add(s),window.addEventListener("resize",w,!1),(a=new THREE.GLTFLoader).setDRACOLoader(new THREE.DRACOLoader),a.load("../model/gltf/Colt_M4A1_with_M203.gltf",(n=>{n.scene.position.setY(-10),e.add(n.scene)}))}(),function t(){requestAnimationFrame(t),i.render(e,n)}();
