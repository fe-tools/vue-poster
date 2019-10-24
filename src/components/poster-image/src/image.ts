import { warn } from '../../../helper/log'

import { canvasRatio } from '../../../helper/canvas'
import { ElementHandler } from '../../../helper/type'

type ImageConfig = {
  width?: number
  height?: number
  offsetX: number
  offsetY: number

  src: string,
  cors?: boolean
}

function imageLoader (src: string, cors?: boolean): Promise<HTMLImageElement> {
  const image = new Image()

  if (cors) {
    image.crossOrigin = 'anonymous'
  }

  return new Promise((resolve) => {
    image.onload = () => resolve(image)
    image.onerror = () => warn(`Failed to load image at ${src}`)
    image.src = src
  })
}

const drawImage: ElementHandler<ImageConfig> = async (config, _, context) => {
  const {
    width,
    height,
    offsetX = 0,
    offsetY = 0,
    src,
    cors = false
  } = config

  const image = await imageLoader(src, cors)

  const currentWidth = width || (image.width / canvasRatio)
  const currentHeight = height || (image.height / canvasRatio)

  context!.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawImage
