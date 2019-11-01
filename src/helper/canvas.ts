interface CanvasProperty {
  width?: number
  height?: number
  ratio?: number
  backgroundColor?: string
}

export interface CanvasContext {
  readonly element: HTMLCanvasElement
  readonly context: CanvasRenderingContext2D
  ratio: number
}

type CreateCanvas = (config: CanvasProperty) => void
type CanvasToDataURL = (type?: string, quality?: number) => string

const canvasElement = document.createElement('canvas')

export const canvas: CanvasContext = {
  element: canvasElement,
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  context: canvasElement.getContext('2d')!,
  ratio: 1
}

export const createCanvas: CreateCanvas = function(configs) {
  const { width = 300, height = 300, ratio = 1, backgroundColor } = configs

  canvas.ratio = ratio

  canvas.element.width = width * ratio
  canvas.element.height = height * ratio
  canvas.context.scale(ratio, ratio)

  if (typeof backgroundColor === 'string') {
    canvas.context.fillStyle = backgroundColor
    canvas.context.fillRect(0, 0, width * ratio, height * ratio)
  }
}

export const canvasToDataURL: CanvasToDataURL = function(type, quality) {
  return canvasElement.toDataURL(
    type === 'png' ? 'image/png' : 'image/jpeg',
    quality || 1
  )
}
