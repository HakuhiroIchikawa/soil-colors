import { BasicColor, Chroma, Value } from "../types/soil-colors";

import { Hue } from "./hue";
import { SoilColor } from "./soil-color";
import { ColorCompressor, ColorDecompressor, CompressedCode } from "./compression-decompression";
import { CompressedCodeStorage } from "./compressed-code-storage";

import { MunsellSystem } from "./consts/constants";
import { ParseError } from "./consts/errors";

export class SoilColorPatterns {
  static fetchByHue(hue: Hue): SoilColor[] {
    return ColorDecompressor.decompressAll(this.findCodesByHue(hue));
  }

  static fetchByHues(...hues: string[]): SoilColor[] {
    if (hues.length === 0) {
      return ColorDecompressor.decompressAll(CompressedCodeStorage.findAll());
    }

    let codes: string[] = [];
    for (let hue of hues) {
      if (MunsellSystem.BASIC_COLORS.includes(hue as BasicColor)) {
        codes = codes.concat(this.findCodesByBasicColor(hue as BasicColor));
        continue;
      }

      try {
        codes = codes.concat(this.findCodesByHue(Hue.parse(hue)));
      } catch (e) {
        if (e instanceof ParseError) {
          console.log(`hue: ${hue} undefined`);
        } else {
          throw e;
        }
      }
    }
    codes = Array.from(new Set(codes));  // 重複排除
    return ColorDecompressor.decompressAll(codes);
  }

  static fetchByNames(...colorNames: string[]): SoilColor[] {
    let codes: string[] = [];
    if (colorNames.length === 0) {
      codes = CompressedCodeStorage.findAll();
    } else {
      colorNames.forEach((colorName) => {
        codes = codes.concat(this.findCodesByColorName(colorName));
      });
    }
    return ColorDecompressor.decompressAll(codes);
  }

  static fetchSoilColor(hue: Hue, value: Value, chroma: Chroma): SoilColor | undefined {
    const code = this.findCodeByMunsell(hue, value, chroma);
    return code ? new CompressedCode(code).decompress() : undefined;
  }

  static fetchColorName(hue: Hue, value: Value, chroma: Chroma): string {
    const code = this.findCodeByMunsell(hue, value, chroma);
    return code ? new CompressedCode(code).decompressColorName() : "";
  }

  static lightestValue(hue: Hue, chroma: Chroma): Value {
    const codes = this.findCodesBy({ hue, chroma });
    const values = ColorDecompressor.decompressAllOnlyValue(codes);
    return Math.max(...values) as Value;
  }

  static darkestValue(hue: Hue, chroma: Chroma): Value {
    const codes = this.findCodesBy({ hue, chroma });
    const values = ColorDecompressor.decompressAllOnlyValue(codes);
    return Math.min(...values) as Value;
  }

  static palestChroma(hue: Hue, value: Value): Chroma {
    const codes = this.findCodesBy({ hue, value });
    const chromas = ColorDecompressor.decompressAllOnlyChroma(codes);
    return Math.min(...chromas) as Chroma;
  }

  static vividestChroma(hue: Hue, value: Value): Chroma {
    const codes = this.findCodesBy({ hue, value });
    const chromas = ColorDecompressor.decompressAllOnlyChroma(codes);
    return Math.max(...chromas) as Chroma;
  }

  static findValues(hue: Hue, chroma: Chroma): Value[] {
    const codes = this.findCodesBy({ hue, chroma });
    return ColorDecompressor.decompressAllOnlyValue(codes);
  }

  static findChromas(hue: Hue, value: Value): Chroma[] {
    const codes = this.findCodesBy({ hue, value });
    return ColorDecompressor.decompressAllOnlyChroma(codes);
  }

  private static findCodeByMunsell(hue: Hue, value: Value, chroma: Chroma): string | undefined {
    const munsellCode = ColorCompressor.compressMunsell(hue, value, chroma);
    return CompressedCodeStorage.find(RegExp(`^${munsellCode}`));
  }

  private static findCodesByColorName(colorName: string): string[] {
    const colorNameCode = ColorCompressor.compressColorName(colorName);
    return CompressedCodeStorage.filter(RegExp(`#${colorNameCode}$`));
  }

  private static findCodesByHue(hue: Hue): string[] {
    const hueCode = ColorCompressor.compressHue(hue);
    return CompressedCodeStorage.filter(RegExp(`^${hueCode}`));
  }

  private static findCodesByBasicColor(basicColor: BasicColor): string[] {
    const bcCode = ColorCompressor.compressBasicColor(basicColor);
    return CompressedCodeStorage.filter(RegExp(`^.${bcCode}`));
  }

  private static findCodesBy({ hue, value, chroma }: { hue: Hue, value?: Value, chroma?: Chroma }): string[] {
    const hueCd = ColorCompressor.compressHue(hue);
    const valCd = value === undefined ? "." : ColorCompressor.compressValue(value);
    const chrCd = chroma === undefined ? "." : ColorCompressor.compressChroma(chroma);
    return CompressedCodeStorage.filter(RegExp(`^${hueCd}${valCd}${chrCd}`));
  }
}
