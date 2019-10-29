import { ElementHandler } from '../../../helper/type'

type ImageConfig = {
  width: number | 'auto'
  height: number | 'auto'
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

const drawImage: ElementHandler<ImageConfig> = async (config, canvas) => {
  const {
    width = 'auto',
    height = 'auto',
    offsetX = 0,
    offsetY = 0,
    src,
    cors = false
  } = config

  const image = await imageLoader(src, cors)

  const currentWidth = width === 'auto'? (image.width / canvas.ratio): width
  const currentHeight = height === 'auto'? (image.height / canvas.ratio): height

  canvas.context.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawImage
