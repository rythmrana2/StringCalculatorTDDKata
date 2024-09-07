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

    it("Provided 1, should return 1", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1")).toEqual(1);
    });
    it("Provided '1,2', should return 3", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2")).toEqual(3);
    });
    it("Provided '1,2,5,10', should return 18", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2,5,10")).toEqual(18);
    });
});