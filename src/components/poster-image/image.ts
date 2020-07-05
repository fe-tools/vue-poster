import { ElementHandler } from '../../canvas'
import { imageLoader } from '../../utils'

type ImageConfig = {
  width: number
  height: number
  offsetX: number
  offsetY: number
  round: boolean
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
    round = false,
    cors = false
  } = config

  if (!src) {
    /* prettier-ignore */
    return console.warn('[vue-poster]: PosterImage component should to set "src" attribute')
  }

  const image = await imageLoader(src, cors)

  const currentWidth = width ?? image.width / canvas.ratio
  const currentHeight = height ?? image.height / canvas.ratio

  canvas.context.save()

  if (round) {
    /* prettier-ignore */
    canvas.context.arc(
      offsetX + (currentWidth / 2),
      offsetY + (currentHeight / 2),
      Math.max(currentWidth, currentHeight) / 2,
      0, 2 * Math.PI
    )
    canvas.context.clip()
  }

  canvas.context.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)
  canvas.context.restore()

  return new Promise(resolve => resolve())
}

export default drawImage
