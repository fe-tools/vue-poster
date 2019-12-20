import { VNode } from 'vue'
import { ElementHandler } from '../../canvas'
import { getFontSize, calcCharacterSize } from './utils'
import { CanvasContext } from '../../canvas'
import { getVNodeComponentName } from '../../utils'

import { handleInlineText } from './inline/inline'
import { handleDefaultText } from './default/index'

type TextConfig = {
  width: number
  height: number
  offsetX: number
  offsetY: number
  color: string
  font: string
  lineHeight: number
  textOffsetY: number
  textBaseline: CanvasTextBaseline
  border: boolean
  vnodes?: VNode[]
}

type Draw = (
  characters: string[],
  props?: {
    font?: string
    color?: string
  }
) => void

type TextFragment = (context: {
  /* prettier-ignore */
  config: Pick<TextConfig, 'width' | 'height' | 'color' | 'font' | 'lineHeight' | 'textBaseline'>
  canvas: CanvasContext
  state: {
    offsetX: number
    offsetY: number
    firstLineMaxFontSize: number
    lineNumber: number
  }
}) => Draw

export type TextPluginHandler = (vnode: VNode, next: Draw) => void

const drawTextFragment: TextFragment = ({ config, canvas, state }) => {
  return (characters, props) => {
    for (let i = 0; i < characters.length; i++) {
      if (!characters[i]) {
        continue
      }

      const size = calcCharacterSize(
        canvas.context,
        config.font,
        characters[i],
        props?.font
      )

      // calculate maximum font height of the first line
      if (state.lineNumber === 1) {
        const fontSize = getFontSize(props?.font || config.font)
        state.firstLineMaxFontSize = Math.max(
          fontSize,
          state.firstLineMaxFontSize
        )
      }

      // break line
      if (state.offsetX + size > config.width) {
        state.offsetX = 0
        state.offsetY += config.lineHeight
        state.lineNumber++
      }

      canvas.context.textBaseline = config.textBaseline
      canvas.context.fillStyle = props?.color || config.color
      canvas.context.font = props?.font || config.font
      canvas.context.fillText(characters[i], state.offsetX, state.offsetY)

      state.offsetX += size
    }
  }
}

/* prettier-ignore */
const drawText: ElementHandler<TextConfig> = (config, { context, element, ratio }) => {
  const {
    offsetX = 0,
    offsetY = 0,
    width = element.width / ratio,
    height = element.height / ratio - offsetY,
    color = 'black',
    font = 'normal 400 14px sans-serif',
    textOffsetY = 0,
    textBaseline = 'alphabetic',
    lineHeight,
    border = false,
    vnodes
  } = config

  if (!vnodes) {
    return new Promise(resolve => resolve())
  }

  if (border) {
    context.lineWidth = 1
    context.strokeStyle = 'white'
    context.strokeRect(offsetX, offsetY, width, height)
  }

  // create a text-canvas
  const textCanvas = document.createElement('canvas')
  /* eslint-disable @typescript-eslint/no-non-null-assertion */
  const textContext = textCanvas.getContext('2d')!

  textCanvas.width = width * ratio
  textCanvas.height = element.height + height * ratio
  textContext.scale(ratio, ratio)

  const textCxt = {
    config: { width, height, color, font, lineHeight, textBaseline },
    canvas: { context: textContext, element: textCanvas, ratio },
    state: {
      offsetX: 0,
      offsetY: element.height / ratio,
      lineNumber: 1,
      firstLineMaxFontSize: 0
    }
  }

  // handle text plugin
  const next = drawTextFragment(textCxt)
  vnodes.forEach(vnode => {
    switch (getVNodeComponentName(vnode)) {
      case 'poster-text-inline':
        handleInlineText(vnode, next)
        break
      default:
        handleDefaultText(vnode, next)
    }
  })

  // draw text-canvas on poster
  const fl = textCxt.state.firstLineMaxFontSize
  const sy = element.height / ratio - fl - (textOffsetY * ratio)
  const ln = Math.floor((height - fl) / lineHeight)
  const sh = ln * lineHeight + fl
  context.drawImage(
    textCanvas,
    0, sy * ratio, width * ratio, sh * ratio,
    offsetX, offsetY, width, sh
  )

  return new Promise(resolve => resolve())
}

export default drawText
