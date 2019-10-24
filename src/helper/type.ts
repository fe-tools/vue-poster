import { CanvasContext } from './canvas'

export type ElementHandler<T = {}> = (
  config: T,
  canvas: CanvasContext
) => Promise<any>
