import { ElementHandler } from '../../canvas'
import { imageLoader } from '../../utils'
import qrcode from 'qrcode-generator'

type QRCodeConfig = {
  width: number
  height: number
  offsetX: number
  offsetY: number
  margin: number
  text: string
}

const drawQRCode: ElementHandler<QRCodeConfig> = async (config, canvas) => {
  /* prettier-ignore */
  const {
    width,
    height,
    offsetX = 0,
    offsetY = 0,
    margin,
    text
  } = config

  const cellSize = 4

  const qr = qrcode(0, 'L')
  qr.addData(text)
  qr.make()

  const QRCodeBase64 = qr.createDataURL(
    cellSize * canvas.ratio,
    margin ? cellSize * canvas.ratio * 2 : margin
  )

  const image = await imageLoader(QRCodeBase64, false)

  const currentWidth = width ?? 40 * canvas.ratio
  const currentHeight = height ?? 40 * canvas.ratio

  canvas.context.drawImage(image, offsetX, offsetY, currentWidth, currentHeight)

  return new Promise(resolve => resolve())
}

export default drawQRCode
