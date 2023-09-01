import { huez } from "../src";

const main = () => {
  const data = huez("#07c", "hex");
  Object.keys(data).map((category) => {
    console.log(`Category: ${category}`);
    data[category].map((color) => {
      console.log(color);
    });
  });
};

main();
