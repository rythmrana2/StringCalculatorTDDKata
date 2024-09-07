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
    it("Provided '1,2\n5,10', should return 18", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2\n5,10")).toEqual(18);
    });
    it("Provided '1,2\n5\n100', should return 108", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("1,2\n5\n100")).toEqual(108);
    });
    it("Provided '//;\n1;2;5;100', should return 108", () => {
        let stringCalculator = new StringCalculator();
        expect(stringCalculator.Add("//;\n1;2;5;100")).toEqual(108);
    });
    it("Provided '//;\n1;2\n5;-4', should throw exception 'negatives not allowed -4'", () => {
        let stringCalculator = new StringCalculator();
        expect(() => { stringCalculator.Add("//;\n1;2\n5;-4") }).toThrowError("negatives not allowed -4");
    });
    it("Provided '//;\n1;2\n5;-4\n-10', should throw exception 'negatives not allowed -4, -10'", () => {
        let stringCalculator = new StringCalculator();
        expect(() => { stringCalculator.Add("//;\n1;2\n5;-4\n-10") }).toThrowError("negatives not allowed -4, -10");
    });
});