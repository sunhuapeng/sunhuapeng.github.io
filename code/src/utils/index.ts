import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { lineMaterial } from "../content/materials";
import { Box3, Object3D, Vector3 } from "three";

// 创建线条对象
/**
 * 创建线条对象
 * @param positions 顶点坐标数组
 * @param color 线条颜色
 * @param opacity 线条透明度
 * @param width 线条宽度
 * @param isLight 是否为光源
 * @param dashed 是否为虚线
 * @returns 
 */
export function createLine(positions: number[], color: number, opacity = 1, width = 1, isLight = false, dashed = false) {
    // 创建线条几何体
    const geometry = new LineGeometry(); // LineGeometry用于定义线条的几何形状
    geometry.setPositions(positions); // 设置线条的顶点位置，positions是一个包含坐标的数组
    // 创建线条对象，使用lineMaterial函数生成材质
    const line = new Line2(geometry, lineMaterial(color, opacity, width, dashed)); // Line2是用于渲染线条的类
    line.userData.isLight = isLight; // 将isLight属性存储在userData中，方便后续使用
    if (dashed) { // 如果线条是虚线
        line.computeLineDistances(); // 计算线段的距离，用于虚线效果
    }
    return line; // 返回创建的线条对象
}
export function getMeshInfo(mesh: Object3D) {
    const box = new Box3();
    box.setFromObject(mesh);
    const center = new Vector3();
    box.getCenter(center);
    const size = new Vector3();
    box.getSize(size);
    return { center, size }
}