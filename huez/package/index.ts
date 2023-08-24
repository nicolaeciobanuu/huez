import chroma, { Color } from "chroma-js";

const names = [
  "red", // 0
  "orange", // 30
  "yellow", // 60
  "lime", // 90
  "green", // 120
  "teal", // 150
  "cyan", // 180
  "blue", // 210
  "indigo", // 240
  "violet", // 270
  "fuschia", // 300
  "pink", // 330
  "red", // 360
];

const getHueName = (h: number) => names[Math.round((h - 2) / 30)];

const luminance = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
  .map((n) => n + 0.5)
  .map((n) => n / 10);

const createHues = (length: number) => (base: number) =>
  Array.from({ length }, (_, n) =>
    Math.floor((base + n * (360 / length)) % 360)
  );

const desaturate = (n: number) => (hex: string) =>
  chroma(hex).desaturate(n).hex();

const createBlack = (hex: string) =>
  chroma(hex)
    .desaturate(1 / 8)
    .luminance(0.05)
    .hex();

const createShades = (hex: string) =>
  luminance.map((lum) => chroma(hex).luminance(lum).hex());

const keyword = (hex: Color) => {
  const [hue, sat] = chroma(hex).hsl();
  if (sat < 0.5) {
    return "gray";
  }
  const name = getHueName(hue);
  return name;
};

const toObj = (a: any, color: any) => {
  const key = a[color.key] ? color.key + "2" : color.key;
  a[key] = color.value;
  return a;
};

const huez = (hex: string) => {
  const color = chroma(hex);
  const colors: { key: string; value: any }[] = [];

  const [hue, sat, lte] = color.hsl();

  const hues = createHues(12)(hue);

  colors.push({
    key: "black",
    value: createBlack("" + color.hex()),
  });

  colors.push({
    key: "gray",
    value: createShades(desaturate(1 / 8)("" + color.hex())),
  });

  hues.forEach((h) => {
    const c = chroma.hsl(h, sat, lte);
    const key = keyword(c);
    colors.push({
      key,
      value: createShades("" + c.hex()),
    });
  });

  const obj = Object.assign(
    {
      base: hex,
    },
    colors.reduce(toObj, {})
  );

  return obj;
};

export { huez };
