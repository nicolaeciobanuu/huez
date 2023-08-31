import * as chroma from "chroma-js";

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

const luminanceLevels = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(
  (n) => (n + 0.5) / 10
);

const getHueName = (h: number) => names[Math.round((h - 2) / 30)];

const createHues = (length: number) => (base: number) =>
  Array.from({ length }, (_, n) =>
    Math.floor((base + n * (360 / length)) % 360)
  );

const desaturate = (n: number) => (hex: string) => {
  const [h, , l] = chroma(hex).hsl();
  return chroma.hsl(h, n, l).hex();
};

const createShades = (color: string, format: string) =>
  luminanceLevels.map((lum) => {
    return (chroma(color).luminance(lum) as any)[format]();
  });

const keyword = (color: chroma.Color) => getHueName(chroma(color).hsl()[0]);

/**
 * Generates palette from base color.
 *
 * @param {string} color - Base color.
 * @param {string} format - Color format (hsl, rgb, hex).
 * @returns {Object} The generated palette.
 * @throws {Error} If the color is not valid.
 *
 */

const huez = (color: string, format: "hsl" | "rgb" | "hex"): object => {
  if (!chroma.valid(color)) {
    throw new Error(
      "Invalid color format. Accepted formats are: hex, hsl, or rgb."
    );
  }

  const baseColor = chroma(color);
  const [h, s, l] = baseColor.hsl();
  const hues = createHues(12)(h);

  const obj: { [key: string]: any } = {
    base: chroma(color)[format](),
    gray: createShades(desaturate(1 / 8)(baseColor.hex()), format),
  };

  hues.forEach((h) => {
    obj[keyword(chroma.hsl(h, s, l))] = createShades(
      chroma.hsl(h, s, l).hex(),
      format
    );
  });

  return obj;
};
export { huez };
