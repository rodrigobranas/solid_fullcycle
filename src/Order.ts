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
        let total = 0;
        for (const item of this.items) {
            total += item.price;
        }
        return total;
    }

    getTaxes (date: Date) {
        let taxes = 0;
        for (const item of this.items) {
            if (item instanceof TaxItem) {
                taxes += item.calculateTaxes(date);
            }
        }
        return taxes;
    }

    getTotal (date: Date) {
        return this.getSubtotal() + this.getTaxes(date);
    }
}
