import { sum } from "../helpers/sum";

describe("the sum function", () => {
    test("two plus two is four", () => {
        expect(sum([2,2])).toBe(4);
    });
    test("minuts eight plus four is minus four", () => {
        expect(sum([-8,4])).toBe(-4);
    });
    test("two plus two plus minus four is zero", () => {
        expect(sum([2,2,-4])).toBe(0);
    });
});
