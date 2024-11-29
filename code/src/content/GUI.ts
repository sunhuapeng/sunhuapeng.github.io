import GUI from "three/examples/jsm/libs/lil-gui.module.min.js";

const gui = new GUI({ container: document.getElementById('gui') as HTMLElement, width: 300, title: '地图配置' });
export const guiParams = {
    shapeColor: 0xffffff,
    shapeColor2: 0xffffff,
    firstColor: 0x181823,
    secondColor: 0x69a1dd,
    fourthColor: 0x69a1dd,
    fifthColor: 0x69a1dd,
    sixthColor: 0x69a1dd,
    isLight: true,
    tagColor: '#ffffff',
    tagWarnColor: '#ffffff',
    rotationFactor: 0.01
};

const shapeColor = gui.addColor(guiParams, 'shapeColor')
shapeColor.name('顶面颜色')
export { shapeColor }
const shapeColor2 = gui.addColor(guiParams, 'shapeColor2')
shapeColor2.name('侧面颜色')
export { shapeColor2 }

const firstColor = gui.addColor(guiParams, 'firstColor')
firstColor.name('线条颜色')
export { firstColor }

const secondColor = gui.addColor(guiParams, 'secondColor')
secondColor.name('线条颜色')
export { secondColor }

const fourthColor = gui.addColor(guiParams, 'fourthColor')
fourthColor.name('线条颜色')
export { fourthColor }

const fifthColor = gui.addColor(guiParams, 'fifthColor')
fifthColor.name('线条颜色')
export { fifthColor }

const sixthColor = gui.addColor(guiParams, 'sixthColor')
sixthColor.name('线条颜色')
export { sixthColor }

const isLight = gui.add(guiParams, 'isLight')
isLight.name('是否发光')
export { isLight }

const tagColor = gui.addColor(guiParams, 'tagColor')
tagColor.name('标记颜色')
export { tagColor }

const tagWarnColor = gui.addColor(guiParams, 'tagWarnColor')
tagWarnColor.name('标记告警颜色');
export { tagWarnColor }

const rotationFactor = gui.add(guiParams, 'rotationFactor', 0.01, 0.9, 0.01)
rotationFactor.name('旋转速度');
export { rotationFactor as rotationFactorValue }
