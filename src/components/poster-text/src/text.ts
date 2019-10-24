import { canvasContext } from '../../../helper/canvas'
import { ElementHandler } from '../../../helper/type'

type TextConfig = {
  offsetX: number
  offsetY: number

  text: string,
  color?: string,
  font?: string
}

const drawText: ElementHandler<TextConfig> = (config) => {
  const {
    offsetX = 0,
    offsetY = 0,
    text,
    color = 'black',
    font = 'normal 400 14px sans-serif'
  } = config

  canvasContext!.fillStyle = color
  canvasContext!.font = font
  canvasContext!.textBaseline = 'top'
  canvasContext!.fillText(text, offsetX, offsetY)

  return new Promise((resolve) => resolve())
}

export default drawText
