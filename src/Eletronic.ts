import TaxItem from "./TaxItem";

export default class Eletronic extends TaxItem {
    constructor (description: string, price: number) {
        super("Eletronic", description, price);
    }

    getTax(date: Date): number {
        return 0.5;
    }
}
