interface CanvasProperty {
  width?: number,
  height?: number,
  ratio?: number,
  backgroundColor?: string
}

type CreateCanvas = (config: CanvasProperty) => void
type CanvasToDataURL = (type?: string, quality?: number) => string

export const canvasElement = document.createElement('canvas')
export const canvasContext = canvasElement.getContext('2d')
export let canvasRatio: number = 1

export const createCanvas:CreateCanvas = function(configs) {
  const {
    width = 300,
    height = 300,
    ratio = 1,
    backgroundColor
  } = configs

  canvasRatio = ratio

  canvasElement.width = width * canvasRatio
  canvasElement.height = height * canvasRatio
  canvasContext!.scale(canvasRatio, canvasRatio)

  if (typeof backgroundColor === 'string') {
    canvasContext!.fillStyle = backgroundColor
    canvasContext!.fillRect(0, 0, width * canvasRatio, height * canvasRatio)
  }
}

export const canvasToDataURL:CanvasToDataURL = function(type, quality) {
  return canvasElement.toDataURL(
    type === 'png'? 'image/png': 'image/jpeg',
    quality || 1
  )
}
