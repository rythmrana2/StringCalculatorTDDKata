import { StringCalculator } from "./stringCalculator";

describe("StringCalculatorTddKata", () => {
    it("Class instance should get created", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator).toEqual(jasmine.any(StringCalculator));
    });

    it("Provided an empty string, should return 0", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("")).toEqual(0);
    });
});