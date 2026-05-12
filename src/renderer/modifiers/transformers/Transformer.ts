import { Instruction, Render, Shape } from "../../types";

export default abstract class Transformer implements Shape {
  shape: Shape;

  protected constructor(shape: Shape) {
    this.shape = shape;
  }

  abstract render(): Render;
  abstract toInstruction(): Instruction;
}
