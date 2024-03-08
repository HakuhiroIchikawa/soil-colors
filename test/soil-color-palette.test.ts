import { SoilColorPalette } from "../src/soil-color-palette";
import { SoilColor } from "../src/soil-color";

describe("SoilColorPalette", () => {
  describe("all", () => {
    test("normal patterns", () => {
      let colors: SoilColor[] = SoilColorPalette.all();
      expect(colors.length).toBe(389);
  
      colors = SoilColorPalette.all("black");
      expect(colors.length).toBe(12);
      expect(colors.every(color => color.isBlack())).toBeTruthy();
  
      colors = SoilColorPalette.all("black", "bluish_black")
      expect(colors.length).toBe(12 + 8);
      expect(colors.every(color => color.isBlack() || color.isBluishBlack())).toBeTruthy();
    });
  
    test("undefined color names will be skipped", () => {
      const colors = SoilColorPalette.all("black", "very_light_gray", "grayish_white");
      expect(colors.length).toBe(12 + 0 + 2);
      expect(colors.every(color => color.isBlack() || color.isGrayishWhite())).toBeTruthy();
    });
  });

  describe("blacks", () => {
    test("return only blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.blacks();
      expect(colors.length).toBe(12);
      expect(colors.every(color => color.isBlack())).toBeTruthy();
    });
  });

  describe("bluishBlacks", () => {
    test("return only bluish blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.bluishBlacks();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isBluishBlack())).toBeTruthy();
    });
  });

  describe("bluishGrays", () => {
    test("return only bluish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.bluishGrays();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isBluishGray())).toBeTruthy();
    });
  });

  describe("brightBrowns", () => {
    test("return only bright browns", () => {
      const colors: SoilColor[] = SoilColorPalette.brightBrowns();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isBrightBrown())).toBeTruthy();
    });
  });

  describe("brightReddishBrowns", () => {
    test("return only bright reddish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.brightReddishBrowns();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isBrightReddishBrown())).toBeTruthy();
    });
  });

  describe("brightYellowishBrowns", () => {
    test("return only bright yellowish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.brightYellowishBrowns();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isBrightYellowishBrown())).toBeTruthy();
    });
  });

  describe("browns", () => {
    test("return only browns", () => {
      const colors: SoilColor[] = SoilColorPalette.browns();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isBrown())).toBeTruthy();
    });
  });

  describe("brownishBlacks", () => {
    test("return only brownish blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.brownishBlacks();
      expect(colors.length).toBe(12);
      expect(colors.every(color => color.isBrownishBlack())).toBeTruthy();
    });
  });

  describe("brownishGrays", () => {
    test("return only brownish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.brownishGrays();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isBrownishGray())).toBeTruthy();
    });
  });

  describe("darkBluishGrays", () => {
    test("return only dark bluish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkBluishGrays();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isDarkBluishGray())).toBeTruthy();
    });
  });

  describe("darkBrowns", () => {
    test("return only dark browns", () => {
      const colors: SoilColor[] = SoilColorPalette.darkBrowns();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isDarkBrown())).toBeTruthy();
    });
  });

  describe("darkGrays", () => {
    test("return only dark grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkGrays();
      expect(colors.length).toBe(1);
      expect(colors.every(color => color.isDarkGray())).toBeTruthy();
    });
  });

  describe("darkGrayishYellows", () => {
    test("return only dark grayish yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.darkGrayishYellows();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isDarkGrayishYellow())).toBeTruthy();
    });
  });

  describe("darkGreenishGrays", () => {
    test("return only dark greenish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkGreenishGrays();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isDarkGreenishGray())).toBeTruthy();
    });
  });

  describe("darkOlives", () => {
    test("return only dark olives", () => {
      const colors: SoilColor[] = SoilColorPalette.darkOlives();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isDarkOlive())).toBeTruthy();
    });
  });

  describe("darkOliveBrowns", () => {
    test("return only dark olive browns", () => {
      const colors: SoilColor[] = SoilColorPalette.darkOliveBrowns();
      expect(colors.length).toBe(1);
      expect(colors.every(color => color.isDarkOliveBrown())).toBeTruthy();
    });
  });

  describe("darkOliveGrays", () => {
    test("return only dark olive grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkOliveGrays();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isDarkOliveGray())).toBeTruthy();
    });
  });

  describe("darkPurplishGrays", () => {
    test("return only dark purplish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkPurplishGrays();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isDarkPurplishGray())).toBeTruthy();
    });
  });

  describe("darkReds", () => {
    test("return only dark reds", () => {
      const colors: SoilColor[] = SoilColorPalette.darkReds();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isDarkRed())).toBeTruthy();
    });
  });

  describe("darkReddishBrowns", () => {
    test("return only dark reddish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.darkReddishBrowns();
      expect(colors.length).toBe(12);
      expect(colors.every(color => color.isDarkReddishBrown())).toBeTruthy();
    });
  });

  describe("darkReddishGrays", () => {
    test("return only dark reddish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.darkReddishGrays();
      expect(colors.length).toBe(7);
      expect(colors.every(color => color.isDarkReddishGray())).toBeTruthy();
    });
  });

  describe("dullBrowns", () => {
    test("return only dull browns", () => {
      const colors: SoilColor[] = SoilColorPalette.dullBrowns();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isDullBrown())).toBeTruthy();
    });
  });

  describe("dullOranges", () => {
    test("return only dull oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.dullOranges();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isDullOrange())).toBeTruthy();
    });
  });

  describe("dullReddishBrowns", () => {
    test("return only dull reddish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.dullReddishBrowns();
      expect(colors.length).toBe(10);
      expect(colors.every(color => color.isDullReddishBrown())).toBeTruthy();
    });
  });

  describe("dullReddishOranges", () => {
    test("return only dull reddish oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.dullReddishOranges();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isDullReddishOrange())).toBeTruthy();
    });
  });

  describe("dullYellows", () => {
    test("return only dull yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.dullYellows();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isDullYellow())).toBeTruthy();
    });
  });

  describe("dullYellowOranges", () => {
    test("return only dull yellow oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.dullYellowOranges();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isDullYellowOrange())).toBeTruthy();
    });
  });

  describe("dullYellowishBrowns", () => {
    test("return only dull yellowish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.dullYellowishBrowns();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isDullYellowishBrown())).toBeTruthy();
    });
  });

  describe("duskyReds", () => {
    test("return only dusky reds", () => {
      const colors: SoilColor[] = SoilColorPalette.duskyReds();
      expect(colors.length).toBe(1);
      expect(colors.every(color => color.isDuskyRed())).toBeTruthy();
    });
  });

  describe("grays", () => {
    test("return only grays", () => {
      const colors: SoilColor[] = SoilColorPalette.grays();
      expect(colors.length).toBe(12);
      expect(colors.every(color => color.isGray())).toBeTruthy();
    });
  });

  describe("grayishBrowns", () => {
    test("return only grayish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishBrowns();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isGrayishBrown())).toBeTruthy();
    });
  });

  describe("grayishOlives", () => {
    test("return only grayish olives", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishOlives();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isGrayishOlive())).toBeTruthy();
    });
  });

  describe("grayishReds", () => {
    test("return only grayish reds", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishReds();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isGrayishRed())).toBeTruthy();
    });
  });

  describe("grayishWhites", () => {
    test("return only grayish whites", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishWhites();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isGrayishWhite())).toBeTruthy();
    });
  });

  describe("grayishYellows", () => {
    test("return only grayish yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishYellows();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isGrayishYellow())).toBeTruthy();
    });
  });

  describe("grayishYellowBrowns", () => {
    test("return only grayish yellow browns", () => {
      const colors: SoilColor[] = SoilColorPalette.grayishYellowBrowns();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isGrayishYellowBrown())).toBeTruthy();
    });
  });

  describe("greenishBlacks", () => {
    test("return only greenish blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.greenishBlacks();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isGreenishBlack())).toBeTruthy();
    });
  });

  describe("greenishGrays", () => {
    test("return only greenish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.greenishGrays();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isGreenishGray())).toBeTruthy();
    });
  });

  describe("lightBluishGrays", () => {
    test("return only light bluish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightBluishGrays();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isLightBluishGray())).toBeTruthy();
    });
  });

  describe("lightBrownishGrays", () => {
    test("return only light brownish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightBrownishGrays();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isLightBrownishGrays())).toBeTruthy();
    });
  });

  describe("lightGrays", () => {
    test("return only light grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightGrays();
      expect(colors.length).toBe(24);
      expect(colors.every(color => color.isLightGray())).toBeTruthy();
    });
  });

  describe("lightGreenishGrays", () => {
    test("return only light greenish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightGreenishGrays();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isLightGreenishGray())).toBeTruthy();
    });
  });

  describe("lightOliveGrays", () => {
    test("return only light olive grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightOliveGrays();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isLightOliveGray())).toBeTruthy();
    });
  });

  describe("lightPurplishGrays", () => {
    test("return only light purplish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightPurplishGrays();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isLightPurplishGray())).toBeTruthy();
    });
  });

  describe("lightReddishGrays", () => {
    test("return only light reddish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.lightReddishGrays();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isLightReddishGray())).toBeTruthy();
    });
  });

  describe("lightYellows", () => {
    test("return only light yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.lightYellows();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isLightYellow())).toBeTruthy();
    });
  });

  describe("lightYellowOranges", () => {
    test("return only light yellow oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.lightYellowOranges();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isLightYellowOrange())).toBeTruthy();
    });
  });

  describe("olives", () => {
    test("return only olives", () => {
      const colors: SoilColor[] = SoilColorPalette.olives();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isOlive())).toBeTruthy();
    });
  });

  describe("oliveBlacks", () => {
    test("return only olive blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.oliveBlacks();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isOliveBlack())).toBeTruthy();
    });
  });

  describe("oliveBrowns", () => {
    test("return only olive browns", () => {
      const colors: SoilColor[] = SoilColorPalette.oliveBrowns();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isOliveBrown())).toBeTruthy();
    });
  });

  describe("oliveGrays", () => {
    test("return only olive grays", () => {
      const colors: SoilColor[] = SoilColorPalette.oliveGrays();
      expect(colors.length).toBe(7);
      expect(colors.every(color => color.isOliveGray())).toBeTruthy();
    });
  });

  describe("oliveYellows", () => {
    test("return only olive yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.oliveYellows();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isOliveYellow())).toBeTruthy();
    });
  });

  describe("oranges", () => {
    test("return only oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.oranges();
      expect(colors.length).toBe(11);
      expect(colors.every(color => color.isOrange())).toBeTruthy();
    });
  });

  describe("paleOranges", () => {
    test("return only pale oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.paleOranges();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isPaleOrange())).toBeTruthy();
    });
  });

  describe("paleReddishOranges", () => {
    test("return only pale reddish oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.paleReddishOranges();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isPaleReddishOrange())).toBeTruthy();
    });
  });

  describe("paleYellows", () => {
    test("return only pale yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.paleYellows();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isPaleYellow())).toBeTruthy();
    });
  });

  describe("purplishBlacks", () => {
    test("return only purplish blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.purplishBlacks();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isPurplishBlack())).toBeTruthy();
    });
  });

  describe("purplishGrays", () => {
    test("return only purplish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.purplishGrays();
      expect(colors.length).toBe(4);
      expect(colors.every(color => color.isPurplishGray())).toBeTruthy();
    });
  });

  describe("reds", () => {
    test("return only reds", () => {
      const colors: SoilColor[] = SoilColorPalette.reds();
      expect(colors.length).toBe(6);
      expect(colors.every(color => color.isRed())).toBeTruthy();
    });
  });

  describe("reddishBlacks", () => {
    test("return only reddish blacks", () => {
      const colors: SoilColor[] = SoilColorPalette.reddishBlacks();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isReddishBlack())).toBeTruthy();
    });
  });

  describe("reddishBrowns", () => {
    test("return only reddish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.reddishBrowns();
      expect(colors.length).toBe(8);
      expect(colors.every(color => color.isReddishBrown())).toBeTruthy();
    });
  });

  describe("reddishGrays", () => {
    test("return only reddish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.reddishGrays();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isReddishGray())).toBeTruthy();
    });
  });

  describe("reddishOranges", () => {
    test("return only reddish oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.reddishOranges();
      expect(colors.length).toBe(2);
      expect(colors.every(color => color.isReddishOrange())).toBeTruthy();
    });
  });

  describe("veryDarkBrowns", () => {
    test("return only very dark browns", () => {
      const colors: SoilColor[] = SoilColorPalette.veryDarkBrowns();
      expect(colors.length).toBe(1);
      expect(colors.every(color => color.isVeryDarkBrown())).toBeTruthy();
    });
  });

  describe("veryDarkReddishBrowns", () => {
    test("return only very dark reddish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.veryDarkReddishBrowns();
      expect(colors.length).toBe(9);
      expect(colors.every(color => color.isVeryDarkReddishBrown())).toBeTruthy();
    });
  });

  describe("yellows", () => {
    test("return only yellows", () => {
      const colors: SoilColor[] = SoilColorPalette.yellows();
      expect(colors.length).toBe(7);
      expect(colors.every(color => color.isYellow())).toBeTruthy();
    });
  });

  describe("yellowOranges", () => {
    test("return only yellow oranges", () => {
      const colors: SoilColor[] = SoilColorPalette.yellowOranges();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isYellowOrange())).toBeTruthy();
    });
  });

  describe("yellowishBrowns", () => {
    test("return only yellowish browns", () => {
      const colors: SoilColor[] = SoilColorPalette.yellowishBrowns();
      expect(colors.length).toBe(5);
      expect(colors.every(color => color.isYellowishBrown())).toBeTruthy();
    });
  });

  describe("yellowishGrays", () => {
    test("return only yellowish grays", () => {
      const colors: SoilColor[] = SoilColorPalette.yellowishGrays();
      expect(colors.length).toBe(3);
      expect(colors.every(color => color.isYellowishGray())).toBeTruthy();
    });
  });
});
