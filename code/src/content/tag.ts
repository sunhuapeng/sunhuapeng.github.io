import * as THREE from "three";
import { createLine, getMeshInfo } from "../utils"
import * as TWEEN from '@tweenjs/tween.js';
import { scene } from "./scene";
import { tagColor, tagWarnColor } from "./GUI";
import { warningPos } from "./constData";
import { createTagPanel } from "./tagPanel";
export const createTag = (index: number, color: number, warn = false) => {
    const group = new THREE.Group();

    const tweenGroup = new TWEEN.Group();
    /**-----------------第一条线----------------- */
    warn && (() => {
        const length = 0.018; // 假设每条线的长度为0.018
        const distance = length * 2; // 移动的距离
        const maxDistance = distance * 2.5; // 移动的距离
        const { group: tagLineGroup, tween: tagLineTween } = tagLine(color, distance, maxDistance, length, 4, warn)
        group.add(tagLineGroup)
        tweenGroup.add(tagLineTween)
    })();

    /**-----------------第二条线----------------- */
    warn && (() => {
        const length = 0.012; // 假设每条线的长度为10
        const distance = length * 2; // 移动的距离
        const maxDistance = distance * 2.5; // 移动的距离
        const { group: tagLineGroup, tween: tagLineTween } = tagLine(color, distance, maxDistance, length, 2, warn)
        group.add(tagLineGroup)
        tweenGroup.add(tagLineTween)
    })();

    /**-----------------第三条线----------------- */

    (() => {
        const length = 0.013; // 假设每条线的长度为10
        const distance = length * 2; // 移动的距离
        const maxDistance = distance * 2.5; // 移动的距离
        const { group: tagLineGroup } = tagLine(color, distance, maxDistance, length, 3, warn)
        group.add(tagLineGroup)
        // tweenGroup.add(tagLineTween)
    })();

    (() => {
        const length = 0.006; // 假设每条线的长度为10
        const distance = length * 2; // 移动的距离
        const maxDistance = distance * 2.5; // 移动的距离
        const { group: tagLineGroup } = tagLine(color, distance, maxDistance, length, 2, warn)
        tagLineGroup.position.y = 0.006
        group.add(tagLineGroup)
        // tweenGroup.add(tagLineTween)
    })();

    /**-----------------纵向线----------------- */
    const verticalLength = 0.15;
    (() => {
        const positions = [0, 0, 0, 0, verticalLength, 0]
        const line = createLine(positions, color, 1, 1, true);
        line.userData.warn = warn
        group.add(line)
    })();

    const tagSize = new THREE.Vector3();

    /**-----------------六边形----------------- */
    (() => {
        const length = 0.014; // 假设每条线的长度为10
        const distance = length * 2; // 移动的距离
        const maxDistance = distance * 2.5; // 移动的距离
        const { group: tagLineGroup } = tagLine(color, distance, maxDistance, length, 2, warn)
        tagLineGroup.rotation.z = Math.PI / 2;
        const { size } = getMeshInfo(tagLineGroup);

        tagSize.copy(size.clone())
        tagLineGroup.position.y = verticalLength + size.y / 2
        group.add(tagLineGroup)

        if (warn) {
            const panel = createTagPanel();
            group.add(panel)
        }
    })();

    (() => {
        const tagText = createTagText(index, color, tagSize.y / 3, tagSize.z / 2, warn);
        tagText.position.y = verticalLength + tagSize.y / 3
        group.add(tagText)
    })()

    tweenGroup.getAll().forEach((tween) => {
        tween.start()
    })
    return { group, tweenGroup }
}

const tagLine = (color: number, distance: number, maxDistance: number, length: number, width: number, warn = false) => {

    const group = new THREE.Group()
    const angle = Math.PI / 6; // 60度的弧度值

    const x2 = 0;
    const z2 = 0;
    const x1 = length * Math.cos(angle);
    const z1 = length * Math.sin(angle);
    const x3 = -length * Math.cos(angle);
    const z3 = length * Math.sin(angle);

    const positions = [x1, 0, z1, x2, 0, z2, x3, 0, z3];

    const line = createLine(positions, color, 1, width, true);

    for (let i = 0; i < 6; i++) {
        const newLine = line.clone()
        newLine.rotation.y = i * Math.PI / 3 + Math.PI / 2
        newLine.position.x -= distance * Math.cos(i * Math.PI / 3);
        newLine.position.z += distance * Math.sin(i * Math.PI / 3);
        newLine.userData.warn = warn
        group.add(newLine)
    }

    const tween = new TWEEN.Tween({ distance })
        .to({ distance: maxDistance }, 1000)
        .easing(TWEEN.Easing.Quadratic.Out)
        .onUpdate((value) => {
            // 更新位置
            group.children.forEach((child: any, i) => {
                child.position.x = -value.distance * Math.cos(i * Math.PI / 3);
                child.position.z = value.distance * Math.sin(i * Math.PI / 3);
            })
        })
        .onComplete(() => {
            // 动画完成后的操作
        })
        .repeat(Infinity) // 添加重复动画
        .yoyo(true) // 使动画往返
    return { group, tween }
}

const createTagText = (index: number, color: number, length: number, areaLength: number, warn = false) => {
    const group = new THREE.Group();
    for (let i = 0; i < Math.min(index, 3); i++) {
        const positions = [0, 0, 0, 0, length, 0]
        const line = createLine(positions, color, 1, 2, true);
        line.userData.warn = warn;
        let z = 0
        if (index === 3) {
            z = (i - 1) * ((areaLength * 0.6) / 2);
        } if (index === 2) {
            z = (i - 0.5) * (areaLength * 0.5);
        }

        line.position.z = z
        group.add(line)
    }
    return group
}


const tagsGroup = new THREE.Group();
scene.add(tagsGroup);

(() => {
    warningPos.forEach((item) => {
        const warn = item.warn
        const { group: tagGroup } = createTag(3, warn ? 0xff8838 : 0x0384fc, warn);
        tagsGroup.add(tagGroup);
        tagGroup.position.fromArray(item.position)

    })
}
)();


const chageColor = (color: any, isWarn: boolean) => {
    tagsGroup.traverse((mesh: any) => {
        if (mesh.userData.warn === isWarn && mesh.isLine2) {
            console.log(mesh.material)
            mesh.material.color.set(color);
        }
    })
}
tagColor.onChange((value: string) => {
    chageColor(value, false)
})
tagWarnColor.onChange((value: string) => {
    chageColor(value, true)
})
