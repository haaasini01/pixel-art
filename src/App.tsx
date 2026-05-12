import "./App.css";

import KonvaRenderer from "./components/KonvaRenderer";
import shapes from "./renderer/modifiers/primitives";
import colors from "./renderer/palette/html";
import point from "./renderer/modifiers/point";
import Combine from "./renderer/modifiers/builders/combine";
import Reset from "./renderer/modifiers/transformers/reset";
import Translate from "./renderer/modifiers/transformers/translate";
import Pixel from "./renderer/modifiers/primitives/pixel";

const rect = new shapes.Rect(8, 8, "top-left", colors.red);
const fig = new Reset({ shape: rect, pivot: point(1, 1) });
console.log(rect.render().pixels);
console.log(fig.render().pixels);
// move fig 10, 10
const moved = new Translate({ shape: fig, offset: point(10, 10) });
// draw one pixel at 9, 9
const px = new Pixel(colors.blue, point(9, 9));
// combine the two
const combined = new Combine(moved, px);

function App() {
  return (
    <KonvaRenderer
      canvasWidth={50}
      canvasHeight={50}
      scale={20}
      scene={combined}
    />
  );
}

export default App;
