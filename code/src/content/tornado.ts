import * as THREE from 'three';
import { scene } from './scene';
import { rotationFactorValue } from './GUI';
import * as TWEEN from '@tweenjs/tween.js';
const group = new THREE.Group();
scene.add(group);
const particleCount = 5000;
const particles = new THREE.BufferGeometry();
const positions = new Float32Array(particleCount * 3);
const velocities = new Float32Array(particleCount * 3);
const colors = new Float32Array(particleCount * 3); // 新增颜色数组

const xzExpansionRange = 0.6; // 提取x和z的扩散范围变量
const maxHeight = 0.8; // 提取高度变量

const curveFactor = 1.2; // 提取曲线弧度变量
const curveCalculationFactor = Math.PI; // 提取曲线弧度计算方式为变量

const whiteColor = new THREE.Color(0xffffff); // 设置粒子颜色为白色

for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * 2 * Math.PI;
    const height = Math.random() * maxHeight / 2;
    const expansionFactor = height / maxHeight + Math.random() / 5; // 根据y值计算扩散因子

    const xs = height * Math.random();
    // 使用曲线差值计算半径，增加曲线弧度
    const radius = Math.sin(height / maxHeight * curveCalculationFactor * curveFactor * xs) * xzExpansionRange * expansionFactor;

    positions[i * 3] = radius * Math.cos(theta);
    positions[i * 3 + 1] = height;
    positions[i * 3 + 2] = radius * Math.sin(theta);

    velocities[i * 3] = -Math.sin(theta) * 0.01;
    velocities[i * 3 + 1] = 0.02;
    velocities[i * 3 + 2] = Math.cos(theta) * 0.01;

    // 设置颜色为白色
    colors[i * 3] = whiteColor.r; // R
    colors[i * 3 + 1] = whiteColor.g; // G
    colors[i * 3 + 2] = whiteColor.b; // B
}

particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
particles.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
particles.setAttribute('color', new THREE.BufferAttribute(colors, 3)); // 设置颜色属性

const material = new THREE.ShaderMaterial({
    vertexShader: `
            varying vec3 vColor;
            attribute vec3 color; // 声明颜色属性
            void main() {
                vColor = color; // 使用传入的颜色
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = 5.0; // 固定点大小
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
    fragmentShader: `
            varying vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, 1.0);
            }
        `,
    blending: THREE.NormalBlending, // 取消扩散小托
    depthTest: true,
    transparent: true
});

const particleSystem = new THREE.Points(particles, material);
group.add(particleSystem);

let rotationFactor = 0.09; // 控制转动速度的因子，可以根据需要调整
rotationFactorValue.onChange((value: number) => {
    rotationFactor = value;
})
export const animateParticles = () => {
    const time = Date.now() * 0.00001;

    const centerX = 0; // 龙卷风中心在x轴的位置，这里设为0，可根据实际需求调整
    const centerZ = 0; // 龙卷风中心在z轴的位置，这里设为0，可根据实际需求调整

    for (let i = 0; i < particleCount; i++) {
        const index = i * 3;

        // 获取当前粒子的位置和速度信息
        const x = positions[index];
        const z = positions[index + 2];

        // 更新粒子的y坐标，使其向上移动
        // positions[index + 1] = y + velocities[index + 1]; // 向上移动

        // 如果粒子超过maxHeight/2，则重置到底部
        if (positions[index + 1] > maxHeight / 2) {
            positions[index + 1] = 0; // 重置y坐标
        }

        // 计算粒子相对于龙卷风中心的位置
        const relativeX = x - centerX;
        const relativeZ = z - centerZ;

        // 根据时间和一些参数来更新粒子位置，实现向上缠绕的效果
        const newRelativeX = relativeX * Math.cos(rotationFactor * time) - relativeZ * Math.sin(rotationFactor * time);
        const newRelativeZ = relativeX * Math.sin(rotationFactor * time) + relativeZ * Math.cos(rotationFactor * time);

        // 更新粒子的x和z坐标
        positions[index] = newRelativeX + centerX;
        positions[index + 2] = newRelativeZ + centerZ;
    }

    // 标记位置属性需要更新
    particles.attributes.position.needsUpdate = true;
};

export const animateTornado = (positions: THREE.Vector3[]) => {
    new TWEEN.Tween({ index: 0 })
        .to({ index: positions.length - 1 }, 5000) // 动画持续时间为5000毫秒
        .onUpdate(({ index }) => {
            const currentIndex = Math.floor(index);
            const nextIndex = currentIndex + 1 < positions.length ? currentIndex + 1 : 0;

            // 更新龙卷风的位置
            particleSystem.position.copy(positions[currentIndex]);
            particleSystem.lookAt(positions[nextIndex]); // 使粒子系统朝向下一个位置
            const tiltAngle = Math.PI / 18; // 10度的倾斜角度
            const tiltAxis = new THREE.Vector3(1, 0, 0); // 沿着x轴倾斜
            const quaternion = new THREE.Quaternion().setFromAxisAngle(tiltAxis, tiltAngle);
            particleSystem.quaternion.multiplyQuaternions(quaternion, particleSystem.quaternion);
        })
        .repeat(Infinity) // 添加重复动画
        .start();
};

// 调用方法示例
// animateTornado(vector3s);
