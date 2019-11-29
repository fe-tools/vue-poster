import { ElementHandler } from '../../../canvas'
import { imageLoader } from '../../../helper/utils'

type ImageConfig = {
  width: number | 'auto'
  height: number | 'auto'
  offsetX: number
  offsetY: number
  src: string
  cors: boolean
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

  if (!src) {
    return console.warn(
      '[vue-poster]: PosterImage component should to set "src" attribute'
    )
  }

  const image = await imageLoader(src, cors)

  const currentWidth = width === 'auto' ? image.width / canvas.ratio : width
  const currentHeight = height === 'auto' ? image.height / canvas.ratio : height

  canvas.context.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawImage
