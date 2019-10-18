import { canvasContext, canvasRatio } from '../../../utils/canvas'
import { ElementHandler } from '../../../utils/type'

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
    image.onerror = () => console.warn(`[vue-poster]: Failed to load image at ${src}`)
    image.src = src
  })
}

const drawImage: ElementHandler<ImageConfig> = async config => {
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

  canvasContext!.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawImage
