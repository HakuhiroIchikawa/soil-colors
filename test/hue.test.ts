import { Hue } from "../src/hue";
import { ArgumentError, ParseError } from "../src/consts/errors";

describe("Hue", () => {
  describe("parse", () => {
    test("N patterns", () => {
      expect(Hue.parse("N").equals(Hue.$N())).toBeTruthy();
    });

    test("5R patterns", () => {
      expect(Hue.parse("5R").equals(Hue.$R(5))).toBeTruthy();
      expect(Hue.parse("5Y").equals(Hue.$Y(5))).toBeTruthy();
      expect(Hue.parse("5G").equals(Hue.$G(5))).toBeTruthy();
      expect(Hue.parse("5B").equals(Hue.$B(5))).toBeTruthy();
      expect(Hue.parse("5P").equals(Hue.$P(5))).toBeTruthy();
    });

    test("7.5R patterns", () => {
      expect(Hue.parse("7.5R").equals(Hue.$R(7.5))).toBeTruthy();
      expect(Hue.parse("2.5Y").equals(Hue.$Y(2.5))).toBeTruthy();
      expect(Hue.parse("7.5Y").equals(Hue.$Y(7.5))).toBeTruthy();
    });

    test("10R patterns", () => {
      expect(Hue.parse("10R").equals(Hue.$R(10))).toBeTruthy();
      expect(Hue.parse("10Y").equals(Hue.$Y(10))).toBeTruthy();
      expect(Hue.parse("10G").equals(Hue.$G(10))).toBeTruthy();
    });

    test("2.5YR patterns", () => {
      expect(Hue.parse("2.5YR").equals(Hue.$YR(2.5))).toBeTruthy();
      expect(Hue.parse("7.5YR").equals(Hue.$YR(7.5))).toBeTruthy();
      expect(Hue.parse("2.5GY").equals(Hue.$GY(2.5))).toBeTruthy();
      expect(Hue.parse("7.5GY").equals(Hue.$GY(7.5))).toBeTruthy();
    });

    test("5YR patterns", () => {
      expect(Hue.parse("5YR").equals(Hue.$YR(5))).toBeTruthy();
      expect(Hue.parse("5GY").equals(Hue.$GY(5))).toBeTruthy();
      expect(Hue.parse("5BG").equals(Hue.$BG(5))).toBeTruthy();
      expect(Hue.parse("5PB").equals(Hue.$PB(5))).toBeTruthy();
      expect(Hue.parse("5RP").equals(Hue.$RP(5))).toBeTruthy();
    });

    test("10YR patterns", () => {
      expect(Hue.parse("10YR").equals(Hue.$YR(10))).toBeTruthy();
      expect(Hue.parse("10GY").equals(Hue.$GY(10))).toBeTruthy();
      expect(Hue.parse("10BG").equals(Hue.$BG(10))).toBeTruthy();
    })

    test("basic Color is undefined", () => {
      expect(() => { Hue.parse("K") }).toThrow(ParseError);
      expect(() => { Hue.parse("2.5C") }).toThrow(ParseError);
      expect(() => { Hue.parse("5PR") }).toThrow(ParseError);
    });

    test("degree is undefined", () => {
      expect(() => { Hue.parse("2.4Y") }).toThrow(ParseError);
      expect(() => { Hue.parse("1.5GY") }).toThrow(ParseError);
      expect(() => { Hue.parse("2.5R") }).toThrow(ParseError);
    });

    test("hue has lowercase", () => {
      expect(() => { Hue.parse("n") }).toThrow(ParseError);
      expect(() => { Hue.parse("10Yr") }).toThrow(ParseError);
    });

    test("invalid format", () => {
      expect(() => { Hue.parse("10 YR") }).toThrow(ParseError);
    });

    test("invalid string", () => {
        expect(() => { Hue.parse("") }).toThrow(ParseError);
    });
  });

  describe("constructor", () => {
    // Normal Patterns => see other test files

    test("invalid arguments", () => {
      expect(() => { new Hue("N", 2.5) }).toThrow(ArgumentError);
      expect(() => { new Hue("R", 2.5) }).toThrow(ArgumentError);
      expect(() => { new Hue("YR") }).toThrow(ArgumentError);
    });
  });

  describe("equals", () => {
    test("return true", () => {
      let hue = Hue.$YR(10);
      expect(hue.equals("10YR")).toBeTruthy();
      expect(hue.equals(Hue.$YR(10))).toBeTruthy();

      hue = Hue.$N();
      expect(hue.equals("N")).toBeTruthy();
      expect(hue.equals(Hue.$N())).toBeTruthy();
    });

    test("return false", () => {
      const hue = Hue.$YR(10);
      expect(hue.equals("5YR")).toBeFalsy();
      expect(hue.equals(Hue.$YR(5))).toBeFalsy();
    });
  });

  describe("notEquals", () => {
    test("return true", () => {
      const hue = Hue.$YR(10);
      expect(hue.notEquals("5YR")).toBeTruthy();
      expect(hue.notEquals(Hue.$YR(5))).toBeTruthy();
    });

    test("return false", () => {
      const hue = Hue.$YR(10);
      expect(hue.notEquals("10YR")).toBeFalsy();
      expect(hue.notEquals(Hue.$YR(10))).toBeFalsy();
    });
  });
});
