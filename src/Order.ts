import ApplayTax from "./ApplayTax";
import Item from "./Item";
import TaxItem from "./TaxItem";

// Se Cigar/Beer/Water é subclasse de Item, os objetos do tipo Item podem ser substituidos por instancias de Cigar/Beer/Water SEM QUEBRAR O PROGRAMA
export default class Order {
    code: string;
    items: Item[];

    constructor () {
        this.code = `${Math.floor(Math.random() * 100000)}`;
        this.items = [];
    }

    addItem (item: Item) {
        this.items.push(item);
    }

    getSubtotal () {
        return this.items
            .map(item=>item.price)
            .reduce((a, v) => a+v);
    }

    getTaxes (date: Date) {
       return this.items
            .map(item => new ApplayTax(item).calcule(date))
            .reduce((a, v) => a+v);
    }

    getTotal (date: Date) {
        return this.getSubtotal() + this.getTaxes(date);
    }
}
