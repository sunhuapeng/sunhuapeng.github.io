import { Money } from "./variable";

// 钱包实例
class Wallet {
    money: number = Money;
    moneyDom: HTMLDivElement | undefined
    constructor() {
        const dom = document.querySelector('.money') as HTMLDivElement | undefined
        if (dom) {
            this.moneyDom = dom;
            this.changeText()
        }
    }
    add(money: number) {
        this.money += money;
        this.changeText()
    }
    sub(money: number) {
        if (this.money < money) {
            return false
        } else {
            this.money -= money;
            this.changeText()
        }
        return true
    }
    changeText() {
        if (this.moneyDom) {
            this.moneyDom.innerText = this.money + '金币'
        }
    }
}
export const wallet = new Wallet()