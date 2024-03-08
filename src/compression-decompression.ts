import { BasicColor, Degree, Value, Chroma } from "../types/soil-colors";

import { Hue } from "./hue";
import { SoilColor } from "./soil-color";

import { MunsellSystem } from "./consts/constants";

interface CodeTable {
  [index: string]: string;
}

const COLOR_NAME_COMPRESSION_CODES: CodeTable = {
  "A": "bright",
  "B": "dark",
  "C": "dull",
  "D": "dusky",
  "E": "light",
  "F": "pale",
  "G": "very",
  "a": "bluish",
  "b": "brownish",
  "c": "grayish",
  "d": "greenish",
  "e": "purplish",
  "f": "reddish",
  "g": "yellowish",
  "1": "black",
  "2": "brown",
  "3": "gray",
  "4": "olive",
  "5": "orange",
  "6": "red",
  "7": "white",
  "8": "yellow",
};

class ColorCompressor {
  static compress(color: SoilColor): string {
    const munsellCode = this.compressMunsell(color.hue, color.value, color.chroma);
    const colorNameCode = this.compressColorName(color.name);
    return `${munsellCode}#${colorNameCode}`;
  }

  static compressMunsell(hue: Hue, value: Value, chroma: Chroma): string {
    return this.compressHue(hue) + this.compressValue(value) + this.compressChroma(chroma);
  }

  static compressHue(hue: Hue): string {
    return this.compressDegree(hue.degree) + this.compressBasicColor(hue.basicColor);
  }

  private static compressDegree(degree: Degree | undefined): number {
    return MunsellSystem.DEGREES.indexOf(degree);
  }

  static compressBasicColor(basicColor: BasicColor): string {
    const clr = MunsellSystem.BASIC_COLORS.indexOf(basicColor);
    return String(clr).padStart(2, "0");
  }

  static compressValue(value: Value): string {
    return String(MunsellSystem.VALUES.indexOf(value));
  }

  static compressChroma(chroma: Chroma): string {
    return String(MunsellSystem.CHROMAS.indexOf(chroma));
  }

  static compressColorName(colorName: string): string {
    const words = colorName.split("_");
    let clrNm = "";
    words.forEach((word) => {
      const code = Object.keys(COLOR_NAME_COMPRESSION_CODES).find((code) => {
        return COLOR_NAME_COMPRESSION_CODES[code] === word;
      });
      if (code) clrNm += code;
    });
    return clrNm;
  }
}

class ColorDecompressor {
  static decompressAll(codes: string[]): SoilColor[] {
    return codes.map(code => new CompressedCode(code).decompress());
  }

  static decompressAllOnlyValue(codes: string[]): Value[] {
    return codes.map(code => new CompressedCode(code).decompressValue());
  }

  static decompressAllOnlyChroma(codes: string[]): Chroma[] {
    return codes.map(code => new CompressedCode(code).decompressChroma());
  }
}

class CompressedCode {
  private munsellCode: string;
  private colorNameCode: string;

  constructor(code: string) {
    const [munsellCode, colorNameCode] = code.split("#");
    this.munsellCode = munsellCode;
    this.colorNameCode = colorNameCode;
  }

  decompress(): SoilColor {
    const hue: Hue = this.decompressHue();
    const val: Value = this.decompressValue();
    const chr: Chroma = this.decompressChroma();
    const clrNm: string = this.decompressColorName();
    return new SoilColor(hue, val, chr, clrNm);
  }

  private decompressHue(): Hue {
    const clr: BasicColor = this.decompressBasicColor();
    const deg: Degree | undefined = this.decompressDegree();
    return new Hue(clr, deg);
  }

  private decompressBasicColor(): BasicColor {
    return MunsellSystem.BASIC_COLORS[Number(this.munsellCode.slice(1, 3))];
  }

  private decompressDegree(): Degree | undefined {
    return MunsellSystem.DEGREES[Number(this.munsellCode[0])];
  }

  decompressValue(): Value {
    return MunsellSystem.VALUES[Number(this.munsellCode[3])];
  }

  decompressChroma(): Chroma {
    return MunsellSystem.CHROMAS[Number(this.munsellCode[4])];
  }

  decompressColorName(): string {
    return this.colorNameCode.split("").map(c => COLOR_NAME_COMPRESSION_CODES[c]).join("_");
  }
}

export {
  ColorCompressor,
  CompressedCode,
  ColorDecompressor,
};
