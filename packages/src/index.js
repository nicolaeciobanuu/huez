"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.huez = void 0;
var chroma = require("chroma-js");
var names = [
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "teal",
    "cyan",
    "blue",
    "indigo",
    "violet",
    "fuschia",
    "pink",
    "red", // 360
];
var luminanceLevels = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map(function (n) { return (n + 0.5) / 10; });
var getHueName = function (h) { return names[Math.round((h - 2) / 30)]; };
var createArray = function (length) {
    var arr = [];
    for (var i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
};
var createHues = function (length) {
    var hueStep = 360 / length;
    return function (base) {
        var hues = createArray(length).map(function (n) {
            return Math.floor((base + n * hueStep) % 360);
        });
        return hues;
    };
};
var desaturate = function (n) { return function (hex) {
    var _a = chroma(hex).hsl(), h = _a[0], l = _a[2];
    return chroma.hsl(h, n, l).hex();
}; };
var createShades = function (color, format) {
    return luminanceLevels.map(function (lum) {
        return chroma(color).luminance(lum)[format]();
    });
};
var keyword = function (color) { return getHueName(chroma(color).hsl()[0]); };
var toObj = function (a, color) {
    var key = a[color.key] ? color.key + "2" : color.key;
    a[key] = color.value;
    return a;
};
/**
 * Generates palette from base color.
 *
 * @param {string} color - Base color.
 * @param {string} format - Color format (hsl, rgb, hex).
 * @returns {Object} The generated palette.
 * @throws {Error} If the color is not valid.
 *
 */
var huez = function (color, format) {
    if (!chroma.valid(color)) {
        throw new Error("Invalid color format. Accepted formats are: hex, hsl, or rgb.");
    }
    var baseColor = chroma(color);
    var colors = [];
    var _a = baseColor.hsl(), h = _a[0], s = _a[1], l = _a[2];
    var hues = createHues(12)(h);
    colors.push({
        key: "gray",
        value: createShades(desaturate(1 / 8)("" + baseColor.hex()), format),
    });
    hues.forEach(function (h) {
        var c = chroma.hsl(h, s, l);
        var key = keyword(c);
        colors.push({
            key: key,
            value: createShades(c.hex(), format),
        });
    });
    var obj = Object.assign(colors.reduce(toObj, {}));
    return obj;
};
exports.huez = huez;
