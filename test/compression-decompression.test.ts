import { ColorCompressor, CompressedCode } from "../src/compression-decompression";
import { SoilColor } from "../src/soil-color";

describe("ColorCompressor", () => {
  describe("compress", () => {
    test("soil color => compressed color code", () => {
      expect(ColorCompressor.compress(SoilColor.$10YR(4, 6))).toBe("40245#2");
      expect(ColorCompressor.compress(SoilColor.$10YR(6, 4))).toBe("40264#C85");
    });
  });
});

describe("CompressedCode", () => {
  describe("decompress", () => {
    test("compressed color code => soil color", () => {
      let soilColor = new CompressedCode("40245#2").decompress();
      expect(soilColor.equals(SoilColor.$10YR(4, 6))).toBeTruthy();
      expect(soilColor.name).toBe("brown");

      soilColor = new CompressedCode("40264#C85").decompress();
      expect(soilColor.equals(SoilColor.$10YR(6, 4))).toBeTruthy();
      expect(soilColor.name).toBe("dull_yellow_orange");
    });
  });
});
