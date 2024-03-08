export const MunsellSystem = {
  HUES: [
    "N",
    "5R", "7.5R", "10R",
    "2.5YR", "5YR", "7.5YR", "10YR",
    "2.5Y", "5Y", "7.5Y", "10Y",
    "2.5GY", "5GY", "7.5GY", "10GY",
    "5G", "10G",
    "5BG", "10BG",
    "5B",
    "5PB",
    "5P",
    "5RP"
  ],
  BASIC_COLORS: ["N", "R", "YR", "Y", "GY", "G", "BG", "B", "PB", "P", "RP"],
  DEGREES: [undefined, 2.5, 5, 7.5, 10],
  VALUES:  [1.5, 1.7, 2, 3, 4, 5, 6, 7, 8],
  CHROMAS: [0, 1, 2, 3, 4, 6, 8],
} as const;
