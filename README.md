## Huez

Automatic UI Color Palette Generator from a Base Color

[huez](https://huez.ciobanunicolae.com)

## Installation

```
npm install huez
```

## Usage

```jsx
import { huez } from "huez";

const baseColor = "#0077cc";
const colorFormat = "hex"; // "hsl", "rgb", or "hex"

try {
  const palette = huez(baseColor, colorFormat);
} catch (error) {
  console.error(error.message);
}
```

## To do

- [x] Add contibuting guide
- [ ] Change output to string ( hsl(30, 50%, 75%) instead of [30,50,75] )
- [ ] Create documentation

## Contributing

Please read the [contributing guide](/CONTIBUTING.md)

## License

[MIT](https://github.com/ciobanunicolae/huez/blob/master/LICENSE)
