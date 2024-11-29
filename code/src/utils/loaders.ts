import { Object3D, Texture, TextureLoader } from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
// import { FBXLoader, GLTF, GLTFLoader, MTLLoader, OBJLoader ,DRACOLoader} from 'three/examples/jsm/Addons.js'

const fbxLoader = new FBXLoader();
const textureLoader = new TextureLoader();
const gltfLoader = new GLTFLoader();

// 创建解压缩器
const dracoLoader = new DRACOLoader();
// 解压缩处理的文件地址
dracoLoader.setDecoderPath(`${import.meta.env.VITE_ASSETS_URL}draco/gltf/`);

/**
 * 
 * @param modelUrl 模型地址
 * @param textureUrl 贴图地址
 * @returns 
 */
// 加载FBX模型
export function loadFbx(modelUrl: string, cb?: (event: ProgressEvent) => void): Promise<Object3D> {
    return new Promise((resolve, reject) => {
        fbxLoader.load(modelUrl, function (loadedModel) {
            resolve(loadedModel)
        }, (a) => {
            cb && cb(a)
        });
    })
}

// 加载OBJ模型
export function loadObj(url: string) {
    return new Promise<any>((resolve, reject) => {
        new OBJLoader()
            .load(url, function (object) {
                resolve(object)
            });
    })
}

// 加载纹理
export function loadTexture(grid: string) {
    return new Promise<Texture>((resolve, reject) => {
        textureLoader.load(grid, (texture) => {
            resolve(texture)
        });
    })
}

// 加载gltf
export function loadGltf(url: string) {
    gltfLoader.setDRACOLoader(dracoLoader);
    return new Promise<GLTF>((resolve, reject) => {
        gltfLoader.load(url, function (gltf: GLTF) {
            resolve(gltf)
        }, function (xhr) {
            console.log(xhr);
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        });
    })
}

// export function loadObjMtl(objUrl: string, mtlUrl: string) {
//     return new Promise<Object3D>((resolve, reject) => {

//         new MTLLoader()
//             .load(mtlUrl, function (materials) {

//                 materials.preload();

//                 new OBJLoader()
//                     .setMaterials(materials)
//                     .load(objUrl, function (object) {
//                         resolve(object)
//                     });

//             });
//     })
// }