import { ElementHandler } from '../../../helper/type'

type TextConfig = {
  offsetX?: number
  offsetY?: number

  color?: string
  font?: string
  text: string
}

const drawText: ElementHandler<TextConfig> = (config, canvas) => {
  const {
    offsetX = 0,
    offsetY = 0,
    text,
    color = 'black',
    font = 'normal 400 14px sans-serif'
  } = config

  canvas.context.fillStyle = color
  canvas.context.font = font
  canvas.context.textBaseline = 'top'
  canvas.context.fillText(text, offsetX, offsetY)

  return new Promise((resolve) => resolve())
}

export default drawText
