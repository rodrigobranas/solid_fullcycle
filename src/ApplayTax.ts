import Item from "./Item";
import TaxItem from "./TaxItem";

export default class ApplayTax {
    private item: Item;

    constructor(item: Item) {
        this.item = item;
    }

    calcule(date: Date) {
        if (this.isTax(this.item)) {
            return (this.item as TaxItem).calculateTaxes(date);
        }
        return 0;
    }
    isTax(item: Item) {
        return item instanceof TaxItem;
    }
}
