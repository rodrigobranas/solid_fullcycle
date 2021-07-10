import TaxItem from "./TaxItem";

export default class Beer extends TaxItem {
    constructor (description: string, price: number) {
        super("Beer", description, price);
    }

    getTax(date: Date): number {
        return 0.1;
    }
}
