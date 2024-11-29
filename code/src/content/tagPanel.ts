import { CSS2DObject } from 'three/examples/jsm/Addons.js';
export const createTagPanel = () => {
    const div = document.createElement('div');
    div.classList.add('tag-panel');
    const label = new CSS2DObject(div);
    div.innerHTML = `
    <div>
      <div class="alarm">
        <span class="iconfont icon-alarm">&#xe601;</span>
        <span>Level 1 alarm</span>
      </div>
      <div class="text">The alarm is triggered by the abnormal operation of the equipment</div>
      <div class="btn">crisis</div>
      <div class="point1"></div>
      <div class="point2"></div>
      <div class="point3"></div>
      <div class="point4"></div>
    </div>
    `
    label.position.set(0,0.3,0);
    return label;
}

