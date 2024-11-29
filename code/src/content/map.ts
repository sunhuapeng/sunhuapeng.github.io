// 导入材质相关函数和变量
import { extrudeMaterial } from "./materials";
// 导入获取杭州市和杭州市区地图数据的函数
import { fetchHZSMapData, fetchHZJSapData } from "./request";
// 导入Three.js核心库
import * as THREE from "three";
// 导入场景实例
import { scene } from "./scene";
// 导入GUI控制相关变量
import { fifthColor, firstColor, fourthColor, guiParams, secondColor, shapeColor, shapeColor2, sixthColor } from "./GUI";
import { createLine, getMeshInfo } from "../utils";

// 创建城市组对象,用于统一管理所有地图元素
const cityGroup = new THREE.Group();
scene.add(cityGroup)

// 获取杭州市区地图数据
fetchHZJSapData().then((data) => {
    const features = data.features
    features.forEach((feature: any) => {
        const arcs = feature.geometry.coordinates[0][0];
        // 排除杭州市中心区域(adcode为330100)
        if (feature.properties.adcode !== 330100) {
            const positions = getPositions(arcs)
            // 创建较暗的边界线
            const line = createLine(positions, 0x323748, .8);
            cityGroup.add(line)
        }
    })
})

// 获取杭州市地图数据
fetchHZSMapData().then((data) => {
    const features = data.features
    features.forEach((feature: any) => {
        const arcs = feature.geometry.coordinates[0][0];

        const positions = getPositions(arcs)

        // 创建第一条亮色边界线
        const firstLine = createLine(positions, 0x546087)

        // 设置GUI控制第一条线的颜色
        guiParams.firstColor = firstLine.material.color.getHex();
        firstColor.updateDisplay()
        firstColor.onChange(function (val) {
            firstLine.material.color.setHex(val)
        });

        cityGroup.add(firstLine)

        // 创建地图区域的挤压体
        const shape = createShape(positions)
        cityGroup.add(shape)

        // 设置GUI控制挤压体的颜色
        guiParams.shapeColor = shape.material[0].color.getHex();
        shapeColor.updateDisplay()
        shapeColor.onChange(function (val) {
            shape.material[0].color.setHex(val)
        });
        guiParams.shapeColor2 = shape.material[1].color.getHex();
        shapeColor2.updateDisplay()
        shapeColor2.onChange(function (val) {
            shape.material[1].color.setHex(val)
        });

        // 调整挤压体位置
        const { center } = toCenter(shape);
        shape.position.y = center.y

        // 创建第二条暗色边界线
        const secondLine = createLine(positions, 0x4b5062)
        secondLine.position.y = center.y
        cityGroup.add(secondLine)

        // 创建第三条暗色边界线
        const thirdLine = createLine(positions, 0x4b5062)
        thirdLine.position.y = -center.y;
        cityGroup.add(thirdLine);

        // 设置GUI控制第二、三条线的颜色
        guiParams.secondColor = secondLine.material.color.getHex();
        secondColor.updateDisplay()
        secondColor.onChange(function (val) {
            secondLine.material.color.setHex(val)
            thirdLine.material.color.setHex(val)
        });


        // 创建第四条线
        const fourthLine = createLine(positions, 0x323748, 0.8)
        fourthLine.position.y = center.y * 3
        cityGroup.add(fourthLine);

        guiParams.fourthColor = fourthLine.material.color.getHex();
        fourthColor.updateDisplay()
        fourthColor.onChange(function (val) {
            fourthLine.material.color.setHex(val)
        });

        // 创建第五条线
        const fifthLine = createLine(positions, 0x323748, 0.8)
        fifthLine.position.y = center.y * 2
        cityGroup.add(fifthLine);

        guiParams.fifthColor = fifthLine.material.color.getHex();
        fifthColor.updateDisplay()
        fifthColor.onChange(function (val) {
            fifthLine.material.color.setHex(val)
        });

        // 创建第六条线
        const sixthLine = createLine(positions, 0x546087, 0.8)
        sixthLine.position.y = center.y * 3
        cityGroup.add(sixthLine);

        guiParams.sixthColor = sixthLine.material.color.getHex();
        sixthColor.updateDisplay()
        sixthColor.onChange(function (val) {
            sixthLine.material.color.setHex(val)
        });



        toCenter(firstLine)
    })
});

// 将二维坐标转换为三维坐标数组
export const getPositions = (arcs: number[][]) => {
    let positions: number[] = [];
    arcs.forEach((v2Arr: number[]) => {
        const x = v2Arr[0];
        const z = v2Arr[1];
        positions.push(x, 0, z); // y坐标设为0
    });
    return positions;
}


// 创建地图区域的挤压体
const createShape = (positions: number[]) => {
    const shape = new THREE.Shape();
    // 绘制形状轮廓
    shape.moveTo(positions[0], positions[2]);
    for (let i = 3; i < positions.length; i += 3) {
        shape.lineTo(positions[i], positions[i + 2]);
    }
    shape.lineTo(positions[0], positions[2]); // 闭合路径

    // 设置挤压参数
    const extrudeSettings = {
        steps: 1, // 挤压的分段数
        depth: 0.04, // 挤压的深度
        bevelEnabled: false, // 是否启用斜角
    };

    // 创建挤压几何体和网格
    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    const shapeMesh = new THREE.Mesh(geometry, [extrudeMaterial(0x1c212c), extrudeMaterial(0x12141c)]);
    shapeMesh.rotation.x = Math.PI / 2; // 旋转使其与路径方向一致
    shapeMesh.userData.isLight = false
    return shapeMesh
}

// 计算对象的包围盒并居中
const toCenter = (mesh: THREE.Mesh) => {
    const { size, center } = getMeshInfo(mesh)
    // 将城市组移动到中心位置
    cityGroup.position.copy(center.negate())
    return { size, center }
}
