import Flip, { FlipInstruction } from "./flip";
import Reset, { ResetInstruction } from "./reset";
import Rotate, { RotateInstruction } from "./rotate";
import Translate, { TranslateInstruction } from "./translate";

export { Flip, Reset, Rotate, Translate };

export default {
  Flip,
  Reset,
  Rotate,
  Translate,
};

export type TransformerInstruction =
  | FlipInstruction
  | ResetInstruction
  | RotateInstruction
  | TranslateInstruction;
