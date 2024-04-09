import * as THREE from "three";
import { Crossbow_level, Rifle_level } from "./loadmodels";
import { crossbow_coefficient, rifle_coefficient, weaponGroup } from "./variable";
import { wallet } from "./wallet";
import { RIFLE_MODEL_TYPE, CROSSBOW_MODEL_TYPE } from "./dictionary";
import { message } from "../utils";


// 添加模型
export const addModel = (pos: THREE.Vector3, type: CROSSBOW_MODEL_TYPE | RIFLE_MODEL_TYPE, level = 1, ConsumptionType?: 'upload' | 'add') => {

    let meshExample
    let price = 0
    if (type === CROSSBOW_MODEL_TYPE) {
        price = crossbow_coefficient * level

        if (price > wallet.money) {
            console.log('金币不足');
            message('金币不足', 'error')
        } else {
            meshExample = new Crossbow_level(level, pos)
        }
    } else if (type === RIFLE_MODEL_TYPE) {
        price = rifle_coefficient * level
        if (rifle_coefficient * level > wallet.money) {
            console.log('金币不足');
            message('金币不足', 'error')
        } else {
            meshExample = new Rifle_level(level, pos)
        }
    }

    if (meshExample) {
        const price = ConsumptionType === 'upload' ? meshExample.WeaponData.Upgrade_Price : meshExample.WeaponData.Purchase_Price
        console.log('price',price);
        
        wallet.sub(price)
        weaponGroup.add(meshExample.group)
        
        return true
    }
    return false
}