import { Hue } from "../src/hue";
import { SoilColor } from "../src/soil-color";
import { ArgumentError, ParseError } from "../src/consts/errors";

describe("SoilColor", () => {
  // =============== Factory Methods ===============
  describe("all", () => {
    test("normal patterns", () => {
      let colors: SoilColor[] = SoilColor.all();
      expect(colors.length).toBe(389);

      colors = SoilColor.all("N");
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isN())).toBeTruthy();

      colors = SoilColor.all("N", "10YR");
      expect(colors.length).toBe(8 + 37);
      expect(colors.every(color => color.isN() || color.isYR(10))).toBeTruthy();
    });

    test("undefined hue will be skipped", () => {
      const colors = SoilColor.all("N", "2.5R", "5R");
      expect(colors.length).toBe(8 + 0 + 7);
      expect(colors.every(color => color.isN() || color.isR(5))).toBeTruthy();
    });

    test("basic color can be passed as args", () => {
      let colors = SoilColor.all("N", "R");
      expect(colors.length).toBe(8 + 56);
      expect(colors.every(color => color.isN() || color.isR())).toBeTruthy();

      colors = SoilColor.all("N", "R", "5R");
      expect(colors.length).toBe(8 + 56);
      expect(colors.every(color => color.isN() || color.isR())).toBeTruthy();
    });

    test("undefined basic color will be skipped", () => {
      const colors = SoilColor.all("K", "R", "RP");
      expect(colors.length).toBe(0 + 56 + 7);
      expect(colors.every(color => color.isR() || color.isRP()));
    });
  });

  // ---------- N ----------
  describe("$N", () => {
    test("create N", () => {
      const hue = new Hue("N");
      expect(SoilColor.$N(8).equals(new SoilColor(hue, 8, 0))).toBeTruthy();
    });
  });

  // ---------- R ----------
  describe("$5R", () => {
    test("create 5R", () => {
      const hue = new Hue("R", 5);
      expect(SoilColor.$5R(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$7_5R", () => {
    test("create 7.5R", () => {
      const hue = new Hue("R", 7.5);
      expect(SoilColor.$7_5R(6, 2).equals(new SoilColor(hue, 6, 2))).toBeTruthy();
    });
  });

  describe("$10R", () => {
    test("create 10R", () => {
      const hue = new Hue("R", 10);
      expect(SoilColor.$10R(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  // ---------- YR ----------
  describe("$2_5YR", () => {
    test("create 2.5YR", () => {
      const hue = new Hue("YR", 2.5);
      expect(SoilColor.$2_5YR(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  describe("$5YR", () => {
    test("create 5YR", () => {
      const hue = new Hue("YR", 5);
      expect(SoilColor.$5YR(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  describe("$7_5YR", () => {
    test("create 7.5YR", () => {
      const hue = new Hue("YR", 7.5);
      expect(SoilColor.$7_5YR(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  describe("$10YR", () => {
    test("create 10YR", () => {
      const hue = new Hue("YR", 10);
      expect(SoilColor.$10YR(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  // ---------- Y ----------
  describe("$2_5Y", () => {
    test("create 2.5Y", () => {
      const hue = new Hue("Y", 2.5);
      expect(SoilColor.$2_5Y(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  describe("$5Y", () => {
    test("create 5Y", () => {
      const hue = new Hue("Y", 5);
      expect(SoilColor.$5Y(6, 4).equals(new SoilColor(hue, 6, 4))).toBeTruthy();
    });
  });

  describe("$7_5Y", () => {
    test("create 7.5Y", () => {
      const hue = new Hue("Y", 7.5);
      expect(SoilColor.$7_5Y(6, 3).equals(new SoilColor(hue, 6, 3))).toBeTruthy();
    });
  });

  describe("$10Y", () => {
    test("create 10Y", () => {
      const hue = new Hue("Y", 10);
      expect(SoilColor.$10Y(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- GY ----------
  describe("$2_5GY", () => {
    test("Cerate 2.5GY", () => {
      const hue = new Hue("GY", 2.5);
      expect(SoilColor.$2_5GY(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$5GY", () => {
    test("create 5GY", () => {
      const hue = new Hue("GY", 5);
      expect(SoilColor.$5GY(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$7_5GY", () => {
    test("create 7.5GY", () => {
      const hue = new Hue("GY", 7.5);
      expect(SoilColor.$7_5GY(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$10GY", () => {
    test("create 10GY", () => {
      const hue = new Hue("GY", 10);
      expect(SoilColor.$10GY(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- G ----------
  describe("$5G", () => {
    test("create 5G", () => {
      const hue = new Hue("G", 5);
      expect(SoilColor.$5G(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$10G", () => {
    test("create 10G", () => {
      const hue = new Hue("G", 10);
      expect(SoilColor.$10G(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- BG ----------
  describe("$5BG", () => {
    test("create 5BG", () => {
      const hue = new Hue("BG", 5);
      expect(SoilColor.$5BG(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  describe("$10BG", () => {
    test("create 10BG", () => {
      const hue = new Hue("BG", 10);
      expect(SoilColor.$10BG(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- B ----------
  describe("$5B", () => {
    test("create 5B", () => {
      const hue = new Hue("B", 5);
      expect(SoilColor.$5B(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- PB ----------
  describe("$5PB", () => {
    test("create 5PB", () => {
      const hue = new Hue("PB", 5);
      expect(SoilColor.$5PB(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- P ----------
  describe("$5P", () => {
    test("create 5P", () => {
      const hue = new Hue("P", 5);
      expect(SoilColor.$5P(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // ---------- RP ----------
  describe("$5RP", () => {
    test("create 5RP", () => {
      const hue = new Hue("RP", 5);
      expect(SoilColor.$5RP(6, 1).equals(new SoilColor(hue, 6, 1))).toBeTruthy();
    });
  });

  // =============== Parse munsell string ===============
  describe("parse", () => {
    // normal patterns => see all-soil-color.test.ts

    describe("undefined Patterns", () => {
      test("basic color is undefined", () => {
        expect(() => { SoilColor.parse("K 1.7/") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("2.5C 3/4") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("5PR 7/1") }).toThrow(ParseError);
      });

      test("degree is undefined", () => {
        expect(() => { SoilColor.parse("2.4Y 8/6") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("1.5GY 5/1") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("2.5R 4/6") }).toThrow(ParseError);
      });

      test("hue has lowercase", () => {
        expect(() => { SoilColor.parse("n 7/") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10Yr 6/4") }).toThrow(ParseError);
      });

      test("value is undefined", () => {
        expect(() => { SoilColor.parse("N 1.5/0") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("5RP 1.5/1") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("5R 8/1") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10G 2.0/1") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("7.5GY 2.4/1") }).toThrow(ParseError);
      });

      test("chroma is undefined", () => {
        expect(() => { SoilColor.parse("5Y 5/5") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10YR 7/7") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10BG 2/1.0") }).toThrow(ParseError);
      });

      test("invalid format", () => {
        expect(() => { SoilColor.parse("N 2") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10 YR 4/6") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10YR4/6") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10YR 46") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("10YR46") }).toThrow(ParseError);
      });

      test("invalid string", () => {
        expect(() => { SoilColor.parse("reddish_brown") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("40264#C85") }).toThrow(ParseError);
        expect(() => { SoilColor.parse("") }).toThrow(ParseError);
      });
    });
  });

  // =============== Constructor ===============
  describe("constructor", () => {
    test("normal patterns", () => {
      expect(new SoilColor(new Hue("YR", 10), 4, 6).equals(SoilColor.$10YR(4, 6))).toBeTruthy();
      expect(new SoilColor("10YR", 4, 6).equals(SoilColor.$10YR(4, 6))).toBeTruthy();
    });

    test("invalid arguments", () => {
      expect(() => { new SoilColor("99YR", 4, 6) }).toThrow(ArgumentError);
      expect(() => { new SoilColor(new Hue("R", 2.5), 2, 1)}).toThrow(ArgumentError);
      expect(() => { new SoilColor(new Hue("N"), 1.7, 0) }).toThrow(ArgumentError);
    });
  });

  // =============== Instance Methods ===============
  describe("toString", () => {
    test("N", () => {
      expect(String(SoilColor.$N(8))).toBe("N 8/");
      expect(String(SoilColor.$N(8))).not.toBe("N 8/0");
    });

    test("except N", () => {
      expect(String(SoilColor.$10YR(4, 6))).toBe("10YR 4/6");
    });
  });

  describe("equals", () => {
    test("return true", () => {
      expect(SoilColor.$10YR(4, 6).equals("10YR 4/6")).toBeTruthy();
      expect(SoilColor.$10YR(4, 6).equals(SoilColor.$10YR(4, 6))).toBeTruthy();
    });

    // return false => see return true of notEquals
  });

  describe("notEquals", () => {
    test("return true", () => {
      expect(SoilColor.$10YR(4, 6).notEquals("10YR 6/4")).toBeTruthy();
      expect(SoilColor.$10YR(4, 6).notEquals(SoilColor.$10YR(6, 4))).toBeTruthy();
    });

    // return false => see return true of equals
  });

  describe("colorName", () => {
    const soilColor = SoilColor.$10YR(4, 1);

    test("no language specified", () => {
      expect(soilColor.colorName()).toBe("brownish_gray");
    });

    test("language specified", () => {
      expect(soilColor.colorName("en")).toBe("brownish gray");
      expect(soilColor.colorName("ja")).toBe("褐灰");
    });
  });

  describe("sameHueColors", () => {
    const soilColor = SoilColor.$10YR(4, 1)

    test("no includeMyself option specified", () => {
      const colors = soilColor.sameHueColors();
      expect(colors.length).toBe(36);
      expect(colors.every(color => color.isYR(10))).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeFalsy();
    });

    test("includeMyself option: true", () => {
      const colors = soilColor.sameHueColors({ includeMyself: true });
      expect(colors.length).toBe(37);
      expect(colors.every(color => color.isYR(10))).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeTruthy();
    });

    test("includeMyself option: false", () => {
      const colors = soilColor.sameHueColors({ includeMyself: false });
      expect(colors.length).toBe(36);
      expect(colors.every(color => color.isYR(10))).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeFalsy();
    });
  });

  describe("sameNameColors", () => {
    const soilColor = SoilColor.$2_5Y(8, 8);

    test("no includeMyself option specified", () => {
      const colors = soilColor.sameNameColors();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isYellow())).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeFalsy();
    });

    test("includeMyself option: true", () => {
      const colors = soilColor.sameNameColors({ includeMyself: true });
      expect(colors.length).toBe(7);
      expect(colors.every(color => color.isYellow())).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeTruthy();
    });

    test("includeMyself option: false", () => {
      const colors = soilColor.sameNameColors({ includeMyself: false });
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isYellow())).toBeTruthy();
      expect(colors.some(color => color.equals(soilColor))).toBeFalsy();
    });
  });

  describe("isHue", () => {
    const soilColor = SoilColor.$7_5R(5, 2);

    test("return true", () => {
      expect(soilColor.isHue("7.5R")).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isHue("10R")).toBeFalsy();
    });

    test("hue is undefined", () => {
      expect(() => { SoilColor.$7_5R(5, 2).isHue("2.5R") }).toThrow(ArgumentError);
    });
  });

  describe("isColorName", () => {
    const soilColor = SoilColor.$7_5R(5, 2);

    test("return true", () => {
      expect(soilColor.isColorName("grayish_red")).toBeTruthy(); 
    });

    test("return false", () => {
      expect(soilColor.isColorName("reddish_gray")).toBeFalsy();
    });

    test("color name is undefined", () => {
      expect(soilColor.isColorName("cyan")).toBeFalsy();
      expect(soilColor.isColorName("magenta")).toBeFalsy();
    });
  });

  describe("isSameColor", () => {
    const soilColor = SoilColor.$10YR(4, 6);

    test("return true", () => {
      expect(soilColor.isSameColor(SoilColor.$10YR(4, 6))).toBeTruthy();
      expect(soilColor.isSameColor(SoilColor.$7_5YR(4, 3))).toBeTruthy();
      expect(soilColor.isSameColor("7.5YR 4/3")).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isSameColor(SoilColor.$7_5YR(3, 4))).toBeFalsy();
      expect(soilColor.isSameColor("7.5YR 3/4")).toBeFalsy();
    });

    test("soil color is undefined", () => {
      expect(() => { soilColor.isSameColor("2.5R 4/6") }).toThrow(ParseError);
      expect(() => { soilColor.isSameColor("7.5R 6/4") }).toThrow(ParseError);
    });
  });

  describe("toAchromatic", () => {
    test("chromatic color => achromatic color: N", () => {
      expect(SoilColor.$5R(1.7, 1).toAchromatic().equals(SoilColor.$N(1.5))).toBeTruthy();
      expect(SoilColor.$2_5YR(2, 3).toAchromatic().equals(SoilColor.$N(2))).toBeTruthy();
      expect(SoilColor.$5Y(3, 2).toAchromatic().equals(SoilColor.$N(3))).toBeTruthy();
      expect(SoilColor.$7_5GY(4, 1).toAchromatic().equals(SoilColor.$N(4))).toBeTruthy();
      expect(SoilColor.$10G(5, 1).toAchromatic().equals(SoilColor.$N(5))).toBeTruthy();
      expect(SoilColor.$7_5R(6, 2).toAchromatic().equals(SoilColor.$N(6))).toBeTruthy();
      expect(SoilColor.$2_5Y(7, 6).toAchromatic().equals(SoilColor.$N(7))).toBeTruthy();
      expect(SoilColor.$10YR(8, 8).toAchromatic().equals(SoilColor.$N(8))).toBeTruthy();
    });
  });

  // =============== Brightness and Saturation ===============
  describe("isLightest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(5, 3).isLightest()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 3).isLightest()).toBeFalsy();
    });
  });

  describe("isDarkest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(2, 3).isDarkest()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 3).isDarkest()).toBeFalsy();
    });
  });

  describe("isPalest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 1).isPalest()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 3).isPalest()).toBeFalsy();
    });
  });

  describe("isVividest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 8).isVividest()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 3).isVividest()).toBeFalsy();
    });
  });

  describe("lightest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 3).lightest().equals(SoilColor.$7_5R(5, 3))).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(5, 3).lightest().equals(SoilColor.$7_5R(5, 3))).toBeTruthy();
    });
  });

  describe("darkest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 3).darkest().equals(SoilColor.$7_5R(2, 3))).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(2, 3).darkest().equals(SoilColor.$7_5R(2, 3))).toBeTruthy();
    });
  });

  describe("palest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 3).palest().equals(SoilColor.$7_5R(4, 1))).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 1).palest().equals(SoilColor.$7_5R(4, 1))).toBeTruthy();
    });
  });

  describe("vividest", () => {
    test("return true", () => {
      expect(SoilColor.$7_5R(4, 3).vividest().equals(SoilColor.$7_5R(4, 8))).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$7_5R(4, 8).vividest().equals(SoilColor.$7_5R(4, 8))).toBeTruthy();
    });
  });

  describe("lighter", () => {
    test("no step specified", () => {
      expect(SoilColor.$7_5R(4, 2).lighter()?.equals(SoilColor.$7_5R(5, 2))).toBeTruthy();
    });

    test("step > 0", () => {
      expect(SoilColor.$7_5R(4, 2).lighter(1)?.equals(SoilColor.$7_5R(5, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).lighter(2)?.equals(SoilColor.$7_5R(6, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).lighter(3)).toBeUndefined();
    });

    test("step = 0", () => {
      expect(SoilColor.$7_5R(4, 2).lighter(0)?.equals(SoilColor.$7_5R(4, 2))).toBeTruthy();
    });

    test("step < 0", () => {
      expect(SoilColor.$7_5R(4, 2).lighter(-1)?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).lighter(-2)?.equals(SoilColor.$7_5R(2, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).lighter(-3)).toBeUndefined();
    });

    test("this is lightest", () => {
      expect(SoilColor.$7_5R(6, 2).lighter()).toBeUndefined();
      expect(SoilColor.$7_5R(6, 2).lighter(1)).toBeUndefined();
    });

    test("this is darkest", () => {
      expect(SoilColor.$7_5R(2, 2).lighter(-1)).toBeUndefined();
    });

    test("step is decimals", () => {
      expect(() => { SoilColor.$7_5R(4, 2).lighter(1.5) }).toThrow(ArgumentError);
    });
  });

  describe("darker", () => {
    test("no step specified", () => {
      expect(SoilColor.$7_5R(4, 2).darker()?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
    });

    test("step > 0", () => {
      expect(SoilColor.$7_5R(4, 2).darker(1)?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).darker(2)?.equals(SoilColor.$7_5R(2, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).darker(3)).toBeUndefined();
    });

    test("step = 0", () => {
      expect(SoilColor.$7_5R(4, 2).darker(0)?.equals(SoilColor.$7_5R(4, 2))).toBeTruthy();
    });

    test("step < 0", () => {
      expect(SoilColor.$7_5R(4, 2).darker(-1)?.equals(SoilColor.$7_5R(5, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).darker(-2)?.equals(SoilColor.$7_5R(6, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(4, 2).darker(-3)).toBeUndefined();
    });

    test("this is darkest", () => {
      expect(SoilColor.$7_5R(2, 2).darker()).toBeUndefined();
      expect(SoilColor.$7_5R(2, 2).darker(1)).toBeUndefined();
    });

    test("this is lightest", () => {
      expect(SoilColor.$7_5R(6, 2).darker(-1)).toBeUndefined();
    });

    test("step is decimals", () => {
      expect(() => { SoilColor.$7_5R(4, 2).darker(1.5) }).toThrow(ArgumentError);
    });
  });

  describe("paler", () => {
    test("no step specified", () => {
      expect(SoilColor.$7_5R(3, 3).paler()?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
    });

    test("step > 0", () => {
      expect(SoilColor.$7_5R(3, 3).paler(1)?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).paler(2)?.equals(SoilColor.$7_5R(3, 1))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).paler(3)).toBeUndefined();
    });

    test("step = 0", () => {
      expect(SoilColor.$7_5R(3, 3).paler(0)?.equals(SoilColor.$7_5R(3, 3))).toBeTruthy();
    });

    test("step < 0", () => {
      expect(SoilColor.$7_5R(3, 3).paler(-1)?.equals(SoilColor.$7_5R(3, 4))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).paler(-2)?.equals(SoilColor.$7_5R(3, 6))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).paler(-3)).toBeUndefined();
    });

    test("this is palest", () => {
      expect(SoilColor.$7_5R(3, 1).paler()).toBeUndefined();
      expect(SoilColor.$7_5R(3, 1).paler(1)).toBeUndefined();
    });

    test("this is vividest", () => {
      expect(SoilColor.$7_5R(3, 6).paler(-1)).toBeUndefined();
    });

    test("step is decimals", () => {
      expect(() => { SoilColor.$7_5R(3, 3).paler(1.5) }).toThrow(ArgumentError);
    });
  });

  describe("vivider", () => {
    test("no step specified", () => {
      expect(SoilColor.$7_5R(3, 3).vivider()?.equals(SoilColor.$7_5R(3, 4))).toBeTruthy();
    });

    test("step > 0", () => {
      expect(SoilColor.$7_5R(3, 3).vivider(1)?.equals(SoilColor.$7_5R(3, 4))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).vivider(2)?.equals(SoilColor.$7_5R(3, 6))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).vivider(3)).toBeUndefined();
    });

    test("step = 0", () => {
      expect(SoilColor.$7_5R(3, 3).vivider(0)?.equals(SoilColor.$7_5R(3, 3))).toBeTruthy();
    });

    test("step < 0", () => {
      expect(SoilColor.$7_5R(3, 3).vivider(-1)?.equals(SoilColor.$7_5R(3, 2))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).vivider(-2)?.equals(SoilColor.$7_5R(3, 1))).toBeTruthy();
      expect(SoilColor.$7_5R(3, 3).vivider(-3)).toBeUndefined();
    });

    test("this is palest", () => {
      expect(SoilColor.$7_5R(3, 6).vivider()).toBeUndefined();
      expect(SoilColor.$7_5R(3, 6).vivider(1)).toBeUndefined();
    });

    test("this is vividest", () => {
      expect(SoilColor.$7_5R(3, 1).vivider(-1)).toBeUndefined();
    });

    test("step is decimals", () => {
      expect(() => { SoilColor.$7_5R(3, 3).vivider(1.5) }).toThrow(ArgumentError);
    });
  });

  // =============== Hue Judgment ===============
  describe("isN", () => {
    test("return true", () => {
      const soilColor = SoilColor.$N(8);
      expect(soilColor.isN()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$10YR(7, 2).isN()).toBeFalsy();
    });
  });

  describe("isR", () => {
    const soilColor = SoilColor.$5R(6, 1);

    test("return true", () => {
      expect(soilColor.isR()).toBeTruthy();
      expect(soilColor.isR(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isR(7.5)).toBeFalsy();
      expect(SoilColor.$N(8).isR()).toBeFalsy();
    });
  });

  describe("isYR", () => {
    const soilColor = SoilColor.$2_5YR(6, 4);

    test("return true", () => {
      expect(soilColor.isYR()).toBeTruthy();
      expect(soilColor.isYR(2.5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isYR(5)).toBeFalsy();
      expect(SoilColor.$N(8).isYR()).toBeFalsy();
    });
  });

  describe("isY", () => {
    const soilColor = SoilColor.$2_5Y(6, 4);

    test("return true", () => {
      expect(soilColor.isY()).toBeTruthy();
      expect(soilColor.isY(2.5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isY(5)).toBeFalsy();
      expect(SoilColor.$N(8).isY()).toBeFalsy();
    });
  });

  describe("isGY", () => {
    const soilColor = SoilColor.$2_5GY(6, 1);

    test("return true", () => {
      expect(soilColor.isGY()).toBeTruthy();
      expect(soilColor.isGY(2.5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isGY(5)).toBeFalsy();
      expect(SoilColor.$N(8).isGY()).toBeFalsy();
    });
  });

  describe("isG", () => {
    const soilColor = SoilColor.$5G(6, 1);

    test("return true", () => {
      expect(soilColor.isG()).toBeTruthy();
      expect(soilColor.isG(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isG(10)).toBeFalsy();
      expect(SoilColor.$N(8).isG()).toBeFalsy();
    });
  });

  describe("isBG", () => {
    const soilColor = SoilColor.$5BG(6, 1);

    test("return true", () => {
      expect(soilColor.isBG()).toBeTruthy();
      expect(soilColor.isBG(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(soilColor.isBG(10)).toBeFalsy();
      expect(SoilColor.$N(8).isBG()).toBeFalsy();
    });
  });

  describe("isB", () => {
    const soilColor = SoilColor.$5B(6, 1);

    test("return true", () => {
      expect(soilColor.isB()).toBeTruthy();
      expect(soilColor.isB(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$N(8).isB()).toBeFalsy();
    });
  });

  describe("isPB", () => {
    const soilColor = SoilColor.$5PB(6, 1);

    test("return true", () => {
      expect(soilColor.isPB()).toBeTruthy();
      expect(soilColor.isPB(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$N(8).isPB()).toBeFalsy();
    });
  });

  describe("isP", () => {
    const soilColor = SoilColor.$5P(6, 1);

    test("return true", () => {
      expect(soilColor.isP()).toBeTruthy();
      expect(soilColor.isP(5)).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$N(8).isP()).toBeFalsy();
    });
  });

  describe("isRP", () => {
    const soilColor = SoilColor.$5RP(6, 1);

    test("return true", () => {
      expect(soilColor.isRP()).toBeTruthy();
      expect(soilColor.isRP(5)).toBeTruthy();
    });

    test("False", () => {
      expect(SoilColor.$N(8).isRP()).toBeFalsy();
    });
  });

  describe("isAchromatic", () => {
    test("return true", () => {
      expect(SoilColor.$N(8).isAchromatic()).toBeTruthy();
    });

    test("return false", () => {
      expect(SoilColor.$10YR(4, 6).isAchromatic()).toBeFalsy();
    });
  });

  describe("isChromatic", () => {
    test("return true", () => {
      expect(SoilColor.$N(8).isChromatic()).toBeFalsy();
    });

    test("return false", () => {
      expect(SoilColor.$10YR(4, 6).isChromatic()).toBeTruthy();
    });
  });
});
