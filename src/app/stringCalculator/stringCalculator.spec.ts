import { StringCalculator } from "./stringCalculator";

describe("StringCalculatorTddKata", () => {
    it("Class instance should get created", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator).toEqual(jasmine.any(StringCalculator));
    });
});