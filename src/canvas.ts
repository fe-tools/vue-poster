let canvasElement: HTMLCanvasElement

interface CanvasConfig {
  width: number
  height: number
  ratio: number
  backgroundColor: string
}

export interface CanvasContext {
  readonly element: HTMLCanvasElement
  readonly context: CanvasRenderingContext2D
  ratio: number
}

export type ElementHandler<T = {}> = (
  config: T,
  canvas: CanvasContext
) => Promise<void>

export type InjectCxtToHandler = (
  canvas: CanvasContext
) => ReturnType<ElementHandler>

export function initCanvas(configs: CanvasConfig) {
  /* prettier-ignore */
  const {
    width = 300,
    height = 300,
    ratio = 1,
    backgroundColor
  } = configs

  canvasElement = document.createElement('canvas')

  const canvas: CanvasContext = {
    element: canvasElement,
    /* eslint-disable @typescript-eslint/no-non-null-assertion */
    context: canvasElement.getContext('2d')!,
    ratio: 1
  }

  canvas.element.width = width * ratio
  canvas.element.height = height * ratio
  canvas.context.scale(ratio, ratio)
  canvas.ratio = ratio

  // draw poster background color
  if (typeof backgroundColor === 'string') {
    canvas.context.fillStyle = backgroundColor
    canvas.context.fillRect(0, 0, width * ratio, height * ratio)
  }

  return canvas
}

export function canvasToDataURL(
  canvas: CanvasContext,
  type: string,
  quality: number
) {
  return canvas.element.toDataURL(
    type === 'png' ? 'image/png' : 'image/jpeg',
    quality || 1
  )
}
