import { Placement, Render } from "../types.ts";
import { PixelMap } from "../core/PixelMap";

export default function render(placements: Placement[]): Render {
  return { pixels: new PixelMap(placements) };
}
