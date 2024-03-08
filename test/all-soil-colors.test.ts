import { SoilColor } from "../src/soil-color";

describe("N", () => {
  test("munsell - color name", () => {
    expect(SoilColor.$N(1.5).name).toBe("black");
    expect(SoilColor.$N(2).name).toBe("black");
    expect(SoilColor.$N(3).name).toBe("dark_gray");
    expect(SoilColor.$N(4).name).toBe("gray");
    expect(SoilColor.$N(5).name).toBe("gray");
    expect(SoilColor.$N(6).name).toBe("gray");
    expect(SoilColor.$N(7).name).toBe("grayish_white");
    expect(SoilColor.$N(8).name).toBe("grayish_white");
  });

  test("parsed munsell - munsell string", () => {
    expect(SoilColor.parse("N 1.5/").equals("N 1.5/")).toBeTruthy();
    expect(SoilColor.parse("N 2/").equals("N 2/")).toBeTruthy();
    expect(SoilColor.parse("N 3/").equals("N 3/")).toBeTruthy();
    expect(SoilColor.parse("N 4/").equals("N 4/")).toBeTruthy();
    expect(SoilColor.parse("N 5/").equals("N 5/")).toBeTruthy();
    expect(SoilColor.parse("N 6/").equals("N 6/")).toBeTruthy();
    expect(SoilColor.parse("N 7/").equals("N 7/")).toBeTruthy();
    expect(SoilColor.parse("N 8/").equals("N 8/")).toBeTruthy();
  });
});

describe("R", () => {
  describe("5R", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5R(1.7, 1).name).toBe("reddish_black");
      expect(SoilColor.$5R(2, 1).name).toBe("reddish_black");
      expect(SoilColor.$5R(3, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$5R(4, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$5R(5, 1).name).toBe("reddish_gray");
      expect(SoilColor.$5R(6, 1).name).toBe("reddish_gray");
      expect(SoilColor.$5R(7, 1).name).toBe("light_reddish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5R 1.7/1").equals("5R 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("5R 2/1").equals("5R 2/1")).toBeTruthy();
      expect(SoilColor.parse("5R 3/1").equals("5R 3/1")).toBeTruthy();
      expect(SoilColor.parse("5R 4/1").equals("5R 4/1")).toBeTruthy();
      expect(SoilColor.parse("5R 5/1").equals("5R 5/1")).toBeTruthy();
      expect(SoilColor.parse("5R 6/1").equals("5R 6/1")).toBeTruthy();
      expect(SoilColor.parse("5R 7/1").equals("5R 7/1")).toBeTruthy();
    });
  });

  describe("7.5R", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$7_5R(1.7, 1).name).toBe("reddish_black");
      expect(SoilColor.$7_5R(2, 1).name).toBe("reddish_black");
      expect(SoilColor.$7_5R(2, 2).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$7_5R(2, 3).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$7_5R(3, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$7_5R(3, 2).name).toBe("dark_reddish_brown");
      expect(SoilColor.$7_5R(3, 3).name).toBe("dark_reddish_brown");
      expect(SoilColor.$7_5R(3, 4).name).toBe("dark_red");
      expect(SoilColor.$7_5R(3, 6).name).toBe("dark_red");
      expect(SoilColor.$7_5R(4, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$7_5R(4, 2).name).toBe("grayish_red");
      expect(SoilColor.$7_5R(4, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$7_5R(4, 4).name).toBe("dusky_red");
      expect(SoilColor.$7_5R(4, 6).name).toBe("red");
      expect(SoilColor.$7_5R(4, 8).name).toBe("red");
      expect(SoilColor.$7_5R(5, 1).name).toBe("reddish_gray");
      expect(SoilColor.$7_5R(5, 2).name).toBe("grayish_red");
      expect(SoilColor.$7_5R(5, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$7_5R(6, 1).name).toBe("reddish_gray");
      expect(SoilColor.$7_5R(6, 2).name).toBe("grayish_red");
      expect(SoilColor.$7_5R(7, 1).name).toBe("light_reddish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("7.5R 1.7/1").equals("7.5R 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 2/1").equals("7.5R 2/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 2/2").equals("7.5R 2/2")).toBeTruthy();
      expect(SoilColor.parse("7.5R 2/3").equals("7.5R 2/3")).toBeTruthy();
      expect(SoilColor.parse("7.5R 3/1").equals("7.5R 3/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 3/2").equals("7.5R 3/2")).toBeTruthy();
      expect(SoilColor.parse("7.5R 3/3").equals("7.5R 3/3")).toBeTruthy();
      expect(SoilColor.parse("7.5R 3/4").equals("7.5R 3/4")).toBeTruthy();
      expect(SoilColor.parse("7.5R 3/6").equals("7.5R 3/6")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/1").equals("7.5R 4/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/2").equals("7.5R 4/2")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/3").equals("7.5R 4/3")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/4").equals("7.5R 4/4")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/6").equals("7.5R 4/6")).toBeTruthy();
      expect(SoilColor.parse("7.5R 4/8").equals("7.5R 4/8")).toBeTruthy();
      expect(SoilColor.parse("7.5R 5/1").equals("7.5R 5/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 5/2").equals("7.5R 5/2")).toBeTruthy();
      expect(SoilColor.parse("7.5R 5/3").equals("7.5R 5/3")).toBeTruthy();
      expect(SoilColor.parse("7.5R 6/1").equals("7.5R 6/1")).toBeTruthy();
      expect(SoilColor.parse("7.5R 6/2").equals("7.5R 6/2")).toBeTruthy();
      expect(SoilColor.parse("7.5R 7/1").equals("7.5R 7/1")).toBeTruthy();
    });
  });

  describe("10R", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10R(1.7, 1).name).toBe("reddish_black");
      expect(SoilColor.$10R(2, 1).name).toBe("reddish_black");
      expect(SoilColor.$10R(2, 2).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$10R(2, 3).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$10R(3, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$10R(3, 2).name).toBe("dark_reddish_brown");
      expect(SoilColor.$10R(3, 3).name).toBe("dark_reddish_brown");
      expect(SoilColor.$10R(3, 4).name).toBe("dark_red");
      expect(SoilColor.$10R(3, 6).name).toBe("dark_red");
      expect(SoilColor.$10R(4, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$10R(4, 2).name).toBe("grayish_red");
      expect(SoilColor.$10R(4, 3).name).toBe("reddish_brown");
      expect(SoilColor.$10R(4, 4).name).toBe("reddish_brown");
      expect(SoilColor.$10R(4, 6).name).toBe("red");
      expect(SoilColor.$10R(4, 8).name).toBe("red");
      expect(SoilColor.$10R(5, 1).name).toBe("reddish_gray");
      expect(SoilColor.$10R(5, 2).name).toBe("grayish_red");
      expect(SoilColor.$10R(5, 3).name).toBe("reddish_brown");
      expect(SoilColor.$10R(5, 4).name).toBe("reddish_brown");
      expect(SoilColor.$10R(5, 6).name).toBe("red");
      expect(SoilColor.$10R(5, 8).name).toBe("red");
      expect(SoilColor.$10R(6, 1).name).toBe("reddish_gray");
      expect(SoilColor.$10R(6, 2).name).toBe("grayish_red");
      expect(SoilColor.$10R(6, 3).name).toBe("dull_reddish_orange");
      expect(SoilColor.$10R(6, 4).name).toBe("dull_reddish_orange");
      expect(SoilColor.$10R(6, 6).name).toBe("reddish_orange");
      expect(SoilColor.$10R(6, 8).name).toBe("reddish_orange");
      expect(SoilColor.$10R(7, 1).name).toBe("light_reddish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10R 1.7/1").equals("10R 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("10R 2/1").equals("10R 2/1")).toBeTruthy();
      expect(SoilColor.parse("10R 2/2").equals("10R 2/2")).toBeTruthy();
      expect(SoilColor.parse("10R 2/3").equals("10R 2/3")).toBeTruthy();
      expect(SoilColor.parse("10R 3/1").equals("10R 3/1")).toBeTruthy();
      expect(SoilColor.parse("10R 3/2").equals("10R 3/2")).toBeTruthy();
      expect(SoilColor.parse("10R 3/3").equals("10R 3/3")).toBeTruthy();
      expect(SoilColor.parse("10R 3/4").equals("10R 3/4")).toBeTruthy();
      expect(SoilColor.parse("10R 3/6").equals("10R 3/6")).toBeTruthy();
      expect(SoilColor.parse("10R 4/1").equals("10R 4/1")).toBeTruthy();
      expect(SoilColor.parse("10R 4/2").equals("10R 4/2")).toBeTruthy();
      expect(SoilColor.parse("10R 4/3").equals("10R 4/3")).toBeTruthy();
      expect(SoilColor.parse("10R 4/4").equals("10R 4/4")).toBeTruthy();
      expect(SoilColor.parse("10R 4/6").equals("10R 4/6")).toBeTruthy();
      expect(SoilColor.parse("10R 4/8").equals("10R 4/8")).toBeTruthy();
      expect(SoilColor.parse("10R 5/1").equals("10R 5/1")).toBeTruthy();
      expect(SoilColor.parse("10R 5/2").equals("10R 5/2")).toBeTruthy();
      expect(SoilColor.parse("10R 5/3").equals("10R 5/3")).toBeTruthy();
      expect(SoilColor.parse("10R 5/4").equals("10R 5/4")).toBeTruthy();
      expect(SoilColor.parse("10R 5/6").equals("10R 5/6")).toBeTruthy();
      expect(SoilColor.parse("10R 5/8").equals("10R 5/8")).toBeTruthy();
      expect(SoilColor.parse("10R 6/1").equals("10R 6/1")).toBeTruthy();
      expect(SoilColor.parse("10R 6/2").equals("10R 6/2")).toBeTruthy();
      expect(SoilColor.parse("10R 6/3").equals("10R 6/3")).toBeTruthy();
      expect(SoilColor.parse("10R 6/4").equals("10R 6/4")).toBeTruthy();
      expect(SoilColor.parse("10R 6/6").equals("10R 6/6")).toBeTruthy();
      expect(SoilColor.parse("10R 6/8").equals("10R 6/8")).toBeTruthy();
      expect(SoilColor.parse("10R 7/1").equals("10R 7/1")).toBeTruthy();
    });
  });
});

describe("YR", () => {
  describe("2.5YR", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$2_5YR(1.7, 1).name).toBe("reddish_black");
      expect(SoilColor.$2_5YR(2, 1).name).toBe("reddish_black");
      expect(SoilColor.$2_5YR(2, 2).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$2_5YR(2, 3).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$2_5YR(2, 4).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$2_5YR(3, 1).name).toBe("dark_reddish_gray");
      expect(SoilColor.$2_5YR(3, 2).name).toBe("dark_reddish_brown");
      expect(SoilColor.$2_5YR(3, 3).name).toBe("dark_reddish_brown");
      expect(SoilColor.$2_5YR(3, 4).name).toBe("dark_reddish_brown");
      expect(SoilColor.$2_5YR(3, 6).name).toBe("dark_reddish_brown");
      expect(SoilColor.$2_5YR(4, 1).name).toBe("reddish_gray");
      expect(SoilColor.$2_5YR(4, 2).name).toBe("grayish_red");
      expect(SoilColor.$2_5YR(4, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$2_5YR(4, 4).name).toBe("dull_reddish_brown");
      expect(SoilColor.$2_5YR(4, 6).name).toBe("reddish_brown");
      expect(SoilColor.$2_5YR(4, 8).name).toBe("reddish_brown");
      expect(SoilColor.$2_5YR(5, 1).name).toBe("reddish_gray");
      expect(SoilColor.$2_5YR(5, 2).name).toBe("grayish_red");
      expect(SoilColor.$2_5YR(5, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$2_5YR(5, 4).name).toBe("dull_reddish_brown");
      expect(SoilColor.$2_5YR(5, 6).name).toBe("bright_reddish_brown");
      expect(SoilColor.$2_5YR(5, 8).name).toBe("bright_reddish_brown");
      expect(SoilColor.$2_5YR(6, 1).name).toBe("reddish_gray");
      expect(SoilColor.$2_5YR(6, 2).name).toBe("grayish_red");
      expect(SoilColor.$2_5YR(6, 3).name).toBe("dull_orange");
      expect(SoilColor.$2_5YR(6, 4).name).toBe("dull_orange");
      expect(SoilColor.$2_5YR(6, 6).name).toBe("orange");
      expect(SoilColor.$2_5YR(6, 8).name).toBe("orange");
      expect(SoilColor.$2_5YR(7, 1).name).toBe("light_reddish_gray");
      expect(SoilColor.$2_5YR(7, 2).name).toBe("light_reddish_gray");
      expect(SoilColor.$2_5YR(7, 3).name).toBe("pale_reddish_orange");
      expect(SoilColor.$2_5YR(7, 4).name).toBe("pale_reddish_orange");
      expect(SoilColor.$2_5YR(7, 6).name).toBe("orange");
      expect(SoilColor.$2_5YR(7, 8).name).toBe("orange");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("2.5YR 1.7/1").equals("2.5YR 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 2/1").equals("2.5YR 2/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 2/2").equals("2.5YR 2/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 2/3").equals("2.5YR 2/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 2/4").equals("2.5YR 2/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 3/1").equals("2.5YR 3/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 3/2").equals("2.5YR 3/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 3/3").equals("2.5YR 3/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 3/4").equals("2.5YR 3/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 3/6").equals("2.5YR 3/6")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/1").equals("2.5YR 4/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/2").equals("2.5YR 4/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/3").equals("2.5YR 4/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/4").equals("2.5YR 4/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/6").equals("2.5YR 4/6")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 4/8").equals("2.5YR 4/8")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/1").equals("2.5YR 5/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/2").equals("2.5YR 5/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/3").equals("2.5YR 5/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/4").equals("2.5YR 5/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/6").equals("2.5YR 5/6")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 5/8").equals("2.5YR 5/8")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/1").equals("2.5YR 6/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/2").equals("2.5YR 6/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/3").equals("2.5YR 6/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/4").equals("2.5YR 6/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/6").equals("2.5YR 6/6")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 6/8").equals("2.5YR 6/8")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/1").equals("2.5YR 7/1")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/2").equals("2.5YR 7/2")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/3").equals("2.5YR 7/3")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/4").equals("2.5YR 7/4")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/6").equals("2.5YR 7/6")).toBeTruthy();
      expect(SoilColor.parse("2.5YR 7/8").equals("2.5YR 7/8")).toBeTruthy();
    });
  });

  describe("5YR", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5YR(1.7, 1).name).toBe("black");
      expect(SoilColor.$5YR(2, 1).name).toBe("brownish_black");
      expect(SoilColor.$5YR(2, 2).name).toBe("brownish_black");
      expect(SoilColor.$5YR(2, 3).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$5YR(2, 4).name).toBe("very_dark_reddish_brown");
      expect(SoilColor.$5YR(3, 1).name).toBe("brownish_black");
      expect(SoilColor.$5YR(3, 2).name).toBe("dark_reddish_brown");
      expect(SoilColor.$5YR(3, 3).name).toBe("dark_reddish_brown");
      expect(SoilColor.$5YR(3, 4).name).toBe("dark_reddish_brown");
      expect(SoilColor.$5YR(3, 6).name).toBe("dark_reddish_brown");
      expect(SoilColor.$5YR(4, 1).name).toBe("brownish_gray");
      expect(SoilColor.$5YR(4, 2).name).toBe("grayish_brown");
      expect(SoilColor.$5YR(4, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$5YR(4, 4).name).toBe("dull_reddish_brown");
      expect(SoilColor.$5YR(4, 6).name).toBe("reddish_brown");
      expect(SoilColor.$5YR(4, 8).name).toBe("reddish_brown");
      expect(SoilColor.$5YR(5, 1).name).toBe("brownish_gray");
      expect(SoilColor.$5YR(5, 2).name).toBe("grayish_brown");
      expect(SoilColor.$5YR(5, 3).name).toBe("dull_reddish_brown");
      expect(SoilColor.$5YR(5, 4).name).toBe("dull_reddish_brown");
      expect(SoilColor.$5YR(5, 6).name).toBe("bright_reddish_brown");
      expect(SoilColor.$5YR(5, 8).name).toBe("bright_reddish_brown");
      expect(SoilColor.$5YR(6, 1).name).toBe("brownish_gray");
      expect(SoilColor.$5YR(6, 2).name).toBe("grayish_brown");
      expect(SoilColor.$5YR(6, 3).name).toBe("dull_orange");
      expect(SoilColor.$5YR(6, 4).name).toBe("dull_orange");
      expect(SoilColor.$5YR(6, 6).name).toBe("orange");
      expect(SoilColor.$5YR(6, 8).name).toBe("orange");
      expect(SoilColor.$5YR(7, 1).name).toBe("light_brownish_gray");
      expect(SoilColor.$5YR(7, 2).name).toBe("light_brownish_gray");
      expect(SoilColor.$5YR(7, 3).name).toBe("dull_orange");
      expect(SoilColor.$5YR(7, 4).name).toBe("dull_orange");
      expect(SoilColor.$5YR(7, 6).name).toBe("orange");
      expect(SoilColor.$5YR(7, 8).name).toBe("orange");
      expect(SoilColor.$5YR(8, 1).name).toBe("light_gray");
      expect(SoilColor.$5YR(8, 2).name).toBe("light_gray");
      expect(SoilColor.$5YR(8, 3).name).toBe("pale_orange");
      expect(SoilColor.$5YR(8, 4).name).toBe("pale_orange");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5YR 1.7/1").equals("5YR 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 2/1").equals("5YR 2/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 2/2").equals("5YR 2/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 2/3").equals("5YR 2/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 2/4").equals("5YR 2/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 3/1").equals("5YR 3/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 3/2").equals("5YR 3/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 3/3").equals("5YR 3/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 3/4").equals("5YR 3/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 3/6").equals("5YR 3/6")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/1").equals("5YR 4/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/2").equals("5YR 4/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/3").equals("5YR 4/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/4").equals("5YR 4/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/6").equals("5YR 4/6")).toBeTruthy();
      expect(SoilColor.parse("5YR 4/8").equals("5YR 4/8")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/1").equals("5YR 5/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/2").equals("5YR 5/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/3").equals("5YR 5/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/4").equals("5YR 5/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/6").equals("5YR 5/6")).toBeTruthy();
      expect(SoilColor.parse("5YR 5/8").equals("5YR 5/8")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/1").equals("5YR 6/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/2").equals("5YR 6/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/3").equals("5YR 6/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/4").equals("5YR 6/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/6").equals("5YR 6/6")).toBeTruthy();
      expect(SoilColor.parse("5YR 6/8").equals("5YR 6/8")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/1").equals("5YR 7/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/2").equals("5YR 7/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/3").equals("5YR 7/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/4").equals("5YR 7/4")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/6").equals("5YR 7/6")).toBeTruthy();
      expect(SoilColor.parse("5YR 7/8").equals("5YR 7/8")).toBeTruthy();
      expect(SoilColor.parse("5YR 8/1").equals("5YR 8/1")).toBeTruthy();
      expect(SoilColor.parse("5YR 8/2").equals("5YR 8/2")).toBeTruthy();
      expect(SoilColor.parse("5YR 8/3").equals("5YR 8/3")).toBeTruthy();
      expect(SoilColor.parse("5YR 8/4").equals("5YR 8/4")).toBeTruthy();
    });
  });

  describe("2.5YR", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$7_5YR(1.7, 1).name).toBe("black");
      expect(SoilColor.$7_5YR(2, 1).name).toBe("black");
      expect(SoilColor.$7_5YR(2, 2).name).toBe("brownish_black");
      expect(SoilColor.$7_5YR(2, 3).name).toBe("very_dark_brown");
      expect(SoilColor.$7_5YR(3, 1).name).toBe("brownish_black");
      expect(SoilColor.$7_5YR(3, 2).name).toBe("brownish_black");
      expect(SoilColor.$7_5YR(3, 3).name).toBe("dark_brown");
      expect(SoilColor.$7_5YR(3, 4).name).toBe("dark_brown");
      expect(SoilColor.$7_5YR(4, 1).name).toBe("brownish_gray");
      expect(SoilColor.$7_5YR(4, 2).name).toBe("grayish_brown");
      expect(SoilColor.$7_5YR(4, 3).name).toBe("brown");
      expect(SoilColor.$7_5YR(4, 4).name).toBe("brown");
      expect(SoilColor.$7_5YR(4, 6).name).toBe("brown");
      expect(SoilColor.$7_5YR(5, 1).name).toBe("brownish_gray");
      expect(SoilColor.$7_5YR(5, 2).name).toBe("grayish_brown");
      expect(SoilColor.$7_5YR(5, 3).name).toBe("dull_brown");
      expect(SoilColor.$7_5YR(5, 4).name).toBe("dull_brown");
      expect(SoilColor.$7_5YR(5, 6).name).toBe("bright_brown");
      expect(SoilColor.$7_5YR(5, 8).name).toBe("bright_brown");
      expect(SoilColor.$7_5YR(6, 1).name).toBe("brownish_gray");
      expect(SoilColor.$7_5YR(6, 2).name).toBe("grayish_brown");
      expect(SoilColor.$7_5YR(6, 3).name).toBe("dull_brown");
      expect(SoilColor.$7_5YR(6, 4).name).toBe("dull_orange");
      expect(SoilColor.$7_5YR(6, 6).name).toBe("orange");
      expect(SoilColor.$7_5YR(6, 8).name).toBe("orange");
      expect(SoilColor.$7_5YR(7, 1).name).toBe("light_brownish_gray");
      expect(SoilColor.$7_5YR(7, 2).name).toBe("light_brownish_gray");
      expect(SoilColor.$7_5YR(7, 3).name).toBe("dull_orange");
      expect(SoilColor.$7_5YR(7, 4).name).toBe("dull_orange");
      expect(SoilColor.$7_5YR(7, 6).name).toBe("orange");
      expect(SoilColor.$7_5YR(7, 8).name).toBe("yellow_orange");
      expect(SoilColor.$7_5YR(8, 1).name).toBe("light_gray");
      expect(SoilColor.$7_5YR(8, 2).name).toBe("light_gray");
      expect(SoilColor.$7_5YR(8, 3).name).toBe("light_yellow_orange");
      expect(SoilColor.$7_5YR(8, 4).name).toBe("light_yellow_orange");
      expect(SoilColor.$7_5YR(8, 6).name).toBe("light_yellow_orange");
      expect(SoilColor.$7_5YR(8, 8).name).toBe("yellow_orange");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("7.5YR 1.7/1").equals("7.5YR 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 2/1").equals("7.5YR 2/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 2/2").equals("7.5YR 2/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 2/3").equals("7.5YR 2/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 3/1").equals("7.5YR 3/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 3/2").equals("7.5YR 3/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 3/3").equals("7.5YR 3/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 3/4").equals("7.5YR 3/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 4/1").equals("7.5YR 4/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 4/2").equals("7.5YR 4/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 4/3").equals("7.5YR 4/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 4/4").equals("7.5YR 4/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 4/6").equals("7.5YR 4/6")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/1").equals("7.5YR 5/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/2").equals("7.5YR 5/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/3").equals("7.5YR 5/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/4").equals("7.5YR 5/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/6").equals("7.5YR 5/6")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 5/8").equals("7.5YR 5/8")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/1").equals("7.5YR 6/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/2").equals("7.5YR 6/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/3").equals("7.5YR 6/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/4").equals("7.5YR 6/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/6").equals("7.5YR 6/6")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 6/8").equals("7.5YR 6/8")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/1").equals("7.5YR 7/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/2").equals("7.5YR 7/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/3").equals("7.5YR 7/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/4").equals("7.5YR 7/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/6").equals("7.5YR 7/6")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 7/8").equals("7.5YR 7/8")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/1").equals("7.5YR 8/1")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/2").equals("7.5YR 8/2")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/3").equals("7.5YR 8/3")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/4").equals("7.5YR 8/4")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/6").equals("7.5YR 8/6")).toBeTruthy();
      expect(SoilColor.parse("7.5YR 8/8").equals("7.5YR 8/8")).toBeTruthy();
    });
  });

  describe("10YR", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10YR(1.7, 1).name).toBe("black");
      expect(SoilColor.$10YR(2, 1).name).toBe("black");
      expect(SoilColor.$10YR(2, 2).name).toBe("brownish_black");
      expect(SoilColor.$10YR(2, 3).name).toBe("brownish_black");
      expect(SoilColor.$10YR(3, 1).name).toBe("brownish_black");
      expect(SoilColor.$10YR(3, 2).name).toBe("brownish_black");
      expect(SoilColor.$10YR(3, 3).name).toBe("dark_brown");
      expect(SoilColor.$10YR(3, 4).name).toBe("dark_brown");
      expect(SoilColor.$10YR(4, 1).name).toBe("brownish_gray");
      expect(SoilColor.$10YR(4, 2).name).toBe("grayish_yellow_brown");
      expect(SoilColor.$10YR(4, 3).name).toBe("dull_yellowish_brown");
      expect(SoilColor.$10YR(4, 4).name).toBe("brown");
      expect(SoilColor.$10YR(4, 6).name).toBe("brown");
      expect(SoilColor.$10YR(5, 1).name).toBe("brownish_gray");
      expect(SoilColor.$10YR(5, 2).name).toBe("grayish_yellow_brown");
      expect(SoilColor.$10YR(5, 3).name).toBe("dull_yellowish_brown");
      expect(SoilColor.$10YR(5, 4).name).toBe("dull_yellowish_brown");
      expect(SoilColor.$10YR(5, 6).name).toBe("yellowish_brown");
      expect(SoilColor.$10YR(5, 8).name).toBe("yellowish_brown");
      expect(SoilColor.$10YR(6, 1).name).toBe("brownish_gray");
      expect(SoilColor.$10YR(6, 2).name).toBe("grayish_yellow_brown");
      expect(SoilColor.$10YR(6, 3).name).toBe("dull_yellow_orange");
      expect(SoilColor.$10YR(6, 4).name).toBe("dull_yellow_orange");
      expect(SoilColor.$10YR(6, 6).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$10YR(6, 8).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$10YR(7, 1).name).toBe("light_gray");
      expect(SoilColor.$10YR(7, 2).name).toBe("dull_yellow_orange");
      expect(SoilColor.$10YR(7, 3).name).toBe("dull_yellow_orange");
      expect(SoilColor.$10YR(7, 4).name).toBe("dull_yellow_orange");
      expect(SoilColor.$10YR(7, 6).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$10YR(7, 8).name).toBe("yellow_orange");
      expect(SoilColor.$10YR(8, 1).name).toBe("light_gray");
      expect(SoilColor.$10YR(8, 2).name).toBe("light_gray");
      expect(SoilColor.$10YR(8, 3).name).toBe("light_yellow_orange");
      expect(SoilColor.$10YR(8, 4).name).toBe("light_yellow_orange");
      expect(SoilColor.$10YR(8, 6).name).toBe("yellow_orange");
      expect(SoilColor.$10YR(8, 8).name).toBe("yellow_orange");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10YR 1.7/1").equals("10YR 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 2/1").equals("10YR 2/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 2/2").equals("10YR 2/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 2/3").equals("10YR 2/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 3/1").equals("10YR 3/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 3/2").equals("10YR 3/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 3/3").equals("10YR 3/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 3/4").equals("10YR 3/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 4/1").equals("10YR 4/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 4/2").equals("10YR 4/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 4/3").equals("10YR 4/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 4/4").equals("10YR 4/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 4/6").equals("10YR 4/6")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/1").equals("10YR 5/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/2").equals("10YR 5/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/3").equals("10YR 5/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/4").equals("10YR 5/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/6").equals("10YR 5/6")).toBeTruthy();
      expect(SoilColor.parse("10YR 5/8").equals("10YR 5/8")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/1").equals("10YR 6/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/2").equals("10YR 6/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/3").equals("10YR 6/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/4").equals("10YR 6/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/6").equals("10YR 6/6")).toBeTruthy();
      expect(SoilColor.parse("10YR 6/8").equals("10YR 6/8")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/1").equals("10YR 7/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/2").equals("10YR 7/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/3").equals("10YR 7/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/4").equals("10YR 7/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/6").equals("10YR 7/6")).toBeTruthy();
      expect(SoilColor.parse("10YR 7/8").equals("10YR 7/8")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/1").equals("10YR 8/1")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/2").equals("10YR 8/2")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/3").equals("10YR 8/3")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/4").equals("10YR 8/4")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/6").equals("10YR 8/6")).toBeTruthy();
      expect(SoilColor.parse("10YR 8/8").equals("10YR 8/8")).toBeTruthy();
    });
  });
});

describe("Y", () => {
  describe("2.5Y", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$2_5Y(2, 1).name).toBe("black");
      expect(SoilColor.$2_5Y(3, 1).name).toBe("brownish_black");
      expect(SoilColor.$2_5Y(3, 2).name).toBe("brownish_black");
      expect(SoilColor.$2_5Y(3, 3).name).toBe("dark_olive_brown");
      expect(SoilColor.$2_5Y(4, 1).name).toBe("yellowish_gray");
      expect(SoilColor.$2_5Y(4, 2).name).toBe("dark_grayish_yellow");
      expect(SoilColor.$2_5Y(4, 3).name).toBe("olive_brown");
      expect(SoilColor.$2_5Y(4, 4).name).toBe("olive_brown");
      expect(SoilColor.$2_5Y(4, 6).name).toBe("olive_brown");
      expect(SoilColor.$2_5Y(5, 1).name).toBe("yellowish_gray");
      expect(SoilColor.$2_5Y(5, 2).name).toBe("dark_grayish_yellow");
      expect(SoilColor.$2_5Y(5, 3).name).toBe("yellowish_brown");
      expect(SoilColor.$2_5Y(5, 4).name).toBe("yellowish_brown");
      expect(SoilColor.$2_5Y(5, 6).name).toBe("yellowish_brown");
      expect(SoilColor.$2_5Y(6, 1).name).toBe("yellowish_gray");
      expect(SoilColor.$2_5Y(6, 2).name).toBe("grayish_yellow");
      expect(SoilColor.$2_5Y(6, 3).name).toBe("dull_yellow");
      expect(SoilColor.$2_5Y(6, 4).name).toBe("dull_yellow");
      expect(SoilColor.$2_5Y(6, 6).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$2_5Y(6, 8).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$2_5Y(7, 1).name).toBe("light_gray");
      expect(SoilColor.$2_5Y(7, 2).name).toBe("grayish_yellow");
      expect(SoilColor.$2_5Y(7, 3).name).toBe("light_yellow");
      expect(SoilColor.$2_5Y(7, 4).name).toBe("light_yellow");
      expect(SoilColor.$2_5Y(7, 6).name).toBe("bright_yellowish_brown");
      expect(SoilColor.$2_5Y(7, 8).name).toBe("yellow");
      expect(SoilColor.$2_5Y(8, 1).name).toBe("light_gray");
      expect(SoilColor.$2_5Y(8, 2).name).toBe("light_gray");
      expect(SoilColor.$2_5Y(8, 3).name).toBe("pale_yellow");
      expect(SoilColor.$2_5Y(8, 4).name).toBe("pale_yellow");
      expect(SoilColor.$2_5Y(8, 6).name).toBe("yellow");
      expect(SoilColor.$2_5Y(8, 8).name).toBe("yellow");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("2.5Y 2/1").equals("2.5Y 2/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 3/1").equals("2.5Y 3/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 3/2").equals("2.5Y 3/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 3/3").equals("2.5Y 3/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 4/1").equals("2.5Y 4/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 4/2").equals("2.5Y 4/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 4/3").equals("2.5Y 4/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 4/4").equals("2.5Y 4/4")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 4/6").equals("2.5Y 4/6")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 5/1").equals("2.5Y 5/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 5/2").equals("2.5Y 5/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 5/3").equals("2.5Y 5/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 5/4").equals("2.5Y 5/4")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 5/6").equals("2.5Y 5/6")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/1").equals("2.5Y 6/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/2").equals("2.5Y 6/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/3").equals("2.5Y 6/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/4").equals("2.5Y 6/4")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/6").equals("2.5Y 6/6")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 6/8").equals("2.5Y 6/8")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/1").equals("2.5Y 7/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/2").equals("2.5Y 7/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/3").equals("2.5Y 7/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/4").equals("2.5Y 7/4")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/6").equals("2.5Y 7/6")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 7/8").equals("2.5Y 7/8")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/1").equals("2.5Y 8/1")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/2").equals("2.5Y 8/2")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/3").equals("2.5Y 8/3")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/4").equals("2.5Y 8/4")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/6").equals("2.5Y 8/6")).toBeTruthy();
      expect(SoilColor.parse("2.5Y 8/8").equals("2.5Y 8/8")).toBeTruthy();
    });
  });

  describe("5Y", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5Y(2, 1).name).toBe("black");
      expect(SoilColor.$5Y(2, 2).name).toBe("olive_black");
      expect(SoilColor.$5Y(3, 1).name).toBe("olive_black");
      expect(SoilColor.$5Y(3, 2).name).toBe("olive_black");
      expect(SoilColor.$5Y(4, 1).name).toBe("gray");
      expect(SoilColor.$5Y(4, 2).name).toBe("grayish_olive");
      expect(SoilColor.$5Y(4, 3).name).toBe("dark_olive");
      expect(SoilColor.$5Y(4, 4).name).toBe("dark_olive");
      expect(SoilColor.$5Y(5, 1).name).toBe("gray");
      expect(SoilColor.$5Y(5, 2).name).toBe("grayish_olive");
      expect(SoilColor.$5Y(5, 3).name).toBe("grayish_olive");
      expect(SoilColor.$5Y(5, 4).name).toBe("olive");
      expect(SoilColor.$5Y(5, 6).name).toBe("olive");
      expect(SoilColor.$5Y(6, 1).name).toBe("gray");
      expect(SoilColor.$5Y(6, 2).name).toBe("grayish_olive");
      expect(SoilColor.$5Y(6, 3).name).toBe("olive_yellow");
      expect(SoilColor.$5Y(6, 4).name).toBe("olive_yellow");
      expect(SoilColor.$5Y(6, 6).name).toBe("olive");
      expect(SoilColor.$5Y(6, 8).name).toBe("olive");
      expect(SoilColor.$5Y(7, 1).name).toBe("light_gray");
      expect(SoilColor.$5Y(7, 2).name).toBe("light_gray");
      expect(SoilColor.$5Y(7, 3).name).toBe("light_yellow");
      expect(SoilColor.$5Y(7, 4).name).toBe("light_yellow");
      expect(SoilColor.$5Y(7, 6).name).toBe("yellow");
      expect(SoilColor.$5Y(7, 8).name).toBe("yellow");
      expect(SoilColor.$5Y(8, 1).name).toBe("light_gray");
      expect(SoilColor.$5Y(8, 2).name).toBe("light_gray");
      expect(SoilColor.$5Y(8, 3).name).toBe("pale_yellow");
      expect(SoilColor.$5Y(8, 4).name).toBe("pale_yellow");
      expect(SoilColor.$5Y(8, 6).name).toBe("yellow");
      expect(SoilColor.$5Y(8, 8).name).toBe("yellow");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5Y 2/1").equals("5Y 2/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 2/2").equals("5Y 2/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 3/1").equals("5Y 3/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 3/2").equals("5Y 3/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 4/1").equals("5Y 4/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 4/2").equals("5Y 4/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 4/3").equals("5Y 4/3")).toBeTruthy();
      expect(SoilColor.parse("5Y 4/4").equals("5Y 4/4")).toBeTruthy();
      expect(SoilColor.parse("5Y 5/1").equals("5Y 5/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 5/2").equals("5Y 5/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 5/3").equals("5Y 5/3")).toBeTruthy();
      expect(SoilColor.parse("5Y 5/4").equals("5Y 5/4")).toBeTruthy();
      expect(SoilColor.parse("5Y 5/6").equals("5Y 5/6")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/1").equals("5Y 6/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/2").equals("5Y 6/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/3").equals("5Y 6/3")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/4").equals("5Y 6/4")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/6").equals("5Y 6/6")).toBeTruthy();
      expect(SoilColor.parse("5Y 6/8").equals("5Y 6/8")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/1").equals("5Y 7/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/2").equals("5Y 7/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/3").equals("5Y 7/3")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/4").equals("5Y 7/4")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/6").equals("5Y 7/6")).toBeTruthy();
      expect(SoilColor.parse("5Y 7/8").equals("5Y 7/8")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/1").equals("5Y 8/1")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/2").equals("5Y 8/2")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/3").equals("5Y 8/3")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/4").equals("5Y 8/4")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/6").equals("5Y 8/6")).toBeTruthy();
      expect(SoilColor.parse("5Y 8/8").equals("5Y 8/8")).toBeTruthy();
    });
  });

  describe("7.5Y", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$7_5Y(2, 1).name).toBe("black");
      expect(SoilColor.$7_5Y(2, 2).name).toBe("olive_black");
      expect(SoilColor.$7_5Y(3, 1).name).toBe("olive_black");
      expect(SoilColor.$7_5Y(3, 2).name).toBe("olive_black");
      expect(SoilColor.$7_5Y(4, 1).name).toBe("gray");
      expect(SoilColor.$7_5Y(4, 2).name).toBe("grayish_olive");
      expect(SoilColor.$7_5Y(4, 3).name).toBe("dark_olive");
      expect(SoilColor.$7_5Y(5, 1).name).toBe("gray");
      expect(SoilColor.$7_5Y(5, 2).name).toBe("grayish_olive");
      expect(SoilColor.$7_5Y(5, 3).name).toBe("grayish_olive");
      expect(SoilColor.$7_5Y(6, 1).name).toBe("gray");
      expect(SoilColor.$7_5Y(6, 2).name).toBe("grayish_olive");
      expect(SoilColor.$7_5Y(6, 3).name).toBe("olive_yellow");
      expect(SoilColor.$7_5Y(7, 1).name).toBe("light_gray");
      expect(SoilColor.$7_5Y(7, 2).name).toBe("light_gray");
      expect(SoilColor.$7_5Y(7, 3).name).toBe("light_yellow");
      expect(SoilColor.$7_5Y(8, 1).name).toBe("light_gray");
      expect(SoilColor.$7_5Y(8, 2).name).toBe("light_gray");
      expect(SoilColor.$7_5Y(8, 3).name).toBe("pale_yellow");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("7.5Y 2/1").equals("7.5Y 2/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 2/2").equals("7.5Y 2/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 3/1").equals("7.5Y 3/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 3/2").equals("7.5Y 3/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 4/1").equals("7.5Y 4/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 4/2").equals("7.5Y 4/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 4/3").equals("7.5Y 4/3")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 5/1").equals("7.5Y 5/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 5/2").equals("7.5Y 5/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 5/3").equals("7.5Y 5/3")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 6/1").equals("7.5Y 6/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 6/2").equals("7.5Y 6/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 6/3").equals("7.5Y 6/3")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 7/1").equals("7.5Y 7/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 7/2").equals("7.5Y 7/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 7/3").equals("7.5Y 7/3")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 8/1").equals("7.5Y 8/1")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 8/2").equals("7.5Y 8/2")).toBeTruthy();
      expect(SoilColor.parse("7.5Y 8/3").equals("7.5Y 8/3")).toBeTruthy();
    });
  });

  describe("10Y", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10Y(2, 1).name).toBe("black");
      expect(SoilColor.$10Y(3, 1).name).toBe("olive_black");
      expect(SoilColor.$10Y(3, 2).name).toBe("olive_black");
      expect(SoilColor.$10Y(4, 1).name).toBe("gray");
      expect(SoilColor.$10Y(4, 2).name).toBe("olive_gray");
      expect(SoilColor.$10Y(5, 1).name).toBe("gray");
      expect(SoilColor.$10Y(5, 2).name).toBe("olive_gray");
      expect(SoilColor.$10Y(6, 1).name).toBe("gray");
      expect(SoilColor.$10Y(6, 2).name).toBe("olive_gray");
      expect(SoilColor.$10Y(7, 1).name).toBe("light_gray");
      expect(SoilColor.$10Y(7, 2).name).toBe("light_gray");
      expect(SoilColor.$10Y(8, 1).name).toBe("light_gray");
      expect(SoilColor.$10Y(8, 2).name).toBe("light_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10Y 2/1").equals("10Y 2/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 3/1").equals("10Y 3/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 3/2").equals("10Y 3/2")).toBeTruthy();
      expect(SoilColor.parse("10Y 4/1").equals("10Y 4/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 4/2").equals("10Y 4/2")).toBeTruthy();
      expect(SoilColor.parse("10Y 5/1").equals("10Y 5/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 5/2").equals("10Y 5/2")).toBeTruthy();
      expect(SoilColor.parse("10Y 6/1").equals("10Y 6/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 6/2").equals("10Y 6/2")).toBeTruthy();
      expect(SoilColor.parse("10Y 7/1").equals("10Y 7/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 7/2").equals("10Y 7/2")).toBeTruthy();
      expect(SoilColor.parse("10Y 8/1").equals("10Y 8/1")).toBeTruthy();
      expect(SoilColor.parse("10Y 8/2").equals("10Y 8/2")).toBeTruthy();
    });
  });
});

describe("GY", () => {
  describe("2.5GY", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$2_5GY(2, 1).name).toBe("black");
      expect(SoilColor.$2_5GY(3, 1).name).toBe("dark_olive_gray");
      expect(SoilColor.$2_5GY(4, 1).name).toBe("dark_olive_gray");
      expect(SoilColor.$2_5GY(5, 1).name).toBe("olive_gray");
      expect(SoilColor.$2_5GY(6, 1).name).toBe("olive_gray");
      expect(SoilColor.$2_5GY(7, 1).name).toBe("light_olive_gray");
      expect(SoilColor.$2_5GY(8, 1).name).toBe("light_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("2.5GY 2/1").equals("2.5GY 2/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 3/1").equals("2.5GY 3/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 4/1").equals("2.5GY 4/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 5/1").equals("2.5GY 5/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 6/1").equals("2.5GY 6/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 7/1").equals("2.5GY 7/1")).toBeTruthy();
      expect(SoilColor.parse("2.5GY 8/1").equals("2.5GY 8/1")).toBeTruthy();
    });
  });

  describe("5GY", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5GY(2, 1).name).toBe("olive_black");
      expect(SoilColor.$5GY(3, 1).name).toBe("dark_olive_gray");
      expect(SoilColor.$5GY(4, 1).name).toBe("dark_olive_gray");
      expect(SoilColor.$5GY(5, 1).name).toBe("olive_gray");
      expect(SoilColor.$5GY(6, 1).name).toBe("olive_gray");
      expect(SoilColor.$5GY(7, 1).name).toBe("light_olive_gray");
      expect(SoilColor.$5GY(8, 1).name).toBe("light_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5GY 2/1").equals("5GY 2/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 3/1").equals("5GY 3/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 4/1").equals("5GY 4/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 5/1").equals("5GY 5/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 6/1").equals("5GY 6/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 7/1").equals("5GY 7/1")).toBeTruthy();
      expect(SoilColor.parse("5GY 8/1").equals("5GY 8/1")).toBeTruthy();
    });
  });

  describe("7.5GY", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$7_5GY(2, 1).name).toBe("greenish_black");
      expect(SoilColor.$7_5GY(3, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$7_5GY(4, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$7_5GY(5, 1).name).toBe("greenish_gray");
      expect(SoilColor.$7_5GY(6, 1).name).toBe("greenish_gray");
      expect(SoilColor.$7_5GY(7, 1).name).toBe("light_greenish_gray");
      expect(SoilColor.$7_5GY(8, 1).name).toBe("light_greenish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("7.5GY 2/1").equals("7.5GY 2/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 3/1").equals("7.5GY 3/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 4/1").equals("7.5GY 4/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 5/1").equals("7.5GY 5/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 6/1").equals("7.5GY 6/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 7/1").equals("7.5GY 7/1")).toBeTruthy();
      expect(SoilColor.parse("7.5GY 8/1").equals("7.5GY 8/1")).toBeTruthy();
    });
  });

  describe("10GY", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10GY(2, 1).name).toBe("greenish_black");
      expect(SoilColor.$10GY(3, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$10GY(4, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$10GY(5, 1).name).toBe("greenish_gray");
      expect(SoilColor.$10GY(6, 1).name).toBe("greenish_gray");
      expect(SoilColor.$10GY(7, 1).name).toBe("light_greenish_gray");
      expect(SoilColor.$10GY(8, 1).name).toBe("light_greenish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10GY 2/1").equals("10GY 2/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 3/1").equals("10GY 3/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 4/1").equals("10GY 4/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 5/1").equals("10GY 5/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 6/1").equals("10GY 6/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 7/1").equals("10GY 7/1")).toBeTruthy();
      expect(SoilColor.parse("10GY 8/1").equals("10GY 8/1")).toBeTruthy();
    });
  });
});

describe("G", () => {
  describe("5G", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5G(1.7, 1).name).toBe("greenish_black");
      expect(SoilColor.$5G(2, 1).name).toBe("greenish_black");
      expect(SoilColor.$5G(3, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$5G(4, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$5G(5, 1).name).toBe("greenish_gray");
      expect(SoilColor.$5G(6, 1).name).toBe("greenish_gray");
      expect(SoilColor.$5G(7, 1).name).toBe("light_greenish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5G 1.7/1").equals("5G 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("5G 2/1").equals("5G 2/1")).toBeTruthy();
      expect(SoilColor.parse("5G 3/1").equals("5G 3/1")).toBeTruthy();
      expect(SoilColor.parse("5G 4/1").equals("5G 4/1")).toBeTruthy();
      expect(SoilColor.parse("5G 5/1").equals("5G 5/1")).toBeTruthy();
      expect(SoilColor.parse("5G 6/1").equals("5G 6/1")).toBeTruthy();
      expect(SoilColor.parse("5G 7/1").equals("5G 7/1")).toBeTruthy();
    });
  });

  describe("10G", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10G(1.7, 1).name).toBe("greenish_black");
      expect(SoilColor.$10G(2, 1).name).toBe("greenish_black");
      expect(SoilColor.$10G(3, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$10G(4, 1).name).toBe("dark_greenish_gray");
      expect(SoilColor.$10G(5, 1).name).toBe("greenish_gray");
      expect(SoilColor.$10G(6, 1).name).toBe("greenish_gray");
      expect(SoilColor.$10G(7, 1).name).toBe("light_greenish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10G 1.7/1").equals("10G 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("10G 2/1").equals("10G 2/1")).toBeTruthy();
      expect(SoilColor.parse("10G 3/1").equals("10G 3/1")).toBeTruthy();
      expect(SoilColor.parse("10G 4/1").equals("10G 4/1")).toBeTruthy();
      expect(SoilColor.parse("10G 5/1").equals("10G 5/1")).toBeTruthy();
      expect(SoilColor.parse("10G 6/1").equals("10G 6/1")).toBeTruthy();
      expect(SoilColor.parse("10G 7/1").equals("10G 7/1")).toBeTruthy();
    });
  });
});

describe("BG", () => {
  describe("5BG", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$5BG(1.7, 1).name).toBe("bluish_black");
      expect(SoilColor.$5BG(2, 1).name).toBe("bluish_black");
      expect(SoilColor.$5BG(3, 1).name).toBe("dark_bluish_gray");
      expect(SoilColor.$5BG(4, 1).name).toBe("dark_bluish_gray");
      expect(SoilColor.$5BG(5, 1).name).toBe("bluish_gray");
      expect(SoilColor.$5BG(6, 1).name).toBe("bluish_gray");
      expect(SoilColor.$5BG(7, 1).name).toBe("light_bluish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("5BG 1.7/1").equals("5BG 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 2/1").equals("5BG 2/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 3/1").equals("5BG 3/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 4/1").equals("5BG 4/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 5/1").equals("5BG 5/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 6/1").equals("5BG 6/1")).toBeTruthy();
      expect(SoilColor.parse("5BG 7/1").equals("5BG 7/1")).toBeTruthy();
    });
  });

  describe("10BG", () => {
    test("munsell - color name", () => {
      expect(SoilColor.$10BG(1.7, 1).name).toBe("bluish_black");
      expect(SoilColor.$10BG(2, 1).name).toBe("bluish_black");
      expect(SoilColor.$10BG(3, 1).name).toBe("dark_bluish_gray");
      expect(SoilColor.$10BG(4, 1).name).toBe("dark_bluish_gray");
      expect(SoilColor.$10BG(5, 1).name).toBe("bluish_gray");
      expect(SoilColor.$10BG(6, 1).name).toBe("bluish_gray");
      expect(SoilColor.$10BG(7, 1).name).toBe("light_bluish_gray");
    });

    test("parsed munsell - munsell string", () => {
      expect(SoilColor.parse("10BG 1.7/1").equals("10BG 1.7/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 2/1").equals("10BG 2/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 3/1").equals("10BG 3/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 4/1").equals("10BG 4/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 5/1").equals("10BG 5/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 6/1").equals("10BG 6/1")).toBeTruthy();
      expect(SoilColor.parse("10BG 7/1").equals("10BG 7/1")).toBeTruthy();
    });
  });
});

describe("B", () => {
  test("munsell - color name", () => {
    expect(SoilColor.$5B(1.7, 1).name).toBe("bluish_black");
    expect(SoilColor.$5B(2, 1).name).toBe("bluish_black");
    expect(SoilColor.$5B(3, 1).name).toBe("dark_bluish_gray");
    expect(SoilColor.$5B(4, 1).name).toBe("dark_bluish_gray");
    expect(SoilColor.$5B(5, 1).name).toBe("bluish_gray");
    expect(SoilColor.$5B(6, 1).name).toBe("bluish_gray");
    expect(SoilColor.$5B(7, 1).name).toBe("light_bluish_gray");
  });

  test("parsed munsell - munsell string", () => {
    expect(SoilColor.parse("5B 1.7/1").equals("5B 1.7/1")).toBeTruthy();
    expect(SoilColor.parse("5B 2/1").equals("5B 2/1")).toBeTruthy();
    expect(SoilColor.parse("5B 3/1").equals("5B 3/1")).toBeTruthy();
    expect(SoilColor.parse("5B 4/1").equals("5B 4/1")).toBeTruthy();
    expect(SoilColor.parse("5B 5/1").equals("5B 5/1")).toBeTruthy();
    expect(SoilColor.parse("5B 6/1").equals("5B 6/1")).toBeTruthy();
    expect(SoilColor.parse("5B 7/1").equals("5B 7/1")).toBeTruthy();
  });
});

describe("PB", () => {
  test("munsell - color name", () => {
    expect(SoilColor.$5PB(1.7, 1).name).toBe("bluish_black");
    expect(SoilColor.$5PB(2, 1).name).toBe("bluish_black");
    expect(SoilColor.$5PB(3, 1).name).toBe("dark_bluish_gray");
    expect(SoilColor.$5PB(4, 1).name).toBe("dark_bluish_gray");
    expect(SoilColor.$5PB(5, 1).name).toBe("bluish_gray");
    expect(SoilColor.$5PB(6, 1).name).toBe("bluish_gray");
    expect(SoilColor.$5PB(7, 1).name).toBe("light_bluish_gray");
  });

  test("parsed munsell - munsell string", () => {
    expect(SoilColor.parse("5PB 1.7/1").equals("5PB 1.7/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 2/1").equals("5PB 2/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 3/1").equals("5PB 3/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 4/1").equals("5PB 4/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 5/1").equals("5PB 5/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 6/1").equals("5PB 6/1")).toBeTruthy();
    expect(SoilColor.parse("5PB 7/1").equals("5PB 7/1")).toBeTruthy();
  });
});

describe("P", () => {
  test("munsell - color name", () => {
    expect(SoilColor.$5P(1.7, 1).name).toBe("purplish_black");
    expect(SoilColor.$5P(2, 1).name).toBe("purplish_black");
    expect(SoilColor.$5P(3, 1).name).toBe("dark_purplish_gray");
    expect(SoilColor.$5P(4, 1).name).toBe("dark_purplish_gray");
    expect(SoilColor.$5P(5, 1).name).toBe("purplish_gray");
    expect(SoilColor.$5P(6, 1).name).toBe("purplish_gray");
    expect(SoilColor.$5P(7, 1).name).toBe("light_purplish_gray");
  });

  test("parsed munsell - munsell string", () => {
    expect(SoilColor.parse("5P 1.7/1").equals("5P 1.7/1")).toBeTruthy();
    expect(SoilColor.parse("5P 2/1").equals("5P 2/1")).toBeTruthy();
    expect(SoilColor.parse("5P 3/1").equals("5P 3/1")).toBeTruthy();
    expect(SoilColor.parse("5P 4/1").equals("5P 4/1")).toBeTruthy();
    expect(SoilColor.parse("5P 5/1").equals("5P 5/1")).toBeTruthy();
    expect(SoilColor.parse("5P 6/1").equals("5P 6/1")).toBeTruthy();
    expect(SoilColor.parse("5P 7/1").equals("5P 7/1")).toBeTruthy();
  });
});

describe("RP", () => {
  test("munsell - color name", () => {
    expect(SoilColor.$5RP(1.7, 1).name).toBe("purplish_black");
    expect(SoilColor.$5RP(2, 1).name).toBe("purplish_black");
    expect(SoilColor.$5RP(3, 1).name).toBe("dark_purplish_gray");
    expect(SoilColor.$5RP(4, 1).name).toBe("dark_purplish_gray");
    expect(SoilColor.$5RP(5, 1).name).toBe("purplish_gray");
    expect(SoilColor.$5RP(6, 1).name).toBe("purplish_gray");
    expect(SoilColor.$5RP(7, 1).name).toBe("light_purplish_gray");
  });

  test("parsed munsell - munsell string", () => {
    expect(SoilColor.parse("5RP 1.7/1").equals("5RP 1.7/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 2/1").equals("5RP 2/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 3/1").equals("5RP 3/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 4/1").equals("5RP 4/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 5/1").equals("5RP 5/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 6/1").equals("5RP 6/1")).toBeTruthy();
    expect(SoilColor.parse("5RP 7/1").equals("5RP 7/1")).toBeTruthy();
  });
});
