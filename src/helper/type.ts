export type ElementHandler<T = {}> = (
  config: T,
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D
) => Promise<any>
