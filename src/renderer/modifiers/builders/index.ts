import Combine, { CombineInstruction } from "./combine";
import Move, { MoveInstruction } from "./move";
import { Shape } from "../../types";

export { Combine, Move };

export default { Combine, Move };

export type BuilderInstruction = CombineInstruction | MoveInstruction;

export interface Builder extends Shape {}
