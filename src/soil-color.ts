import yaml from 'js-yaml'
import fs from 'fs'

import { R, YR, Y, GY, G, BG, B, PB, P, RP } from "../types/soil-colors";
import { Degree, BasicColor, Value, Chroma } from "../types/soil-colors";
import { Lang } from '../types/soil-colors';

import { Hue } from "./hue";
import { SoilColorPatterns } from "./soil-color-patterns";

import { ArgumentError, ParseError } from "./consts/errors";

const MUNSELL_REGEXP: RegExp = /^(2\.5|5|7\.5|10)?([N|R|Y|G|B|P|R]{1,2}) ([1-8](?:\.[57])?)\/([1-8]?)$/;

// マンセル値の表記法: Hue Value/Chroma
//   Hue：色相  Value：明度  Chroma：彩度
//   例）10YR 5/6
export class SoilColor {
  readonly hue: Hue;
  readonly value: Value;
  readonly chroma: Chroma;
  readonly name: string;

  // Usage:
  //   new SoilColor(Hue.$YR(10), 4, 6)
  //   new SoilColor("10YR", 4, 6)
  constructor(hue: Hue | string, value: Value, chroma: Chroma, _colorName = "") {
    try {
      this.hue = typeof hue === "string" ? Hue.parse(hue) : hue;
      this.value = value;
      this.chroma = chroma;

      const colorName = SoilColorPatterns.fetchColorName(this.hue, value, chroma);
      if (!colorName) throw new ArgumentError("munsell params undefined");
      this.name = _colorName || colorName;
    } catch (e) {
      if (e instanceof ParseError) {
        throw new ArgumentError("hue undefined");
      } else {
        throw e;
      }
    }
  }

  // =============== Factory Methods Per Hue ===============
  static all(...hues: string[]): SoilColor[] {
    return SoilColorPatterns.fetchByHues(...hues);
  }

  static $N(value: Value): SoilColor {
    return new SoilColor(Hue.$N(), value, 0);
  }

  static $5R(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$R(5), value, chroma);
  }

  static $7_5R(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$R(7.5), value, chroma);
  }

  static $10R(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$R(10), value, chroma);
  }

  static $2_5YR(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$YR(2.5), value, chroma);
  }

  static $5YR(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$YR(5), value, chroma);
  }

  static $7_5YR(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$YR(7.5), value, chroma);
  }

  static $10YR(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$YR(10), value, chroma);
  }

  static $2_5Y(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$Y(2.5), value, chroma);
  }

  static $5Y(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$Y(5), value, chroma);
  }

  static $7_5Y(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$Y(7.5), value, chroma);
  }

  static $10Y(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$Y(10), value, chroma);
  }

  static $2_5GY(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$GY(2.5), value, chroma);
  }

  static $5GY(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$GY(5), value, chroma);
  }

  static $7_5GY(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$GY(7.5), value, chroma);
  }

  static $10GY(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$GY(10), value, chroma);
  }

  static $5G(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$G(5), value, chroma);
  }

  static $10G(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$G(10), value, chroma);
  }

  static $5BG(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$BG(5), value, chroma);
  }

  static $10BG(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$BG(10), value, chroma);
  }

  static $5B(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$B(5), value, chroma);
  }

  static $5PB(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$PB(5), value, chroma);
  }

  static $5P(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$P(5), value, chroma);
  }

  static $5RP(value: Value, chroma: Chroma): SoilColor {
    return new SoilColor(Hue.$RP(5), value, chroma);
  }

  // =============== Static Methods ===============
  static parse(str: string): SoilColor {
    const results = MUNSELL_REGEXP.exec(str);
    if (!results) throw new ParseError("hue undefined");

    const basicColor = results[2] as BasicColor;
    const degree = results[1] ? Number(results[1]) as Degree : undefined;
    const value = Number(results[3]) as Value;
    const chroma = Number(results[4]) as Chroma;

    try {
      const soilColor = SoilColorPatterns.fetchSoilColor(new Hue(basicColor, degree), value, chroma);
      if (!soilColor) throw new ParseError("munsell undefined");
      return soilColor;
    } catch (e) {
      if (e instanceof ArgumentError) {
        throw new ParseError("hue undefined");
      } else {
        throw e;
      }
    }
  }

  // =============== Instance Methods ===============
  toString(): string {
    return this.hue.isN()
      ? `${this.hue} ${this.value}/`
      : `${this.hue} ${this.value}/${this.chroma}`;
  }

  equals(other: object | string): boolean {
    return String(this) === String(other);
  }

  notEquals(other: object | string): boolean {
    return !this.equals(other);
  }

  clone(): SoilColor {
    return new SoilColor(this.hue.clone(), this.value, this.chroma);
  }

  colorName(to?: Lang) {
    if (to === undefined) return this.name;

    try {
      const data: any = yaml.load(fs.readFileSync(`src/locales/colorName.${to}.yaml`, "utf8"));
      return data[to]["colorNames"][this.name] || "";
    } catch (e) {
      console.log(e);
    }
  }

  sameHueColors({ includeMyself } = { includeMyself: false }): SoilColor[] {
    const colors = SoilColorPatterns.fetchByHue(this.hue);
    return includeMyself ? colors : colors.filter(color => color.notEquals(this));
  }

  sameNameColors({ includeMyself } = { includeMyself: false }): SoilColor[] {
    const colors = SoilColorPatterns.fetchByNames(this.name);
    return includeMyself ? colors : colors.filter(color => color.notEquals(this));
  }

  isSameColor(other: SoilColor | string): boolean {
    if (typeof other === "string") {
      other = SoilColor.parse(other);
    }
    return this.name === other.name;
  }

  toAchromatic(): SoilColor {
    return this.value === 1.7 ? SoilColor.$N(1.5) : SoilColor.$N(this.value);
  }

  // =============== Saturation and Lightness ===============
  isLightest(): boolean {
    return this.value === SoilColorPatterns.lightestValue(this.hue, this.chroma);
  }

  isDarkest(): boolean {
    return this.value === SoilColorPatterns.darkestValue(this.hue, this.chroma);
  }

  isPalest(): boolean {
    return this.chroma === SoilColorPatterns.palestChroma(this.hue, this.value);
  }

  isVividest(): boolean {
    return this.chroma === SoilColorPatterns.vividestChroma(this.hue, this.value);
  }

  lightest(): SoilColor {
    const lightestValue: Value = SoilColorPatterns.lightestValue(this.hue, this.chroma);
    return new SoilColor(this.hue.clone(), lightestValue, this.chroma);
  }

  darkest(): SoilColor {
    const darkestValue: Value = SoilColorPatterns.darkestValue(this.hue, this.chroma);
    return new SoilColor(this.hue.clone(), darkestValue, this.chroma);
  }

  palest(): SoilColor {
    const palestChroma: Chroma = SoilColorPatterns.palestChroma(this.hue, this.value);
    const hue = new Hue(this.hue.basicColor, this.hue.degree);
    return new SoilColor(this.hue.clone(), this.value, palestChroma);
  }

  vividest(): SoilColor {
    const vividestChroma: Chroma = SoilColorPatterns.vividestChroma(this.hue, this.value);
    return new SoilColor(this.hue.clone(), this.value, vividestChroma);
  }

  lighter(step = 1): SoilColor | undefined {
    if (!Number.isInteger(step)) throw new ArgumentError("step invalid");
    return this.createModifiedBrightness(step);
  }

  darker(step = 1): SoilColor | undefined {
    if (!Number.isInteger(step)) throw new ArgumentError("step invalid");
    return this.createModifiedBrightness(-step);
  }

  paler(step = 1): SoilColor | undefined {
    if (!Number.isInteger(step)) throw new ArgumentError("step invalid");
    return this.createModifiedSaturation(-step);
  }

  vivider(step = 1): SoilColor | undefined {
    if (!Number.isInteger(step)) throw new ArgumentError("step invalid");
    return this.createModifiedSaturation(step);
  }

  private createModifiedBrightness(step: number): SoilColor | undefined {
    if (step === 0) return this.clone();

    const values = SoilColorPatterns.findValues(this.hue, this.chroma);
    let idx = values.indexOf(this.value) + step;
    if (idx > values.length - 1 || idx < 0) {
      return undefined;
    }
    return new SoilColor(this.hue.clone(), values[idx], this.chroma);
  }

  private createModifiedSaturation(step: number): SoilColor | undefined {
    if (step === 0) return this.clone();

    const chromas = SoilColorPatterns.findChromas(this.hue, this.value);
    let idx = chromas.indexOf(this.chroma) + step;
    if (idx > chromas.length - 1 || idx < 0) {
      return undefined;
    }
    return new SoilColor(this.hue.clone(), this.value, chromas[idx]);
  }

  // =============== Hue Judgment ===============
  isN(): boolean {
    return this.hue.isN();
  }

  isR(degree?: R): boolean {
    return this.hue.isR(degree);
  }

  isYR(degree?: YR): boolean {
    return this.hue.isYR(degree);
  }

  isY(degree?: Y): boolean {
    return this.hue.isY(degree);
  }

  isGY(degree?: GY): boolean {
    return this.hue.isGY(degree);
  }

  isG(degree?: G): boolean {
    return this.hue.isG(degree);
  }

  isBG(degree?: BG): boolean {
    return this.hue.isBG(degree);
  }

  isB(degree?: B): boolean {
    return this.hue.isB(degree);
  }

  isPB(degree?: PB): boolean {
    return this.hue.isPB(degree);
  }

  isP(degree?: P): boolean {
    return this.hue.isP(degree);
  }

  isRP(degree?: RP): boolean {
    return this.hue.isRP(degree);
  }

  isHue(hue: string): boolean {
    try {
      return this.hue.equals(Hue.parse(hue));
    } catch (e) {
      if (e instanceof ParseError) {
        throw new ArgumentError("hue undefined");
      } else {
        throw e;
      }
    }
  }

  isAchromatic(): boolean {
    return this.hue.isAchromatic();
  }

  isChromatic(): boolean {
    return this.hue.isChromatic();
  }

  // =============== Color Name Judgment ===============
  isBlack(): boolean {
    return this.isColorName("black");
  }

  isBluishBlack(): boolean {
    return this.isColorName("bluish_black");
  }

  isBluishGray(): boolean {
    return this.isColorName("bluish_gray");
  }

  isBrightBrown(): boolean {
    return this.isColorName("bright_brown");
  }

  isBrightReddishBrown(): boolean {
    return this.isColorName("bright_reddish_brown");
  }

  isBrightYellowishBrown(): boolean {
    return this.isColorName("bright_yellowish_brown");
  }

  isBrown(): boolean {
    return this.isColorName("brown");
  }

  isBrownishBlack(): boolean {
    return this.isColorName("brownish_black");
  }

  isBrownishGray(): boolean {
    return this.isColorName("brownish_gray");
  }

  isDarkBluishGray(): boolean {
    return this.isColorName("dark_bluish_gray");
  }

  isDarkBrown(): boolean {
    return this.isColorName("dark_brown");
  }

  isDarkGray(): boolean {
    return this.isColorName("dark_gray");
  }

  isDarkGrayishYellow(): boolean {
    return this.isColorName("dark_grayish_yellow");
  }

  isDarkGreenishGray(): boolean {
    return this.isColorName("dark_greenish_gray");
  }

  isDarkOlive(): boolean {
    return this.isColorName("dark_olive");
  }

  isDarkOliveBrown(): boolean {
    return this.isColorName("dark_olive_brown");
  }

  isDarkOliveGray(): boolean {
    return this.isColorName("dark_olive_gray");
  }

  isDarkPurplishGray(): boolean {
    return this.isColorName("dark_purplish_gray");
  }

  isDarkRed(): boolean {
    return this.isColorName("dark_red");
  }

  isDarkReddishBrown(): boolean {
    return this.isColorName("dark_reddish_brown");
  }

  isDarkReddishGray(): boolean {
    return this.isColorName("dark_reddish_gray");
  }

  isDullBrown(): boolean {
    return this.isColorName("dull_brown");
  }

  isDullOrange(): boolean {
    return this.isColorName("dull_orange");
  }

  isDullReddishBrown(): boolean {
    return this.isColorName("dull_reddish_brown");
  }

  isDullReddishOrange(): boolean {
    return this.isColorName("dull_reddish_orange");
  }

  isDullYellow(): boolean {
    return this.isColorName("dull_yellow");
  }

  isDullYellowOrange(): boolean {
    return this.isColorName("dull_yellow_orange");
  }

  isDullYellowishBrown(): boolean {
    return this.isColorName("dull_yellowish_brown");
  }

  isDuskyRed(): boolean {
    return this.isColorName("dusky_red");
  }

  isGray(): boolean {
    return this.isColorName("gray");
  }

  isGrayishBrown(): boolean {
    return this.isColorName("grayish_brown");
  }

  isGrayishOlive(): boolean {
    return this.isColorName("grayish_olive");
  }

  isGrayishRed(): boolean {
    return this.isColorName("grayish_red");
  }

  isGrayishWhite(): boolean {
    return this.isColorName("grayish_white");
  }

  isGrayishYellow(): boolean {
    return this.isColorName("grayish_yellow");
  }

  isGrayishYellowBrown(): boolean {
    return this.isColorName("grayish_yellow_brown");
  }

  isGreenishBlack(): boolean {
    return this.isColorName("greenish_black");
  }

  isGreenishGray(): boolean {
    return this.isColorName("greenish_gray");
  }

  isLightBluishGray(): boolean {
    return this.isColorName("light_bluish_gray");
  }

  isLightBrownishGrays(): boolean {
    return this.isColorName("light_brownish_gray");
  }

  isLightGray(): boolean {
    return this.isColorName("light_gray");
  }

  isLightGreenishGray(): boolean {
    return this.isColorName("light_greenish_gray");
  }

  isLightOliveGray(): boolean {
    return this.isColorName("light_olive_gray");
  }

  isLightPurplishGray(): boolean {
    return this.isColorName("light_purplish_gray");
  }

  isLightReddishGray(): boolean {
    return this.isColorName("light_reddish_gray");
  }

  isLightYellow(): boolean {
    return this.isColorName("light_yellow");
  }

  isLightYellowOrange(): boolean {
    return this.isColorName("light_yellow_orange");
  }

  isOliveBlack(): boolean {
    return this.isColorName("olive_black");
  }

  isOliveBrown(): boolean {
    return this.isColorName("olive_brown");
  }

  isOliveGray(): boolean {
    return this.isColorName("olive_gray");
  }

  isOlive(): boolean {
    return this.isColorName("olive");
  }

  isOliveYellow(): boolean {
    return this.isColorName("olive_yellow");
  }

  isOrange(): boolean {
    return this.isColorName("orange");
  }

  isPaleOrange(): boolean {
    return this.isColorName("pale_orange");
  }

  isPaleReddishOrange(): boolean {
    return this.isColorName("pale_reddish_orange");
  }

  isPaleYellow(): boolean {
    return this.isColorName("pale_yellow");
  }

  isPurplishBlack(): boolean {
    return this.isColorName("purplish_black");
  }

  isPurplishGray(): boolean {
    return this.isColorName("purplish_gray");
  }

  isRed(): boolean {
    return this.isColorName("red");
  }

  isReddishBlack(): boolean {
    return this.isColorName("reddish_black");
  }

  isReddishBrown(): boolean {
    return this.isColorName("reddish_brown");
  }

  isReddishGray(): boolean {
    return this.isColorName("reddish_gray");
  }

  isReddishOrange(): boolean {
    return this.isColorName("reddish_orange");
  }

  isVeryDarkBrown(): boolean {
    return this.isColorName("very_dark_brown");
  }

  isVeryDarkReddishBrown(): boolean {
    return this.isColorName("very_dark_reddish_brown");
  }

  isYellow(): boolean {
    return this.isColorName("yellow");
  }

  isYellowOrange(): boolean {
    return this.isColorName("yellow_orange");
  }

  isYellowishBrown(): boolean {
    return this.isColorName("yellowish_brown");
  }

  isYellowishGray(): boolean {
    return this.isColorName("yellowish_gray");
  }

  isColorName(colorName: string): boolean {
    return this.name === colorName;
  }
}
