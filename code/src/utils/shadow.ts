
export const castShadow = (object: any) => {
    if (object.isGroup) {
        object.traverse(function (object: THREE.Mesh) {
            if (object.isMesh) {
                object.castShadow = true;
                // object.receiveShadow = true
            }
        });
    } else {
        // object.receiveShadow = true
        object.castShadow = true;
    }
}

export const renderShadow = (object: any) => {
    if (object.isGroup) {
        object.traverse(function (object: THREE.Mesh) {
            if (object.isMesh) {
                object.castShadow = true;
                object.receiveShadow = true
            }
        });
    } else {
        object.receiveShadow = true
        object.castShadow = true;
    }
}
