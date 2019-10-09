interface CanvasProperty {
  width?: number,
  height?: number,
  ratio?: number,
  backgroundColor?: string
}

export const canvasElement = document.createElement('canvas')
export const canvasContext = canvasElement.getContext('2d')
// Get after setCanvasProperty
export let canvasRatio: number = 1

export const setCanvasProperty = function(configs: CanvasProperty): void {
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

export const canvasToDataURL = function(type: string, quality: number): string {
  return canvasElement.toDataURL(
    type === 'png'? 'image/png': 'image/jpeg',
    quality || 1
  )
}
