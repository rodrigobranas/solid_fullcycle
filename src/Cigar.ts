import TaxItem from "./TaxItem";

export default class Cigar extends TaxItem {
    constructor (description: string, price: number) {
        super("Cigar", description, price);
    }

    getTax(date: Date): number {
        const jan = 0;
        if (date.getMonth() === jan) return 0.1;
        return 0.2;
    }
}
