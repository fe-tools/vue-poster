import { ElementHandler } from '../../canvas'
import { imageLoader } from '../../utils'

type ImageConfig = {
  width: number
  height: number
  offsetX: number
  offsetY: number
  src: string
  cors: boolean
}

const drawImage: ElementHandler<ImageConfig> = async (config, canvas) => {
  /* prettier-ignore */
  const {
    width,
    height,
    offsetX = 0,
    offsetY = 0,
    src,
    cors = false
  } = config

  if (!src) {
    /* prettier-ignore */
    return console.warn('[vue-poster]: PosterImage component should to set "src" attribute')
  }

  const image = await imageLoader(src, cors)

  const currentWidth = width ?? image.width / canvas.ratio
  const currentHeight = height ?? image.height / canvas.ratio

  canvas.context.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawImage
