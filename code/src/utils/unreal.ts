import * as THREE from "three";
import { EffectComposer, OutputPass, RenderPass, ShaderPass, UnrealBloomPass } from "three/examples/jsm/Addons.js";
import { scene, camera, width, height, renderer } from "../content/scene";
import { guiParams } from "../content/GUI";
import { darkMaterial } from "../content/materials";

const createParams = {
    threshold: 0,
    strength: 0.39, // 强度
    radius: 0.1,// 半径
    exposure: 0.5 // 扩散
};

const materials: any = {}

const bloomLayer = new THREE.Layers();
const BLOOM_SCENE = 1;
bloomLayer.set(BLOOM_SCENE);

// 渲染器通道，将场景全部加入渲染器
const renderScene = new RenderPass(scene, camera);
// 添加虚幻发光通道
const bloomPass = new UnrealBloomPass(new THREE.Vector2(width, height), 1.5, 0.4, 0.85);
bloomPass.threshold = createParams.threshold;
bloomPass.strength = createParams.strength;
bloomPass.radius = createParams.radius;

// 创建合成器
const bloomComposer = new EffectComposer(renderer);
bloomComposer.renderToScreen = false;
// 将渲染器和场景结合到合成器中
bloomComposer.addPass(renderScene);
bloomComposer.addPass(bloomPass);

// 着色器通道
const mixPass = new ShaderPass(
    // 着色器
    new THREE.ShaderMaterial({
        uniforms: {
            baseTexture: { value: null },
            bloomTexture: { value: bloomComposer.renderTarget2.texture }
        },
        vertexShader: `
            
            varying vec2 vUv;
    
            void main() {
    
                vUv = uv;
    
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    
            }
            
            `,
        fragmentShader: `
            
            uniform sampler2D baseTexture;
            uniform sampler2D bloomTexture;
    
            varying vec2 vUv;
    
            void main() {
    
                gl_FragColor = ( texture2D( baseTexture, vUv ) + vec4( 1.0 ) * texture2D( bloomTexture, vUv ) );
    
            }
    
            `,
        defines: {}
    }), 'baseTexture'
);
mixPass.needsSwap = true;

// 合成器输出通道
const outputPass = new OutputPass();

const finalComposer = new EffectComposer(renderer);
finalComposer.addPass(renderScene);
finalComposer.addPass(mixPass);
finalComposer.addPass(outputPass);


function darkenNonBloomed(obj: any) {
    if (bloomLayer) {
        if (!obj.userData.isLight && bloomLayer.test(obj.layers) === false) {
            materials[obj.uuid] = obj.material;
            obj.material = darkMaterial;
        }
    }

}

function restoreMaterial(obj: any) {
    if (materials[obj.uuid]) {
        obj.material = materials[obj.uuid];
        // 用于删除没必要的渲染
        delete materials[obj.uuid];
    }
}

const render = () => {

    if (guiParams.isLight) {
        if (bloomComposer) {
            scene.traverse(darkenNonBloomed);
            bloomComposer.render();
        }

        if (finalComposer) {
            scene.traverse(restoreMaterial);
            finalComposer.render();
        }
    }
}



export {
    render as unrealRender
}
