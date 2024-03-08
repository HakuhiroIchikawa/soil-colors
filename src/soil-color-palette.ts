import { SoilColorPatterns } from "./soil-color-patterns";
import { SoilColor } from "./soil-color";

export class SoilColorPalette {
  static all(...colorNames: string[]): SoilColor[] {
    return SoilColorPatterns.fetchByNames(...colorNames);
  }

  static blacks() {
    return SoilColorPatterns.fetchByNames("black");
  }

  static bluishBlacks() {
    return SoilColorPatterns.fetchByNames("bluish_black");
  }

  static bluishGrays() {
    return SoilColorPatterns.fetchByNames("bluish_gray");
  }

  static brightBrowns() {
    return SoilColorPatterns.fetchByNames("bright_brown");
  }

  static brightReddishBrowns() {
    return SoilColorPatterns.fetchByNames("bright_reddish_brown");
  }

  static brightYellowishBrowns() {
    return SoilColorPatterns.fetchByNames("bright_yellowish_brown");
  }

  static browns() {
    return SoilColorPatterns.fetchByNames("brown");
  }

  static brownishBlacks() {
    return SoilColorPatterns.fetchByNames("brownish_black");
  }

  static brownishGrays() {
    return SoilColorPatterns.fetchByNames("brownish_gray");
  }

  static darkBluishGrays() {
    return SoilColorPatterns.fetchByNames("dark_bluish_gray");
  }

  static darkBrowns() {
    return SoilColorPatterns.fetchByNames("dark_brown");
  }

  static darkGrays() {
    return SoilColorPatterns.fetchByNames("dark_gray");
  }

  static darkGrayishYellows() {
    return SoilColorPatterns.fetchByNames("dark_grayish_yellow");
  }

  static darkGreenishGrays() {
    return SoilColorPatterns.fetchByNames("dark_greenish_gray");
  }

  static darkOlives() {
    return SoilColorPatterns.fetchByNames("dark_olive");
  }

  static darkOliveBrowns() {
    return SoilColorPatterns.fetchByNames("dark_olive_brown");
  }

  static darkOliveGrays() {
    return SoilColorPatterns.fetchByNames("dark_olive_gray");
  }

  static darkPurplishGrays() {
    return SoilColorPatterns.fetchByNames("dark_purplish_gray");
  }

  static darkReds() {
    return SoilColorPatterns.fetchByNames("dark_red");
  }

  static darkReddishBrowns() {
    return SoilColorPatterns.fetchByNames("dark_reddish_brown");
  }

  static darkReddishGrays() {
    return SoilColorPatterns.fetchByNames("dark_reddish_gray");
  }

  static dullBrowns() {
    return SoilColorPatterns.fetchByNames("dull_brown");
  }

  static dullOranges() {
    return SoilColorPatterns.fetchByNames("dull_orange");
  }

  static dullReddishBrowns() {
    return SoilColorPatterns.fetchByNames("dull_reddish_brown");
  }

  static dullReddishOranges() {
    return SoilColorPatterns.fetchByNames("dull_reddish_orange");
  }

  static dullYellows() {
    return SoilColorPatterns.fetchByNames("dull_yellow");
  }

  static dullYellowOranges() {
    return SoilColorPatterns.fetchByNames("dull_yellow_orange");
  }

  static dullYellowishBrowns() {
    return SoilColorPatterns.fetchByNames("dull_yellowish_brown");
  }

  static duskyReds() {
    return SoilColorPatterns.fetchByNames("dusky_red");
  }

  static grays() {
    return SoilColorPatterns.fetchByNames("gray");
  }

  static grayishBrowns() {
    return SoilColorPatterns.fetchByNames("grayish_brown");
  }

  static grayishOlives() {
    return SoilColorPatterns.fetchByNames("grayish_olive");
  }

  static grayishReds() {
    return SoilColorPatterns.fetchByNames("grayish_red");
  }

  static grayishWhites() {
    return SoilColorPatterns.fetchByNames("grayish_white");
  }

  static grayishYellows() {
    return SoilColorPatterns.fetchByNames("grayish_yellow");
  }

  static grayishYellowBrowns() {
    return SoilColorPatterns.fetchByNames("grayish_yellow_brown");
  }

  static greenishBlacks() {
    return SoilColorPatterns.fetchByNames("greenish_black");
  }

  static greenishGrays() {
    return SoilColorPatterns.fetchByNames("greenish_gray");
  }

  static lightBluishGrays() {
    return SoilColorPatterns.fetchByNames("light_bluish_gray");
  }

  static lightBrownishGrays() {
    return SoilColorPatterns.fetchByNames("light_brownish_gray");
  }

  static lightGrays() {
    return SoilColorPatterns.fetchByNames("light_gray");
  }

  static lightGreenishGrays() {
    return SoilColorPatterns.fetchByNames("light_greenish_gray");
  }

  static lightOliveGrays() {
    return SoilColorPatterns.fetchByNames("light_olive_gray");
  }

  static lightPurplishGrays() {
    return SoilColorPatterns.fetchByNames("light_purplish_gray");
  }

  static lightReddishGrays() {
    return SoilColorPatterns.fetchByNames("light_reddish_gray");
  }

  static lightYellows() {
    return SoilColorPatterns.fetchByNames("light_yellow");
  }

  static lightYellowOranges() {
    return SoilColorPatterns.fetchByNames("light_yellow_orange");
  }

  static olives() {
    return SoilColorPatterns.fetchByNames("olive");
  }

  static oliveBlacks() {
    return SoilColorPatterns.fetchByNames("olive_black");
  }

  static oliveBrowns() {
    return SoilColorPatterns.fetchByNames("olive_brown");
  }

  static oliveGrays() {
    return SoilColorPatterns.fetchByNames("olive_gray");
  }

  static oliveYellows() {
    return SoilColorPatterns.fetchByNames("olive_yellow");
  }

  static oranges() {
    return SoilColorPatterns.fetchByNames("orange");
  }

  static paleOranges() {
    return SoilColorPatterns.fetchByNames("pale_orange");
  }

  static paleReddishOranges() {
    return SoilColorPatterns.fetchByNames("pale_reddish_orange");
  }

  static paleYellows() {
    return SoilColorPatterns.fetchByNames("pale_yellow");
  }

  static purplishBlacks() {
    return SoilColorPatterns.fetchByNames("purplish_black");
  }

  static purplishGrays() {
    return SoilColorPatterns.fetchByNames("purplish_gray");
  }

  static reds() {
    return SoilColorPatterns.fetchByNames("red");
  }

  static reddishBlacks() {
    return SoilColorPatterns.fetchByNames("reddish_black");
  }

  static reddishBrowns() {
    return SoilColorPatterns.fetchByNames("reddish_brown");
  }

  static reddishGrays() {
    return SoilColorPatterns.fetchByNames("reddish_gray");
  }

  static reddishOranges() {
    return SoilColorPatterns.fetchByNames("reddish_orange");
  }

  static veryDarkBrowns() {
    return SoilColorPatterns.fetchByNames("very_dark_brown");
  }

  static veryDarkReddishBrowns() {
    return SoilColorPatterns.fetchByNames("very_dark_reddish_brown");
  }

  static yellows() {
    return SoilColorPatterns.fetchByNames("yellow");
  }

  static yellowOranges() {
    return SoilColorPatterns.fetchByNames("yellow_orange");
  }

  static yellowishBrowns() {
    return SoilColorPatterns.fetchByNames("yellowish_brown");
  }

  static yellowishGrays() {
    return SoilColorPatterns.fetchByNames("yellowish_gray");
  }
}
