import ApplayTax from "./ApplayTax";
import Beer from "./Beer";
import Cigar from "./Cigar";
import Water from "./Water";

test('Should calculate taxes of cigar', function () {
    const tax = new ApplayTax(new Cigar("Marlboro", 10));
    const taxes = tax.calcule(new Date("2021-07-09"));
    expect(taxes).toBe(2);
});
test('Should calculate taxes of cigar in january', function () {
    const tax = new ApplayTax(new Cigar("Marlboro", 10));
    const taxes = tax.calcule(new Date("2021-01-09"));
    expect(taxes).toBe(1);
});
test('Should calculate taxes of beer', function () {
    const tax = new ApplayTax(new Beer("Itaipava", 5));
    const taxes = tax.calcule(new Date("2021-09-09"));
    expect(taxes).toBe(0.5);
});
test('Should calculate taxes of water', function () {
    const tax = new ApplayTax(new Water("Crystal 300ml", 2));
    const taxes = tax.calcule(new Date("2021-07-09"));
    expect(taxes).toBe(0);
});

