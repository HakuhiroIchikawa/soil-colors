import { MunsellSystem } from "../src/consts/constants";

type BasicColor = typeof MunsellSystem.BASIC_COLORS[number];
type Degree = Exclude<typeof MunsellSystem.DEGREES[number], undefined>;
type Value  = typeof MunsellSystem.VALUES[number];
type Chroma = typeof MunsellSystem.CHROMAS[number];

type R  = 5 | 7.5 | 10;
type YR = Degree;
type Y  = Degree;
type GY = Degree;
type G  = 5 | 10;
type BG = 5 | 10;
type B  = 5;
type PB = 5;
type P  = 5;
type RP = 5;

type Lang = "en" | "ja";
