import { BufferAttribute, BufferGeometry, Color, EdgesGeometry, LineBasicMaterial, LineSegments, Mesh, Vector3 } from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";


// 线的材质
export const radarLine2MatLine = new LineMaterial({
    linewidth: 0.001, // 可以调整线宽
    color: 0xffffff,
    transparent: true,
    opacity: 1,
    forceSinglePass: true,
    depthWrite: false, // 透明度重叠的问题
    vertexColors: false, // 是否使用顶点颜色
});


// 将BufferGeometry的顶点信息转成数组
export const geometryAttribute2Array = (float: Float32Array) => {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new BufferAttribute(float, 3));
    let linePoints = []
    if (geometry.isBufferGeometry) {
        const position = geometry.getAttribute('position')
        const { count } = position
        // 循环几何体的顶点信息并加入到linePoints中。
        for (let i = 0; i < count; i++) {
            const v3 = new Vector3().fromBufferAttribute(position, i);
            linePoints.push(v3.x, v3.y, v3.z)
        }
    }
    const line2Geometry = new LineGeometry();

    line2Geometry.setPositions(linePoints);

    return line2Geometry
}
/**
 * 
 * @param object 模型
 * @param thresholdAngle 识别间隔 
 * @param color 颜色
 * @param opacity 透明度
 * @returns 线实体
 */
export const getLine = (object: Mesh, thresholdAngle = 1, color = new Color('#ffffff'), opacity = 1): LineSegments => {
    const lineMaterial = new LineBasicMaterial(
        {
            depthTest: true,
            transparent: true,
            depthWrite: false, // 透明度重叠的问题
            opacity,
            color
        }
    )

    // 创建线条，参数为 几何体模型，相邻面的法线之间的角度，
    var edges = new EdgesGeometry(object.geometry, thresholdAngle);
    var line = new LineSegments(edges);
    line.material = lineMaterial
    return line;
}