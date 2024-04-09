import { CSS3DObject } from "three/examples/jsm/renderers/CSS3DRenderer";

export const createCss3d = (html: string, classname?: string): CSS3DObject => {
    let div = document.createElement('div');
    div.innerHTML = html;
    classname && div.classList.add(classname)
    let object = new CSS3DObject(div);
    return object
}