import { huez } from "../src";

const main = () => {
  const data = huez("#07c", "hsl");

  // Iterate over the object properties
  for (const category in data) {
    if (Object.prototype.hasOwnProperty.call(data, category)) {
      console.log(`Category: ${category}`);

      // Check if the property is an array before using .map()
      if (Array.isArray(data[category])) {
        data[category].map((color) => {
          console.log(color);
        });
      }
    }
  }
};

main();
