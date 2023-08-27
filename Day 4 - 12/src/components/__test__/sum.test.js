import { sum } from "../sum";

//! This is JS testing
test("Check sum of two positive numbers", () => {
    expect(sum(2, 5)).toBe(7); //* find about .notToBe
})  