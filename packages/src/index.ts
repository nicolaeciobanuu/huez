import chroma from "chroma-js";

const names = [
  "red", // 0
  "orange", // 30
  "yellow", // 60
  "lime", // 90
  "green", // 120
  "turquoise", // 150
  "cyan", // 180
  "blue", // 210
  "indigo", // 240
  "violet", // 270
  "magenta", // 300
  "pink", // 330
  "red", // 360
];

interface ColorsTypes {
  [category: string]: string[];
}

const luminanceLevels = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(
  (n) => (n + 0.5) / 10
);

const getHueName = (h: number) => names[Math.round((h - 2) / 30)];

const createHues = (length: number) => (base: number) => {
  const hues: number[] = [];
  for (let n = 0; n < length; n++) {
    hues.push(Math.floor((base + n * (360 / length)) % 360));
  }
  return hues;
};

const desaturate = (n: number) => (hex: string) => {
  const [h, , l] = chroma(hex).hsl();
  return chroma.hsl(h, n, l).hex();
};

const createShades = (color: string, format: string) =>
  luminanceLevels.map((lum) => {
    return (chroma(color).luminance(lum) as any)[format]();
  });

const keyword = (color: chroma.Color) =>
  chroma(color).hsl()[1] < 0.5 ? "gray" : getHueName(chroma(color).hsl()[0]);

/**
 * Generates palette from base color.
 *
 * @param {string} color - Base color.
 * @param {string} format - Color format (hsl, rgb, hex).
 * @returns {Object} The generated palette.
 * @throws {Error} If the color is not valid.
 *
 */

const huez = (color: string, format: "hsl" | "rgb" | "hex"): ColorsTypes => {
  if (!chroma.valid(color)) {
    throw new Error(
      "Invalid color format. Accepted formats are: hex, hsl, or rgb."
    );
  }

  const baseColor = chroma(color);
  const colors = [];
  const palette: ColorsTypes = {};
  const [h, s, l] = baseColor.hsl();
  const hues = createHues(12)(h);

  colors.push({
    category: "gray",
    value: createShades(desaturate(1 / 8)("" + baseColor.hex()), format),
  });

  hues.forEach((h) => {
    const c = chroma.hsl(h, s, l);
    const key = keyword(c);
    colors.push({
      category: key,
      value: createShades(c.hex(), format),
    });
  });
  colors.forEach((color) => {
    palette[color.category] = color.value;
  });
  return palette;
};
export { huez };
