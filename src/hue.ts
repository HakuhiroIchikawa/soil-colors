import { Degree, BasicColor } from "../types/soil-colors";
import { R, YR, Y, GY, G, BG, B, PB, P, RP } from "../types/soil-colors";

import { MunsellSystem } from "./consts/constants";
import { ArgumentError, ParseError } from "./consts/errors";

const HUE_REGEXP: RegExp = /^(2\.5|5|7\.5|10)?([N|R|Y|G|B|P|R]{1,2})$/

// Hues:
//   N
//   R  : 5R, 7.5R, 10R
//   YR : 2.5YR, 5YR, 7.5YR, 10YR
//   Y  : 2.5Y, 5Y, 7.5Y, 10Y
//   GY : 2.5GY, 5GY, 7.5GY, 10GY
//   G  : 5G, 10G
//   BG : 5BG, 10BG
//   B  : 5B
//   PB : 5PB
//   P  : 5P
//   RP : 5RP
export class Hue {
  readonly basicColor: BasicColor;
  readonly degree: Degree | undefined;

  // Usage:
  //   new Hue("YR", 10)
  //   new Hue("N")
  constructor(basicColor: BasicColor, degree?: Degree) {
    const hue: any = degree ? `${degree}${basicColor}` : basicColor;
    if (!MunsellSystem.HUES.includes(hue)) {
      throw new ArgumentError("hue undefined");
    }
    this.degree = degree;
    this.basicColor = basicColor;
  }

  // =============== Factory Methods ===============
  static $N(): Hue {
    return new Hue("N");
  }

  static $R(degree: R): Hue {
    return new Hue("R", degree);
  }

  static $YR(degree: YR): Hue {
    return new Hue("YR", degree);
  }

  static $Y(degree: Y): Hue {
    return new Hue("Y", degree);
  }

  static $GY(degree: GY): Hue {
    return new Hue("GY", degree);
  }

  static $G(degree: G): Hue {
    return new Hue("G", degree);
  }

  static $BG(degree: BG): Hue {
    return new Hue("BG", degree);
  }

  static $B(degree: B): Hue {
    return new Hue("B", degree);
  }

  static $PB(degree: PB): Hue {
    return new Hue("PB", degree);
  }

  static $P(degree: P): Hue {
    return new Hue("P", degree);
  }

  static $RP(degree: RP): Hue {
    return new Hue("RP", degree);
  }

  // =============== Static Methods ===============
  static parse(str: string): Hue {
    const results = HUE_REGEXP.exec(str);
    if (!results || !MunsellSystem.HUES.includes(str as any)) {
      throw new ParseError("hue undefined")
    };

    const basicColor = results[2] as BasicColor;
    const degree = results[1] ? Number(results[1]) as Degree : undefined;
    return new Hue(basicColor, degree);
  }

  // =============== Instance Methods ===============
  toString(): string {
    return this.degree ? `${this.degree}${this.basicColor}` : this.basicColor;
  }

  equals(other: object | string): boolean {
    return String(this) === String(other);
  }

  notEquals(other: object | string): boolean {
    return !this.equals(other);
  }

  clone(): Hue {
    return new Hue(this.basicColor, this.degree);
  }

  // =============== Hue Judgment ===============
  isN(): boolean {
    return this.is("N");
  }

  isR(degree?: R): boolean {
    return this.is("R", degree);
  }

  isYR(degree?: YR): boolean {
    return this.is("YR", degree);
  }

  isY(degree?: Y): boolean {
    return this.is("Y", degree);
  }

  isGY(degree?: GY): boolean {
    return this.is("GY", degree);
  }

  isG(degree?: G): boolean {
    return this.is("G", degree);
  }

  isBG(degree?: BG): boolean {
    return this.is("BG", degree);
  }

  isB(degree?: B): boolean {
    return this.is("B", degree);
  }

  isPB(degree?: PB): boolean {
    return this.is("PB", degree);
  }

  isP(degree?: P): boolean {
    return this.is("P", degree);
  }

  isRP(degree?: RP): boolean {
    return this.is("RP", degree);
  }

  isAchromatic(): boolean {
    return this.isN();
  }

  isChromatic(): boolean {
    return !this.isN();
  }

  private is(basicColor: string, degree?: number): boolean {
    return degree ? this.equals(`${degree}${basicColor}`) : this.basicColor === basicColor;
  }
}
